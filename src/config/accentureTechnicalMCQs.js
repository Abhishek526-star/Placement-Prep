// src/config/accentureTechnicalMCQs.js
// Curated Accenture Technical MCQ Question Bank covering the 5 core sub-sections:
// 1. CS Fundamental (OS, DBMS, OOPs)
// 2. Computer Network (OSI, TCP/IP, Protocols, Subnetting)
// 3. MS Office (Excel, Word, PowerPoint, Outlook)
// 4. Network Security & Cloud (Cloud Models, Cryptography, Threats)
// 5. Pseudo Code (Bitwise logic, loops, recursion, arrays)

export const ACCENTURE_TECHNICAL_MCQS = [
  // ── 1. CS FUNDAMENTAL ─────────────────────────────────────────────
  {
    id: 'acc-cs-01',
    subSection: 'cs-fundamentals',
    category: 'CS Fundamental',
    topic: 'Operating Systems',
    difficulty: 'medium',
    title: 'Process Synchronization & Deadlock',
    prompt_markdown: `Which of the following conditions is **NOT** a necessary condition for a deadlock to occur in a multi-threaded operating system?`,
    options: [
      { id: 'opt-cs01-a', key: 'A', text: 'Mutual Exclusion' },
      { id: 'opt-cs01-b', key: 'B', text: 'Hold and Wait' },
      { id: 'opt-cs01-c', key: 'C', text: 'Preemption of resources by kernel scheduler' },
      { id: 'opt-cs01-d', key: 'D', text: 'Circular Wait' },
    ],
    correct_option: 'C',
    explanation_markdown: `**Correct Answer: C**\n\nThe 4 Coffman conditions required for deadlock are:\n1. **Mutual Exclusion**: Non-shareable resource.\n2. **Hold and Wait**: Process holds at least one resource while requesting others.\n3. **No Preemption**: Resources cannot be preempted; they must be released voluntarily.\n4. **Circular Wait**: Closed loop of processes waiting on each other.\n\nOption C states that preemption occurs, which actually **prevents** deadlock.`
  },
  {
    id: 'acc-cs-02',
    subSection: 'cs-fundamentals',
    category: 'CS Fundamental',
    topic: 'DBMS',
    difficulty: 'easy',
    title: 'Database Normalization',
    prompt_markdown: `A database relational table is said to be in **Third Normal Form (3NF)** if and only if:`,
    options: [
      { id: 'opt-cs02-a', key: 'A', text: 'It contains no repeating groups or multivalued attributes.' },
      { id: 'opt-cs02-b', key: 'B', text: 'It is in 2NF and has no partial functional dependencies.' },
      { id: 'opt-cs02-c', key: 'C', text: 'It is in 2NF and has no transitive functional dependencies of non-prime attributes.' },
      { id: 'opt-cs02-d', key: 'D', text: 'Every non-trivial functional dependency X -> Y has X as a candidate key.' },
    ],
    correct_option: 'C',
    explanation_markdown: `**Correct Answer: C**\n\n- **1NF**: Atomic values, no repeating groups.\n- **2NF**: In 1NF + no partial dependency (non-prime attribute must depend on the whole candidate key).\n- **3NF**: In 2NF + **no transitive dependency** (non-prime attribute should not depend on another non-prime attribute).\n- Option D defines **BCNF** (Boyce-Codd Normal Form).`
  },
  {
    id: 'acc-cs-03',
    subSection: 'cs-fundamentals',
    category: 'CS Fundamental',
    topic: 'OOPs',
    difficulty: 'medium',
    title: 'Polymorphism & Virtual Functions',
    prompt_markdown: `In Object-Oriented Programming (C++/Java), what mechanism enables **runtime (dynamic) polymorphism**?`,
    options: [
      { id: 'opt-cs03-a', key: 'A', text: 'Function Overloading' },
      { id: 'opt-cs03-b', key: 'B', text: 'Virtual functions and method overriding via vtable / late binding' },
      { id: 'opt-cs03-c', key: 'C', text: 'Operator Overloading' },
      { id: 'opt-cs03-d', key: 'D', text: 'Templates and Generics compilation' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\n- **Compile-time polymorphism**: Function overloading and operator overloading (early binding).\n- **Runtime polymorphism**: Method overriding achieved via virtual functions (vtable/vptr in C++ or dynamic method dispatch in Java).`
  },
  {
    id: 'acc-cs-04',
    subSection: 'cs-fundamentals',
    category: 'CS Fundamental',
    topic: 'Operating Systems',
    difficulty: 'hard',
    title: 'Virtual Memory & Thrashing',
    prompt_markdown: `In demand-paged virtual memory systems, what is **Thrashing**?`,
    options: [
      { id: 'opt-cs04-a', key: 'A', text: 'A process spending more time in I/O for paging than executing instructions.' },
      { id: 'opt-cs04-b', key: 'B', text: 'Corrupted virtual memory page table references.' },
      { id: 'opt-cs04-c', key: 'C', text: 'CPU cache collision during direct memory access (DMA).' },
      { id: 'opt-cs04-d', key: 'D', text: 'Failure to allocate swap memory on disk during process creation.' },
    ],
    correct_option: 'A',
    explanation_markdown: `**Correct Answer: A**\n\nThrashing occurs when the operating system spends more time moving pages between main memory and secondary storage (page fault handling) than executing actual process instructions, causing CPU utilization to plummet.`
  },
  {
    id: 'acc-cs-05',
    subSection: 'cs-fundamentals',
    category: 'CS Fundamental',
    topic: 'DBMS',
    difficulty: 'easy',
    title: 'ACID Properties in Transactions',
    prompt_markdown: `Which property of database transactions ensures that once a transaction has committed, its changes will **never be lost**, even in the event of an abrupt power failure?`,
    options: [
      { id: 'opt-cs05-a', key: 'A', text: 'Atomicity' },
      { id: 'opt-cs05-b', key: 'B', text: 'Consistency' },
      { id: 'opt-cs05-c', key: 'C', text: 'Isolation' },
      { id: 'opt-cs05-d', key: 'D', text: 'Durability' },
    ],
    correct_option: 'D',
    explanation_markdown: `**Correct Answer: D**\n\n- **Atomicity**: All-or-nothing execution.\n- **Consistency**: Preserves database integrity constraints.\n- **Isolation**: Concurrent transactions do not interfere with each other.\n- **Durability**: Committed data persists across crashes via Write-Ahead Logging (WAL).`
  },
  {
    id: 'acc-cs-06',
    subSection: 'cs-fundamentals',
    category: 'CS Fundamental',
    topic: 'OOPs',
    difficulty: 'medium',
    title: 'Abstract Classes vs Interfaces',
    prompt_markdown: `Which statement correctly differentiates an **Abstract Class** from an **Interface** in object-oriented architecture?`,
    options: [
      { id: 'opt-cs06-a', key: 'A', text: 'A class can inherit multiple abstract classes, but only implement one interface.' },
      { id: 'opt-cs06-b', key: 'B', text: 'An abstract class can maintain non-static instance state and concrete constructors; an interface cannot hold state.' },
      { id: 'opt-cs06-c', key: 'C', text: 'Interfaces cannot contain any default implementations under any language standard.' },
      { id: 'opt-cs06-d', key: 'D', text: 'Abstract classes cannot declare private helper methods.' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\nAn abstract class can hold instance variables, non-final state, and constructors. Interfaces define contracts (pure behavior) and cannot hold instance state (Java allows static/default methods, but no mutable instance fields).`
  },

  // ── 2. COMPUTER NETWORK ───────────────────────────────────────────
  {
    id: 'acc-cn-01',
    subSection: 'computer-network',
    category: 'Computer Network',
    topic: 'OSI Model',
    difficulty: 'easy',
    title: 'OSI Layer Protocol Mapping',
    prompt_markdown: `At which layer of the **OSI Model** does the **Address Resolution Protocol (ARP)** operate to resolve an IP address to a MAC address?`,
    options: [
      { id: 'opt-cn01-a', key: 'A', text: 'Physical Layer (Layer 1)' },
      { id: 'opt-cn01-b', key: 'B', text: 'Data Link Layer (Layer 2 / 2.5)' },
      { id: 'opt-cn01-c', key: 'C', text: 'Transport Layer (Layer 4)' },
      { id: 'opt-cn01-d', key: 'D', text: 'Application Layer (Layer 7)' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\nARP operates at Layer 2 (Data Link Layer) transitioning with Layer 3 (Network Layer) to map logical 32-bit IPv4 addresses to physical 48-bit MAC addresses using broadcast requests and unicast replies.`
  },
  {
    id: 'acc-cn-02',
    subSection: 'computer-network',
    category: 'Computer Network',
    topic: 'TCP/IP',
    difficulty: 'medium',
    title: 'TCP 3-Way Handshake',
    prompt_markdown: `What is the correct sequence of control flags exchanged during the **TCP 3-Way Handshake** connection establishment?`,
    options: [
      { id: 'opt-cn02-a', key: 'A', text: 'ACK -> SYN -> SYN-ACK' },
      { id: 'opt-cn02-b', key: 'B', text: 'SYN -> SYN-ACK -> ACK' },
      { id: 'opt-cn02-c', key: 'C', text: 'SYN -> ACK -> FIN' },
      { id: 'opt-cn02-d', key: 'D', text: 'RST -> SYN -> ACK' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\n1. **Client -> Server**: SYN (Synchronize sequence number)\n2. **Server -> Client**: SYN-ACK (Acknowledge client's SYN + send server's SYN)\n3. **Client -> Server**: ACK (Acknowledge server's SYN)`
  },
  {
    id: 'acc-cn-03',
    subSection: 'computer-network',
    category: 'Computer Network',
    topic: 'IP Addressing & Subnetting',
    difficulty: 'medium',
    title: 'Subnetting & Host Calculation',
    prompt_markdown: `Given the IPv4 CIDR block **192.168.10.0/27**, how many **usable host addresses** are available in this subnet?`,
    options: [
      { id: 'opt-cn03-a', key: 'A', text: '32' },
      { id: 'opt-cn03-b', key: 'B', text: '30' },
      { id: 'opt-cn03-c', key: 'C', text: '62' },
      { id: 'opt-cn03-d', key: 'D', text: '14' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\n- Prefix /27 means $32 - 27 = 5$ host bits.\n- Total IP addresses = $2^5 = 32$.\n- Subtract 2 reserved addresses: Network Address (first) and Broadcast Address (last).\n- Usable host addresses = $32 - 2 = 30$.`
  },
  {
    id: 'acc-cn-04',
    subSection: 'computer-network',
    category: 'Computer Network',
    topic: 'Network Protocols',
    difficulty: 'easy',
    title: 'Well-Known Transport Ports',
    prompt_markdown: `Which standard port is used by **DNS** for resolving domain names and by **HTTPS** for secure web browsing, respectively?`,
    options: [
      { id: 'opt-cn04-a', key: 'A', text: 'DNS: 21, HTTPS: 80' },
      { id: 'opt-cn04-b', key: 'B', text: 'DNS: 53, HTTPS: 443' },
      { id: 'opt-cn04-c', key: 'C', text: 'DNS: 25, HTTPS: 8080' },
      { id: 'opt-cn04-d', key: 'D', text: 'DNS: 67, HTTPS: 443' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\n- **DNS**: Port 53 (UDP for queries, TCP for zone transfers).\n- **HTTPS**: Port 443 (TCP with TLS encryption).\n- Port 21 is FTP, Port 25 is SMTP, Port 80 is HTTP, Port 67 is DHCP.`
  },
  {
    id: 'acc-cn-05',
    subSection: 'computer-network',
    category: 'Computer Network',
    topic: 'Routing & Switching',
    difficulty: 'hard',
    title: 'Distance Vector vs Link State',
    prompt_markdown: `Which routing protocol algorithm utilizes the **Dijkstra Shortest Path First (SPF)** algorithm to compute the shortest loop-free path across a network topology?`,
    options: [
      { id: 'opt-cn05-a', key: 'A', text: 'RIP (Routing Information Protocol)' },
      { id: 'opt-cn05-b', key: 'B', text: 'OSPF (Open Shortest Path First)' },
      { id: 'opt-cn05-c', key: 'C', text: 'BGP (Border Gateway Protocol)' },
      { id: 'opt-cn05-d', key: 'D', text: 'IGRP (Interior Gateway Routing Protocol)' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\n- **OSPF** is a link-state routing protocol that floods link-state advertisements (LSAs) and uses **Dijkstra's SPF algorithm**.\n- **RIP** is a distance-vector protocol using the Bellman-Ford algorithm with a 15-hop limit.`
  },
  {
    id: 'acc-cn-06',
    subSection: 'computer-network',
    category: 'Computer Network',
    topic: 'Network Devices',
    difficulty: 'easy',
    title: 'Collision Domains vs Broadcast Domains',
    prompt_markdown: `How do standard **Network Switches** (Layer 2) handle collision domains and broadcast domains?`,
    options: [
      { id: 'opt-cn06-a', key: 'A', text: 'Each port is a separate collision domain; all ports belong to one broadcast domain.' },
      { id: 'opt-cn06-b', key: 'B', text: 'All ports share a single collision domain and a single broadcast domain.' },
      { id: 'opt-cn06-c', key: 'C', text: 'Each port is a separate collision domain and a separate broadcast domain.' },
      { id: 'opt-cn06-d', key: 'D', text: 'Switches do not separate collision domains, only routers do.' },
    ],
    correct_option: 'A',
    explanation_markdown: `**Correct Answer: A**\n\nA Layer 2 switch breaks up collision domains per switch port (each port is in its own collision domain). However, all ports share the same broadcast domain unless segmented into VLANs.`
  },

  // ── 3. MS OFFICE ──────────────────────────────────────────────────
  {
    id: 'acc-mso-01',
    subSection: 'ms-office',
    category: 'MS Office',
    topic: 'MS Excel',
    difficulty: 'medium',
    title: 'Excel Absolute Cell Referencing',
    prompt_markdown: `In Microsoft Excel, what happens when you copy a formula containing the cell reference **\`$B$4\`** to another cell?`,
    options: [
      { id: 'opt-mso01-a', key: 'A', text: 'Both column B and row 4 remain unchanged (absolute reference).' },
      { id: 'opt-mso01-b', key: 'B', text: 'Column B remains fixed, but row 4 shifts relatively.' },
      { id: 'opt-mso01-c', key: 'C', text: 'Row 4 remains fixed, but column B shifts relatively.' },
      { id: 'opt-mso01-d', key: 'D', text: 'The reference generates a #REF! circular reference error.' },
    ],
    correct_option: 'A',
    explanation_markdown: `**Correct Answer: A**\n\nThe dollar sign \`$\` locks the dimension:\n- \`$B$4\`: Absolute reference (both column and row are locked).\n- \`B$4\`: Mixed (row is locked, column is relative).\n- \`$B4\`: Mixed (column is locked, row is relative).\n- \`B4\`: Relative reference.`
  },
  {
    id: 'acc-mso-02',
    subSection: 'ms-office',
    category: 'MS Office',
    topic: 'MS Excel',
    difficulty: 'medium',
    title: 'VLOOKUP Limitation & Functionality',
    prompt_markdown: `What is the primary architectural limitation of the standard **\`=VLOOKUP()\`** function in Excel compared to **\`=INDEX(..., MATCH(...))\`**?`,
    options: [
      { id: 'opt-mso02-a', key: 'A', text: 'VLOOKUP cannot look up values located to the left of the lookup column.' },
      { id: 'opt-mso02-b', key: 'B', text: 'VLOOKUP cannot perform exact text matching.' },
      { id: 'opt-mso02-c', key: 'C', text: 'VLOOKUP only works with numeric values.' },
      { id: 'opt-mso02-d', key: 'D', text: 'VLOOKUP requires sorting the table in descending order.' },
    ],
    correct_option: 'A',
    explanation_markdown: `**Correct Answer: A**\n\n\`VLOOKUP\` strictly searches from left to right: the lookup value must reside in the first column of the range. \`INDEX-MATCH\` and modern \`XLOOKUP\` can search in any direction (left, right, up, down).`
  },
  {
    id: 'acc-mso-03',
    subSection: 'ms-office',
    category: 'MS Office',
    topic: 'MS Word',
    difficulty: 'easy',
    title: 'Word Mail Merge Functionality',
    prompt_markdown: `Which feature in Microsoft Word is used to generate personalized bulk documents (e.g. interview offer letters, certificates) by linking a template document to an external Excel data source?`,
    options: [
      { id: 'opt-mso03-a', key: 'A', text: 'AutoCorrect' },
      { id: 'opt-mso03-b', key: 'B', text: 'Mail Merge' },
      { id: 'opt-mso03-c', key: 'C', text: 'Track Changes' },
      { id: 'opt-mso03-d', key: 'D', text: 'Macros Automation' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\n**Mail Merge** connects a main Word template containing merge fields (like \`<<Candidate_Name>>\`) to a data source (such as an Excel sheet or Access table) to produce batch personalized documents.`
  },
  {
    id: 'acc-mso-04',
    subSection: 'ms-office',
    category: 'MS Office',
    topic: 'MS PowerPoint',
    difficulty: 'easy',
    title: 'PowerPoint Slide Master',
    prompt_markdown: `If you want to apply a corporate logo and consistent footer font to **every slide** in a PowerPoint presentation automatically, where should you make the change?`,
    options: [
      { id: 'opt-mso04-a', key: 'A', text: 'Slide Master View' },
      { id: 'opt-mso04-b', key: 'B', text: 'Animation Pane' },
      { id: 'opt-mso04-c', key: 'C', text: 'Presenter View' },
      { id: 'opt-mso04-d', key: 'D', text: 'Design Ideas Assistant' },
    ],
    correct_option: 'A',
    explanation_markdown: `**Correct Answer: A**\n\nThe **Slide Master** controls the default layout, font theme, background styles, and positioning of placeholders for all slides across the entire presentation.`
  },
  {
    id: 'acc-mso-05',
    subSection: 'ms-office',
    category: 'MS Office',
    topic: 'MS Outlook',
    difficulty: 'medium',
    title: 'Email Protocols: POP3 vs IMAP',
    prompt_markdown: `What is the principal difference between **POP3** and **IMAP4** email protocols in MS Outlook?`,
    options: [
      { id: 'opt-mso05-a', key: 'A', text: 'POP3 downloads emails and usually deletes them from server; IMAP keeps emails synchronized on the server across multiple devices.' },
      { id: 'opt-mso05-b', key: 'B', text: 'POP3 is used for sending emails; IMAP is used for receiving.' },
      { id: 'opt-mso05-c', key: 'C', text: 'IMAP only works through web browsers, while POP3 works in Outlook desktop.' },
      { id: 'opt-mso05-d', key: 'D', text: 'POP3 supports bidirectional folder synchronization while IMAP does not.' },
    ],
    correct_option: 'A',
    explanation_markdown: `**Correct Answer: A**\n\n- **POP3** (Post Office Protocol, port 110/995): Downloads messages to local storage and removes them from the mail server.\n- **IMAP** (Internet Message Access Protocol, port 143/993): Synchronizes messages and folders across all client devices directly on the remote server.`
  },
  {
    id: 'acc-mso-06',
    subSection: 'ms-office',
    category: 'MS Office',
    topic: 'MS Excel',
    difficulty: 'hard',
    title: 'Excel Formula Output Analysis',
    prompt_markdown: `What is the evaluation result of the Excel formula: \n\`\`\`excel\n=IF(AND(5 > 2, 4 < 1), "Match", "No Match")\n\`\`\``,
    options: [
      { id: 'opt-mso06-a', key: 'A', text: '"Match"' },
      { id: 'opt-mso06-b', key: 'B', text: '"No Match"' },
      { id: 'opt-mso06-c', key: 'C', text: '#VALUE!' },
      { id: 'opt-mso06-d', key: 'D', text: 'TRUE' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\n1. \`5 > 2\` evaluates to \`TRUE\`.\n2. \`4 < 1\` evaluates to \`FALSE\`.\n3. \`AND(TRUE, FALSE)\` evaluates to \`FALSE\`.\n4. \`IF(FALSE, "Match", "No Match")\` returns \`"No Match"\`.`
  },

  // ── 4. NETWORK SECURITY & CLOUD ───────────────────────────────────
  {
    id: 'acc-nsc-01',
    subSection: 'network-security-cloud',
    category: 'Network Security & Cloud',
    topic: 'Cloud Service Models',
    difficulty: 'easy',
    title: 'Cloud Service Models (IaaS, PaaS, SaaS)',
    prompt_markdown: `In which cloud service delivery model does the cloud provider manage everything up through the runtime and middleware, leaving the customer responsible **only for their application code and data**?`,
    options: [
      { id: 'opt-nsc01-a', key: 'A', text: 'Infrastructure as a Service (IaaS)' },
      { id: 'opt-nsc01-b', key: 'B', text: 'Platform as a Service (PaaS)' },
      { id: 'opt-nsc01-c', key: 'C', text: 'Software as a Service (SaaS)' },
      { id: 'opt-nsc01-d', key: 'D', text: 'Function as a Service (FaaS)' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\n- **IaaS**: Provider manages Virtualization, Servers, Storage, Networking. Customer manages OS, Middleware, Runtime, Data, Apps (e.g. AWS EC2).\n- **PaaS**: Provider manages OS, Middleware, Runtime. Customer manages **Data & Apps** (e.g. AWS Elastic Beanstalk, Heroku, Google App Engine).\n- **SaaS**: Provider manages everything (e.g. Office 365, Gmail).`
  },
  {
    id: 'acc-nsc-02',
    subSection: 'network-security-cloud',
    category: 'Network Security & Cloud',
    topic: 'Cryptography',
    difficulty: 'medium',
    title: 'Symmetric vs Asymmetric Encryption',
    prompt_markdown: `Which statement accurately describes **Asymmetric (Public Key) Cryptography**?`,
    options: [
      { id: 'opt-nsc02-a', key: 'A', text: 'The same secret key is used for both encryption and decryption.' },
      { id: 'opt-nsc02-b', key: 'B', text: 'A public key encrypts data, and only the corresponding private key can decrypt it.' },
      { id: 'opt-nsc02-c', key: 'C', text: 'It is computationally faster than symmetric algorithms like AES.' },
      { id: 'opt-nsc02-d', key: 'D', text: 'It cannot be used for digital signatures or identity verification.' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\nAsymmetric cryptography (e.g. RSA, ECC) uses a key pair:\n- **Public Key**: Distributed freely; used to encrypt data or verify signatures.\n- **Private Key**: Kept secret; used to decrypt data or create digital signatures.`
  },
  {
    id: 'acc-nsc-03',
    subSection: 'network-security-cloud',
    category: 'Network Security & Cloud',
    topic: 'Cyber Threats',
    difficulty: 'easy',
    title: 'Web Application Security (SQL Injection)',
    prompt_markdown: `What is the most effective architectural defense against **SQL Injection (SQLi)** vulnerabilities in web applications?`,
    options: [
      { id: 'opt-nsc03-a', key: 'A', text: 'Using Client-Side JavaScript string validation' },
      { id: 'opt-nsc03-b', key: 'B', text: 'Parameterized queries and prepared statements' },
      { id: 'opt-nsc03-c', key: 'C', text: 'Hashing the SQL queries before execution' },
      { id: 'opt-nsc03-d', key: 'D', text: 'Disabling HTTPS port 443' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\n**Parameterized queries (Prepared Statements)** separate code from data. The database compiler treats user input strictly as parameters/literals rather than executable SQL syntax, completely preventing SQL injection.`
  },
  {
    id: 'acc-nsc-04',
    subSection: 'network-security-cloud',
    category: 'Network Security & Cloud',
    topic: 'Firewalls & Network Security',
    difficulty: 'medium',
    title: 'Stateful vs Packet Filtering Firewalls',
    prompt_markdown: `What capability distinguishes a **Stateful Inspection Firewall** from a basic stateless packet-filtering firewall?`,
    options: [
      { id: 'opt-nsc04-a', key: 'A', text: 'It inspects packets solely based on static source and destination IP headers.' },
      { id: 'opt-nsc04-b', key: 'B', text: 'It tracks active connection states and verifies that incoming packets belong to established, recognized sessions.' },
      { id: 'opt-nsc04-c', key: 'C', text: 'It decrypts all SSL traffic at Layer 1.' },
      { id: 'opt-nsc04-d', key: 'D', text: 'It replaces the need for DNS servers.' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\nA **Stateful firewall** maintains a state table tracking ongoing TCP handshakes, sequence numbers, and UDP flows. Returning traffic is automatically permitted if it corresponds to an outbound session initiated by an internal client.`
  },
  {
    id: 'acc-nsc-05',
    subSection: 'network-security-cloud',
    category: 'Network Security & Cloud',
    topic: 'Cloud Architecture',
    difficulty: 'medium',
    title: 'Cloud Elasticity vs Scalability',
    prompt_markdown: `In cloud computing design, what is the key distinction between **Elasticity** and **Scalability**?`,
    options: [
      { id: 'opt-nsc05-a', key: 'A', text: 'Elasticity is the automatic dynamic scaling up and down based on immediate workload; Scalability is the architecture\'s capability to handle growth.' },
      { id: 'opt-nsc05-b', key: 'B', text: 'Scalability only applies to storage; Elasticity applies only to CPU.' },
      { id: 'opt-nsc05-c', key: 'C', text: 'Elasticity requires manual intervention; Scalability is fully automated.' },
      { id: 'opt-nsc05-d', key: 'D', text: 'They are completely synonymous terms with no technical distinction.' },
    ],
    correct_option: 'A',
    explanation_markdown: `**Correct Answer: A**\n\n- **Scalability**: The structural ability of an application to accommodate increased traffic by adding resources (vertical or horizontal).\n- **Elasticity**: The dynamic, automated provisioning and de-provisioning of cloud resources in real time to match fluctuating demand (e.g. AWS Auto Scaling).`
  },
  {
    id: 'acc-nsc-06',
    subSection: 'network-security-cloud',
    category: 'Network Security & Cloud',
    topic: 'Threat Intelligence',
    difficulty: 'hard',
    title: 'Man-in-the-Middle & Digital Certificates',
    prompt_markdown: `How does the **TLS Certificate Authority (CA)** hierarchy prevent **Man-in-the-Middle (MitM)** eavesdropping during HTTPS web connections?`,
    options: [
      { id: 'opt-nsc04-a', key: 'A', text: 'By blocking all DNS queries from unknown IP addresses.' },
      { id: 'opt-nsc04-b', key: 'B', text: 'By having trusted root CAs cryptographically sign the web server\'s public key, allowing the browser to authenticate server identity.' },
      { id: 'opt-nsc04-c', key: 'C', text: 'By requiring clients to share their private keys with the server.' },
      { id: 'opt-nsc04-d', key: 'D', text: 'By routing all web traffic exclusively over UDP.' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\nA Certificate Authority (CA) signs the server's public key with its own private key. The browser verifies the cryptographic signature against its pre-installed list of trusted Root CAs, ensuring the client is communicating directly with the authentic server.`
  },

  // ── 5. PSEUDO CODE ────────────────────────────────────────────────
  {
    id: 'acc-ps-01',
    subSection: 'pseudo-code',
    category: 'Pseudo Code',
    topic: 'Bitwise Operators',
    difficulty: 'medium',
    title: 'Bitwise XOR & Shift Logic Tracing',
    prompt_markdown: `What is the final printed output of the following pseudocode?\n\`\`\`text\nInteger a, b, c\nSet a = 4, b = 6, c = 2\na = (a ^ b) + c\nb = (b >> 1) + a\nPrint a + b\n\`\`\``,
    options: [
      { id: 'opt-ps01-a', key: 'A', text: '11' },
      { id: 'opt-ps01-b', key: 'B', text: '15' },
      { id: 'opt-ps01-c', key: 'C', text: '12' },
      { id: 'opt-ps01-d', key: 'D', text: '9' },
    ],
    correct_option: 'A',
    explanation_markdown: `**Correct Answer: A**\n\n1. Initial: $a = 4$ (\`0100\`), $b = 6$ (\`0110\`), $c = 2$.\n2. $a \\oplus b = 4 \\oplus 6 = 2$ (\`0010\`).\n3. $a = 2 + c = 2 + 2 = 4$.\n4. $b \\gg 1 = 6 \\gg 1 = 3$ (integer division $6/2 = 3$).\n5. $b = 3 + a = 3 + 4 = 7$.\n6. Result: $a + b = 4 + 7 = 11$.`
  },
  {
    id: 'acc-ps-02',
    subSection: 'pseudo-code',
    category: 'Pseudo Code',
    topic: 'Nested Loops & Conditionals',
    difficulty: 'medium',
    title: 'Nested Iteration & Step Counter',
    prompt_markdown: `Trace the following pseudocode and determine the value of **\`count\`**:\n\`\`\`text\nInteger p, q, count\nSet count = 0\nfor each p from 1 to 4\n    for each q from p to 4\n        if ( (p + q) mod 2 == 0 )\n            count = count + 1\n        End if\n    End for\nEnd for\nPrint count\n\`\`\``,
    options: [
      { id: 'opt-ps02-a', key: 'A', text: '4' },
      { id: 'opt-ps02-b', key: 'B', text: '6' },
      { id: 'opt-ps02-c', key: 'C', text: '5' },
      { id: 'opt-ps02-d', key: 'D', text: '8' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\nPairs $(p, q)$ where $p \\le q$ and $(p + q)$ is even:\n- $p = 1$: $q \\in \\{1, 2, 3, 4\\}$:\n  - $(1,1) \\rightarrow 2$ (even) ✓\n  - $(1,3) \\rightarrow 4$ (even) ✓ (Count = 2)\n- $p = 2$: $q \\in \\{2, 3, 4\\}$:\n  - $(2,2) \\rightarrow 4$ (even) ✓\n  - $(2,4) \\rightarrow 6$ (even) ✓ (Count = 4)\n- $p = 3$: $q \\in \\{3, 4\\}$:\n  - $(3,3) \\rightarrow 6$ (even) ✓ (Count = 5)\n- $p = 4$: $q \\in \\{4\\}$:\n  - $(4,4) \\rightarrow 8$ (even) ✓ (Count = 6)\n\nFinal \`count\` = **6**.`
  },
  {
    id: 'acc-ps-03',
    subSection: 'pseudo-code',
    category: 'Pseudo Code',
    topic: 'Recursion',
    difficulty: 'hard',
    title: 'Recursive Function Dry-Run',
    prompt_markdown: `What is the return value of the function call **\`solve(4, 2)\`**?\n\`\`\`text\nfunction solve(Integer x, Integer y)\n    if (y == 0)\n        return 1\n    End if\n    if (y mod 2 == 0)\n        return solve(x * x, y / 2)\n    else\n        return x * solve(x, y - 1)\n    End if\nEnd function\n\`\`\``,
    options: [
      { id: 'opt-ps03-a', key: 'A', text: '8' },
      { id: 'opt-ps03-b', key: 'B', text: '16' },
      { id: 'opt-ps03-c', key: 'C', text: '64' },
      { id: 'opt-ps03-d', key: 'D', text: '24' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\nThis is binary exponentiation ($x^y$):\n1. \`solve(4, 2)\`: $y=2$ is even $\\rightarrow$ calls \`solve(4*4, 2/2) = solve(16, 1)\`.\n2. \`solve(16, 1)\`: $y=1$ is odd $\\rightarrow$ calls $16 \\times \\text{solve}(16, 0)$.\n3. \`solve(16, 0)\`: $y=0 \\rightarrow$ returns 1.\n4. $16 \\times 1 = 16$.\nFinal return value is **16** ($4^2 = 16$).`
  },
  {
    id: 'acc-ps-04',
    subSection: 'pseudo-code',
    category: 'Pseudo Code',
    topic: 'Array Tracing',
    difficulty: 'medium',
    title: 'Array Index Swapping & Cumulative Sum',
    prompt_markdown: `What will be the output of the following pseudocode?\n\`\`\`text\nInteger arr[5] = {2, 4, 6, 8, 10}\nInteger i, sum = 0\nfor each i from 0 to 3\n    arr[i + 1] = arr[i] + arr[i + 1]\nEnd for\nPrint arr[4]\n\`\`\``,
    options: [
      { id: 'opt-ps04-a', key: 'A', text: '30' },
      { id: 'opt-ps04-b', key: 'B', text: '26' },
      { id: 'opt-ps04-c', key: 'C', text: '18' },
      { id: 'opt-ps04-d', key: 'D', text: '20' },
    ],
    correct_option: 'A',
    explanation_markdown: `**Correct Answer: A**\n\nTrace the in-place prefix summation:\n- $i = 0$: $arr[1] = arr[0] + arr[1] = 2 + 4 = 6$\n- $i = 1$: $arr[2] = arr[1] + arr[2] = 6 + 6 = 12$\n- $i = 2$: $arr[3] = arr[2] + arr[3] = 12 + 8 = 20$\n- $i = 3$: $arr[4] = arr[3] + arr[4] = 20 + 10 = 30$\n\nFinal \`arr[4]\` = **30**.`
  },
  {
    id: 'acc-ps-05',
    subSection: 'pseudo-code',
    category: 'Pseudo Code',
    topic: 'Bitwise Logic',
    difficulty: 'easy',
    title: 'Bitwise AND / OR Priority',
    prompt_markdown: `What does the following pseudocode print?\n\`\`\`text\nInteger a = 7, b = 3, c = 5\nInteger result\nresult = (a & b) | (b & c)\nPrint result\n\`\`\``,
    options: [
      { id: 'opt-ps05-a', key: 'A', text: '3' },
      { id: 'opt-ps05-b', key: 'B', text: '7' },
      { id: 'opt-ps05-c', key: 'C', text: '1' },
      { id: 'opt-ps05-d', key: 'D', text: '5' },
    ],
    correct_option: 'A',
    explanation_markdown: `**Correct Answer: A**\n\nBinary representations:\n- $a = 7 = 0111_2$\n- $b = 3 = 0011_2$\n- $c = 5 = 0101_2$\n\n1. $a \\ \& \\ b = 0111_2 \\ \& \\ 0011_2 = 0011_2 = 3$.\n2. $b \\ \& \\ c = 0011_2 \\ \& \\ 0101_2 = 0001_2 = 1$.\n3. \`result\` $= 3 \\mid 1 = 0011_2 \\mid 0001_2 = 0011_2 = 3$.`
  },
  {
    id: 'acc-ps-06',
    subSection: 'pseudo-code',
    category: 'Pseudo Code',
    topic: 'While Loops',
    difficulty: 'medium',
    title: 'Integer Division Loop Tracing',
    prompt_markdown: `What is the final value of **\`ans\`** after executing this pseudocode?\n\`\`\`text\nInteger n = 28, ans = 0\nwhile (n > 0)\n    if (n mod 3 == 0)\n        ans = ans + n\n    End if\n    n = n / 2\nEnd while\nPrint ans\n\`\`\``,
    options: [
      { id: 'opt-ps06-a', key: 'A', text: '14' },
      { id: 'opt-ps06-b', key: 'B', text: '3' },
      { id: 'opt-ps06-c', key: 'C', text: '9' },
      { id: 'opt-ps06-d', key: 'D', text: '0' },
    ],
    correct_option: 'B',
    explanation_markdown: `**Correct Answer: B**\n\nTracing integer division $n = \\lfloor n/2 \\rfloor$:\n1. $n = 28$: $28 \\pmod 3 = 1 \\ne 0$. $n = 28 / 2 = 14$.\n2. $n = 14$: $14 \\pmod 3 = 2 \\ne 0$. $n = 14 / 2 = 7$.\n3. $n = 7$: $7 \\pmod 3 = 1 \\ne 0$. $n = 7 / 2 = 3$.\n4. $n = 3$: $3 \\pmod 3 = 0$ ✓ $\\rightarrow$ \`ans = ans + 3 = 3\`. $n = 3 / 2 = 1$.\n5. $n = 1$: $1 \\pmod 3 = 1 \\ne 0$. $n = 1 / 2 = 0$.\n6. Loop terminates ($n = 0$).\n\nFinal \`ans\` = **3**.`
  },
]
