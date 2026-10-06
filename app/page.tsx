const capabilities = [
  ['Case Intelligence', 'A clear workspace for organizing evidence and identifying facts that require human review.'],
  ['Evidence Mapping', 'Connect claims, sources, transactions and contradictions in an auditable evidence model.'],
  ['Decision Support', 'Present findings as decision support. AgentCourt AI does not decide disputes or replace jurors.'],
];

export default function Home() {
  return (
    <main className="shell">
      <header>
        <b>AGENTCOURT AI</b>
        <nav className="nav">
          <a href="/cases">Cases</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/docs">Docs</a>
        </nav>
      </header>
      <section className="hero">
        <div>
          <small>THE INTELLIGENCE LAYER FOR DECENTRALIZED JUSTICE</small>
          <h1>Evidence intelligence for decentralized disputes.</h1>
          <p>
            AgentCourt AI turns complex digital evidence into structured, reviewable packages
            for Kleros jurors, DAOs and protocols — without replacing human judgment.
          </p>
          <div className="actions">
            <a href="/cases">Open Case Demo</a>
            <a href="/dashboard">Dispute Dashboard</a>
            <a href="/docs">Product Documentation</a>
          </div>
        </div>
        <div className="panel">
          <small>VERIFIED RELEASE</small>
          <h2>Evidence-first foundation</h2>
          <p>
            Public product shell, ERC-1497-shaped evidence export, demo dashboard and API
            contract. Built to feed Kleros — not to replace it.
          </p>
          <strong>Live Kleros / AI / custody integrations are not claimed until implemented and tested.</strong>
        </div>
      </section>
      <section className="cards">
        {capabilities.map(([title, body]) => (
          <article key={title}>
            <strong>{title}</strong>
            <p>{body}</p>
          </article>
        ))}
      </section>
      <section className="visual">
        <img src="/architecture.svg" alt="AgentCourt AI evidence intelligence architecture" />
      </section>
      <section className="panel">
        <small>FOR KLEROS</small>
        <h2>We prepare the evidence. Court decides.</h2>
        <p>
          Export ERC-1497 JSON from the case workspace. On-chain submission via{' '}
          <code>@kleros/kleros-sdk</code> is the next integration step — documented in{' '}
          <a href="https://github.com/srbisnes/agentcourt-ai/blob/main/docs/KLEROS.md">docs/KLEROS.md</a>.
        </p>
      </section>
    </main>
  );
}
