'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { READY_EXAMPLES } from '@/lib/examples';
import { analyzeEvidence, type AnalysisResult, type EvidenceItem } from '@/lib/analyze';

type UserCase = {
  id: string;
  title: string;
  parties: string;
  evidence: EvidenceItem[];
  analysis: AnalysisResult | null;
  createdAt: string;
};

type Feedback = {
  rating: number;
  comment: string;
  at: string;
};

const STORAGE_CASES = 'agentcourt_cases_v1';
const STORAGE_FEEDBACK = 'agentcourt_feedback_v1';

function uid(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export default function Workspace() {
  const [cases, setCases] = useState<UserCase[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [evLabel, setEvLabel] = useState('');
  const [evNote, setEvNote] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [feedbackSaved, setFeedbackSaved] = useState(false);
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_CASES);
      if (raw) {
        const parsed = JSON.parse(raw) as UserCase[];
        setCases(parsed);
        if (parsed[0]) setSelectedId(parsed[0].id);
      }
      const fb = localStorage.getItem(STORAGE_FEEDBACK);
      if (fb) setFeedbackCount((JSON.parse(fb) as Feedback[]).length);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((next: UserCase[]) => {
    setCases(next);
    localStorage.setItem(STORAGE_CASES, JSON.stringify(next));
  }, []);

  const selected = useMemo(
    () => cases.find((c) => c.id === selectedId) || null,
    [cases, selectedId],
  );

  function loadExample(exId: string) {
    const ex = READY_EXAMPLES.find((e) => e.id === exId);
    if (!ex) return;
    const c: UserCase = {
      id: uid('AC'),
      title: ex.title,
      parties: ex.parties,
      evidence: ex.evidence.map((e) => ({
        id: uid('ev'),
        label: e.label,
        note: e.note,
      })),
      analysis: null,
      createdAt: new Date().toISOString(),
    };
    const next = [c, ...cases];
    persist(next);
    setSelectedId(c.id);
  }

  function createBlank(e: React.FormEvent) {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const c: UserCase = {
      id: uid('AC'),
      title: newTitle.trim().slice(0, 200),
      parties: 'Party A · Party B',
      evidence: [],
      analysis: null,
      createdAt: new Date().toISOString(),
    };
    const next = [c, ...cases];
    persist(next);
    setSelectedId(c.id);
    setNewTitle('');
  }

  function addEvidence(e: React.FormEvent) {
    e.preventDefault();
    if (!selected || !evLabel.trim() || !evNote.trim()) return;
    const item: EvidenceItem = {
      id: uid('ev'),
      label: evLabel.trim().slice(0, 120),
      note: evNote.trim().slice(0, 2000),
    };
    const next = cases.map((c) =>
      c.id === selected.id
        ? { ...c, evidence: [...c.evidence, item], analysis: null }
        : c,
    );
    persist(next);
    setEvLabel('');
    setEvNote('');
  }

  function runAnalysis() {
    if (!selected) return;
    const analysis = analyzeEvidence(selected.title, selected.evidence);
    const next = cases.map((c) => (c.id === selected.id ? { ...c, analysis } : c));
    persist(next);
  }

  function exportJson() {
    if (!selected) return;
    const pkg = {
      product: 'AgentCourt AI',
      mode: 'browser-demo',
      case: selected,
      exportedAt: new Date().toISOString(),
      note: 'Local demo package for feedback. Not submitted to Kleros.',
    };
    const blob = new Blob([JSON.stringify(pkg, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selected.id}-agentcourt.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function submitFeedback(e: React.FormEvent) {
    e.preventDefault();
    const entry: Feedback = {
      rating,
      comment: comment.trim().slice(0, 1000),
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_FEEDBACK) || '[]') as Feedback[];
      const next = [entry, ...prev].slice(0, 50);
      localStorage.setItem(STORAGE_FEEDBACK, JSON.stringify(next));
      setFeedbackCount(next.length);
      setFeedbackSaved(true);
      setComment('');
    } catch {
      /* ignore */
    }
  }

  function clearAll() {
    if (!confirm('Clear all local cases on this device?')) return;
    persist([]);
    setSelectedId(null);
  }

  if (!hydrated) {
    return (
      <div className="panel">
        <p>Loading workspace…</p>
      </div>
    );
  }

  return (
    <>
      <div className="panel">
        <small>INTERACTIVE DEMO — SAVED IN YOUR BROWSER</small>
        <h1>Try AgentCourt AI</h1>
        <p>
          Load an example, add evidence, run analysis, export a package, and leave feedback.
          Data stays in <strong>your browser</strong> (localStorage) — not a shared database.
          Perfect for sharing the link and collecting reactions.
        </p>
      </div>

      <section className="panel">
        <small>1 · START FROM AN EXAMPLE</small>
        <h2>Ready scenarios</h2>
        <div className="example-grid">
          {READY_EXAMPLES.map((ex) => (
            <article key={ex.id} className="example-card">
              <strong>{ex.title}</strong>
              <p>{ex.blurb}</p>
              <span className="muted">{ex.parties}</span>
              <button type="button" onClick={() => loadExample(ex.id)}>
                Try this example
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <small>2 · OR CREATE YOUR OWN</small>
        <form onSubmit={createBlank} className="create-form">
          <label htmlFor="new-title">Case title</label>
          <input
            id="new-title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="e.g. My freelance dispute"
            maxLength={200}
            required
          />
          <button type="submit">Create case</button>
        </form>
      </section>

      <div className="workspace-split">
        <section className="panel">
          <small>YOUR CASES ({cases.length})</small>
          {cases.length === 0 ? (
            <p className="muted">No cases yet. Try an example above.</p>
          ) : (
            <div className="case-rows">
              {cases.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`case-row clickable ${c.id === selectedId ? 'selected' : ''}`}
                  onClick={() => setSelectedId(c.id)}
                >
                  <div>
                    <strong>{c.id}</strong>
                    <span>{c.title}</span>
                  </div>
                  <span className="conf">{c.evidence.length} evidence</span>
                </button>
              ))}
            </div>
          )}
          {cases.length > 0 && (
            <button type="button" className="linkish" onClick={clearAll}>
              Clear local cases
            </button>
          )}
        </section>

        <section className="panel">
          <small>3 · EVIDENCE & ANALYSIS</small>
          {!selected ? (
            <p className="muted">Select or create a case.</p>
          ) : (
            <>
              <h2>{selected.title}</h2>
              <p className="muted">
                {selected.parties} · {selected.id}
              </p>

              <h3>Evidence</h3>
              {selected.evidence.length === 0 ? (
                <p className="muted">None yet.</p>
              ) : (
                <ul className="ev-list">
                  {selected.evidence.map((ev) => (
                    <li key={ev.id}>
                      <strong>{ev.label}</strong>
                      <p>{ev.note}</p>
                    </li>
                  ))}
                </ul>
              )}

              <form onSubmit={addEvidence} className="create-form">
                <label htmlFor="ev-label">Evidence label</label>
                <input
                  id="ev-label"
                  value={evLabel}
                  onChange={(e) => setEvLabel(e.target.value)}
                  placeholder="e.g. Chat screenshot description"
                  required
                />
                <label htmlFor="ev-note">Note / description</label>
                <textarea
                  id="ev-note"
                  value={evNote}
                  onChange={(e) => setEvNote(e.target.value)}
                  placeholder="Paste facts, dates, claims…"
                  rows={3}
                  required
                />
                <button type="submit">Add evidence</button>
              </form>

              <div className="actions" style={{ marginTop: 12 }}>
                <button type="button" onClick={runAnalysis}>
                  Run analysis
                </button>
                <button type="button" onClick={exportJson}>
                  Export JSON
                </button>
              </div>

              {selected.analysis && (
                <div className="analysis-box">
                  <small>ANALYSIS (DETERMINISTIC DEMO — NOT LIVE AI)</small>
                  <p>
                    <strong>Confidence:</strong> {selected.analysis.confidence}%
                  </p>
                  <h3>Findings</h3>
                  <ul>
                    {selected.analysis.findings.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  {selected.analysis.contradictions.length > 0 && (
                    <>
                      <h3>Contradictions</h3>
                      <ul>
                        {selected.analysis.contradictions.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <p className="muted">{selected.analysis.nextStep}</p>
                </div>
              )}
            </>
          )}
        </section>
      </div>

      <section className="panel">
        <small>4 · FEEDBACK</small>
        <h2>Was this useful?</h2>
        <p className="muted">
          Feedback is stored only in your browser for this demo. Screenshot or copy your comment
          to share with ElCryptoBoy on X (@rodriboero1986).
        </p>
        <form onSubmit={submitFeedback} className="create-form">
          <label htmlFor="rating">Rating (1–5)</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <label htmlFor="fb">Comment</label>
          <textarea
            id="fb"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="What worked? What was missing?"
            rows={3}
          />
          <button type="submit">Save feedback locally</button>
        </form>
        {feedbackSaved && (
          <p className="accepted">
            <strong>Thanks.</strong> Local feedback entries on this device: {feedbackCount}.
          </p>
        )}
      </section>
    </>
  );
}
