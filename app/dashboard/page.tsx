import { COURT_METRICS, LIVE_CASES } from '@/lib/court-metrics';

export default function DashboardPage() {
  return (
    <main className="shell">
      <header>
        <b>AGENTCOURT AI · COURT DASHBOARD</b>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/cases">Cases</a>
          <a href="/docs">Docs</a>
        </nav>
      </header>

      <div className="panel warn">
        <small>DEMO TELEMETRY — NOT LIVE KLEROS INDEXER</small>
        <h1>Dispute intelligence overview</h1>
        <p>
          The five dimensions below match the product narrative for Kleros review
          (stake, coherence, ruling time, live cases, file agent dispute). Values are{' '}
          <strong>synthetic demo</strong>. Real PNK stakes, votes and periods require a Court
          subgraph / SDK integration — see{' '}
          <a href="https://github.com/srbisnes/agentcourt-ai/blob/main/docs/KLEROS.md">docs/KLEROS.md</a>.
        </p>
      </div>

      <section className="stat-grid five">
        {COURT_METRICS.map((m) => (
          <article key={m.id} className="stat">
            <small>{m.title.toUpperCase()}</small>
            <strong>{m.value}</strong>
            <span>{m.detail}</span>
            <span className="badge badge-review">DEMO</span>
          </article>
        ))}
      </section>

      <section className="panel">
        <small>LIVE CASES (DEMO FILTER)</small>
        <h2>Active periods</h2>
        <p className="muted">
          EVIDENCE_PERIOD · VOTING_PERIOD · APPEAL_PERIOD · EXECUTED — illustrative only.
        </p>
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
        <div className="actions" style={{ marginTop: 16 }}>
          <a href="/cases">Open case workspace</a>
          <a href="/cases#file-dispute">File Agent Dispute</a>
        </div>
      </section>
    </main>
  );
}
