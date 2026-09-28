-- supabase/migrations/009_fix_user_progress_unique.sql
-- Clean up duplicate rows in public.user_progress and enforce partial unique index for track_id IS NULL

-- 1. Deduplicate existing rows in public.user_progress where track_id IS NULL
-- Keeps the latest row (most recent updated_at and highest xp)
DELETE FROM public.user_progress
WHERE id IN (
  SELECT id FROM (
    SELECT id,
           ROW_NUMBER() OVER (
             PARTITION BY user_id, company_id
             ORDER BY updated_at DESC, xp DESC
           ) as rnum
    FROM public.user_progress
    WHERE track_id IS NULL
  ) duplicates
  WHERE duplicates.rnum > 1
);

-- 2. Create partial unique index on (user_id, company_id) where track_id IS NULL
-- This prevents duplicate rows from ever being created at the database level
CREATE UNIQUE INDEX IF NOT EXISTS idx_user_progress_company_null_track
  ON public.user_progress (user_id, company_id)
  WHERE track_id IS NULL;

-- 3. Add DELETE policy for authenticated users
DROP POLICY IF EXISTS "Users can delete own progress" ON public.user_progress;
CREATE POLICY "Users can delete own progress"
  ON public.user_progress FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
