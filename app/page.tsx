const capabilities = [
  ['Case Intelligence', 'A clear workspace for organizing evidence and identifying facts that require human review.'],
  ['Evidence Mapping', 'Connect claims, sources, transactions and contradictions in an auditable evidence model.'],
  ['Decision Support', 'Present findings as decision support. AgentCourt AI does not decide disputes or replace jurors.'],
];

const thesis = [
  ['Economic model', 'SaaS + evidence-intelligence API + enterprise integrations. A token is not required for the MVP.'],
  ['Trust moat', 'Permissioned dispute data, evidence provenance, reputation and verifiable reviewer history.'],
  ['Ecosystem', 'DAOs, marketplaces, freelancer platforms and AI-agent protocols are the initial partnership targets.'],
  ['Market timing', 'Web3 disputes are the near-term wedge; agent-to-agent commerce is the 2–5 year expansion thesis.'],
  ['Scalability', 'Stateless web services, asynchronous workers, evidence graph, retrieval and multi-chain adapters.'],
  ['Governance', 'AI supports evidence review; arbitration authority remains with the selected protocol or authorized decision-maker.'],
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
        <p>Public product shell, deterministic case demonstration, architecture visualization and API contract.</p>
        <strong>Live integrations are not claimed until implemented and tested.</strong>
      </div>
    </section>
    <section className="cards">{capabilities.map(([title, body]) => <article key={title}><strong>{title}</strong><p>{body}</p></article>)}</section>
    <section className="visual"><img src="/architecture.svg" alt="AgentCourt AI evidence intelligence architecture" /></section>
    <section className="panel strategy"><small>INVESTOR THESIS</small><h2>Trust infrastructure for the autonomous economy.</h2><p>The long-term value is not a tribunal UI. It is the evidence layer, reputation, reviewer network and verifiable history that can serve an expanding autonomous economy.</p><div className="cards">{thesis.map(([title, body]) => <article key={title}><strong>{title}</strong><p>{body}</p></article>)}</div></section>
    <section className="panel"><small>MARKET TIMING</small><h2>Build for today's disputes. Position for tomorrow's agents.</h2><p>Agent-to-agent disputes are still an emerging market. The near-term wedge is broader evidence-heavy Web3 workflows; the 2–5 year thesis is infrastructure for autonomous commerce.</p><a href="/docs">Read architecture, economics, governance, partnerships and market thesis →</a></section>
  </main>;
}
