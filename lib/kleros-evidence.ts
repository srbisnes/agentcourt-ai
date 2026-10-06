/**
 * ERC-1497 Evidence package builder for Kleros-compatible exports.
 * Spec: https://docs.kleros.io/developers/arbitrable-apps/erc-1497
 *
 * This module formats evidence. It does NOT submit on-chain,
 * upload to IPFS, or call Kleros contracts. Those require wallet + network.
 */

import type { DemoCase, DemoEvidence } from './demo-cases';

/** Single evidence item as jurors see it in Court UIs */
export type Erc1497Evidence = {
  name: string;
  description: string;
  fileURI?: string;
  fileHash?: string;
  fileTypeExtension?: string;
};

/** AgentCourt structured finding attached as description context */
export type EvidencePackage = {
  standard: 'ERC-1497';
  mode: 'demo' | 'production';
  caseId: string;
  caseTitle: string;
  generatedAt: string;
  disclaimer: string;
  evidence: Erc1497Evidence[];
  contradictions: string[];
  finding: string;
  confidence: number | null;
  kleros: {
    readyForSubmission: boolean;
    requires: string[];
    notes: string;
  };
};

export function evidenceToErc1497(ev: DemoEvidence): Erc1497Evidence {
  return {
    name: ev.label,
    description: `Source: ${ev.source}. Verification: ${ev.verification}.`,
    fileTypeExtension: 'txt',
  };
}

export function buildEvidencePackage(c: DemoCase): EvidencePackage {
  return {
    standard: 'ERC-1497',
    mode: 'demo',
    caseId: c.id,
    caseTitle: c.title,
    generatedAt: new Date().toISOString(),
    disclaimer:
      'Demo package only. Not submitted to Kleros. No on-chain Evidence event. No IPFS pin.',
    evidence: c.evidence.map(evidenceToErc1497),
    contradictions: c.contradictions,
    finding: c.finding,
    confidence: c.confidence,
    kleros: {
      readyForSubmission: false,
      requires: [
        'IPFS (or permanent storage) URI for each file',
        'fileHash matching content',
        'Arbitrable contract or DisputeResolver emitting Evidence event',
        'Active dispute / evidence group ID',
        'Wallet + arbitration fee if creating a new dispute',
      ],
      notes:
        'Use @kleros/kleros-sdk uploadEvidence + submitEvidence for V2 when integrations.arbitration becomes true.',
    },
  };
}

export function packageToMarkdown(pkg: EvidencePackage): string {
  const lines = [
    `# Evidence report — ${pkg.caseId}`,
    ``,
    `**Title:** ${pkg.caseTitle}`,
    `**Generated:** ${pkg.generatedAt}`,
    `**Standard:** ${pkg.standard}`,
    `**Mode:** ${pkg.mode}`,
    ``,
    `> ${pkg.disclaimer}`,
    ``,
    `## Finding`,
    pkg.finding,
    ``,
    `**Confidence (demo):** ${pkg.confidence ?? 'n/a'}`,
    ``,
    `## Evidence`,
  ];
  for (const e of pkg.evidence) {
    lines.push(`### ${e.name}`, e.description, ``);
  }
  if (pkg.contradictions.length) {
    lines.push(`## Contradictions`);
    for (const c of pkg.contradictions) lines.push(`- ${c}`);
    lines.push(``);
  }
  lines.push(
    `## Kleros submission checklist`,
    ...pkg.kleros.requires.map((r) => `- [ ] ${r}`),
    ``,
    pkg.kleros.notes,
    ``,
  );
  return lines.join('\n');
}
