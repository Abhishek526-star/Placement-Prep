// src/services/questionService.js
// Safe query client for questions and options

import { supabase, IS_SUPABASE_CONFIGURED } from '../lib/supabase'

export async function fetchQuestions({ companyId, questionType, trackId }) {
  if (!IS_SUPABASE_CONFIGURED || !companyId) {
    return { data: [], error: null }
  }

  try {
    let query = supabase
      .from('questions')
      .select('*, question_options(*), question_tags(*)')
      .eq('company_id', companyId)
      .eq('is_published', true)

    if (questionType) {
      query = query.eq('question_type', questionType)
    }
    if (trackId) {
      query = query.eq('track_id', trackId)
    }

    const { data, error } = await query.order('created_at', { ascending: true })
    if (error) throw error
    return { data: data || [], error: null }
  } catch (err) {
    console.error('[QuestionService] Fetch questions error:', err.message)
    return { data: [], error: err.message }
  }
}

export async function fetchQuestionBySlug(companyId, questionSlug) {
  if (!IS_SUPABASE_CONFIGURED || !companyId || !questionSlug) {
    return { data: null, error: null }
  }

  try {
    const { data, error } = await supabase
      .from('questions')
      .select('*, question_options(*), question_tags(*)')
      .eq('company_id', companyId)
      .eq('slug', questionSlug)
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (err) {
    console.error('[QuestionService] Fetch question by slug error:', err.message)
    return { data: null, error: err.message }
  }
}

export { fetchQuestions as fetchCompanyQuestions }

