import { DEMO_CASES } from '@/lib/demo-cases';
import CreateCaseForm from './CreateCaseForm';
import ExportReport from './ExportReport';

export default function CasesPage() {
  const featured = DEMO_CASES[0];

  return (
    <main className="shell">
      <header>
        <b>CASE INTELLIGENCE DEMO</b>
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
          Seeded demo cases for UI review. Structured for Kleros-compatible ERC-1497
          evidence export. No live AI, database, blockchain, custody or on-chain Kleros
          submission. Capability flags on{' '}
          <a href="/api/v1/health">/api/v1/health</a> are the source of truth.
        </p>
      </div>

      <CreateCaseForm />

      <section className="case-list">
        <h2>Demo cases</h2>
        <p className="muted">From GET /api/v1/cases (seeded, non-persistent).</p>
        <div className="case-rows">
          {DEMO_CASES.map((c) => (
            <article key={c.id} className="case-row">
              <div>
                <strong>{c.id}</strong>
                <span>{c.title}</span>
              </div>
              <div className="case-meta">
                <span className={`badge badge-${c.status.toLowerCase()}`}>{c.status}</span>
                <span className="conf">{c.confidence}%</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <small>FEATURED EVIDENCE REVIEW — {featured.id}</small>
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
            <h2>Human review required</h2>
            <p>{featured.finding}</p>
          </article>
        </div>
        <ExportReport caseData={featured} />
      </section>
    </main>
  );
}
