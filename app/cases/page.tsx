export default function Cases() {
  return <main className="shell">
    <header><b>CASE INTELLIGENCE DEMO</b><a href="/">Home</a></header>
    <div className="panel"><small>DEMO DATA — NOT A LIVE ARBITRATION CASE</small><h1>Evidence review</h1><p>This demonstration shows the intended evidence-first workflow without claiming live blockchain, AI, Kleros or database integrations.</p></div>
    <div className="cards">
      <article><small>EVIDENCE</small><h2>Payment record</h2><p>Source: supplied transaction record. Verification: pending human review.</p></article>
      <article><small>CONTRADICTION</small><h2>Delivery timestamp</h2><p>The supplied delivery timestamp conflicts with the payment narrative.</p></article>
      <article><small>FINDING</small><h2>Human review required</h2><p>AgentCourt AI does not determine the outcome. Evidence must be reviewed by the authorized decision-maker.</p></article>
    </div>
  </main>;
}
