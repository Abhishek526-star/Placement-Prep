-- supabase/migrations/011_seed_accenture_technical_mcq.sql
-- Seeds questions for Accenture Technical MCQ covering all 5 sub-sections:
-- 1. CS Fundamental
-- 2. Computer Network
-- 3. MS Office
-- 4. Network Security & Cloud
-- 5. Pseudo Code

DO $$
DECLARE
  v_company_id UUID;
  v_track_id UUID;
  v_q_id UUID;
BEGIN
  -- 1. Resolve Accenture company ID
  SELECT id INTO v_company_id FROM public.companies WHERE slug = 'accenture' LIMIT 1;
  IF v_company_id IS NULL THEN
    RETURN;
  END IF;

  -- 2. Ensure Technical track exists
  INSERT INTO public.company_tracks (company_id, slug, name, description, track_order)
  VALUES (v_company_id, 'technical', 'Technical Assessment', 'CS Fundamentals, Computer Networks, MS Office, Cloud, and Pseudocode', 2)
  ON CONFLICT (company_id, slug) DO UPDATE SET name = EXCLUDED.name
  RETURNING id INTO v_track_id;

  IF v_track_id IS NULL THEN
    SELECT id INTO v_track_id FROM public.company_tracks WHERE company_id = v_company_id AND slug = 'technical' LIMIT 1;
  END IF;

  -- ── Question 1: CS Fundamental ──
  INSERT INTO public.questions (company_id, track_id, title, slug, question_type, difficulty, prompt_markdown, points, is_published, explanation_markdown)
  VALUES (
    v_company_id, v_track_id,
    'Process Synchronization & Deadlock',
    'acc-cs-deadlock-conditions',
    'mcq', 'medium',
    'Which of the following conditions is NOT a necessary condition for a deadlock to occur in a multi-threaded operating system?',
    10, true,
    'The 4 Coffman conditions required for deadlock are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Preemption of resources prevents deadlocks.'
  )
  ON CONFLICT (company_id, slug) DO UPDATE SET title = EXCLUDED.title
  RETURNING id INTO v_q_id;

  IF v_q_id IS NOT NULL THEN
    INSERT INTO public.question_options (question_id, option_key, option_text, display_order)
    VALUES
      (v_q_id, 'A', 'Mutual Exclusion', 1),
      (v_q_id, 'B', 'Hold and Wait', 2),
      (v_q_id, 'C', 'Preemption of resources by kernel scheduler', 3),
      (v_q_id, 'D', 'Circular Wait', 4)
    ON CONFLICT (question_id, option_key) DO UPDATE SET option_text = EXCLUDED.option_text;

    INSERT INTO public.question_evaluation_data (question_id, correct_option_key)
    VALUES (v_q_id, 'C')
    ON CONFLICT (question_id) DO UPDATE SET correct_option_key = 'C';

    INSERT INTO public.question_tags (question_id, tag)
    VALUES (v_q_id, 'cs-fundamentals'), (v_q_id, 'operating-systems')
    ON CONFLICT (question_id, tag) DO NOTHING;
  END IF;

  -- ── Question 2: Computer Network ──
  INSERT INTO public.questions (company_id, track_id, title, slug, question_type, difficulty, prompt_markdown, points, is_published, explanation_markdown)
  VALUES (
    v_company_id, v_track_id,
    'TCP 3-Way Handshake Flags',
    'acc-cn-tcp-handshake-sequence',
    'mcq', 'medium',
    'What is the correct sequence of control flags exchanged during the TCP 3-Way Handshake connection establishment?',
    10, true,
    '1. Client sends SYN. 2. Server responds with SYN-ACK. 3. Client acknowledges with ACK.'
  )
  ON CONFLICT (company_id, slug) DO UPDATE SET title = EXCLUDED.title
  RETURNING id INTO v_q_id;

  IF v_q_id IS NOT NULL THEN
    INSERT INTO public.question_options (question_id, option_key, option_text, display_order)
    VALUES
      (v_q_id, 'A', 'ACK -> SYN -> SYN-ACK', 1),
      (v_q_id, 'B', 'SYN -> SYN-ACK -> ACK', 2),
      (v_q_id, 'C', 'SYN -> ACK -> FIN', 3),
      (v_q_id, 'D', 'RST -> SYN -> ACK', 4)
    ON CONFLICT (question_id, option_key) DO UPDATE SET option_text = EXCLUDED.option_text;

    INSERT INTO public.question_evaluation_data (question_id, correct_option_key)
    VALUES (v_q_id, 'B')
    ON CONFLICT (question_id) DO UPDATE SET correct_option_key = 'B';

    INSERT INTO public.question_tags (question_id, tag)
    VALUES (v_q_id, 'computer-network'), (v_q_id, 'tcp-ip')
    ON CONFLICT (question_id, tag) DO NOTHING;
  END IF;

  -- ── Question 3: MS Office ──
  INSERT INTO public.questions (company_id, track_id, title, slug, question_type, difficulty, prompt_markdown, points, is_published, explanation_markdown)
  VALUES (
    v_company_id, v_track_id,
    'Excel Absolute Cell Referencing',
    'acc-mso-excel-absolute-ref',
    'mcq', 'medium',
    'In Microsoft Excel, what happens when you copy a formula containing the cell reference $B$4 to another cell?',
    10, true,
    'The dollar sign locks both the column and row coordinate, preventing relative shifting.'
  )
  ON CONFLICT (company_id, slug) DO UPDATE SET title = EXCLUDED.title
  RETURNING id INTO v_q_id;

  IF v_q_id IS NOT NULL THEN
    INSERT INTO public.question_options (question_id, option_key, option_text, display_order)
    VALUES
      (v_q_id, 'A', 'Both column B and row 4 remain unchanged (absolute reference).', 1),
      (v_q_id, 'B', 'Column B remains fixed, but row 4 shifts relatively.', 2),
      (v_q_id, 'C', 'Row 4 remains fixed, but column B shifts relatively.', 3),
      (v_q_id, 'D', 'The reference generates a #REF! circular reference error.', 4)
    ON CONFLICT (question_id, option_key) DO UPDATE SET option_text = EXCLUDED.option_text;

    INSERT INTO public.question_evaluation_data (question_id, correct_option_key)
    VALUES (v_q_id, 'A')
    ON CONFLICT (question_id) DO UPDATE SET correct_option_key = 'A';

    INSERT INTO public.question_tags (question_id, tag)
    VALUES (v_q_id, 'ms-office'), (v_q_id, 'excel')
    ON CONFLICT (question_id, tag) DO NOTHING;
  END IF;

  -- ── Question 4: Network Security & Cloud ──
  INSERT INTO public.questions (company_id, track_id, title, slug, question_type, difficulty, prompt_markdown, points, is_published, explanation_markdown)
  VALUES (
    v_company_id, v_track_id,
    'Cloud Service Models (IaaS, PaaS, SaaS)',
    'acc-nsc-cloud-service-models',
    'mcq', 'easy',
    'In which cloud service delivery model does the cloud provider manage everything up through the runtime and middleware, leaving the customer responsible only for their application code and data?',
    10, true,
    'Platform as a Service (PaaS) manages the underlying infrastructure, operating system, and runtime, allowing developers to deploy code without server maintenance.'
  )
  ON CONFLICT (company_id, slug) DO UPDATE SET title = EXCLUDED.title
  RETURNING id INTO v_q_id;

  IF v_q_id IS NOT NULL THEN
    INSERT INTO public.question_options (question_id, option_key, option_text, display_order)
    VALUES
      (v_q_id, 'A', 'Infrastructure as a Service (IaaS)', 1),
      (v_q_id, 'B', 'Platform as a Service (PaaS)', 2),
      (v_q_id, 'C', 'Software as a Service (SaaS)', 3),
      (v_q_id, 'D', 'Function as a Service (FaaS)', 4)
    ON CONFLICT (question_id, option_key) DO UPDATE SET option_text = EXCLUDED.option_text;

    INSERT INTO public.question_evaluation_data (question_id, correct_option_key)
    VALUES (v_q_id, 'B')
    ON CONFLICT (question_id) DO UPDATE SET correct_option_key = 'B';

    INSERT INTO public.question_tags (question_id, tag)
    VALUES (v_q_id, 'network-security-cloud'), (v_q_id, 'cloud')
    ON CONFLICT (question_id, tag) DO NOTHING;
  END IF;

  -- ── Question 5: Pseudo Code ──
  INSERT INTO public.questions (company_id, track_id, title, slug, question_type, difficulty, prompt_markdown, points, is_published, explanation_markdown)
  VALUES (
    v_company_id, v_track_id,
    'Bitwise XOR & Shift Logic Tracing',
    'acc-ps-bitwise-xor-shift',
    'mcq', 'medium',
    'What is the final printed output of the following pseudocode?\n\nInteger a, b, c\nSet a = 4, b = 6, c = 2\na = (a ^ b) + c\nb = (b >> 1) + a\nPrint a + b',
    10, true,
    'a = (4 ^ 6) + 2 = 2 + 2 = 4. b = (6 >> 1) + 4 = 3 + 4 = 7. a + b = 4 + 7 = 11.'
  )
  ON CONFLICT (company_id, slug) DO UPDATE SET title = EXCLUDED.title
  RETURNING id INTO v_q_id;

  IF v_q_id IS NOT NULL THEN
    INSERT INTO public.question_options (question_id, option_key, option_text, display_order)
    VALUES
      (v_q_id, 'A', '11', 1),
      (v_q_id, 'B', '15', 2),
      (v_q_id, 'C', '12', 3),
      (v_q_id, 'D', '9', 4)
    ON CONFLICT (question_id, option_key) DO UPDATE SET option_text = EXCLUDED.option_text;

    INSERT INTO public.question_evaluation_data (question_id, correct_option_key)
    VALUES (v_q_id, 'A')
    ON CONFLICT (question_id) DO UPDATE SET correct_option_key = 'A';

    INSERT INTO public.question_tags (question_id, tag)
    VALUES (v_q_id, 'pseudo-code'), (v_q_id, 'bitwise')
    ON CONFLICT (question_id, tag) DO NOTHING;
  END IF;

END $$;
