-- supabase/migrations/007_user_progress_xp.sql
-- Adds XP, streak, and daily practice tracking columns to public.user_progress

ALTER TABLE public.user_progress
  ADD COLUMN IF NOT EXISTS xp INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS streak INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS last_daily_practice_date DATE;

-- Performance index for user and company progress queries
CREATE INDEX IF NOT EXISTS idx_user_progress_user_comp ON public.user_progress(user_id, company_id);

-- Row Level Security policies
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view and update own progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users can view own progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users can insert own progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users can update own progress" ON public.user_progress;
DROP POLICY IF EXISTS "Anon view user progress" ON public.user_progress;
DROP POLICY IF EXISTS "Anon insert user progress" ON public.user_progress;
DROP POLICY IF EXISTS "Anon update user progress" ON public.user_progress;

-- 1. Authenticated users policies
CREATE POLICY "Users can view own progress"
  ON public.user_progress FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON public.user_progress FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON public.user_progress FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 2. Anon / demo users policies
CREATE POLICY "Anon view user progress"
  ON public.user_progress FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anon insert user progress"
  ON public.user_progress FOR INSERT
  TO anon
  WITH CHECK (user_id IS NOT NULL);

CREATE POLICY "Anon update user progress"
  ON public.user_progress FOR UPDATE
  TO anon
  USING (user_id IS NOT NULL)
  WITH CHECK (user_id IS NOT NULL);
