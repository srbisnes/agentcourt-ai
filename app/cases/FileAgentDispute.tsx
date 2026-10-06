'use client';

import { useState } from 'react';

/**
 * File Agent Dispute — demo modal flow.
 * Calls POST /api/v1/cases. Does not create on-chain ERC-792 disputes.
 */
export default function FileAgentDispute() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('Agent-to-agent delivery failure');
  const [agentA, setAgentA] = useState('agent-a.example');
  const [agentB, setAgentB] = useState('agent-b.example');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<unknown>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const fullTitle = `${title.trim()} [${agentA} vs ${agentB}]`;
      const res = await fetch('/api/v1/cases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: fullTitle }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || 'Request failed');
        return;
      }
      setResult(data);
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="file-dispute" className="panel">
      <small>FILE AGENT DISPUTE</small>
      <h2>Radicar disputa entre agentes (demo)</h2>
      <p>
        Prepares a demo case for agent-to-agent commerce. No wallet, no ERC-792{' '}
        <code>createDispute</code>, no AES custody of funds. SHA-256 hashing of uploads is
        roadmap after file storage exists.
      </p>
      {!open ? (
        <button type="button" onClick={() => setOpen(true)}>
          File Agent Dispute
        </button>
      ) : (
        <form onSubmit={submit} className="create-form">
          <label htmlFor="disp-title">Dispute title</label>
          <input
            id="disp-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            maxLength={160}
          />
          <label htmlFor="agent-a">Agent A</label>
          <input id="agent-a" value={agentA} onChange={(e) => setAgentA(e.target.value)} required />
          <label htmlFor="agent-b">Agent B</label>
          <input id="agent-b" value={agentB} onChange={(e) => setAgentB(e.target.value)} required />
          <div className="actions">
            <button type="submit" disabled={loading}>
              {loading ? 'Filing…' : 'Submit demo dispute'}
            </button>
            <button type="button" onClick={() => setOpen(false)}>
              Cancel
            </button>
          </div>
          {error && <p className="error">{error}</p>}
          {result != null && (
            <div className="accepted">
              <strong>Accepted (demo only — not on-chain)</strong>
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
