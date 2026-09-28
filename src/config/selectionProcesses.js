// src/config/selectionProcesses.js
// Authentic, company-specific selection processes, stages, cutoffs, and CTC bands

import {
  FileCheck, Layers, CheckSquare, FileCode, Brain,
  Headphones, Users, Trophy, Code2, Database,
  FileText, Award, ShieldAlert, Cpu, Sparkles
} from 'lucide-react'

export const SELECTION_DATA_BY_COMPANY = {
  // ──────────────────────────────────────────────────────────────────
  // 1. ACCENTURE
  // ──────────────────────────────────────────────────────────────────
  accenture: {
    name: 'Accenture',
    updatedDate: '2026–2027 Placement Season',
    ruleBadge: 'ALL ROUNDS ARE ELIMINATION',
    ruleTitle: 'STRICT ELIMINATION RULE — STEP-BY-STEP PROGRESSION',
    ruleDescription: 'Accenture enforces strict elimination gates at EVERY stage: You advance to the next round ONLY upon clearing the cutoff of the previous round. Failing any stage leads to immediate exit from the drive.',
    topOffer: '11 LPA (AASE)',
    accentColor: '#A100FF',
    stages: [
      {
        id: 'shortlisting',
        stepNumber: '0',
        badge: 'Stage 0',
        title: 'Shortlisting & Eligibility Screening',
        subtitle: 'Academic cutoff verification (65% / 6.5 CGPA) & zero backlogs audit.',
        status: 'Elimination Round',
        statusColor: '#ef4444',
        icon: FileCheck,
        iconColor: '#6366f1',
        iconBg: 'rgba(99, 102, 241, 0.1)',
        summary: 'All applicants must meet the baseline academic criteria. Resumes are screened for minimum percentage, graduation year, degree branch, and lack of active backlogs.',
        details: [
          'Minimum 65% or 6.5 CGPA in B.E / B.Tech / MCA / M.Tech with no rounding off.',
          'Zero active backlogs at the time of appearing for the recruitment process.',
          'Maximum 1 year educational gap between graduation and schooling.',
          'Candidate must not have appeared in any Accenture test within the last 3 months.'
        ]
      },
      {
        id: 'same-day',
        stepNumber: '1, 2 & 3',
        badge: 'Same Day Window',
        isSameDayContainer: true,
        title: 'SAME DAY SUPER-ASSESSMENT',
        subtitle: 'Conducted consecutively: Round 1 (MCQ) ➔ Round 2 (Coding) ➔ Round 3 (Games)',
        status: 'Strict Elimination',
        statusColor: '#ef4444',
        icon: Layers,
        iconColor: '#2563eb',
        iconBg: 'rgba(37, 99, 235, 0.1)',
        summary: 'The primary gatekeeper session. You take Round 1 (Technical MCQ), immediately followed by Round 2 (Coding covering DSA, Web-based, and SQL Query), concluded with Round 3 (Gamified Assessment).',
        subRounds: [
          {
            roundNumber: 'Round 1',
            title: 'Technical MCQ',
            desc: '60 Questions • 60 Minutes • Sectional Cutoff Mandatory',
            icon: CheckSquare,
            iconColor: '#059669',
            iconBg: 'rgba(5, 150, 105, 0.1)',
            modules: [
              'Pseudocode & Algorithmic Tracing (Bitwise operators, loops, recursion)',
              'Common Applications & MS Office (Excel formulas, Outlook, PowerPoint)',
              'Networking, Cloud Fundamentals & Security'
            ],
            keyNote: 'Elimination Round: Must score above sectional cutoff to unlock Round 2 Coding.',
            link: 'technical-mcq',
            linkText: 'Practice Technical MCQs'
          },
          {
            roundNumber: 'Round 2',
            title: 'Coding (DSA • Web-based • SQL Query)',
            desc: '2-3 Problems • 45 Minutes • Elimination Round',
            icon: FileCode,
            iconColor: '#2563eb',
            iconBg: 'rgba(37, 99, 235, 0.1)',
            modules: [
              'DSA Coding: Arrays, Strings, Hash Maps, Two-Pointers, and Dynamic Programming',
              'Web-based Frontend: Practical HTML/CSS/JavaScript DOM challenges',
              'SQL Query: Writing queries with JOINs, Aggregates, and Group By clauses'
            ],
            keyNote: 'Elimination Round: Solving all questions unlocks AASE (₹6.5-11 LPA). Solving 1 qualifies for ASE (₹4.5 LPA).',
            link: 'dsa',
            linkText: 'Practice Coding'
          },
          {
            roundNumber: 'Round 3',
            title: 'Gamified Cognitive Assessment',
            desc: '3 Mini-Games • ~20 Minutes • Elimination Round (NO Apti MCQs)',
            icon: Brain,
            iconColor: '#8b5cf6',
            iconBg: 'rgba(139, 92, 246, 0.1)',
            modules: [
              'Quick Bubble Math: Mental calculation & speed target sums (40s)',
              'Memory Maze: Spatial path recall across 4x4 and 5x5 grids',
              'Switch Challenge: 4-symbol sequence deduction & operator identification'
            ],
            keyNote: 'Elimination Round: 100% gamified tests. Must meet benchmark score across all 3 games to unlock Round 4 Communication.',
            link: 'cognitive',
            linkText: 'Play Cognitive Games'
          }
        ]
      },
      {
        id: 'round-4',
        stepNumber: '4',
        badge: 'Stage 4',
        title: 'Round 4 → Communication Assessment',
        subtitle: 'Automated AI / Versant Test • ~30 Minutes • Elimination Round',
        status: 'Elimination Round',
        statusColor: '#ef4444',
        icon: Headphones,
        iconColor: '#f59e0b',
        iconBg: 'rgba(245, 158, 11, 0.1)',
        summary: 'Conducted via an AI-automated verbal testing platform. Evaluates English pronunciation, sentence fluency, listening comprehension, and grammar through voice recording.',
        details: [
          'Section A: Reading sentences displayed on screen out loud.',
          'Section B: Listening to sentences and repeating them verbatim.',
          'Section C: Rapid single-word or short-phrase comprehension answers.',
          'Section D: Sentence rearrangement (unscrambling spoken audio fragments).',
          'Section E: Listening to short stories and retelling them in your own words.',
          'Section F: 1-minute impromptu speaking on a situational topic.'
        ],
        link: 'interview',
        linkText: 'Explore Communication Prep'
      },
      {
        id: 'final-round',
        stepNumber: '5',
        badge: 'Final Round',
        title: 'Final Round → Technical + HR Interview',
        subtitle: 'Virtual Interview Panel • 25–40 Minutes • Final Elimination',
        status: 'Elimination Round',
        statusColor: '#ef4444',
        icon: Users,
        iconColor: '#ec4899',
        iconBg: 'rgba(236, 72, 153, 0.1)',
        summary: 'A unified panel interview combining in-depth project discussion, core CS subjects (OOPs, DBMS, OS), and behavioral alignment using the STAR framework.',
        details: [
          'Detailed walkthrough of resume projects, architecture, and technology decisions.',
          'Core Computer Science concepts: Object Oriented Programming, SQL queries, OS fundamentals.',
          'Behavioral & situational questions evaluated via STAR methodology (Situation, Task, Action, Result).',
          'Company fitment, adaptability, and willingness to work across modern tech domains.'
        ],
        link: 'interview',
        linkText: 'Practice Interview Questions'
      },
      {
        id: 'selection',
        stepNumber: '6',
        badge: 'Outcome',
        title: 'Final Selection & Role Offer',
        subtitle: 'Offer Letter Rollout based on Cumulative Scoring',
        status: 'Offer Rollout',
        statusColor: '#10b981',
        icon: Trophy,
        iconColor: '#10b981',
        iconBg: 'rgba(16, 185, 129, 0.1)',
        summary: 'Candidates who clear the interview receive formal offer letters based on their coding and super-assessment performance tier.',
        roles: [
          {
            title: 'Associate Software Engineer (ASE)',
            ctc: '₹4.50 LPA - ₹4.60 LPA',
            benchmark: 'Cleared All Elimination Rounds + 1 Coding Problem + Satisfactory Interview'
          },
          {
            title: 'Advanced Associate Software Engineer (AASE / FSE)',
            ctc: '₹6.50 LPA - ₹11.00 LPA',
            benchmark: 'High Percentile Across Rounds + Solved All Coding Problems + Outstanding Interview'
          }
        ]
      }
    ],
    rolesComparison: [
      {
        role: 'Associate Software Engineer (ASE)',
        ctc: '₹4.50 LPA – ₹4.60 LPA',
        benchmark: 'Round 1 Cutoff + 1 Coding Question',
        responsibilities: 'Full stack development, cloud infrastructure maintenance, software testing & deployment.'
      },
      {
        role: 'Advanced Associate Software Engineer (AASE / FSE)',
        ctc: '₹6.50 LPA – ₹11.00 LPA',
        benchmark: 'Top Percentile Round 1 + All Coding Questions Solved',
        responsibilities: 'High-scale architecture, generative AI systems, modern cloud transformation & solution engineering.'
      }
    ],
    quickLinks: [
      { title: 'Round 1: Technical MCQ', path: 'technical-mcq', icon: CheckSquare, color: '#059669' },
      { title: 'Round 2: Coding (DSA + Web + SQL)', path: 'dsa', icon: FileCode, color: '#2563eb' },
      { title: 'Round 3: Cognitive Games', path: 'cognitive', icon: Brain, color: '#8b5cf6' },
      { title: 'Round 4 & 5: Interview Prep', path: 'interview', icon: Users, color: '#ec4899' },
    ]
  },

  // ──────────────────────────────────────────────────────────────────
  // 2. TCS (TATA CONSULTANCY SERVICES — TCS NQT)
  // ──────────────────────────────────────────────────────────────────
  tcs: {
    name: 'Tata Consultancy Services',
    updatedDate: '2026–2027 TCS NQT National Qualifier',
    ruleBadge: 'FOUNDATION + ADVANCED CUTOFF',
    ruleTitle: 'MULTI-TIER ASSESSMENT — NINJA, DIGITAL & PRIME PATHWAYS',
    ruleDescription: 'TCS conducts a single unified National Qualifier Test (NQT) split into Foundation (Mandatory for Ninja ₹3.6 LPA) and Advanced (Unlocks Digital ₹7.5 LPA & Prime ₹11.5 LPA). High coding scores elevate your hiring tier.',
    topOffer: '11.5 LPA (Prime)',
    accentColor: '#0052CC',
    stages: [
      {
        id: 'tcs-nqt-exam',
        stepNumber: '1',
        badge: 'Round 1',
        isSameDayContainer: true,
        title: 'TCS NQT NATIONAL QUALIFIER TEST',
        subtitle: '165–180 Minutes Online Proctored Exam (Part A: Foundation + Part B: Advanced)',
        status: 'National Benchmark',
        statusColor: '#0052CC',
        icon: Layers,
        iconColor: '#0052CC',
        iconBg: 'rgba(0, 82, 204, 0.1)',
        summary: 'All candidates take the Foundation Section. Candidates aiming for Digital (₹7.5 LPA) or Prime (₹11.5 LPA) roles must excel in the Advanced Section and solve the advanced coding challenges.',
        subRounds: [
          {
            roundNumber: 'Part A',
            title: 'Foundation Section (Mandatory for Ninja: ₹3.36–3.6 LPA)',
            desc: '65 Questions • 75 Minutes • Sectional Cutoffs Apply',
            icon: CheckSquare,
            iconColor: '#0052CC',
            iconBg: 'rgba(0, 82, 204, 0.1)',
            modules: [
              'Numerical Ability: Arithmetic, Number Systems, Data Interpretation, Percentages (20 Qs, 25 mins)',
              'Verbal Ability: Reading Comprehension, Sentence Completion, Error Spotting (25 Qs, 25 mins)',
              'Reasoning Ability: Syllogisms, Blood Relations, Data Sufficiency, Series (20 Qs, 25 mins)'
            ],
            keyNote: 'Clearing Foundation cutoffs qualifies you for the TCS Ninja Interview.',
            link: 'assessments?track=nqt-foundation',
            linkText: 'Practice NQT Foundation'
          },
          {
            roundNumber: 'Part B',
            title: 'Advanced Section (Mandatory for Digital ₹7.5 LPA & Prime ₹11.5 LPA)',
            desc: '15 Qs + 2 Coding Problems • 115 Minutes Total',
            icon: Code2,
            iconColor: '#6366f1',
            iconBg: 'rgba(99, 102, 241, 0.1)',
            modules: [
              'Advanced Quantitative & Reasoning Ability: P&C, Probability, Matrix Logic (15 Qs, 25 mins)',
              'Advanced Coding Challenge 1: Medium difficulty array / string / hash map algorithm (45 mins)',
              'Advanced Coding Challenge 2: Hard difficulty DP, graph traversal, or tree problem (45 mins)'
            ],
            keyNote: 'High performance in Part B unlocks direct interviews for Digital and Prime bands.',
            link: 'dsa',
            linkText: 'Practice Advanced Coding'
          }
        ]
      },
      {
        id: 'tcs-interview-tech',
        stepNumber: '2',
        badge: 'Round 2',
        title: 'Technical Interview (Virtual or In-Person)',
        subtitle: 'Panel evaluation • 30–45 Minutes • Coding & Core CS Deep-Dive',
        status: 'Elimination Round',
        statusColor: '#ef4444',
        icon: Users,
        iconColor: '#059669',
        iconBg: 'rgba(5, 150, 105, 0.1)',
        summary: 'Interviews are aligned to your NQT qualifying band (Ninja / Digital / Prime). Expect live code tracing, resume project architecture defense, and core CS fundamentals.',
        details: [
          'Detailed explanation of the code written during the TCS NQT test.',
          'Core Computer Science subjects: DBMS (SQL joins, ACID, Normalization), OOPs, OS, and Computer Networks.',
          'Data Structures & Algorithms: Dry-running sorting algorithms, binary search, tree traversals.',
          'Digital & Prime candidates are evaluated on System Design fundamentals and modern cloud/AI stacks.'
        ],
        link: 'interview',
        linkText: 'TCS Interview Questions'
      },
      {
        id: 'tcs-interview-mr-hr',
        stepNumber: '3',
        badge: 'Round 3',
        title: 'Managerial & HR Interview',
        subtitle: 'Leadership fitment, company values & operational flexibility • 20 Minutes',
        status: 'Final Confirmation',
        statusColor: '#f59e0b',
        icon: Award,
        iconColor: '#f59e0b',
        iconBg: 'rgba(245, 158, 11, 0.1)',
        summary: 'Validates candidate behavioral adaptability, cultural alignment with Tata code of conduct, shift timings, and location preferences.',
        details: [
          'Situational questions: Handling project deadlines, team conflict, and ambiguous requirements.',
          'Willingness to work across shifts and relocate to any TCS operational campus across India.',
          'Understanding of Tata Group history, core values, and current technology innovations.'
        ],
        link: 'interview',
        linkText: 'HR Question Bank'
      },
      {
        id: 'tcs-selection',
        stepNumber: '4',
        badge: 'Outcome',
        title: 'Final Selection & Cadre Offer',
        subtitle: 'Formal Offer Letter Rollout across 3 distinct compensation cadres',
        status: 'Cadre Rollout',
        statusColor: '#10b981',
        icon: Trophy,
        iconColor: '#10b981',
        iconBg: 'rgba(16, 185, 129, 0.1)',
        summary: 'Candidates receive an offer matching their performance across the NQT Advanced test and Technical interview.',
        roles: [
          {
            title: 'TCS Ninja',
            ctc: '₹3.36 LPA - ₹3.60 LPA',
            benchmark: 'Cleared Foundation Section + 1 Basic Coding Problem + Cleared Technical/HR'
          },
          {
            title: 'TCS Digital',
            ctc: '₹7.00 LPA - ₹7.50 LPA',
            benchmark: 'Top Performance in Advanced Quant + 1-2 Advanced Coding Problems + Strong Interview'
          },
          {
            title: 'TCS Prime',
            ctc: '₹9.00 LPA - ₹11.50 LPA',
            benchmark: 'Exceptional in Advanced Section + Both Hard Coding Problems Solved + Outstanding Tech Panel'
          }
        ]
      }
    ],
    rolesComparison: [
      {
        role: 'TCS Ninja',
        ctc: '₹3.36 LPA – ₹3.60 LPA',
        benchmark: 'NQT Foundation Cutoff + 1 Coding Problem',
        responsibilities: 'Application support, software testing, client operations, agile project delivery.'
      },
      {
        role: 'TCS Digital',
        ctc: '₹7.00 LPA – ₹7.50 LPA',
        benchmark: 'Advanced Quant Cutoff + 1 Advanced Coding Problem',
        responsibilities: 'Full-stack engineering, cloud microservices, analytics pipelines, enterprise solution development.'
      },
      {
        role: 'TCS Prime',
        ctc: '₹9.00 LPA – ₹11.50 LPA',
        benchmark: 'Top 5% in Advanced Section + Both Hard Problems Solved',
        responsibilities: 'Core R&D, advanced machine learning, distributed systems, high-frequency enterprise architecture.'
      }
    ],
    quickLinks: [
      { title: 'NQT Foundation Test', path: 'assessments?track=nqt-foundation', icon: CheckSquare, color: '#0052CC' },
      { title: 'Advanced Quant & Logic', path: 'assessments?track=nqt-advanced', icon: Brain, color: '#6366f1' },
      { title: 'Digital & Prime Coding', path: 'dsa', icon: FileCode, color: '#059669' },
      { title: 'TCS SQL & Querying', path: 'sql', icon: Database, color: '#0ea5e9' },
    ]
  },

  // ──────────────────────────────────────────────────────────────────
  // 3. INFOSYS (INFOSYS INFI-TQ / CAMPUS / HACKWITHINFY)
  // ──────────────────────────────────────────────────────────────────
  infosys: {
    name: 'Infosys',
    updatedDate: '2026–2027 Campus & Specialist Hiring',
    ruleBadge: 'HIGH CUTOFF • NO NEGATIVE MARKING',
    ruleTitle: 'STRICT SECTIONAL CUTOFFS — HIGH LOGIC & PUZZLE BENCHMARK',
    ruleDescription: 'Infosys assessments feature NO negative marking, but require high individual sectional cutoffs (typically 70%+ per section). Signature sections include high-difficulty Mathematical Reasoning and Cryptarithmetic Puzzles.',
    topOffer: '11 LPA (Specialist Programmer)',
    accentColor: '#007CC3',
    stages: [
      {
        id: 'inf-online-test',
        stepNumber: '1',
        badge: 'Round 1',
        title: 'Infosys Comprehensive Online Assessment',
        subtitle: '100 Minutes • 54 Questions • Strict Sectional Timing & Cutoffs',
        status: 'Elimination Round',
        statusColor: '#ef4444',
        icon: CheckSquare,
        iconColor: '#007CC3',
        iconBg: 'rgba(0, 124, 195, 0.1)',
        summary: 'Candidates must navigate 5 timed sections. You cannot navigate back to earlier sections once submitted. High performance across all 5 sections is required for interview shortlisting.',
        details: [
          'Section I: Mathematical Ability (10 Questions, 35 Minutes) — High difficulty Permutations & Combinations, Probability, Geometry, Mixtures.',
          'Section II: Reasoning Ability (15 Questions, 25 Minutes) — Cryptarithmetic letter-to-digit puzzles, Data Sufficiency, Coding-Decoding.',
          'Section III: Verbal Ability (20 Questions, 20 Minutes) — Reading Comprehension, Sentence Correction, Theme Detection.',
          'Section IV: Pseudocode & Algorithms (5 Questions, 10 Minutes) — Tracing loops, bitwise logic, recursive call stacks, time complexity.',
          'Section V: Puzzle Solving (4 Questions, 10 Minutes) — Spatial figure patterns, progression matrices, number deductions.'
        ],
        link: 'assessments?track=reasoning',
        linkText: 'Practice Online Assessment'
      },
      {
        id: 'inf-coding-sp',
        stepNumber: '2',
        badge: 'Round 2 (For DSE / SP)',
        title: 'Specialist Coding Assessment (HackWithInfy / SP Track)',
        subtitle: '3 Advanced DSA Coding Problems • 180 Minutes on HackerEarth Platform',
        status: 'Role Elevation',
        statusColor: '#8b5cf6',
        icon: Code2,
        iconColor: '#8b5cf6',
        iconBg: 'rgba(139, 92, 246, 0.1)',
        summary: 'High-scorers from Round 1 or HackWithInfy qualifiers are invited to the Specialist Programmer (SP - ₹9.5-11 LPA) and Digital Specialist Engineer (DSE - ₹6.5 LPA) coding challenge.',
        details: [
          'Problem 1 (Medium - 50 pts): Advanced Greedy / Dynamic Programming / Two-Pointers.',
          'Problem 2 (Hard - 75 pts): Graph algorithms (Dijkstra, BFS/DFS, Disjoint Set Union).',
          'Problem 3 (Expert - 100 pts): Segment Trees, Bitmask DP, or Complex String matching (KMP/Trie).',
          'Solving 1 problem qualifies for DSE interview; solving 2+ qualifies for Specialist Programmer interview.'
        ],
        link: 'dsa',
        linkText: 'Practice SP / DSE Problems'
      },
      {
        id: 'inf-tech-interview',
        stepNumber: '3',
        badge: 'Round 3',
        title: 'Technical Interview',
        subtitle: 'Panel Interview • 35–50 Minutes • Deep Algorithm & CS Fundamentals',
        status: 'Elimination Round',
        statusColor: '#ef4444',
        icon: Users,
        iconColor: '#059669',
        iconBg: 'rgba(5, 150, 105, 0.1)',
        summary: 'Focused on candidate problem-solving speed, clean code conventions, relational schema normalization, and resume project defense.',
        details: [
          'In-depth discussion of DSA choices: Space-time trade-offs, HashMap collisions, and Tree balancing.',
          'Database Design: 1NF to BCNF Normalization, writing complex subqueries and transactions.',
          'Object Oriented Design: SOLID principles, design patterns (Singleton, Factory), and code encapsulation.',
          'Project architecture review: System constraints, API designs, and scalability decisions.'
        ],
        link: 'interview',
        linkText: 'Infosys Tech Interview Bank'
      },
      {
        id: 'inf-hr-interview',
        stepNumber: '4',
        badge: 'Round 4',
        title: 'HR & Fitment Interview',
        subtitle: '15–20 Minutes • Cultural alignment & location preference confirmation',
        status: 'Final Confirmation',
        statusColor: '#10b981',
        icon: Award,
        iconColor: '#10b981',
        iconBg: 'rgba(16, 185, 129, 0.1)',
        summary: 'Verifies communication fluency, willingness to train at Infosys Mysore Global Education Centre, and willingness to work on enterprise client engagements.',
        details: [
          'Assessment of professional communication, confidence, and self-expression.',
          'Confirmation of flexibility regarding job location across Infosys Development Centres.',
          'Awareness of Infosys digital platforms (Infosys Topaz, Infosys Cobalt, Finacle).'
        ],
        link: 'interview',
        linkText: 'HR Fitment Questions'
      },
      {
        id: 'inf-selection',
        stepNumber: '5',
        badge: 'Outcome',
        title: 'Final Selection & Role Offer',
        subtitle: 'Formal Offer Letter Rollout for SE, DSE, or SP cadres',
        status: 'Offer Rollout',
        statusColor: '#10b981',
        icon: Trophy,
        iconColor: '#10b981',
        iconBg: 'rgba(16, 185, 129, 0.1)',
        summary: 'Candidates receive formal offer letters matching their performance in the online test and specialist coding challenge.',
        roles: [
          {
            title: 'Systems Engineer (SE)',
            ctc: '₹3.60 LPA',
            benchmark: 'Cleared Online Assessment Sectional Cutoffs + Satisfactory Technical Interview'
          },
          {
            title: 'Digital Specialist Engineer (DSE)',
            ctc: '₹6.25 LPA - ₹6.50 LPA',
            benchmark: 'High Online Test Score + Solved 1-2 Problems in SP Coding Round + Strong Tech Interview'
          },
          {
            title: 'Specialist Programmer (SP)',
            ctc: '₹9.50 LPA - ₹11.00 LPA',
            benchmark: 'Outstanding in SP Coding Round (2+ Problems) + Exceptional Algorithm Defense in Panel Interview'
          }
        ]
      }
    ],
    rolesComparison: [
      {
        role: 'Systems Engineer (SE)',
        ctc: '₹3.60 LPA',
        benchmark: 'Cleared Online Assessment + Tech Interview',
        responsibilities: 'Application support, software testing, client operations, agile project delivery.'
      },
      {
        role: 'Digital Specialist Engineer (DSE)',
        ctc: '₹6.25 LPA – ₹6.50 LPA',
        benchmark: 'High Online Score + Solved 1 Coding Challenge in SP Track',
        responsibilities: 'Full-stack engineering, cloud microservices, analytics pipelines, enterprise solution development.'
      },
      {
        role: 'Specialist Programmer (SP)',
        ctc: '₹9.50 LPA – ₹11.00 LPA',
        benchmark: 'Solved 2-3 Hard Problems in SP Coding Round + Expert Interview',
        responsibilities: 'Core R&D, advanced machine learning, distributed systems, high-frequency enterprise architecture.'
      }
    ],
    quickLinks: [
      { title: 'Reasoning & Aptitude', path: 'assessments?track=reasoning', icon: Brain, color: '#007CC3' },
      { title: 'Pseudocode & Logic', path: 'technical-mcq', icon: CheckSquare, color: '#059669' },
      { title: 'SP / DSE Coding (9.5 LPA)', path: 'dsa', icon: FileCode, color: '#8b5cf6' },
      { title: 'DBMS & SQL Practice', path: 'sql', icon: Database, color: '#0ea5e9' },
    ]
  },

  // ──────────────────────────────────────────────────────────────────
  // 4. WIPRO (ELITE NATIONAL TALENT HUNT — NLTH / TURBO / VELOCITY)
  // ──────────────────────────────────────────────────────────────────
  wipro: {
    name: 'Wipro',
    updatedDate: '2026–2027 Elite National Talent Hunt',
    ruleBadge: 'TRI-SECTION + ESSAY NLP EVALUATION',
    ruleTitle: 'ELITE NLTH 3-PART ASSESSMENT & ESSAY ENGINE',
    ruleDescription: 'Wipro Elite NLTH features a distinct 3-part online assessment: Aptitude + Written Communication (Automated AI Essay evaluation on grammar & structure) + Hands-on Coding. Scoring 80%+ unlocks the Turbo (₹6.5–8.5 LPA) upgrade challenge.',
    topOffer: '8.5 LPA (Turbo / Velocity)',
    accentColor: '#107C41',
    stages: [
      {
        id: 'wip-online-test',
        stepNumber: '1',
        badge: 'Round 1',
        title: 'Wipro Elite NLTH Online Assessment',
        subtitle: '128 Minutes Total • 3 Core Assessment Sections with Automated Essay Scoring',
        status: 'Elimination Round',
        statusColor: '#ef4444',
        icon: CheckSquare,
        iconColor: '#107C41',
        iconBg: 'rgba(16, 124, 65, 0.1)',
        summary: 'All applicants take the Elite NLTH proctored test. Each section has a dedicated time allocation. Passing both Aptitude, Essay Writing, and Coding is mandatory.',
        details: [
          'Part A: Aptitude Test (48 Questions, 48 Minutes) — Quantitative (16 Qs, 16m), Logical (14 Qs, 14m), and Verbal English (18 Qs, 18m).',
          'Part B: Written Communication Test (1 Topic, 20 Minutes) — Essay writing (200-400 words) evaluated by an automated NLP scoring engine for grammar, vocabulary, spelling, and coherence.',
          'Part C: Online Coding Test (2 Problems, 60 Minutes) — Hands-on algorithmic programming (1 Easy problem + 1 Medium problem). Supported: C, C++, Java, Python.'
        ],
        link: 'assessments?track=aptitude',
        linkText: 'Practice Elite Assessment'
      },
      {
        id: 'wip-turbo-challenge',
        stepNumber: '2 (Optional)',
        badge: 'Turbo Elevation',
        title: 'Wipro Turbo / Velocity Upgrade Challenge',
        subtitle: 'For candidates scoring 80%+ in Elite NLTH Coding • Elevates CTC to ₹6.5–8.5 LPA',
        status: 'CTC Upgrade',
        statusColor: '#d97706',
        icon: Sparkles,
        iconColor: '#d97706',
        iconBg: 'rgba(217, 119, 6, 0.1)',
        summary: 'Top scorers in the Elite coding round are offered an opportunity to attempt the Turbo Upgrade Test with higher difficulty DSA and cloud/DevOps challenges.',
        details: [
          'Advanced algorithmic coding challenges testing Trees, Graphs, and Dynamic Programming.',
          'Technical MCQs covering cloud computing, containerization, and modern software architectures.',
          'Candidates who clear this test receive the Turbo / Velocity offer package.'
        ],
        link: 'dsa',
        linkText: 'Practice Turbo DSA Problems'
      },
      {
        id: 'wip-tech-interview',
        stepNumber: '3',
        badge: 'Round 2',
        title: 'Technical Interview',
        subtitle: 'Virtual Interview Panel • 25–40 Minutes • Practical Code & CS Knowledge',
        status: 'Elimination Round',
        statusColor: '#ef4444',
        icon: Users,
        iconColor: '#059669',
        iconBg: 'rgba(5, 150, 105, 0.1)',
        summary: 'Verifies the candidate’s understanding of programming syntax, logic building, academic projects, and database management.',
        details: [
          'Writing and tracing code on an online shared editor in your chosen language (C++, Java, or Python).',
          'Core subjects: Object Oriented Programming (Inheritance, Polymorphism, Encapsulation), SQL queries, and DBMS keys.',
          'Walkthrough of academic projects: Modules implemented, database schema, and challenges resolved.'
        ],
        link: 'interview',
        linkText: 'Wipro Tech Questions'
      },
      {
        id: 'wip-hr-interview',
        stepNumber: '4',
        badge: 'Round 3',
        title: 'HR & Discussion Round',
        subtitle: '15 Minutes • Service agreement, shift flexibility & background check',
        status: 'Final Confirmation',
        statusColor: '#10b981',
        icon: Award,
        iconColor: '#10b981',
        iconBg: 'rgba(16, 185, 129, 0.1)',
        summary: 'Reviews the candidate profile, confirms acceptance of the standard service agreement, and discusses joining locations.',
        details: [
          'Verification of academic credentials, graduation status, and identity documentation.',
          'Agreement to 24/7 rotational shifts and project location assignments based on business demand.',
          'Behavioral alignment and willingness to learn new technology stacks during training.'
        ],
        link: 'interview',
        linkText: 'HR Discussion Bank'
      },
      {
        id: 'wip-selection',
        stepNumber: '5',
        badge: 'Outcome',
        title: 'Final Selection & Role Rollout',
        subtitle: 'Formal Offer Letter Delivery for Elite or Turbo bands',
        status: 'Offer Rollout',
        statusColor: '#10b981',
        icon: Trophy,
        iconColor: '#10b981',
        iconBg: 'rgba(16, 185, 129, 0.1)',
        summary: 'Successful candidates receive their formal Letter of Intent (LOI) followed by the training and onboarding roadmap.',
        roles: [
          {
            title: 'Wipro Elite Candidate',
            ctc: '₹3.50 LPA',
            benchmark: 'Cleared Elite NLTH (Aptitude + Essay + 1 Coding Problem) + Technical Interview'
          },
          {
            title: 'Wipro Turbo / Velocity Candidate',
            ctc: '₹6.50 LPA - ₹8.50 LPA',
            benchmark: 'Top Score in Elite Coding + Cleared Turbo Upgrade Challenge + Outstanding Technical Panel'
          }
        ]
      }
    ],
    rolesComparison: [
      {
        role: 'Wipro Elite Engineer',
        ctc: '₹3.50 LPA',
        benchmark: 'Elite NLTH Cutoff + 1 Coding Question',
        responsibilities: 'Enterprise application maintenance, QA automation testing, IT infrastructure services.'
      },
      {
        role: 'Wipro Turbo / Velocity Specialist',
        ctc: '₹6.50 LPA – ₹8.50 LPA',
        benchmark: 'Turbo Elevation Challenge + 2 Hard Coding Problems Solved',
        responsibilities: 'Modern cloud solutions, full-stack microservices, DevOps pipelines, AI/ML client implementations.'
      }
    ],
    quickLinks: [
      { title: 'Aptitude & Reasoning', path: 'assessments?track=aptitude', icon: CheckSquare, color: '#107C41' },
      { title: 'Elite NLTH Coding', path: 'dsa', icon: FileCode, color: '#2563eb' },
      { title: 'Essay & Written Comm', path: 'study-materials', icon: FileText, color: '#d97706' },
      { title: 'SQL & Database Queries', path: 'sql', icon: Database, color: '#0ea5e9' },
    ]
  }
}
