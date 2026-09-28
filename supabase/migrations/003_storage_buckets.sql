-- ====================================================================
-- 003_storage_buckets.sql
-- Storage Buckets & Storage Policies for PlacementPrep
-- Allows public read & authorized upload to 'study-materials'
-- ====================================================================

-- ── 1. CREATE STORAGE BUCKET ─────────────────────────────────────────
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'study-materials',
  'study-materials',
  true,
  52428800, -- 50 MB max limit
  ARRAY[
    'application/pdf',
    'text/plain',
    'text/markdown',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/png',
    'image/jpeg',
    'image/webp'
  ]
)
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

-- ── 2. STORAGE POLICIES ───────────────────────────────────────────────

-- Drop old restrictive policies if they exist
DROP POLICY IF EXISTS "Anyone can view study materials" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload study materials" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update study materials" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete study materials" ON storage.objects;
DROP POLICY IF EXISTS "Public can view study materials" ON storage.objects;
DROP POLICY IF EXISTS "Public can upload study materials" ON storage.objects;
DROP POLICY IF EXISTS "Public can update study materials" ON storage.objects;
DROP POLICY IF EXISTS "Public can delete study materials" ON storage.objects;

-- Policy 1: Anyone can read/download from the study-materials bucket
CREATE POLICY "Public can view study materials"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'study-materials');

-- Policy 2: Allow uploading PDFs/documents to study-materials bucket
CREATE POLICY "Public can upload study materials"
  ON storage.objects FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'study-materials');

-- Policy 3: Allow updating files in study-materials bucket
CREATE POLICY "Public can update study materials"
  ON storage.objects FOR UPDATE
  TO public
  USING (bucket_id = 'study-materials');

-- Policy 4: Allow deleting files in study-materials bucket
CREATE POLICY "Public can delete study materials"
  ON storage.objects FOR DELETE
  TO public
  USING (bucket_id = 'study-materials');
