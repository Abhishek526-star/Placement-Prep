// src/config/syllabusData.js
// Authentic, company-specific syllabus breakdowns and checklist curriculums

export const SYLLABUS_BY_COMPANY = {
  // ──────────────────────────────────────────────────────────────────
  // 1. ACCENTURE
  // ──────────────────────────────────────────────────────────────────
  accenture: {
    companyName: 'Accenture',
    title: 'Accenture 2027 — Selection Process & Official Curriculum',
    subtitle: 'Comprehensive topic-by-topic curriculum and round sequence for Accenture campus placements. Mark topics as completed to track readiness.',
    badgeText: 'Batch 2027 Pattern',
    ruleBadge: 'ALL ROUNDS ARE ELIMINATION ROUNDS',
    ruleDesc: 'Accenture enforces strict progression gates: Clearing each round is mandatory to unlock the subsequent stage (Shortlisting ➔ Round 1 MCQ ➔ Round 2 Coding ➔ Round 3 Games ➔ Round 4 Communication ➔ Final Interview).',
    rounds: [
      {
        id: 'acc_r1',
        roundNumber: 'Round 1',
        title: 'Cognitive & Technical MCQ Assessment',
        timing: '60 Questions • 60 Minutes • Sectional Cutoffs Mandatory',
        badge: 'Strict Elimination',
        badgeVariant: 'danger',
        desc: 'Evaluates analytical thinking, algorithmic dry-running, office applications, and modern cloud fundamentals.',
        practiceLink: '/accenture/technical-mcq',
        practiceText: 'Practice Technical MCQs',
        categories: [
          {
            name: 'CS Fundamental',
            keyPrefix: 'acc_cs',
            topics: [
              'Operating Systems (Scheduling, Paging, Virtual Memory, Deadlocks)',
              'DBMS (ACID, 1NF/2NF/3NF/BCNF Normalization, Indexing)',
              'OOPs Concepts (Polymorphism, Inheritance, Encapsulation, Abstraction)',
              'Data Structures Fundamentals (Arrays, Linked Lists, Stacks, Queues)',
              'Compilation Pipeline & Memory Architecture'
            ]
          },
          {
            name: 'Computer Network',
            keyPrefix: 'acc_cn',
            topics: [
              'OSI 7-Layer Model & TCP/IP Architecture',
              'IPv4 & IPv6 Addressing, Subnetting & CIDR Calculation',
              'Routing Algorithms (Dijkstra SPF, Bellman-Ford, OSPF, RIP)',
              'Application Protocols (DNS 53, DHCP 67, HTTP 80, HTTPS 443)',
              'Switching & Network Devices (Collision vs Broadcast Domains)'
            ]
          },
          {
            name: 'MS Office & Common Applications',
            keyPrefix: 'acc_office',
            topics: [
              'MS Excel: VLOOKUP, XLOOKUP, INDEX-MATCH, Absolute Referencing ($A$1)',
              'Excel Formulas (IF, AND, OR, SUMIF, COUNTIF) & Pivot Tables',
              'MS Word: Styles, Paragraph Formatting, Mail Merge Data Sources',
              'MS PowerPoint: Transitions, Animations, Slide Master Template',
              'MS Outlook: Email Protocols (POP3 vs IMAP, SMTP)',
              'Web Browsers, Cache, Cookies, Session Storage & Proxies'
            ]
          },
          {
            name: 'Network Security & Cloud',
            keyPrefix: 'acc_cloud',
            topics: [
              'Cloud Delivery Models (IaaS, PaaS, SaaS)',
              'Cloud Deployment Models (Public, Private, Hybrid Cloud)',
              'Symmetric vs Asymmetric Encryption (AES vs RSA/ECC)',
              'Digital Certificates, PKI & TLS/SSL Handshake',
              'Firewalls (Stateful Inspection vs Packet Filtering)',
              'Cyber Threats & Mitigations (SQL Injection, XSS, Phishing, DDoS)'
            ]
          },
          {
            name: 'Pseudo Code',
            keyPrefix: 'acc_pseudo',
            topics: [
              'Bitwise Operators (AND &, OR |, XOR ^, Shift << >>)',
              'Loops & Nested Iterations Tracing',
              'Recursion & Call Stack Execution Tracing',
              'Conditional Logic & Branching Priorities',
              'Array Manipulation & In-Place Prefix Sums',
              'Variable Scope & Pass-by-Value vs Pass-by-Reference'
            ]
          }
        ]
      },
      {
        id: 'acc_r2',
        roundNumber: 'Round 2',
        title: 'Coding Assessment (DSA • Web • SQL)',
        timing: '2-3 Problems • 45 Minutes • Auto-proctored',
        badge: 'Unlocks AASE Package',
        badgeVariant: 'primary',
        desc: 'Testing practical implementation across DSA algorithms, interactive web interfaces, and relational queries.',
        practiceLink: '/accenture/dsa',
        practiceText: 'Launch Coding Practice',
        categories: [
          {
            name: 'Data Structures & Algorithms',
            keyPrefix: 'acc_dsa',
            topics: [
              'Arrays: Prefix Sums & Two Pointers',
              'Strings: Anagrams, Palindromes, Tokenization',
              'Sliding Window & Subarray Maximums',
              'Hash Maps & Frequency Counters',
              'Binary Search & Monotonic Conditions',
              'Stack & Next Greater Element',
              'Linked Lists: Cycle Detection & Reversal',
              'Trees: Traversals, Height, Path Sums',
              'Basic Dynamic Programming: 1D Memoization'
            ]
          },
          {
            name: 'SQL Querying',
            keyPrefix: 'acc_sql',
            topics: [
              'SELECT, WHERE, ORDER BY, LIMIT',
              'INNER JOIN, LEFT JOIN, RIGHT JOIN',
              'GROUP BY & HAVING Clauses',
              'Aggregate Functions: COUNT, SUM, AVG, MAX',
              'Subqueries & Correlated Queries',
              'String & Date Functions (LIKE, DATEDIFF)'
            ]
          },
          {
            name: 'Web-based Frontend',
            keyPrefix: 'acc_web',
            topics: [
              'HTML5 Semantic Elements & Forms',
              'CSS Flexbox & Grid Layouts',
              'DOM Traversal & Manipulation',
              'Event Listeners & Event Bubbling',
              'Async JavaScript: Promises & Fetch API'
            ]
          }
        ]
      },
      {
        id: 'acc_r3',
        roundNumber: 'Round 3',
        title: 'Gamified Cognitive Assessment',
        timing: '3 Mini-Games • ~20 Minutes • Elimination Round',
        badge: '100% Gamified',
        badgeVariant: 'warning',
        desc: 'Accenture uses interactive mini-games to evaluate candidates on mental calculation speed, working memory, and deductive logic.',
        practiceLink: '/accenture/cognitive',
        practiceText: 'Play Cognitive Games',
        categories: [
          {
            name: 'Official Cognitive Mini-Games',
            keyPrefix: 'acc_games',
            topics: [
              'Quick Bubble Math: Rapid target sum calculations under 40s',
              'Memory Maze: Spatial stepping path recall across 4x4 & 5x5 grids',
              'Switch Challenge: 4-symbol sequence deduction & operator identification',
              'Visual Multi-Tasking & Divided Attention',
              'Reaction Speed & Error Avoidance'
            ]
          }
        ]
      },
      {
        id: 'acc_r4',
        roundNumber: 'Round 4',
        title: 'AI Communication Assessment (Versant)',
        timing: '6 Sections • ~30 Minutes • Voice Recorded',
        badge: 'Automated Scoring',
        badgeVariant: 'primary',
        desc: 'Conducted via an AI-automated verbal testing platform. Evaluates English pronunciation, sentence fluency, listening comprehension, and grammar.',
        practiceLink: '/accenture/interview',
        practiceText: 'Explore Communication Prep',
        categories: [
          {
            name: 'Versant Evaluation Sections',
            keyPrefix: 'acc_comm',
            topics: [
              'Section A: Reading sentences displayed on screen out loud',
              'Section B: Listening to sentences and repeating them verbatim',
              'Section C: Rapid single-word or short-phrase comprehension answers',
              'Section D: Sentence rearrangement (unscrambling spoken audio fragments)',
              'Section E: Listening to short stories and retelling them in your own words',
              'Section F: 1-minute impromptu speaking on a situational topic',
              'Pronunciation, Fluency & Voice Modulation'
            ]
          }
        ]
      },
      {
        id: 'acc_r5',
        roundNumber: 'Final Round',
        title: 'Technical & HR Virtual Interview',
        timing: '25–40 Minutes • Virtual Panel',
        badge: 'Final Selection',
        badgeVariant: 'success',
        desc: 'Unified interview combining project walkthrough, core Computer Science concepts, and STAR behavioral questions.',
        practiceLink: '/accenture/interview',
        practiceText: 'View Interview Questions',
        categories: [
          {
            name: 'Interview Topics',
            keyPrefix: 'acc_interview',
            topics: [
              'Resume Projects: Architecture, Database & Challenges',
              'Object-Oriented Programming (OOP) Principles',
              'Database Management Systems (DBMS) & Normalization',
              'Operating Systems: Processes, Threads & Deadlocks',
              'Computer Networks: TCP vs UDP, IP Addressing',
              'STAR Method: Situation, Task, Action, Result',
              'Situational Leadership & Team Conflict Resolution'
            ]
          }
        ]
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────────
  // 2. TCS (TATA CONSULTANCY SERVICES — TCS NQT)
  // ──────────────────────────────────────────────────────────────────
  tcs: {
    companyName: 'Tata Consultancy Services',
    title: 'TCS NQT 2027 — National Qualifier Curriculum & Syllabus',
    subtitle: 'Official curriculum for TCS NQT Foundation, Advanced Section, and Digital / Prime Coding. Complete topics to maximize your cadre percentile.',
    badgeText: 'TCS NQT 2027 Pattern',
    ruleBadge: 'FOUNDATION + ADVANCED SECTIONAL CUTOFFS',
    ruleDesc: 'TCS NQT requires clearing individual cutoffs for each section (Numerical, Verbal, Reasoning) to qualify for Ninja (₹3.6 LPA), and clearing Advanced Quant + Coding for Digital (₹7.5 LPA) and Prime (₹11.5 LPA).',
    rounds: [
      {
        id: 'tcs_r1_foundation',
        roundNumber: 'Part A',
        title: 'NQT Foundation Section (Mandatory for Ninja: ₹3.6 LPA)',
        timing: '65 Questions • 75 Minutes • Sectional Cutoffs Apply',
        badge: 'Ninja Qualifier',
        badgeVariant: 'primary',
        desc: 'Testing core numerical agility, English language command, and analytical reasoning.',
        practiceLink: '/tcs/assessments?track=nqt-foundation',
        practiceText: 'Practice Foundation Test',
        categories: [
          {
            name: 'Numerical Ability (20 Qs, 25 Mins)',
            keyPrefix: 'tcs_num',
            topics: [
              'Number Systems & Divisibility Rules',
              'LCM, HCF & Arithmetic Operations',
              'Percentages, Profit, Loss & Discount',
              'Simple Interest & Compound Interest',
              'Time, Speed, Distance & Trains',
              'Time & Work, Pipes & Cisterns',
              'Ratio, Proportion, Averages & Mixtures',
              'Data Interpretation: Bar Charts, Pie Charts, Tables'
            ]
          },
          {
            name: 'Verbal Ability (25 Qs, 25 Mins)',
            keyPrefix: 'tcs_verbal',
            topics: [
              'Reading Comprehension (Passages & Inference)',
              'Sentence Completion & Cloze Test',
              'Error Identification & Sentence Correction',
              'Para Jumbles & Sentence Ordering',
              'Vocabulary: Synonyms, Antonyms, Analogies',
              'Prepositions, Conjunctions & Subject-Verb Agreement'
            ]
          },
          {
            name: 'Reasoning Ability (20 Qs, 25 Mins)',
            keyPrefix: 'tcs_reasoning',
            topics: [
              'Syllogisms & Categorical Logic',
              'Blood Relations & Family Trees',
              'Direction Sense & Spatial Orientation',
              'Data Sufficiency & Statement Assumptions',
              'Linear & Circular Seating Arrangements',
              'Number, Letter & Symbol Series',
              'Venn Diagrams & Set Relationships'
            ]
          }
        ]
      },
      {
        id: 'tcs_r2_advanced',
        roundNumber: 'Part B',
        title: 'NQT Advanced Section (Mandatory for Digital ₹7.5 LPA & Prime ₹11.5 LPA)',
        timing: '15 Questions + 2 Coding Problems • 115 Minutes',
        badge: 'Digital & Prime Gate',
        badgeVariant: 'warning',
        desc: 'High-difficulty quantitative aptitude, complex reasoning, and algorithmic coding challenges.',
        practiceLink: '/tcs/dsa',
        practiceText: 'Practice Advanced Coding',
        categories: [
          {
            name: 'Advanced Quantitative & Reasoning (15 Qs, 25 Mins)',
            keyPrefix: 'tcs_adv_quant',
            topics: [
              'Permutations & Combinations',
              'Probability (Independent Events, Bayes Theorem)',
              'Geometry, Mensuration 2D & 3D',
              'Coordinate Geometry & Straight Lines',
              'Progression, AP, GP, Harmonic Sequences',
              'Logarithms & Functions',
              'Complex Cryptarithmetic / Letter Puzzles',
              'Flowchart Execution & Algorithmic Tracing'
            ]
          },
          {
            name: 'Advanced Coding Challenge (2 Problems, 90 Mins)',
            keyPrefix: 'tcs_adv_coding',
            topics: [
              'Problem 1 (Medium): Array Transformations & Frequency Hashing',
              'Problem 2 (Hard): Dynamic Programming & Tree Traversals',
              'String Algorithms: Anagrams, Substrings, Palindromic Partitions',
              'Matrix Manipulations: Spiral, Transpose, Subgrid Sums',
              'Two-Pointer & Sliding Window Optimizations',
              'Recursion, Backtracking & Branch Pruning',
              'Corner Case Handling & Memory Limit Compliance'
            ]
          }
        ]
      },
      {
        id: 'tcs_r3_interview',
        roundNumber: 'Interview',
        title: 'TCS Technical, Managerial & HR Panel',
        timing: '30–45 Minutes • Virtual or In-Person',
        badge: 'Cadre Offer Rollout',
        badgeVariant: 'success',
        desc: 'Technical evaluation of code, core CS subjects, project implementation, and Tata culture alignment.',
        practiceLink: '/tcs/interview',
        practiceText: 'Practice TCS Interview Questions',
        categories: [
          {
            name: 'Technical & CS Fundamentals',
            keyPrefix: 'tcs_interview_tech',
            topics: [
              'Code Explanation: Dry-running your NQT test solutions',
              'DBMS: ACID, Normalization (1NF–BCNF), SQL Joins, Indexing',
              'Object-Oriented Programming (Java / C++ / Python)',
              'Operating Systems: Processes vs Threads, Paging, Virtual Memory',
              'System Design Fundamentals (For Digital / Prime Candidates)',
              'Project Architecture, Database Schemas & API Endpoints'
            ]
          },
          {
            name: 'Managerial & HR Fitment',
            keyPrefix: 'tcs_interview_hr',
            topics: [
              'Tata Code of Conduct & Core Organizational Values',
              'Relocation, Shift Timings & Travel Flexibility',
              'Handling Stressful Deadlines & Project Setbacks',
              'Long-Term Career Vision & Tech Stack Adaptability'
            ]
          }
        ]
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────────
  // 3. INFOSYS (INFY-TQ / SPECIALIST PROGRAMMER / CAMPUS)
  // ──────────────────────────────────────────────────────────────────
  infosys: {
    companyName: 'Infosys',
    title: 'Infosys 2027 — Official Curriculum & Selection Syllabus',
    subtitle: 'Comprehensive syllabus for Infosys Online Assessment, Mathematical Ability, Cryptarithmetic Puzzles, and Specialist Programmer (SP/DSE) coding.',
    badgeText: 'Infosys 2027 Pattern',
    ruleBadge: 'HIGH CUTOFF • NO NEGATIVE MARKING',
    ruleDesc: 'Infosys has NO negative marking, but imposes strict sectional cutoffs (~70%+). High difficulty Mathematical Ability, Cryptarithmetic puzzles, and Pseudocode determine your interview qualification.',
    rounds: [
      {
        id: 'inf_r1_test',
        roundNumber: 'Round 1',
        title: 'Comprehensive Online Assessment',
        timing: '54 Questions • 100 Minutes • Strict Sectional Timers',
        badge: 'Sectional Elimination',
        badgeVariant: 'danger',
        desc: 'Timed sections that automatically submit once time expires. Navigating back to previous sections is prohibited.',
        practiceLink: '/infosys/assessments?track=reasoning',
        practiceText: 'Practice Online Assessment',
        categories: [
          {
            name: 'Mathematical Ability (10 Qs, 35 Mins)',
            keyPrefix: 'inf_math',
            topics: [
              'Permutations & Combinations (High Difficulty)',
              'Probability (Conditional & Geometric Probability)',
              'Speed, Time & Distance (Relative Speed, Circular Tracks)',
              'Time & Work (Efficiency, Alternative Days, Pipes)',
              'Mixtures, Alligations & Percentages',
              'Geometry, Triangles, Circles & Mensuration',
              'Number Theory & Remainder Theorems'
            ]
          },
          {
            name: 'Reasoning Ability & Puzzles (15 Qs, 25 Mins)',
            keyPrefix: 'inf_reasoning',
            topics: [
              'Cryptarithmetic: Letter-to-digit addition puzzles (SEND+MORE)',
              'Data Sufficiency (2-Statement & 3-Statement checks)',
              'Coding-Decoding & Substitution Logic',
              'Syllogisms & Logical Venn Assertions',
              'Seating Arrangements & Complex Puzzles',
              'Direction & Distance Coordinates'
            ]
          },
          {
            name: 'Verbal Ability (20 Qs, 20 Mins)',
            keyPrefix: 'inf_verbal',
            topics: [
              'Reading Comprehension & Critical Analysis',
              'Sentence Completion & Contextual Vocabulary',
              'Error Spotting (Tenses, Modifiers, Subject-Verb Agreement)',
              'Sentence Reconstruction & Para Jumbles',
              'Idiomatic Expressions & Phrasal Verbs'
            ]
          },
          {
            name: 'Pseudocode & Algorithms (5 Qs, 10 Mins)',
            keyPrefix: 'inf_pseudo',
            topics: [
              'Tracing Nested Loops & Invariants',
              'Bitwise Operators & Logical Shift Operations',
              'Recursive Function Call Stacks & Base Cases',
              'Array Pointer Manipulations',
              'Asymptotic Time & Space Complexity'
            ]
          },
          {
            name: 'Puzzle Solving (4 Qs, 10 Mins)',
            keyPrefix: 'inf_puzzles',
            topics: [
              'Visual Pattern Matrices (Raven style progressive logic)',
              'Geometric Foldings & Shape Symmetries',
              'Number Pyramids & Missing Values'
            ]
          }
        ]
      },
      {
        id: 'inf_r2_sp_coding',
        roundNumber: 'Round 2',
        title: 'Specialist Programmer Coding (SP / DSE Track)',
        timing: '3 Problems • 180 Minutes • HackerEarth Platform',
        badge: 'Unlocks ₹9.5 - 11 LPA',
        badgeVariant: 'warning',
        desc: 'Advanced algorithmic competition testing complex Dynamic Programming, Graph algorithms, and Tree data structures.',
        practiceLink: '/infosys/dsa',
        practiceText: 'Practice SP Algorithms',
        categories: [
          {
            name: 'SP / DSE Algorithmic Curriculum',
            keyPrefix: 'inf_sp',
            topics: [
              'Dynamic Programming: Knapsack, LCS, LIS, Bitmask DP',
              'Graph Algorithms: Dijkstra, Bellman-Ford, Floyd-Warshall',
              'Graph Traversals: BFS, DFS, Topological Sorting, Cycle Detection',
              'Disjoint Set Union (DSU) & Minimum Spanning Trees (Kruskal/Prim)',
              'Segment Trees & Binary Indexed Trees (Fenwick)',
              'String Matching: KMP, Z-Algorithm, Trie Data Structure',
              'Greedy Heuristics & Interval Scheduling',
              'Memory & Execution Limits Optimization (1 sec / 256MB)'
            ]
          }
        ]
      },
      {
        id: 'inf_r3_interview',
        roundNumber: 'Interview',
        title: 'Technical & HR Panel Evaluation',
        timing: '35–50 Minutes • Virtual Panel',
        badge: 'Offer Letter Rollout',
        badgeVariant: 'success',
        desc: 'Deep-dive into algorithm trade-offs, database schema normalization, project architecture, and Infosys culture.',
        practiceLink: '/infosys/interview',
        practiceText: 'Infosys Interview Questions',
        categories: [
          {
            name: 'Technical Interview Curriculum',
            keyPrefix: 'inf_interview_tech',
            topics: [
              'DSA Complexity Trade-Offs (Time vs Space)',
              'Database Normalization (1NF, 2NF, 3NF, BCNF) & ER Diagrams',
              'Writing Complex SQL Queries (Subqueries, Joins, Windowing)',
              'Object-Oriented Design & SOLID Principles',
              'Design Patterns: Singleton, Factory, Observer',
              'Resume Projects: Microservices, APIs, Database Scaling',
              'Infosys Digital Platforms (Infosys Topaz AI, Cobalt Cloud)'
            ]
          }
        ]
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────────
  // 4. WIPRO (ELITE NATIONAL TALENT HUNT — NLTH / TURBO)
  // ──────────────────────────────────────────────────────────────────
  wipro: {
    companyName: 'Wipro',
    title: 'Wipro Elite NLTH 2027 — Selection Process & Curriculum',
    subtitle: 'Comprehensive syllabus for Wipro Elite NLTH: Aptitude, Written Communication (Automated Essay Writing), Coding, and Turbo elevation.',
    badgeText: 'Elite NLTH 2027',
    ruleBadge: 'TRI-SECTION + AUTOMATED ESSAY SCORING',
    ruleDesc: 'Wipro Elite NLTH evaluates candidates on Aptitude + Written Communication (Automated NLP Essay evaluation on grammar & structure) + Hands-on Coding. Scoring 80%+ unlocks the Turbo (₹6.5–8.5 LPA) upgrade challenge.',
    rounds: [
      {
        id: 'wip_r1_aptitude',
        roundNumber: 'Part A',
        title: 'Aptitude Assessment (Quant • Logical • Verbal)',
        timing: '48 Questions • 48 Minutes • Dedicated Section Timers',
        badge: 'NLTH Qualifier',
        badgeVariant: 'primary',
        desc: 'Testing speed calculation, deductive reasoning, and business English comprehension.',
        practiceLink: '/wipro/assessments?track=aptitude',
        practiceText: 'Practice Aptitude Test',
        categories: [
          {
            name: 'Quantitative Aptitude (16 Qs, 16 Mins)',
            keyPrefix: 'wip_quant',
            topics: [
              'Percentages, Profit & Loss, Marked Price & Discount',
              'Time, Speed & Distance, Relative Velocity',
              'Time & Work, Efficiency & Wages',
              'Simple Interest & Compound Interest',
              'Ratio, Proportion, Partnerships & Averages',
              'Number Systems, Divisibility & Surds/Indices',
              'Clocks, Calendars & Basic Mensuration'
            ]
          },
          {
            name: 'Logical Reasoning (14 Qs, 14 Mins)',
            keyPrefix: 'wip_logical',
            topics: [
              'Statements, Assumptions & Conclusions',
              'Syllogisms & Deductive Validity',
              'Coding-Decoding & Letter Shifting',
              'Blood Relations & Family Lineage',
              'Direction Sense & Movement Calculations',
              'Seating Arrangements (Row & Circle)',
              'Analogy, Classification & Odd-One-Out'
            ]
          },
          {
            name: 'Verbal English (18 Qs, 18 Mins)',
            keyPrefix: 'wip_verbal',
            topics: [
              'Grammar: Subject-Verb Agreement, Tenses, Modifiers',
              'Sentence Correction & Improvement',
              'Synonyms, Antonyms & Contextual Vocabulary',
              'Prepositions, Articles & Conjunctions',
              'Reading Comprehension Passages',
              'Para Jumbles & Cohesive Sentences'
            ]
          }
        ]
      },
      {
        id: 'wip_r2_essay',
        roundNumber: 'Part B',
        title: 'Written Communication Test (Automated Essay Writing)',
        timing: '1 Topic • 20 Minutes • 200–400 Words',
        badge: 'AI Evaluated',
        badgeVariant: 'warning',
        desc: 'Evaluated by automated natural language processing (NLP) algorithms measuring spelling, grammar, vocabulary, and topic cohesion.',
        practiceLink: '/wipro/study-materials',
        practiceText: 'View Essay Writing Guides',
        categories: [
          {
            name: 'NLP Automated Scoring Criteria',
            keyPrefix: 'wip_essay',
            topics: [
              'Grammar & Sentence Syntax (Zero tolerance for run-on sentences)',
              'Spelling Accuracy & Correct Punctuation',
              'Vocabulary Diversity & Lexical Sophistication',
              'Paragraph Structure: Introduction, Body, Conclusion',
              'Relevance to the Given Topic & Logical Flow',
              'Word Count Adherence (Strictly between 200 and 400 words)',
              'Common Topics: Digital transformation, AI impact, Remote work'
            ]
          }
        ]
      },
      {
        id: 'wip_r3_coding',
        roundNumber: 'Part C',
        title: 'Hands-on Online Coding Assessment',
        timing: '2 Problems • 60 Minutes • C, C++, Java, or Python',
        badge: 'Turbo Elevation',
        badgeVariant: 'primary',
        desc: 'Testing practical programming ability, algorithmic thinking, and edge case handling.',
        practiceLink: '/wipro/dsa',
        practiceText: 'Practice Wipro Coding',
        categories: [
          {
            name: 'Coding Curriculum',
            keyPrefix: 'wip_coding',
            topics: [
              'Problem 1 (Easy): String manipulation, Character counting, Palindromes',
              'Problem 2 (Medium): Array transformation, Frequency maps, Sorting',
              'Two-Pointer Approach & Subarray Problems',
              'Basic Recursion & Mathematical Sequences',
              'Matrix Transposition & Border Elements',
              'Handling All Visible and Hidden Test Cases'
            ]
          }
        ]
      },
      {
        id: 'wip_r4_interview',
        roundNumber: 'Final Round',
        title: 'Technical & HR Virtual Interview',
        timing: '25–40 Minutes • Virtual Panel',
        badge: 'Offer Rollout',
        badgeVariant: 'success',
        desc: 'Reviews candidate programming fundamentals, project implementation, database understanding, and employment terms.',
        practiceLink: '/wipro/interview',
        practiceText: 'Wipro Interview Questions',
        categories: [
          {
            name: 'Technical & HR Topics',
            keyPrefix: 'wip_interview',
            topics: [
              'Core Language Syntax & Memory Management (C++, Java, or Python)',
              'Object-Oriented Programming (OOP) Pillars & Examples',
              'SQL Queries: SELECT, WHERE, JOINs, Primary/Foreign Keys',
              'College Project Walkthrough: Schema, Modules & Logic',
              'Wipro Service Agreement Confirmation',
              'Shift Flexibility (24/7 Operations) & Location Willingness'
            ]
          }
        ]
      }
    ]
  }
}
