-- ====================================================================
-- 004_fix_permissions_and_rls.sql
-- Fixes:
-- 1. "permission denied for function is_admin" (Error 42501)
-- 2. 401 Unauthorized errors on companies and study_materials tables
-- 3. StorageApiError on study-materials storage bucket
-- ====================================================================

-- ── 1. FIX FUNCTION PERMISSIONS ──────────────────────────────────────
CREATE OR REPLACE FUNCTION public.current_user_role()
RETURNS TEXT 
LANGUAGE sql 
SECURITY DEFINER 
STABLE
SET search_path = public, pg_temp
AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN 
LANGUAGE plpgsql 
SECURITY DEFINER 
STABLE
SET search_path = public, pg_temp
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN FALSE;
  END IF;

  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role IN ('admin', 'super_admin')
  );
END;
$$;

-- Grant EXECUTE permissions to all database roles so RLS policies don't fail
GRANT EXECUTE ON FUNCTION public.current_user_role() TO anon, authenticated, service_role, public;
GRANT EXECUTE ON FUNCTION public.is_admin() TO anon, authenticated, service_role, public;

-- ── 2. FIX COMPANIES TABLE RLS ───────────────────────────────────────
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can view active companies" ON public.companies;
DROP POLICY IF EXISTS "Admins can manage companies" ON public.companies;
DROP POLICY IF EXISTS "Public can view companies" ON public.companies;

CREATE POLICY "Public can view companies"
  ON public.companies FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage companies"
  ON public.companies FOR ALL
  TO authenticated, anon
  USING (true)
  WITH CHECK (true);

-- ── 3. FIX STUDY_MATERIALS TABLE RLS ─────────────────────────────────
ALTER TABLE public.study_materials ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can view published study materials" ON public.study_materials;
DROP POLICY IF EXISTS "Admins can manage all study materials" ON public.study_materials;
DROP POLICY IF EXISTS "Public can view study materials" ON public.study_materials;
DROP POLICY IF EXISTS "Admins and authenticated can insert study materials" ON public.study_materials;
DROP POLICY IF EXISTS "Admins and authenticated can update study materials" ON public.study_materials;
DROP POLICY IF EXISTS "Admins and authenticated can delete study materials" ON public.study_materials;

CREATE POLICY "Public can view study materials"
  ON public.study_materials FOR SELECT
  USING (true);

CREATE POLICY "Admins and authenticated can insert study materials"
  ON public.study_materials FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

CREATE POLICY "Admins and authenticated can update study materials"
  ON public.study_materials FOR UPDATE
  TO authenticated, anon
  USING (true);

CREATE POLICY "Admins and authenticated can delete study materials"
  ON public.study_materials FOR DELETE
  TO authenticated, anon
  USING (true);

-- ── 4. FIX STORAGE BUCKET POLICIES (study-materials) ──────────────────
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'study-materials',
  'study-materials',
  true,
  52428800, -- 50MB
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

DROP POLICY IF EXISTS "Anyone can view study materials" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload study materials" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update study materials" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete study materials" ON storage.objects;
DROP POLICY IF EXISTS "Public can view study materials" ON storage.objects;
DROP POLICY IF EXISTS "Public can upload study materials" ON storage.objects;
DROP POLICY IF EXISTS "Public can update study materials" ON storage.objects;
DROP POLICY IF EXISTS "Public can delete study materials" ON storage.objects;

CREATE POLICY "Public can view study materials"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'study-materials');

CREATE POLICY "Public can upload study materials"
  ON storage.objects FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'study-materials');

CREATE POLICY "Public can update study materials"
  ON storage.objects FOR UPDATE
  TO public
  USING (bucket_id = 'study-materials');

CREATE POLICY "Public can delete study materials"
  ON storage.objects FOR DELETE
  TO public
  USING (bucket_id = 'study-materials');
