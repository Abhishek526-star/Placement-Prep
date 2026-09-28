// src/services/companyService.js
// Handles fetching company metadata and tracks from Supabase or fallback config

import { supabase, IS_SUPABASE_CONFIGURED } from '../lib/supabase'
import { COMPANIES, getCompanyBySlug } from '../config/companies'

/**
 * Formats a Supabase row or static company into a rich company object.
 */
function normalizeCompany(row) {
  const staticMatch = COMPANIES.find(
    (c) => c.slug === row.slug || c.id === row.id
  )

  const shortName = row.short_name || row.shortName || staticMatch?.shortName || row.name
  const branding = {
    primaryColor: row.branding?.primaryColor || staticMatch?.branding?.primaryColor || '#2563EB',
    primaryHover: row.branding?.primaryHover || staticMatch?.branding?.primaryHover || '#1D4ED8',
    badgeBg: row.branding?.badgeBg || staticMatch?.branding?.badgeBg || 'rgba(37, 99, 235, 0.1)',
    logoText: row.branding?.logoText || shortName,
  }

  // Map tracks: combine from company_tracks relation or static fallback
  const rawTracks = row.company_tracks || row.tracks || staticMatch?.tracks || []
  const tracks = rawTracks.map((t) => ({
    id: t.id || `track-${t.slug}`,
    name: t.name,
    slug: t.slug,
    questionsCount: t.questionsCount || t.questions_count || 40,
  }))

  const placementModules = staticMatch?.placementModules || [
    {
      id: 'selection-process',
      title: 'Selection Process',
      shortTitle: 'Selection Process',
      path: '/selection-process',
      icon: 'Workflow',
      color: branding.primaryColor,
      desc: `${row.name} recruitment stages, online assessment flow, and interview patterns`,
      badge: 'Recruitment',
    },
    {
      id: 'syllabus',
      title: 'Official Syllabus',
      shortTitle: 'Syllabus',
      path: '/syllabus',
      icon: 'BookOpen',
      color: branding.primaryColor,
      desc: `${row.name} official test curriculum and question distribution`,
      badge: 'Pattern',
    },
    {
      id: 'dsa',
      title: 'Coding & Algorithms',
      shortTitle: 'Coding',
      path: '/dsa',
      icon: 'Code2',
      color: '#059669',
      desc: `Hands-on programming and algorithm practice for ${row.name}`,
      badge: 'Coding',
    },
    {
      id: 'assessments',
      title: 'Mock Assessments',
      shortTitle: 'Mock Tests',
      path: '/assessments',
      icon: 'CheckSquare',
      color: '#A100FF',
      desc: `Timed test simulations for ${row.name}`,
      badge: 'Tests',
    },
  ]

  return {
    ...staticMatch,
    ...row,
    id: row.id || staticMatch?.id,
    slug: row.slug,
    name: row.name,
    shortName,
    tagline: row.tagline || staticMatch?.tagline || 'Placement Preparation Track',
    description: row.description || staticMatch?.description || `Prepare for ${row.name} hiring and assessments.`,
    branding,
    features: row.features || staticMatch?.features || {
      dsa: true,
      sql: true,
      frontend: false,
      assessments: true,
      studyMaterials: true,
      interview: true,
    },
    tracks,
    placementModules,
  }
}

const DELETED_COMPANIES_KEY = 'placement-prep-deleted-company-slugs'

export function getDeletedCompanySlugs() {
  try {
    const raw = localStorage.getItem(DELETED_COMPANIES_KEY)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

export function saveDeletedCompanySlugs(slugSet) {
  try {
    localStorage.setItem(DELETED_COMPANIES_KEY, JSON.stringify(Array.from(slugSet)))
  } catch (err) {
    console.warn('[CompanyService] Error saving deleted slugs:', err)
  }
}

export function restoreCompanySlug(slug) {
  if (!slug) return
  const deletedSlugs = getDeletedCompanySlugs()
  if (deletedSlugs.has(slug.toLowerCase())) {
    deletedSlugs.delete(slug.toLowerCase())
    saveDeletedCompanySlugs(deletedSlugs)
  }
}

export async function fetchCompanies() {
  const deletedSlugs = getDeletedCompanySlugs()

  if (!IS_SUPABASE_CONFIGURED) {
    const filteredDefaults = COMPANIES.filter(
      (c) => !deletedSlugs.has(c.slug?.toLowerCase())
    )
    return { data: filteredDefaults, error: null }
  }

  try {
    const { data, error } = await supabase
      .from('companies')
      .select('*, company_tracks(*)')
      .eq('is_active', true)
      .order('name')

    if (error) throw error

    if (!data || data.length === 0) {
      const filteredDefaults = COMPANIES.filter(
        (c) => !deletedSlugs.has(c.slug?.toLowerCase())
      )
      return { data: filteredDefaults, error: null }
    }

    // Merge Supabase companies with any missing static companies
    const normalizedList = data.map(normalizeCompany)

    // Ensure all predefined companies exist even if not yet in database
    for (const staticC of COMPANIES) {
      if (!normalizedList.some((c) => c.slug === staticC.slug)) {
        normalizedList.push(staticC)
      }
    }

    // Filter out deleted companies
    const visibleList = normalizedList.filter(
      (c) => !deletedSlugs.has(c.slug?.toLowerCase())
    )

    return { data: visibleList, error: null }
  } catch (err) {
    console.warn('[CompanyService] Falling back to default companies:', err.message)
    const filteredDefaults = COMPANIES.filter(
      (c) => !deletedSlugs.has(c.slug?.toLowerCase())
    )
    return { data: filteredDefaults, error: null }
  }
}

export async function deleteCompany(companyIdOrSlug) {
  if (!companyIdOrSlug) return { error: 'No company specified' }

  const slug = companyIdOrSlug.toLowerCase()
  const deletedSlugs = getDeletedCompanySlugs()
  deletedSlugs.add(slug)
  saveDeletedCompanySlugs(deletedSlugs)

  let dbError = null

  if (IS_SUPABASE_CONFIGURED) {
    try {
      const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(companyIdOrSlug)

      // 1. Soft-delete first by marking inactive
      const { error: softErr } = await supabase
        .from('companies')
        .update({ is_active: false })
        .match(isUuid ? { id: companyIdOrSlug } : { slug })

      if (softErr) {
        // 2. Fallback to hard delete
        const { error: hardErr } = await supabase
          .from('companies')
          .delete()
          .match(isUuid ? { id: companyIdOrSlug } : { slug })

        if (hardErr) dbError = hardErr.message
      }
    } catch (err) {
      console.warn('[CompanyService] Database deletion warning:', err.message)
      dbError = err.message
    }
  }

  // Notify active listeners across the app
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('company-catalog-updated', {
      detail: { deletedSlug: slug }
    }))
  }

  return { success: true, dbError }
}

export async function fetchCompanyBySlug(slug) {
  if (!IS_SUPABASE_CONFIGURED) {
    return { data: getCompanyBySlug(slug), error: null }
  }

  try {
    const { data, error } = await supabase
      .from('companies')
      .select('*, company_tracks(*)')
      .eq('slug', slug)
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (err) {
    console.warn('[CompanyService] Falling back to default config for slug:', slug, err.message)
    return { data: getCompanyBySlug(slug), error: null }
  }
}

export async function fetchCompanyTracks(companyId) {
  if (!companyId) {
    return { data: [], error: null }
  }

  // Find fallback company in static config first
  const staticComp = COMPANIES.find(c => c.id === companyId || c.slug === companyId)

  if (!IS_SUPABASE_CONFIGURED) {
    return { data: staticComp?.tracks || [], error: null }
  }

  const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(companyId)

  // If companyId is not a UUID, return static tracks directly to avoid 400 Bad Request
  if (!isUuid) {
    return { data: staticComp?.tracks || [], error: null }
  }

  try {
    const { data, error } = await supabase
      .from('company_tracks')
      .select('*')
      .eq('company_id', companyId)

    if (error) throw error
    if (!data || data.length === 0) {
      return { data: staticComp?.tracks || [], error: null }
    }
    return { data, error: null }
  } catch (err) {
    console.warn('[CompanyService] Falling back to static tracks:', err.message)
    return { data: staticComp?.tracks || [], error: null }
  }
}
