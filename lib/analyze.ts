/**
 * Deterministic demo analysis — no external AI.
 * Produces findings visitors can react to for feedback.
 */

export type EvidenceItem = {
  id: string;
  label: string;
  note: string;
};

export type AnalysisResult = {
  confidence: number;
  findings: string[];
  contradictions: string[];
  nextStep: string;
  analyzedAt: string;
};

export function analyzeEvidence(title: string, evidence: EvidenceItem[]): AnalysisResult {
  const findings: string[] = [];
  const contradictions: string[] = [];
  const text = `${title} ${evidence.map((e) => `${e.label} ${e.note}`).join(' ')}`.toLowerCase();

  if (evidence.length === 0) {
    return {
      confidence: 20,
      findings: ['No evidence attached yet. Add at least one note or document description.'],
      contradictions: [],
      nextStep: 'Add evidence, then run analysis again.',
      analyzedAt: new Date().toISOString(),
    };
  }

  findings.push(`${evidence.length} evidence item(s) recorded for review.`);

  if (/paid|payment|eth|tx 0x|receipt/.test(text)) {
    findings.push('Payment-related evidence is present and should be verified against chain or receipt.');
  }
  if (/ship|deliver|tracking|package|received/.test(text)) {
    findings.push('Delivery claims appear in the record; dates and tracking should be compared.');
  }
  if (/milestone|repo|commit|deliverable|schema|csv|json/.test(text)) {
    findings.push('Work-product or schema claims are present; compare against the agreed scope.');
  }
  if (/agent/.test(text)) {
    findings.push('Agent-to-agent context detected — useful for autonomous commerce pilots.');
  }

  // Simple contradiction heuristics
  const hasBuyerBad = /never received|no movement|incomplete|invalid|null/.test(text);
  const hasSellerGood = /shipped|done|completed|delivered/.test(text);
  if (hasBuyerBad && hasSellerGood) {
    contradictions.push(
      'One party claims completion/delivery; the other claims failure or non-receipt. Human review required.',
    );
  }

  const dateMatches = text.match(/2026-\d{2}-\d{2}/g) || [];
  if (dateMatches.length >= 2) {
    const unique = [...new Set(dateMatches)];
    if (unique.length >= 2) {
      contradictions.push(
        `Multiple dates in evidence (${unique.slice(0, 3).join(', ')}). Check chronological consistency.`,
      );
    }
  }

  if (contradictions.length === 0 && evidence.length >= 2) {
    findings.push('No automatic contradiction flags. A human or juror should still review sources.');
  }

  let confidence = 55 + Math.min(evidence.length * 8, 30);
  if (contradictions.length) confidence = Math.max(40, confidence - contradictions.length * 10);
  confidence = Math.min(92, confidence);

  return {
    confidence,
    findings,
    contradictions,
    nextStep:
      contradictions.length > 0
        ? 'Export the evidence package and hand to a human reviewer or Kleros juror workflow.'
        : 'Optionally add more evidence, then export ERC-1497 JSON for external review.',
    analyzedAt: new Date().toISOString(),
  };
}
