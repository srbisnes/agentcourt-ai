export default function Home() {
  return (
    <main className="shell">
      <header>
        <b>AGENTCOURT AI</b>
        <nav className="nav">
          <a href="/cases">Try demo</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/docs">Docs</a>
        </nav>
      </header>
      <section className="hero">
        <div>
          <small>BUILT BY ELCRYPTOBOY</small>
          <h1>Try a dispute in 60 seconds.</h1>
          <p>
            Load a ready example, add evidence, run analysis, export a package, and leave feedback.
            Share the link — people can use it without asking you for help.
          </p>
          <div className="actions">
            <a href="/cases">Open interactive demo</a>
            <a href="/cases">Marketplace example</a>
            <a href="/docs">API docs</a>
          </div>
        </div>
        <div className="panel">
          <small>WHAT YOU CAN DO NOW</small>
          <h2>Feedback-ready flow</h2>
          <p>1. Pick an example case</p>
          <p>2. Add or edit evidence notes</p>
          <p>3. Run analysis (deterministic demo)</p>
          <p>4. Export JSON · leave a rating</p>
          <strong>Saved in the visitor browser. No account required.</strong>
        </div>
      </section>
      <section className="cards">
        <article>
          <strong>Marketplace</strong>
          <p>Paid but not delivered — conflicting dates.</p>
        </article>
        <article>
          <strong>Freelance</strong>
          <p>Milestone incomplete vs claimed done.</p>
        </article>
        <article>
          <strong>Agent vs agent</strong>
          <p>Invalid API delivery between agents.</p>
        </article>
      </section>
    </main>
  );
}
