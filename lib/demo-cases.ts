/**
 * Deterministic demo cases for the public product shell.
 * Not persisted. Not connected to AI, custody or arbitration.
 */

export type DemoCaseStatus = 'ACTIVE' | 'REVIEW' | 'RESOLVED';

export type DemoEvidence = {
  id: string;
  label: string;
  source: string;
  verification: 'verified' | 'pending';
};

export type DemoCase = {
  id: string;
  title: string;
  status: DemoCaseStatus;
  confidence: number;
  evidence: DemoEvidence[];
  contradictions: string[];
  finding: string;
};

export const DEMO_CASES: DemoCase[] = [
  {
    id: 'AC-10482',
    title: 'Marketplace delivery dispute',
    status: 'ACTIVE',
    confidence: 87,
    evidence: [
      {
        id: 'ev-1',
        label: 'Payment record',
        source: 'supplied transaction record',
        verification: 'verified',
      },
      {
        id: 'ev-2',
        label: 'Delivery claim',
        source: 'party statement',
        verification: 'pending',
      },
    ],
    contradictions: [
      'Delivery timestamp conflicts with the payment narrative.',
    ],
    finding: 'Human review required. AgentCourt AI does not determine the outcome.',
  },
  {
    id: 'AC-10477',
    title: 'DAO contributor payment',
    status: 'REVIEW',
    confidence: 74,
    evidence: [
      {
        id: 'ev-3',
        label: 'Milestone description',
        source: 'governance proposal',
        verification: 'verified',
      },
    ],
    contradictions: ['Contributor claims completion; treasury record is incomplete.'],
    finding: 'Evidence package ready for DAO reviewer. No automated ruling.',
  },
  {
    id: 'AC-10461',
    title: 'NFT escrow disagreement',
    status: 'ACTIVE',
    confidence: 92,
    evidence: [
      {
        id: 'ev-4',
        label: 'Escrow condition text',
        source: 'contract metadata',
        verification: 'verified',
      },
    ],
    contradictions: [],
    finding: 'Structured evidence available for authorized arbitrator.',
  },
  {
    id: 'AC-10439',
    title: 'Freelancer milestone dispute',
    status: 'RESOLVED',
    confidence: 96,
    evidence: [
      {
        id: 'ev-5',
        label: 'Deliverable hash',
        source: 'submitted artifact',
        verification: 'verified',
      },
    ],
    contradictions: [],
    finding: 'Demo case marked resolved for UI illustration only.',
  },
];
