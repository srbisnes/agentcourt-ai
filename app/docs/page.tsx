const links = [
  ['Architecture', '/docs/ARCHITECTURE.md'],
  ['Economics', '/docs/ECONOMICS.md'],
  ['Governance', '/docs/GOVERNANCE.md'],
  ['Scalability', '/docs/SCALABILITY.md'],
  ['Ecosystem & Moat', '/docs/ECOSYSTEM.md'],
  ['Juror Incentives', '/docs/JUROR_INCENTIVES.md'],
  ['Partnerships', '/docs/PARTNERSHIPS.md'],
  ['Market Thesis', '/docs/MARKET.md'],
  ['Investor Brief', '/docs/INVESTOR.md'],
];

export default function Docs() {
  return <main className="shell">
    <header><b>AGENTCOURT AI DOCS</b><a href="/">Home</a></header>
    <div className="panel"><small>IMPLEMENTED API</small><h1>Health and API contract</h1><p>The current public API surface is intentionally small and deterministic.</p>
      <pre>{`GET /api/v1/health
GET /api/v1/openapi
GET /api/v1/cases
POST /api/v1/cases { "title": "Example case" }`}</pre>
      <p>No authentication, persistence, AI provider, wallet signing or arbitration submission is exposed until those integrations are implemented and tested.</p>
      <a href="/api/v1/openapi">OpenAPI JSON</a>
    </div>
    <section className="cards">{links.map(([title, href]) => <article key={title}><strong>{title}</strong><p>Strategy and implementation notes for the next product stages.</p><a href={href}>Read →</a></article>)}</section>
  </main>;
}
