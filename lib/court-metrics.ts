/**
 * Court-facing demo metrics for AgentCourt AI dashboard.
 * SYNTHETIC / DEMO — not live Kleros subgraph or on-chain reads.
 * Flip integrations.arbitration only when real indexer is wired.
 */

export type CasePeriod =
  | 'EVIDENCE_PERIOD'
  | 'VOTING_PERIOD'
  | 'APPEAL_PERIOD'
  | 'EXECUTED'
  | 'DEMO_REVIEW';

export type CourtMetricCard = {
  id: string;
  title: string;
  value: string;
  detail: string;
  demo: true;
};

/** Five dimensions for Kleros-facing presentation (demo values). */
export const COURT_METRICS: CourtMetricCard[] = [
  {
    id: 'staked',
    title: 'Staked in Court',
    value: '315,000+ PNK',
    detail:
      'Illustrative capital across specialized subcourts. Not a live Pinakion read.',
    demo: true,
  },
  {
    id: 'coherence',
    title: 'Schelling Coherence',
    value: '94.2%',
    detail:
      'Illustrative consensus score (Schelling-point style). Not live juror vote aggregation.',
    demo: true,
  },
  {
    id: 'ruling-time',
    title: 'Mean Ruling Time',
    value: '3.4 days',
    detail:
      'Illustrative mean from evidence filing to resolution. Not measured from production disputes.',
    demo: true,
  },
  {
    id: 'live-cases',
    title: 'Live Cases',
    value: 'Active filter',
    detail:
      'Filter demo cases by EVIDENCE / VOTING / APPEAL periods. Demo data only.',
    demo: true,
  },
  {
    id: 'file-agent',
    title: 'File Agent Dispute',
    value: 'Demo action',
    detail:
      'Open a demo agent-to-agent case via API. No ERC-792 on-chain createDispute yet.',
    demo: true,
  },
];

export type LiveCaseCard = {
  id: string;
  title: string;
  period: CasePeriod;
  subcourt: string;
  confidence: number;
  parties: string;
};

export const LIVE_CASES: LiveCaseCard[] = [
  {
    id: 'AC-10482',
    title: 'Marketplace delivery dispute',
    period: 'EVIDENCE_PERIOD',
    subcourt: 'General Court (demo)',
    confidence: 87,
    parties: 'Buyer · Seller',
  },
  {
    id: 'AC-10477',
    title: 'DAO contributor payment',
    period: 'VOTING_PERIOD',
    subcourt: 'Blockchain Technical (demo)',
    confidence: 74,
    parties: 'DAO · Contributor',
  },
  {
    id: 'AC-10461',
    title: 'NFT escrow disagreement',
    period: 'APPEAL_PERIOD',
    subcourt: 'General Court (demo)',
    confidence: 92,
    parties: 'Owner · Counterparty',
  },
  {
    id: 'AC-10439',
    title: 'Freelancer milestone dispute',
    period: 'EXECUTED',
    subcourt: 'Humanity (demo)',
    confidence: 96,
    parties: 'Client · Freelancer',
  },
  {
    id: 'AC-10501',
    title: 'Agent-to-agent delivery failure',
    period: 'EVIDENCE_PERIOD',
    subcourt: 'General Court (demo)',
    confidence: 81,
    parties: 'Agent A · Agent B',
  },
];
