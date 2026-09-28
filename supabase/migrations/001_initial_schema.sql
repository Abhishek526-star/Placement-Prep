-- supabase/migrations/001_initial_schema.sql
-- Multi-Company Placement Platform Database Schema
-- Defines all 21 core tables, foreign keys, triggers, and performance indexes.

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ── 1. COMPANIES ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  short_name TEXT NOT NULL,
  tagline TEXT,
  description TEXT,
  branding JSONB DEFAULT '{"primaryColor": "#2563EB", "primaryHover": "#1D4ED8"}'::jsonb,
  features JSONB DEFAULT '{"dsa": true, "sql": true, "assessments": true, "studyMaterials": true, "interview": true}'::jsonb,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── 2. PROFILES (Links to auth.users) ────────────────────────────
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'content_creator', 'admin', 'super_admin')),
  xp_points INTEGER DEFAULT 0,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  college_name TEXT,
  course_name TEXT,
  branch TEXT,
  target_grad_year INTEGER,
  target_companies TEXT[],
  last_active_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger to auto-create profile upon auth.users creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url, role)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data->>'avatar_url', new.raw_user_meta_data->>'picture'),
    COALESCE(new.raw_user_meta_data->>'role', 'student')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- ── 3. COMPANY_MEMBERSHIPS ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.company_memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  membership_role TEXT NOT NULL DEFAULT 'student' CHECK (membership_role IN ('student', 'mentor', 'company_admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, company_id)
);

-- ── 4. COMPANY_TRACKS ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.company_tracks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  slug TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  track_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(company_id, slug)
);

-- ── 5. QUESTIONS ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  track_id UUID REFERENCES public.company_tracks(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  question_type TEXT NOT NULL CHECK (question_type IN ('mcq', 'dsa', 'sql', 'frontend', 'interview')),
  difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  prompt_markdown TEXT NOT NULL,
  starter_code JSONB, -- e.g. {"cpp": "...", "java": "...", "python": "..."}
  hints JSONB DEFAULT '[]'::jsonb,
  explanation_markdown TEXT,
  points INTEGER DEFAULT 10,
  is_published BOOLEAN DEFAULT true,
  created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(company_id, slug)
);

-- ── 6. QUESTION_OPTIONS (For MCQs) ───────────────────────────────
CREATE TABLE IF NOT EXISTS public.question_options (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  option_key TEXT NOT NULL, -- 'A', 'B', 'C', 'D'
  option_text TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  UNIQUE(question_id, option_key)
);

-- ── 7. QUESTION_EVALUATION_DATA (PRIVATE - Admin only) ───────────
CREATE TABLE IF NOT EXISTS public.question_evaluation_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID UNIQUE NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  correct_option_key TEXT, -- for MCQ
  hidden_test_cases JSONB DEFAULT '[]'::jsonb, -- for DSA
  sql_solution_query TEXT, -- for SQL
  sql_seed_data TEXT, -- for SQL test harness
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── 8. QUESTION_TAGS ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.question_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  tag TEXT NOT NULL,
  UNIQUE(question_id, tag)
);

-- ── 9. ASSESSMENTS ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  track_id UUID REFERENCES public.company_tracks(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  description TEXT,
  duration_minutes INTEGER NOT NULL DEFAULT 60,
  passing_score_percentage INTEGER DEFAULT 60,
  total_questions INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(company_id, slug)
);

-- ── 10. ASSESSMENT_QUESTIONS ─────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.assessment_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assessment_id UUID NOT NULL REFERENCES public.assessments(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  section_name TEXT DEFAULT 'General',
  question_order INTEGER DEFAULT 0,
  marks INTEGER DEFAULT 1,
  UNIQUE(assessment_id, question_id)
);

-- ── 11. ASSESSMENT_ATTEMPTS ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.assessment_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assessment_id UUID NOT NULL REFERENCES public.assessments(id) ON DELETE CASCADE,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  submitted_at TIMESTAMPTZ,
  score_obtained NUMERIC(5,2) DEFAULT 0,
  total_marks NUMERIC(5,2) DEFAULT 0,
  percentage NUMERIC(5,2) DEFAULT 0,
  is_passed BOOLEAN DEFAULT false,
  status TEXT NOT NULL DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed', 'expired', 'abandoned'))
);

-- ── 12. ASSESSMENT_ANSWERS ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.assessment_answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  attempt_id UUID NOT NULL REFERENCES public.assessment_attempts(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  user_answer TEXT,
  is_correct BOOLEAN,
  marks_awarded NUMERIC(5,2) DEFAULT 0,
  answered_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(attempt_id, question_id)
);

-- ── 13. STUDY_MATERIALS ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.study_materials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  track_id UUID REFERENCES public.company_tracks(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  material_type TEXT NOT NULL CHECK (material_type IN ('pdf', 'cheatsheet', 'video', 'notes', 'link')),
  file_url TEXT NOT NULL,
  file_size_bytes BIGINT,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── 14. USER_PROGRESS ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  track_id UUID REFERENCES public.company_tracks(id) ON DELETE SET NULL,
  completed_questions_count INTEGER DEFAULT 0,
  total_questions_count INTEGER DEFAULT 0,
  readiness_percentage INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, company_id, track_id)
);

-- ── 15. USER_SUBMISSIONS (Coding / Practice) ─────────────────────
CREATE TABLE IF NOT EXISTS public.user_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  language TEXT NOT NULL,
  code TEXT NOT NULL,
  status TEXT NOT NULL, -- 'accepted', 'wrong_answer', 'time_limit_exceeded', 'runtime_error'
  execution_time_ms INTEGER,
  memory_kb INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── 16. BOOKMARKS ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, question_id)
);

-- ── 17. MISTAKES (Mistake Book) ──────────────────────────────────
CREATE TABLE IF NOT EXISTS public.mistakes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  user_wrong_response TEXT,
  correction_notes TEXT,
  is_resolved BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, question_id)
);

-- ── 18. ACHIEVEMENTS ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  xp_reward INTEGER DEFAULT 50,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── 19. USER_ACHIEVEMENTS ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.user_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  achievement_id UUID NOT NULL REFERENCES public.achievements(id) ON DELETE CASCADE,
  earned_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- ── 20. DAILY_CHALLENGES ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.daily_challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  challenge_date DATE NOT NULL,
  bonus_xp INTEGER DEFAULT 25,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(company_id, challenge_date)
);

-- ── 21. AUDIT_LOGS ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT,
  details JSONB,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── PERFORMANCE INDEXES ──────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_companies_slug ON public.companies(slug);
CREATE INDEX IF NOT EXISTS idx_company_tracks_company ON public.company_tracks(company_id, slug);
CREATE INDEX IF NOT EXISTS idx_questions_company_track ON public.questions(company_id, track_id);
CREATE INDEX IF NOT EXISTS idx_questions_type ON public.questions(company_id, question_type);
CREATE INDEX IF NOT EXISTS idx_questions_diff ON public.questions(company_id, difficulty);
CREATE INDEX IF NOT EXISTS idx_assessments_company ON public.assessments(company_id, track_id);
CREATE INDEX IF NOT EXISTS idx_study_materials_comp ON public.study_materials(company_id, material_type);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_comp ON public.user_progress(user_id, company_id);
CREATE INDEX IF NOT EXISTS idx_assessment_attempts_user ON public.assessment_attempts(user_id, company_id);
CREATE INDEX IF NOT EXISTS idx_user_submissions_user ON public.user_submissions(user_id, question_id);
CREATE INDEX IF NOT EXISTS idx_bookmarks_user ON public.bookmarks(user_id, company_id);
CREATE INDEX IF NOT EXISTS idx_mistakes_user ON public.mistakes(user_id, company_id);
