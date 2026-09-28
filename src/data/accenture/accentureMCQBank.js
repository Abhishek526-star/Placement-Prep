// src/data/accenture/accentureMCQBank.js
// Master Accenture Technical MCQ Bank
// Exclusively populated with user's verified questions (Total: 654 Questions across 6 Sub-Sections):
// 1. CS Fundamental: 120 Questions (OS, SQL/DBMS, DSA)
// 2. Computer Network: 120 Questions (Networking, Protocols, Routing)
// 3. Network Security: 120 Questions (Security, Cryptography, Firewalls)
// 4. Cloud Computing: 100 Questions (Virtualization, Storage, IAM, VPC, Deployment)
// 5. MS Office: 156 Questions (Word, Excel, PowerPoint, Outlook, Computer Fundamentals)
// 6. Pseudo Code: 38 Questions (Bitwise, Recursion, Loops, Arrays - 2 Mins/Q Allocation)

import { CS_FUNDAMENTALS_MCQS } from './csFundamentalsData.js';
import { COMPUTER_NETWORKS_MCQS } from './computerNetworksData.js';
import { NETWORK_SECURITY_CLOUD_MCQS } from './networkSecurityCloudData.js';
import { CLOUD_COMPUTING_MCQS } from './cloudComputingData.js';
import { MS_OFFICE_MCQS } from './msOfficeData.js';
import { PSEUDO_CODE_MCQS } from './pseudoCodeData.js';

export {
  CS_FUNDAMENTALS_MCQS,
  COMPUTER_NETWORKS_MCQS,
  NETWORK_SECURITY_CLOUD_MCQS,
  CLOUD_COMPUTING_MCQS,
  MS_OFFICE_MCQS,
  PSEUDO_CODE_MCQS
};

export const ALL_ACCENTURE_TECHNICAL_MCQS = [
  ...CS_FUNDAMENTALS_MCQS,
  ...COMPUTER_NETWORKS_MCQS,
  ...NETWORK_SECURITY_CLOUD_MCQS,
  ...CLOUD_COMPUTING_MCQS,
  ...MS_OFFICE_MCQS,
  ...PSEUDO_CODE_MCQS
];
