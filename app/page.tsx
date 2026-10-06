const capabilities = [
  ['Case Intelligence', 'A clear workspace for organizing evidence and identifying facts that require human review.'],
  ['Evidence Mapping', 'Connect claims, sources, transactions and contradictions in an auditable evidence model.'],
  ['Decision Support', 'Present findings as decision support. AgentCourt AI does not decide disputes or replace jurors.'],
];

export default function Home() {
  return <main className="shell">
    <header><b>AGENTCOURT AI</b><span>Built by ElCryptoBoy</span></header>
    <section className="hero">
      <div>
        <small>THE INTELLIGENCE LAYER FOR DECENTRALIZED JUSTICE</small>
        <h1>Evidence intelligence for decentralized disputes.</h1>
        <p>AgentCourt AI is a product foundation for turning complex digital evidence into structured, reviewable dispute intelligence.</p>
        <div className="actions"><a href="/cases">Open Case Demo</a><a href="/docs">Product Documentation</a></div>
      </div>
      <div className="panel">
        <small>VERIFIED RELEASE</small>
        <h2>Evidence-first foundation</h2>
        <p>Public product shell, deterministic case demonstration, architecture documentation and health/API endpoints.</p>
        <strong>Live integrations are not claimed until implemented and tested.</strong>
      </div>
    </section>
    <section className="cards">{capabilities.map(([title, body]) => <article key={title}><strong>{title}</strong><p>{body}</p></article>)}</section>
    <section className="visual"><img src="/architecture.svg" alt="AgentCourt AI evidence intelligence architecture" /></section>
    <section className="panel"><small>POSITIONING</small><h2>Trust infrastructure for the autonomous economy.</h2><p>Starting with decentralized dispute workflows, AgentCourt AI is designed around evidence provenance, transparent analysis and human-controlled decisions.</p></section>
  </main>;
}
