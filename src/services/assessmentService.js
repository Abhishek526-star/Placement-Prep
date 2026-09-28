// src/services/assessmentService.js
import { supabase, IS_SUPABASE_CONFIGURED } from '../lib/supabase'

export async function fetchAssessments(companyId) {
  if (!IS_SUPABASE_CONFIGURED || !companyId) {
    return { data: [], error: null }
  }

  try {
    const { data, error } = await supabase
      .from('assessments')
      .select('*, company_tracks(*)')
      .eq('company_id', companyId)
      .eq('is_published', true)
      .order('created_at', { ascending: true })

    if (error) throw error
    return { data: data || [], error: null }
  } catch (err) {
    console.error('[AssessmentService] Fetch error:', err.message)
    return { data: [], error: err.message }
  }
}

export async function fetchAssessmentById(assessmentId) {
  if (!IS_SUPABASE_CONFIGURED || !assessmentId) {
    return { data: null, error: null }
  }

  try {
    const { data, error } = await supabase
      .from('assessments')
      .select('*, assessment_questions(*, questions(*, question_options(*)))')
      .eq('id', assessmentId)
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (err) {
    console.error('[AssessmentService] Fetch by id error:', err.message)
    return { data: null, error: err.message }
  }
}

export { fetchAssessments as fetchCompanyAssessments }
