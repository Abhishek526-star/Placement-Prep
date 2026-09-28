-- supabase/migrations/002_rls_policies.sql
-- Row Level Security (RLS) Policies for Multi-Company Placement Platform

-- Helper functions to check user roles safely
CREATE OR REPLACE FUNCTION public.current_user_role()
RETURNS TEXT AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER STABLE;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role IN ('admin', 'super_admin')
  );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- ── ENABLE RLS ON ALL TABLES ─────────────────────────────────────
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_evaluation_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mistakes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- ── 1. COMPANIES ──────────────────────────────────────────────────
CREATE POLICY "Public and users can read active companies"
  ON public.companies FOR SELECT
  USING (is_active = true OR public.is_admin());

CREATE POLICY "Admins can manage companies"
  ON public.companies FOR ALL
  USING (public.is_admin());

-- ── 2. PROFILES ───────────────────────────────────────────────────
CREATE POLICY "Users can view all basic profiles"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (id = auth.uid())
  WITH CHECK (id = auth.uid());

CREATE POLICY "Admins can manage profiles"
  ON public.profiles FOR ALL
  USING (public.is_admin());

-- ── 3. COMPANY_MEMBERSHIPS ────────────────────────────────────────
CREATE POLICY "Users can view own company memberships"
  ON public.company_memberships FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "Admins can manage memberships"
  ON public.company_memberships FOR ALL
  USING (public.is_admin());

-- ── 4. COMPANY_TRACKS ─────────────────────────────────────────────
CREATE POLICY "Users can view published tracks"
  ON public.company_tracks FOR SELECT
  TO authenticated
  USING (is_published = true OR public.is_admin());

CREATE POLICY "Admins can manage tracks"
  ON public.company_tracks FOR ALL
  USING (public.is_admin());

-- ── 5. QUESTIONS ──────────────────────────────────────────────────
CREATE POLICY "Students can view published questions"
  ON public.questions FOR SELECT
  TO authenticated
  USING (is_published = true OR public.is_admin());

CREATE POLICY "Admins and creators can manage questions"
  ON public.questions FOR ALL
  USING (public.is_admin() OR public.current_user_role() = 'content_creator');

-- ── 6. QUESTION_OPTIONS (MCQs) ───────────────────────────────────
CREATE POLICY "Users can view question options"
  ON public.question_options FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage question options"
  ON public.question_options FOR ALL
  USING (public.is_admin());

-- ── 7. QUESTION_EVALUATION_DATA (CRITICAL: ADMIN ONLY) ────────────
-- NON-NEGOTIABLE RULE: Students can NEVER select from this table.
CREATE POLICY "Admin only access to question evaluation data"
  ON public.question_evaluation_data FOR ALL
  USING (public.is_admin());

-- ── 8. QUESTION_TAGS ──────────────────────────────────────────────
CREATE POLICY "Users can view question tags"
  ON public.question_tags FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage tags"
  ON public.question_tags FOR ALL
  USING (public.is_admin());

-- ── 9. ASSESSMENTS ────────────────────────────────────────────────
CREATE POLICY "Users can view published assessments"
  ON public.assessments FOR SELECT
  TO authenticated
  USING (is_published = true OR public.is_admin());

CREATE POLICY "Admins can manage assessments"
  ON public.assessments FOR ALL
  USING (public.is_admin());

-- ── 10. ASSESSMENT_QUESTIONS ──────────────────────────────────────
CREATE POLICY "Users can view assessment questions"
  ON public.assessment_questions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage assessment questions"
  ON public.assessment_questions FOR ALL
  USING (public.is_admin());

-- ── 11. ASSESSMENT_ATTEMPTS ───────────────────────────────────────
CREATE POLICY "Students can view and manage own attempts"
  ON public.assessment_attempts FOR ALL
  TO authenticated
  USING (user_id = auth.uid() OR public.is_admin())
  WITH CHECK (user_id = auth.uid() OR public.is_admin());

-- ── 12. ASSESSMENT_ANSWERS ────────────────────────────────────────
CREATE POLICY "Students can view and submit own assessment answers"
  ON public.assessment_answers FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.assessment_attempts
      WHERE id = assessment_answers.attempt_id AND user_id = auth.uid()
    ) OR public.is_admin()
  );

-- ── 13. STUDY_MATERIALS ───────────────────────────────────────────
CREATE POLICY "Users can view published study materials"
  ON public.study_materials FOR SELECT
  TO authenticated
  USING (is_published = true OR public.is_admin());

CREATE POLICY "Admins can manage study materials"
  ON public.study_materials FOR ALL
  USING (public.is_admin());

-- ── 14. USER_PROGRESS ─────────────────────────────────────────────
CREATE POLICY "Users can view and update own progress"
  ON public.user_progress FOR ALL
  TO authenticated
  USING (user_id = auth.uid() OR public.is_admin())
  WITH CHECK (user_id = auth.uid() OR public.is_admin());

-- ── 15. USER_SUBMISSIONS ──────────────────────────────────────────
CREATE POLICY "Users can view and create own submissions"
  ON public.user_submissions FOR ALL
  TO authenticated
  USING (user_id = auth.uid() OR public.is_admin())
  WITH CHECK (user_id = auth.uid() OR public.is_admin());

-- ── 16. BOOKMARKS ─────────────────────────────────────────────────
CREATE POLICY "Users can manage own bookmarks"
  ON public.bookmarks FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- ── 17. MISTAKES ──────────────────────────────────────────────────
CREATE POLICY "Users can manage own mistakes"
  ON public.mistakes FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- ── 18. ACHIEVEMENTS & USER_ACHIEVEMENTS ──────────────────────────
CREATE POLICY "Users can view achievements"
  ON public.achievements FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can view own achievements"
  ON public.user_achievements FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR public.is_admin());

-- ── 19. DAILY_CHALLENGES ──────────────────────────────────────────
CREATE POLICY "Users can view daily challenges"
  ON public.daily_challenges FOR SELECT
  TO authenticated
  USING (true);

-- ── 20. AUDIT_LOGS ────────────────────────────────────────────────
CREATE POLICY "Admins only audit logs"
  ON public.audit_logs FOR ALL
  USING (public.is_admin());
