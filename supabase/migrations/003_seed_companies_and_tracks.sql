-- supabase/migrations/003_seed_companies_and_tracks.sql
-- Seeds default placement companies and syllabus tracks.
-- NOTE: In accordance with the Scaffold-First strategy, NO QUESTIONS or STUDY MATERIALS are seeded here.
-- Those will be populated company-by-company in Phase 5B after database connection is verified.

-- ── 1. INSERT COMPANIES ──────────────────────────────────────────
INSERT INTO public.companies (slug, name, short_name, tagline, description, branding)
VALUES
  (
    'accenture',
    'Accenture',
    'Accenture',
    'Technology & Management Consulting',
    'Prepare for Accenture placement exams, coding assessments, and technical interviews.',
    '{"primaryColor": "#A100FF", "primaryHover": "#7900C2", "logoText": "Accenture"}'::jsonb
  ),
  (
    'tcs',
    'Tata Consultancy Services',
    'TCS',
    'TCS NQT & Digital Hiring',
    'Target TCS NQT, Digital, and Prime profiles with tailored practice modules.',
    '{"primaryColor": "#0052CC", "primaryHover": "#0747A6", "logoText": "TCS"}'::jsonb
  ),
  (
    'infosys',
    'Infosys',
    'Infosys',
    'InfyTQ & DSE Specialist',
    'Master Infosys Specialist Programmer, DSE, and Systems Engineer assessments.',
    '{"primaryColor": "#007CC3", "primaryHover": "#00629B", "logoText": "Infosys"}'::jsonb
  ),
  (
    'wipro',
    'Wipro',
    'Wipro',
    'Elite National Talent Hunt',
    'Ace Wipro Elite NLTH and Turbo hiring assessments.',
    '{"primaryColor": "#107C41", "primaryHover": "#0E6B38", "logoText": "Wipro"}'::jsonb
  )
ON CONFLICT (slug) DO UPDATE
SET
  name = EXCLUDED.name,
  short_name = EXCLUDED.short_name,
  tagline = EXCLUDED.tagline,
  description = EXCLUDED.description,
  branding = EXCLUDED.branding;

-- ── 2. INSERT COMPANY TRACKS ─────────────────────────────────────
-- Accenture Tracks
WITH acc AS (SELECT id FROM public.companies WHERE slug = 'accenture')
INSERT INTO public.company_tracks (company_id, slug, name, description, track_order)
SELECT acc.id, t.slug, t.name, t.description, t.track_order
FROM acc, (VALUES
  ('cognitive', 'Cognitive & Critical Reasoning', 'Numerical reasoning, abstract reasoning, and English grammar.', 1),
  ('technical', 'Technical Assessment', 'Common applications, MS Office, pseudo-code, networking, and cloud basics.', 2),
  ('coding', 'Coding & Algorithms', 'C++, Java, and Python hands-on algorithmic problem solving.', 3),
  ('communication', 'Communication Assessment', 'Sentence reading, repetitions, and situational answers.', 4)
) AS t(slug, name, description, track_order)
ON CONFLICT (company_id, slug) DO NOTHING;

-- TCS Tracks
WITH tcs AS (SELECT id FROM public.companies WHERE slug = 'tcs')
INSERT INTO public.company_tracks (company_id, slug, name, description, track_order)
SELECT tcs.id, t.slug, t.name, t.description, t.track_order
FROM tcs, (VALUES
  ('nqt-foundation', 'NQT Foundation (Numerical & Reasoning)', 'Quantitative aptitude, logical reasoning, and verbal aptitude.', 1),
  ('nqt-advanced', 'Advanced Quantitative & Reasoning', 'Higher math, permutation, probability, and advanced logic.', 2),
  ('tcs-coding', 'Digital / Prime Coding', 'Two problem coding round for Digital and Prime bands.', 3)
) AS t(slug, name, description, track_order)
ON CONFLICT (company_id, slug) DO NOTHING;

-- Infosys Tracks
WITH inf AS (SELECT id FROM public.companies WHERE slug = 'infosys')
INSERT INTO public.company_tracks (company_id, slug, name, description, track_order)
SELECT inf.id, t.slug, t.name, t.description, t.track_order
FROM inf, (VALUES
  ('reasoning', 'Mathematical & Logical Ability', 'Data interpretation, arithmetic reasoning, and puzzles.', 1),
  ('pseudocode', 'Pseudocode & Algorithms', 'Dry-running code snippets and time complexity analysis.', 2),
  ('sp-coding', 'Specialist Programmer Coding', 'Dynamic programming, trees, and graph algorithms.', 3)
) AS t(slug, name, description, track_order)
ON CONFLICT (company_id, slug) DO NOTHING;

-- Wipro Tracks
WITH wip AS (SELECT id FROM public.companies WHERE slug = 'wipro')
INSERT INTO public.company_tracks (company_id, slug, name, description, track_order)
SELECT wip.id, t.slug, t.name, t.description, t.track_order
FROM wip, (VALUES
  ('aptitude', 'Quantitative & Logical Aptitude', 'Basic math, sequence series, and logical syllogisms.', 1),
  ('coding', 'Hands-on Coding Assessment', 'Fundamental array, string, and number algorithms.', 2),
  ('written-comm', 'Written Communication Test', 'Grammar, coherence, and professional business emails.', 3)
) AS t(slug, name, description, track_order)
ON CONFLICT (company_id, slug) DO NOTHING;

-- ── 3. INSERT DEFAULT ACHIEVEMENTS ──────────────────────────────
INSERT INTO public.achievements (code, title, description, icon, xp_reward)
VALUES
  ('first_login', 'Welcome Onboard', 'Logged into the platform for the first time.', '🎉', 50),
  ('streak_3', 'Consistency Starter', 'Maintained a 3-day practice streak.', '🔥', 100),
  ('streak_7', 'Week Warrior', 'Maintained a 7-day practice streak.', '⚡', 250),
  ('first_dsa', 'First Code Submission', 'Successfully ran your first code.', '💻', 50),
  ('first_test', 'Assessment Taker', 'Completed your first mock exam.', '🏆', 150)
ON CONFLICT (code) DO NOTHING;
