-- supabase/migrations/008_add_path_finder_game_type.sql
-- Expand cognitive_game_sessions table and RLS policies to support 'path_finder'

-- 1. Update CHECK constraint on game_type
ALTER TABLE public.cognitive_game_sessions
  DROP CONSTRAINT IF EXISTS cognitive_game_sessions_game_type_check;

ALTER TABLE public.cognitive_game_sessions
  ADD CONSTRAINT cognitive_game_sessions_game_type_check
  CHECK (game_type IN ('math_bubble', 'memory_maze', 'full_mock', 'path_finder'));

-- 2. Drop existing insert/update policies to update allowed game_type values
DROP POLICY IF EXISTS "Authenticated users insert own cognitive sessions" ON public.cognitive_game_sessions;
DROP POLICY IF EXISTS "Anon insert cognitive sessions" ON public.cognitive_game_sessions;
DROP POLICY IF EXISTS "Authenticated users update own cognitive sessions" ON public.cognitive_game_sessions;
DROP POLICY IF EXISTS "Anon update cognitive sessions" ON public.cognitive_game_sessions;

-- 3. Re-create INSERT policies allowing 'path_finder'
CREATE POLICY "Authenticated users insert own cognitive sessions"
  ON public.cognitive_game_sessions FOR INSERT
  TO authenticated
  WITH CHECK (
    (auth.uid() = user_id OR user_id IS NULL)
    AND game_type IN ('math_bubble', 'memory_maze', 'full_mock', 'path_finder')
  );

CREATE POLICY "Anon insert cognitive sessions"
  ON public.cognitive_game_sessions FOR INSERT
  TO anon
  WITH CHECK (
    game_type IN ('math_bubble', 'memory_maze', 'full_mock', 'path_finder')
    AND score >= 0
  );

-- 4. Re-create UPDATE policies allowing 'path_finder'
CREATE POLICY "Authenticated users update own cognitive sessions"
  ON public.cognitive_game_sessions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (
    auth.uid() = user_id
    AND game_type IN ('math_bubble', 'memory_maze', 'full_mock', 'path_finder')
  );

CREATE POLICY "Anon update cognitive sessions"
  ON public.cognitive_game_sessions FOR UPDATE
  TO anon
  USING (user_id IS NULL AND id IS NOT NULL)
  WITH CHECK (
    game_type IN ('math_bubble', 'memory_maze', 'full_mock', 'path_finder')
  );
