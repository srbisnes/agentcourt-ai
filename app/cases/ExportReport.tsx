'use client';

import { buildEvidencePackage, packageToMarkdown } from '@/lib/kleros-evidence';
import type { DemoCase } from '@/lib/demo-cases';

function download(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function ExportReport({ caseData }: { caseData: DemoCase }) {
  function exportJson() {
    const pkg = buildEvidencePackage(caseData);
    download(
      `${caseData.id}-evidence.json`,
      JSON.stringify(pkg, null, 2),
      'application/json',
    );
  }

  function exportMarkdown() {
    const pkg = buildEvidencePackage(caseData);
    download(`${caseData.id}-report.md`, packageToMarkdown(pkg), 'text/markdown');
  }

  function exportCsv() {
    const pkg = buildEvidencePackage(caseData);
    const rows = [
      ['field', 'value'],
      ['caseId', pkg.caseId],
      ['title', pkg.caseTitle],
      ['finding', pkg.finding],
      ['confidence', String(pkg.confidence ?? '')],
      ...pkg.evidence.map((e, i) => [`evidence_${i + 1}`, `${e.name}: ${e.description}`]),
      ...pkg.contradictions.map((c, i) => [`contradiction_${i + 1}`, c]),
    ];
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    download(`${caseData.id}-report.csv`, csv, 'text/csv');
  }

  return (
    <div className="export-actions">
      <small>EXPORT (CLIENT-SIDE)</small>
      <p>
        Downloads structured report for analysis. PDF/Excel libraries are not bundled yet —
        JSON, Markdown and CSV are available now. ERC-1497 JSON is Kleros-shaped, not submitted
        on-chain.
      </p>
      <div className="actions">
        <button type="button" onClick={exportJson}>
          Export ERC-1497 JSON
        </button>
        <button type="button" onClick={exportMarkdown}>
          Export Markdown
        </button>
        <button type="button" onClick={exportCsv}>
          Export CSV
        </button>
      </div>
    </div>
  );
}
