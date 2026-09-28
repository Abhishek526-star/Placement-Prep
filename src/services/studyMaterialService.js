// src/services/studyMaterialService.js
import { supabase, IS_SUPABASE_CONFIGURED } from '../lib/supabase'
import { COMPANIES } from '../config/companies'

export const STORAGE_BUCKET = 'study-materials'

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

/**
 * Format bytes into human-readable string (KB, MB, GB)
 */
export function formatFileSize(bytes) {
  if (!bytes || isNaN(bytes)) return '—'
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

/**
 * Safely resolve a company ID (whether config ID 'comp-accenture', slug 'accenture', or UUID)
 * to a genuine database UUID in the public.companies table.
 */
export async function resolveCompanyUuid(companyIdOrSlug) {
  if (!IS_SUPABASE_CONFIGURED || !companyIdOrSlug) return null

  // 1. If already a valid UUID, return directly
  if (UUID_REGEX.test(companyIdOrSlug)) {
    return companyIdOrSlug
  }

  // 2. Extract company slug (e.g. 'comp-accenture' -> 'accenture')
  const slug = companyIdOrSlug.replace(/^comp-/, '').toLowerCase()

  try {
    // Try finding existing company in Supabase
    const { data: existing, error } = await supabase
      .from('companies')
      .select('id')
      .eq('slug', slug)
      .maybeSingle()

    if (existing?.id) {
      return existing.id
    }

    // 3. If not in DB yet, auto-insert from static configuration
    const staticComp = COMPANIES.find((c) => c.slug === slug || c.id === companyIdOrSlug)
    const { data: inserted, error: insertErr } = await supabase
      .from('companies')
      .upsert(
        {
          slug,
          name: staticComp?.name || slug.toUpperCase(),
          short_name: staticComp?.shortName || slug.toUpperCase(),
          tagline: staticComp?.tagline || '',
          description: staticComp?.description || '',
          branding: staticComp?.branding || {},
        },
        { onConflict: 'slug' }
      )
      .select('id')
      .single()

    if (inserted?.id) {
      return inserted.id
    }
  } catch (err) {
    console.warn('[StudyMaterialService] Failed to resolve company UUID:', err)
  }

  return null
}

function sanitizeUuid(id) {
  if (!id) return null
  return UUID_REGEX.test(id) ? id : null
}

/**
 * Fetch published study materials for students
 */
export async function fetchStudyMaterials({ companyId, materialType }) {
  if (!IS_SUPABASE_CONFIGURED || !companyId) {
    return { data: [], error: null }
  }

  const validCompanyId = await resolveCompanyUuid(companyId)
  if (!validCompanyId) {
    return { data: [], error: null }
  }

  try {
    let query = supabase
      .from('study_materials')
      .select('*, company_tracks(id, name, slug)')
      .eq('company_id', validCompanyId)
      .eq('is_published', true)

    if (materialType && materialType !== 'all') {
      query = query.eq('material_type', materialType)
    }

    const { data, error } = await query.order('created_at', { ascending: false })
    if (error) throw error
    return { data: data || [], error: null }
  } catch (err) {
    console.error('[StudyMaterialService] Fetch error:', err.message)
    return { data: [], error: err.message }
  }
}

/**
 * Fetch all study materials for admin management (including unpublished)
 */
export async function fetchAdminStudyMaterials({ companyId } = {}) {
  if (!IS_SUPABASE_CONFIGURED) {
    return { data: [], error: null }
  }

  try {
    let query = supabase
      .from('study_materials')
      .select('*, companies(id, name, slug), company_tracks(id, name, slug)')

    if (companyId) {
      const validCompanyId = await resolveCompanyUuid(companyId)
      if (validCompanyId) {
        query = query.eq('company_id', validCompanyId)
      }
    }

    const { data, error } = await query.order('created_at', { ascending: false })
    if (error) throw error
    return { data: data || [], error: null }
  } catch (err) {
    console.error('[StudyMaterialService] Admin fetch error:', err.message)
    return { data: [], error: err.message }
  }
}

/**
 * Upload a file directly to the Supabase Storage bucket 'study-materials'
 */
export async function uploadMaterialFile(file, { companyId, category = 'notes' }) {
  if (!IS_SUPABASE_CONFIGURED) {
    throw new Error('Supabase is not configured')
  }

  if (!file) {
    throw new Error('No file provided for upload')
  }

  // 50MB size limit check
  const MAX_SIZE = 50 * 1024 * 1024
  if (file.size > MAX_SIZE) {
    throw new Error('File exceeds the 50MB maximum size limit.')
  }

  const cleanName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_')
  const timestamp = Date.now()
  const folderSlug = (companyId || 'general').replace(/^comp-/, '').toLowerCase()
  const filePath = `companies/${folderSlug}/${category}/${timestamp}_${cleanName}`

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    })

  if (uploadError) {
    console.error('[StudyMaterialService] Storage upload error:', uploadError)
    if (uploadError.message?.toLowerCase().includes('row-level security')) {
      throw new Error(
        `Storage upload blocked by Supabase Row-Level Security policy. Please execute 005_fix_security_linter_warnings.sql in your Supabase SQL Editor.`
      )
    }
    throw new Error(
      uploadError.message?.includes('bucket') || uploadError.statusCode === '404'
        ? `Storage bucket '${STORAGE_BUCKET}' not found. Please run 005_fix_security_linter_warnings.sql in Supabase SQL editor.`
        : uploadError.message
    )
  }

  // Get public URL
  const { data: urlData } = supabase.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(filePath)

  return {
    fileUrl: urlData?.publicUrl || filePath,
    filePath,
    fileSize: file.size,
  }
}

/**
 * Create a new study material record in database with resolved UUIDs
 */
export async function createStudyMaterial({
  companyId,
  trackId = null,
  title,
  description = '',
  materialType = 'notes',
  fileUrl,
  fileSizeBytes = null,
  isPublished = true,
}) {
  if (!IS_SUPABASE_CONFIGURED) {
    throw new Error('Supabase is not configured')
  }

  // Resolve companyId to a genuine UUID
  const validCompanyId = await resolveCompanyUuid(companyId)
  if (!validCompanyId) {
    throw new Error(`Could not find or create company record for '${companyId}'.`)
  }

  const payload = {
    company_id: validCompanyId,
    track_id: sanitizeUuid(trackId),
    title,
    description,
    material_type: materialType,
    file_url: fileUrl,
    file_size_bytes: fileSizeBytes,
    is_published: isPublished,
  }

  const { data, error } = await supabase
    .from('study_materials')
    .insert([payload])
    .select('*, company_tracks(id, name, slug)')
    .single()

  if (error) {
    console.error('[StudyMaterialService] Create record error:', error.message)
    throw error
  }

  return { data, error: null }
}

/**
 * Toggle publish status of a study material
 */
export async function togglePublishStudyMaterial(id, isPublished) {
  if (!IS_SUPABASE_CONFIGURED) return { error: 'Supabase not configured' }

  const { data, error } = await supabase
    .from('study_materials')
    .update({ is_published: isPublished })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('[StudyMaterialService] Toggle publish error:', error.message)
    return { data: null, error: error.message }
  }

  return { data, error: null }
}

/**
 * Delete a study material from database and storage
 */
export async function deleteStudyMaterial(id, fileUrl) {
  if (!IS_SUPABASE_CONFIGURED) return { error: 'Supabase not configured' }

  // 1. Delete from database
  const { error: dbError } = await supabase
    .from('study_materials')
    .delete()
    .eq('id', id)

  if (dbError) {
    console.error('[StudyMaterialService] DB Delete error:', dbError.message)
    return { error: dbError.message }
  }

  // 2. If it's a Supabase storage URL, attempt deletion from bucket
  if (fileUrl && fileUrl.includes(STORAGE_BUCKET)) {
    try {
      const parts = fileUrl.split(`/${STORAGE_BUCKET}/`)
      if (parts.length > 1) {
        const storagePath = decodeURIComponent(parts[1])
        await supabase.storage.from(STORAGE_BUCKET).remove([storagePath])
      }
    } catch (e) {
      console.warn('[StudyMaterialService] Storage file delete failed (non-fatal):', e)
    }
  }

  return { error: null }
}
