/** Ready-made scenarios visitors can try for feedback. */

export type ExampleEvidence = { label: string; note: string };

export type ReadyExample = {
  id: string;
  title: string;
  blurb: string;
  parties: string;
  evidence: ExampleEvidence[];
};

export const READY_EXAMPLES: ReadyExample[] = [
  {
    id: 'ex-marketplace',
    title: 'Marketplace: paid but not delivered',
    blurb: 'Buyer paid; seller claims shipped. Conflicting dates.',
    parties: 'Buyer · Seller',
    evidence: [
      {
        label: 'Payment receipt',
        note: 'Tx 0xabc… paid 0.4 ETH on 2026-09-12 to seller escrow.',
      },
      {
        label: 'Seller message',
        note: 'Seller wrote: shipped on 2026-09-10 via tracking ZYX-99.',
      },
      {
        label: 'Buyer message',
        note: 'Buyer: tracking shows no movement; never received package.',
      },
    ],
  },
  {
    id: 'ex-freelance',
    title: 'Freelance: milestone incomplete',
    blurb: 'Client says deliverable incomplete; freelancer says done.',
    parties: 'Client · Freelancer',
    evidence: [
      {
        label: 'Contract milestone',
        note: 'Milestone 2: responsive landing page + 3 sections, due 2026-09-20.',
      },
      {
        label: 'Submitted repo',
        note: 'Freelancer linked repo commit 7f3a — only hero section present.',
      },
      {
        label: 'Chat export',
        note: 'Client asked for footer and FAQ; freelancer replied done on 09-19.',
      },
    ],
  },
  {
    id: 'ex-agent',
    title: 'Agent-to-agent: bad API delivery',
    blurb: 'Agent A paid Agent B for data job; output schema invalid.',
    parties: 'Agent A · Agent B',
    evidence: [
      {
        label: 'Job order',
        note: 'JSON schema required fields: price, timestamp, source.',
      },
      {
        label: 'Agent B output',
        note: 'Returned CSV without timestamp field; 12 rows null price.',
      },
      {
        label: 'Payment lock',
        note: '0.02 ETH locked in demo vault until acceptance (illustrative).',
      },
    ],
  },
];
