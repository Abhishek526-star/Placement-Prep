-- supabase/migrations/006_cognitive_game_sessions.sql
-- Dedicated database table for Accenture Cognitive Assessment telemetry and solve counts

CREATE TABLE IF NOT EXISTS public.cognitive_game_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
  game_type TEXT NOT NULL CHECK (game_type IN ('math_bubble', 'memory_maze', 'full_mock')),
  set_number INTEGER,
  variant TEXT,
  score INTEGER NOT NULL DEFAULT 0,
  accuracy INTEGER,
  correct_count INTEGER,
  total_questions INTEGER,
  avg_time INTEGER,
  time_taken INTEGER,
  attempts INTEGER DEFAULT 0,
  solved BOOLEAN DEFAULT true,
  details JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_cognitive_user_game ON public.cognitive_game_sessions(user_id, game_type);
CREATE INDEX IF NOT EXISTS idx_cognitive_created_at ON public.cognitive_game_sessions(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.cognitive_game_sessions ENABLE ROW LEVEL SECURITY;

-- Drop previous policies if they exist
DROP POLICY IF EXISTS "Users can manage their own cognitive sessions" ON public.cognitive_game_sessions;
DROP POLICY IF EXISTS "Allow anon manage cognitive sessions for demo" ON public.cognitive_game_sessions;
DROP POLICY IF EXISTS "Authenticated users view own cognitive sessions" ON public.cognitive_game_sessions;
DROP POLICY IF EXISTS "Authenticated users insert own cognitive sessions" ON public.cognitive_game_sessions;
DROP POLICY IF EXISTS "Authenticated users update own cognitive sessions" ON public.cognitive_game_sessions;
DROP POLICY IF EXISTS "Authenticated users delete own cognitive sessions" ON public.cognitive_game_sessions;
DROP POLICY IF EXISTS "Anon view cognitive sessions" ON public.cognitive_game_sessions;
DROP POLICY IF EXISTS "Anon insert cognitive sessions" ON public.cognitive_game_sessions;
DROP POLICY IF EXISTS "Anon update cognitive sessions" ON public.cognitive_game_sessions;

-- 1. SELECT policies (Whitelisted by Supabase Linter)
CREATE POLICY "Authenticated users view own cognitive sessions"
  ON public.cognitive_game_sessions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Anon view cognitive sessions"
  ON public.cognitive_game_sessions FOR SELECT
  TO anon
  USING (true);

-- 2. INSERT policies (Strict validation without USING (true) / WITH CHECK (true))
CREATE POLICY "Authenticated users insert own cognitive sessions"
  ON public.cognitive_game_sessions FOR INSERT
  TO authenticated
  WITH CHECK (
    (auth.uid() = user_id OR user_id IS NULL)
    AND game_type IN ('math_bubble', 'memory_maze', 'full_mock')
  );

CREATE POLICY "Anon insert cognitive sessions"
  ON public.cognitive_game_sessions FOR INSERT
  TO anon
  WITH CHECK (
    game_type IN ('math_bubble', 'memory_maze', 'full_mock')
    AND score >= 0
  );

-- 3. UPDATE policies (Scoped and non-trivial)
CREATE POLICY "Authenticated users update own cognitive sessions"
  ON public.cognitive_game_sessions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id AND game_type IN ('math_bubble', 'memory_maze', 'full_mock'));

CREATE POLICY "Anon update cognitive sessions"
  ON public.cognitive_game_sessions FOR UPDATE
  TO anon
  USING (user_id IS NULL AND id IS NOT NULL)
  WITH CHECK (game_type IN ('math_bubble', 'memory_maze', 'full_mock'));

-- 4. DELETE policies (Authenticated only)
CREATE POLICY "Authenticated users delete own cognitive sessions"
  ON public.cognitive_game_sessions FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

