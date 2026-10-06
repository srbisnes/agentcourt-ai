import { DEMO_CASES } from '@/lib/demo-cases';
import { LIVE_CASES } from '@/lib/court-metrics';
import CreateCaseForm from './CreateCaseForm';
import ExportReport from './ExportReport';
import FileAgentDispute from './FileAgentDispute';

export default function CasesPage() {
  const featured = DEMO_CASES[0];

  return (
    <main className="shell">
      <header>
        <b>AGENTCOURT AI · CASE WORKSPACE</b>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/docs">Docs</a>
        </nav>
      </header>

      <div className="panel">
        <small>DEMO DATA — NOT A LIVE ARBITRATION CASE</small>
        <h1>Dispute workspace</h1>
        <p>
          Seeded cases, period labels, ERC-1497 export and File Agent Dispute. Built by{' '}
          <strong>ElCryptoBoy</strong> for Kleros-compatible evidence preparation — not automated
          verdicts.
        </p>
      </div>

      <FileAgentDispute />
      <CreateCaseForm />

      <section className="case-list">
        <h2>Live cases (demo periods)</h2>
        <p className="muted">Filter view — data from seeded list, not Court indexer.</p>
        <div className="case-rows">
          {LIVE_CASES.map((c) => (
            <article key={c.id} className="case-row">
              <div>
                <strong>{c.id}</strong>
                <span>{c.title}</span>
                <span className="muted">
                  {c.parties} · {c.subcourt}
                </span>
              </div>
              <div className="case-meta">
                <span className="badge badge-active">{c.period}</span>
                <span className="conf">{c.confidence}%</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <small>FEATURED EVIDENCE — {featured.id}</small>
        <h2>{featured.title}</h2>
        <p>{featured.finding}</p>
        <div className="cards">
          {featured.evidence.map((ev) => (
            <article key={ev.id}>
              <small>EVIDENCE</small>
              <h2>{ev.label}</h2>
              <p>
                Source: {ev.source}. Verification: {ev.verification}.
              </p>
            </article>
          ))}
          {featured.contradictions.map((cx, i) => (
            <article key={i}>
              <small>CONTRADICTION</small>
              <h2>Flag</h2>
              <p>{cx}</p>
            </article>
          ))}
          <article>
            <small>FINDING</small>
            <h2>Human / Court decision</h2>
            <p>{featured.finding}</p>
          </article>
        </div>
        <ExportReport caseData={featured} />
      </section>
    </main>
  );
}
