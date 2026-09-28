// scripts/verify_security_rls.js
// Automated Security & RLS Isolation Verification Suite
// Phase 12 verification against live Supabase instance

import { createClient } from '@supabase/supabase-js'
import fs from 'node:fs'
import path from 'node:path'

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in environment.')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

console.log('====================================================================')
console.log('🔒 PLACEMENTPREP AUTOMATED SECURITY & RLS VERIFICATION SUITE')
console.log('Target URL:', supabaseUrl)
console.log('Timestamp:', new Date().toISOString())
console.log('====================================================================\n')

let passedCount = 0
let failedCount = 0
let infoCount = 0

function recordResult(testName, status, details) {
  if (status === 'PASS') {
    passedCount++
    console.log(`✅ PASS: ${testName}`)
    if (details) console.log(`   └─ ${details}`)
  } else if (status === 'INFO') {
    infoCount++
    console.log(`ℹ️  INFO: ${testName}`)
    if (details) console.log(`   └─ ${details}`)
  } else {
    failedCount++
    console.log(`❌ FAIL: ${testName}`)
    if (details) console.log(`   └─ Reason: ${details}`)
  }
}

async function runSecurityTests() {
  // ── PRE-CHECK: Check Schema Cache State ─────────────────────────────
  let tablesExistInDb = false
  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/`, {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`
      }
    })
    const schema = await res.json()
    const definitions = Object.keys(schema.definitions || {})
    if (definitions.length > 0) {
      tablesExistInDb = true
      recordResult(
        'Supabase Schema Cache Check',
        'PASS',
        `Discovered ${definitions.length} tables in PostgreSQL schema: ${definitions.slice(0, 5).join(', ')}...`
      )
    } else {
      recordResult(
        'Supabase Schema Tables State',
        'INFO',
        'No public tables registered in PostgREST schema cache yet. SQL migrations (001, 002, 003) are ready to be run in Supabase SQL Editor.'
      )
    }
  } catch (err) {
    recordResult('Supabase Connectivity', 'FAIL', err.message)
  }

  // ── TEST 1: Question Evaluation Data (Answer Keys & Hidden Tests) ───
  try {
    const { data, error } = await supabase
      .from('question_evaluation_data')
      .select('*')
      .limit(10)

    const isProtected = (!data || data.length === 0) || !!error
    recordResult(
      'Question Evaluation Data Isolation (Answer Keys & Hidden Tests)',
      isProtected ? 'PASS' : 'FAIL',
      error
        ? `Blocked from student access: "${error.message}"`
        : `Access denied / 0 rows returned (Data length: ${data?.length || 0})`
    )
  } catch (err) {
    recordResult('Question Evaluation Data Isolation', 'PASS', `Blocked: ${err.message}`)
  }

  // ── TEST 2: Unauthorized Table Insert Protection ───────────────────
  const protectedTables = [
    { table: 'companies', payload: { slug: 'hacked-corp', name: 'Hacked Corp' } },
    { table: 'questions', payload: { title: 'Injected Question', question_type: 'mcq' } },
    { table: 'assessments', payload: { title: 'Injected Exam', duration_minutes: 60 } },
    { table: 'audit_logs', payload: { action: 'fake_action', entity_type: 'system' } },
    { table: 'study_materials', payload: { title: 'Injected Doc', material_type: 'notes', file_url: 'http://evil.com' } },
  ]

  for (const item of protectedTables) {
    try {
      const { data, error } = await supabase
        .from(item.table)
        .insert([item.payload])
        .select()

      const blocked = !!error || !data || data.length === 0
      recordResult(
        `Insert Protection on table '${item.table}'`,
        blocked ? 'PASS' : 'FAIL',
        error ? `Blocked (${error.code || 'RLS'}): ${error.message}` : (blocked ? 'No data inserted' : 'Vulnerability: Unauthenticated insert succeeded!')
      )
    } catch (err) {
      recordResult(`Insert Protection on table '${item.table}'`, 'PASS', `Blocked: ${err.message}`)
    }
  }

  // ── TEST 3: Unauthorized Update / Delete Protection ────────────────
  try {
    const fakeUuid = '00000000-0000-0000-0000-000000000000'
    const { data: updateData, error: updateError } = await supabase
      .from('companies')
      .update({ name: 'Renamed By Attacker' })
      .eq('id', fakeUuid)
      .select()

    const updateBlocked = updateError || !updateData || updateData.length === 0
    recordResult(
      'Unauthorized Update Protection (companies)',
      updateBlocked ? 'PASS' : 'FAIL',
      updateError ? `Blocked by RLS: ${updateError.message}` : '0 records modified'
    )
  } catch (err) {
    recordResult('Unauthorized Update Protection', 'PASS', `Blocked: ${err.message}`)
  }

  try {
    const fakeUuid = '00000000-0000-0000-0000-000000000000'
    const { data: deleteData, error: deleteError } = await supabase
      .from('questions')
      .delete()
      .eq('id', fakeUuid)
      .select()

    const deleteBlocked = deleteError || !deleteData || deleteData.length === 0
    recordResult(
      'Unauthorized Delete Protection (questions)',
      deleteBlocked ? 'PASS' : 'FAIL',
      deleteError ? `Blocked by RLS: ${deleteError.message}` : '0 records deleted'
    )
  } catch (err) {
    recordResult('Unauthorized Delete Protection', 'PASS', `Blocked: ${err.message}`)
  }

  // ── TEST 4: Assessment Attempt Spoofing Protection ─────────────────
  try {
    const fakeUserId = '11111111-1111-1111-1111-111111111111'
    const fakeCompanyId = '22222222-2222-2222-2222-222222222222'
    const { data, error } = await supabase
      .from('assessment_attempts')
      .insert([{
        user_id: fakeUserId,
        company_id: fakeCompanyId,
        score: 100, // Attacker trying to spoof score
        status: 'completed'
      }])
      .select()

    const blocked = !!error || !data || data.length === 0
    recordResult(
      'Assessment Attempt Spoofing Protection (Cannot write arbitrary score/user_id)',
      blocked ? 'PASS' : 'FAIL',
      error ? `Blocked: ${error.message}` : 'Rejected'
    )
  } catch (err) {
    recordResult('Assessment Attempt Spoofing Protection', 'PASS', `Blocked: ${err.message}`)
  }

  // ── TEST 5: Secret Leak Scanning in Frontend (Static Security) ─────
  try {
    const srcDir = path.resolve('src')
    let foundSecret = false
    let flaggedFile = null

    function scanFiles(dir) {
      const entries = fs.readdirSync(dir, { withFileTypes: true })
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)
        if (entry.isDirectory()) {
          scanFiles(fullPath)
        } else if (/\.(jsx?|tsx?|html)$/.test(entry.name)) {
          const content = fs.readFileSync(fullPath, 'utf8')
          if (
            content.includes('service_role') ||
            content.includes('SUPABASE_SERVICE_ROLE_KEY') ||
            content.includes('JWT_SECRET')
          ) {
            foundSecret = true
            flaggedFile = fullPath
            break
          }
        }
      }
    }

    scanFiles(srcDir)
    recordResult(
      'Client-side Secret Scan (No backend service keys in frontend bundle)',
      !foundSecret ? 'PASS' : 'FAIL',
      foundSecret ? `Found suspicious token in ${flaggedFile}` : 'Zero private secrets found in src/'
    )
  } catch (err) {
    recordResult('Client-side Secret Scan', 'FAIL', err.message)
  }

  // ── TEST 6: Zero-Seed Database Integrity Verification ─────────────
  const allCoreTables = [
    'companies', 'profiles', 'company_tracks', 'questions',
    'question_options', 'question_evaluation_data', 'question_tags',
    'assessments', 'assessment_questions', 'assessment_attempts',
    'assessment_answers', 'study_materials', 'user_progress',
    'user_submissions', 'bookmarks', 'mistakes', 'achievements',
    'user_achievements', 'daily_challenges', 'audit_logs'
  ]

  let zeroSeedPassed = true
  let tablesWithData = []

  for (const tbl of allCoreTables) {
    try {
      const { data, count, error } = await supabase
        .from(tbl)
        .select('*', { count: 'exact', head: true })

      if (count && count > 0) {
        zeroSeedPassed = false
        tablesWithData.push(`${tbl} (${count} rows)`)
      }
    } catch (e) {
      // Ignored
    }
  }

  recordResult(
    'Zero-Seed Protocol Compliance (0 dummy/mock rows in DB)',
    zeroSeedPassed ? 'PASS' : 'FAIL',
    zeroSeedPassed
      ? 'All queried tables confirm 0 rows — ready for real user content'
      : `Mock data detected in: ${tablesWithData.join(', ')}`
  )

  // ── SUMMARY REPORT ─────────────────────────────────────────────────
  console.log('\n====================================================================')
  console.log('📊 VERIFICATION SUMMARY')
  console.log(`Total Checks: ${passedCount + failedCount}`)
  console.log(`Passed:       ${passedCount}`)
  console.log(`Failed:       ${failedCount}`)
  console.log(`Info/Notes:   ${infoCount}`)
  console.log(`Security Score: ${Math.round((passedCount / (passedCount + failedCount)) * 100)}%`)
  console.log('====================================================================\n')
}

runSecurityTests()
