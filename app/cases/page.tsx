import Workspace from './Workspace';

export default function CasesPage() {
  return (
    <main className="shell">
      <header>
        <b>AGENTCOURT AI · TRY</b>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/docs">Docs</a>
        </nav>
      </header>
      <Workspace />
    </main>
  );
}
