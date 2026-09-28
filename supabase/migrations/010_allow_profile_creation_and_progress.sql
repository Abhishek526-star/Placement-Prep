-- supabase/migrations/010_allow_profile_creation_and_progress.sql
-- Fixes missing profile creation policy and backfills profiles for all users
-- Ensures user_progress foreign keys and dynamic multi-account progress retrieval always succeed.

-- 1. Allow authenticated users to insert their own profile row if missing
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  TO authenticated
  WITH CHECK (id = auth.uid());

-- 2. Allow anon / demo client to view, insert, and update profiles
DROP POLICY IF EXISTS "Anon can view profiles" ON public.profiles;
CREATE POLICY "Anon can view profiles"
  ON public.profiles FOR SELECT
  TO anon
  USING (true);

DROP POLICY IF EXISTS "Anon can insert demo profiles" ON public.profiles;
CREATE POLICY "Anon can insert demo profiles"
  ON public.profiles FOR INSERT
  TO anon
  WITH CHECK (id IS NOT NULL);

DROP POLICY IF EXISTS "Anon can update profiles" ON public.profiles;
CREATE POLICY "Anon can update profiles"
  ON public.profiles FOR UPDATE
  TO anon
  USING (id IS NOT NULL);

-- 3. Ensure the demo user profile exists with full integrity
INSERT INTO public.profiles (id, email, full_name, role, xp_points, current_streak)
VALUES (
  '91edaaa0-448e-4f37-8f67-cad93737eeb7',
  'student@demo.local',
  'Demo Student',
  'student',
  0,
  0
)
ON CONFLICT (id) DO NOTHING;

-- 4. Backfill any auth.users that are missing rows in public.profiles
INSERT INTO public.profiles (id, email, full_name, role)
SELECT 
  id, 
  email, 
  COALESCE(raw_user_meta_data->>'full_name', raw_user_meta_data->>'name', split_part(email, '@', 1), 'Student'),
  COALESCE(raw_user_meta_data->>'role', 'student')
FROM auth.users
ON CONFLICT (id) DO NOTHING;
