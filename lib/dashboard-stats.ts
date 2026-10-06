/**
 * Demo statistics for the dispute dashboard.
 * Labeled as demo — not live Kleros indexer data.
 */

export type DashboardStats = {
  mode: 'demo';
  note: string;
  disputes: {
    total: number;
    active: number;
    review: number;
    resolved: number;
  };
  evidence: {
    items: number;
    verified: number;
    pending: number;
  };
  contradictions: {
    flags: number;
    highRelevance: number;
  };
  /** Illustrative only — not drawn from Kleros Court */
  jurors: {
    label: string;
    drawn: number;
    voted: number;
    pending: number;
  };
  votes: {
    label: string;
    forClaimant: number;
    forRespondent: number;
    abstain: number;
  };
  history: { month: string; resolved: number }[];
};

export const DASHBOARD_STATS: DashboardStats = {
  mode: 'demo',
  note: 'Synthetic demo metrics for UI. Not connected to Kleros Court, subgraph, or live votes.',
  disputes: { total: 4, active: 2, review: 1, resolved: 1 },
  evidence: { items: 14, verified: 12, pending: 2 },
  contradictions: { flags: 3, highRelevance: 2 },
  jurors: {
    label: 'Illustrative panel (not on-chain)',
    drawn: 5,
    voted: 4,
    pending: 1,
  },
  votes: {
    label: 'Illustrative split (not on-chain)',
    forClaimant: 2,
    forRespondent: 2,
    abstain: 0,
  },
  history: [
    { month: 'May', resolved: 1 },
    { month: 'Jun', resolved: 2 },
    { month: 'Jul', resolved: 1 },
    { month: 'Aug', resolved: 3 },
    { month: 'Sep', resolved: 2 },
    { month: 'Oct', resolved: 1 },
  ],
};
