'use client';

import { useState } from 'react';

type Accepted = {
  status: string;
  mode: string;
  persistent: boolean;
  note?: string;
  case: { id: string; title: string; status: string; confidence: null };
};

export default function CreateCaseForm() {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [accepted, setAccepted] = useState<Accepted | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setAccepted(null);
    setLoading(true);
    try {
      const res = await fetch('/api/v1/cases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || 'Request failed');
        return;
      }
      setAccepted(data as Accepted);
      setTitle('');
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="panel">
      <small>CREATE CASE (DEMO API)</small>
      <h2>Open a demo case</h2>
      <p>
        This form calls <code>POST /api/v1/cases</code>. The API accepts the title and
        returns <code>202</code>. Nothing is persisted. No AI, custody or arbitration runs.
      </p>
      <form onSubmit={onSubmit} className="create-form">
        <label htmlFor="case-title">Case title</label>
        <input
          id="case-title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Marketplace delivery dispute"
          required
          maxLength={200}
          disabled={loading}
        />
        <button type="submit" disabled={loading || !title.trim()}>
          {loading ? 'Submitting…' : 'Create demo case'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {accepted && (
        <div className="accepted">
          <strong>Accepted (demo only)</strong>
          <pre>{JSON.stringify(accepted, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
