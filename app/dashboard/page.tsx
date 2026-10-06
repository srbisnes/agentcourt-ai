import { DASHBOARD_STATS } from '@/lib/dashboard-stats';
import { DEMO_CASES } from '@/lib/demo-cases';

export default function DashboardPage() {
  const s = DASHBOARD_STATS;
  const maxResolved = Math.max(...s.history.map((h) => h.resolved), 1);

  return (
    <main className="shell">
      <header>
        <b>DISPUTE DASHBOARD</b>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/cases">Cases</a>
          <a href="/docs">Docs</a>
        </nav>
      </header>

      <div className="panel warn">
        <small>DEMO MODE</small>
        <h1>Dispute intelligence overview</h1>
        <p>{s.note}</p>
        <p>
          Live juror draws, votes and historical Court stats require a Kleros subgraph /
          indexer integration. That path is documented in{' '}
          <a href="https://github.com/srbisnes/agentcourt-ai/blob/main/docs/KLEROS.md">
            docs/KLEROS.md
          </a>
          .
        </p>
      </div>

      <section className="stat-grid">
        <article className="stat">
          <small>DISPUTES</small>
          <strong>{s.disputes.total}</strong>
          <span>
            {s.disputes.active} active · {s.disputes.review} review · {s.disputes.resolved}{' '}
            resolved
          </span>
        </article>
        <article className="stat">
          <small>EVIDENCE</small>
          <strong>{s.evidence.items}</strong>
          <span>
            {s.evidence.verified} verified · {s.evidence.pending} pending
          </span>
        </article>
        <article className="stat">
          <small>CONTRADICTIONS</small>
          <strong>{s.contradictions.flags}</strong>
          <span>{s.contradictions.highRelevance} high relevance</span>
        </article>
        <article className="stat">
          <small>JURORS (ILLUSTRATIVE)</small>
          <strong>{s.jurors.drawn}</strong>
          <span>
            {s.jurors.voted} voted · {s.jurors.pending} pending
          </span>
        </article>
      </section>

      <section className="panel">
        <small>VOTES (ILLUSTRATIVE — NOT ON-CHAIN)</small>
        <h2>{s.votes.label}</h2>
        <div className="vote-bars">
          <div className="vote-row">
            <span>Claimant</span>
            <div className="bar">
              <i style={{ width: `${(s.votes.forClaimant / 5) * 100}%` }} />
            </div>
            <b>{s.votes.forClaimant}</b>
          </div>
          <div className="vote-row">
            <span>Respondent</span>
            <div className="bar">
              <i style={{ width: `${(s.votes.forRespondent / 5) * 100}%` }} />
            </div>
            <b>{s.votes.forRespondent}</b>
          </div>
        </div>
      </section>

      <section className="panel">
        <small>RESOLVED PER MONTH (DEMO)</small>
        <h2>Historical volume</h2>
        <div className="hist">
          {s.history.map((h) => (
            <div key={h.month} className="hist-col">
              <div
                className="hist-bar"
                style={{ height: `${(h.resolved / maxResolved) * 100}%` }}
                title={`${h.resolved}`}
              />
              <span>{h.month}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <small>OPEN DEMO CASES</small>
        <h2>From seeded workspace</h2>
        <ul className="dash-list">
          {DEMO_CASES.map((c) => (
            <li key={c.id}>
              <a href="/cases">
                <strong>{c.id}</strong> {c.title}
              </a>
              <span className={`badge badge-${c.status.toLowerCase()}`}>{c.status}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
