# AgentCourt AI — Release Audit

**Product:** AgentCourt AI  
**Builder:** ElCryptoBoy  
**Repo:** https://github.com/srbisnes/agentcourt-ai  
**Live:** https://agentcourt-ai.vercel.app  
**Audit date:** 2026-10-06  
**Version:** 0.1.0

---

## 1. Brand consistency

| Check | Expected | Status |
|-------|----------|--------|
| Product name | AgentCourt AI | Required in README, layout, landing |
| Builder | ElCryptoBoy | Required |
| GitHub owner/repo | srbisnes/agentcourt-ai | Required |
| X handle | @rodriboero1986 | Documented |
| Live URL | agentcourt-ai.vercel.app | Required |
| License | MIT | Required |

---

## 2. Honesty / capability flags

| Check | Rule |
|-------|------|
| Health endpoint | Must list only real capabilities |
| integrations.database | false until DB live |
| integrations.ai | false until inference live |
| integrations.blockchain | false until chain writes live |
| integrations.authentication | false until auth live |
| integrations.arbitration | false until Kleros/on-chain submit live |
| UI copy | Must not claim live Kleros votes, custody, or AI analysis |
| Dashboard | Must label demo / illustrative metrics |

---

## 3. Functional checks (automated)

| Check | How |
|-------|-----|
| Unit tests | `npm test` |
| Typecheck | `npm run typecheck` |
| Docs presence | `npm run docs:check` |
| Production build | `npm run build` |
| CI | GitHub Actions on `main` must be green |

### Test coverage required

- Demo cases non-empty and stable IDs
- Health integrations all false in demo mode
- ERC-1497 package builds with standard field and `readyForSubmission: false`
- Public API routes list matches implemented surface

---

## 4. Security baseline

| Check | Status target |
|-------|----------------|
| No secrets in repo | Pass |
| `poweredByHeader: false` | Pass |
| X-Content-Type-Options nosniff | Pass |
| X-Frame-Options DENY | Pass |
| Referrer-Policy strict-origin-when-cross-origin | Pass |
| SECURITY.md present | Pass |
| No production claims without flags | Pass |

---

## 5. Routes inventory

| Route | Type | Notes |
|-------|------|-------|
| `/` | UI | Landing |
| `/cases` | UI | Workspace + export |
| `/dashboard` | UI | Demo stats |
| `/docs` | UI | API docs |
| `/api/v1/health` | API | Flags |
| `/api/v1/openapi` | API | Contract |
| `/api/v1/cases` | API | GET seed / POST non-persistent |

---

## 6. Known non-goals (not failures)

These are **out of scope** for v0.1.0 and must not be reported as bugs:

- Persistent case storage
- File upload pipeline
- Live AI analysis
- On-chain Kleros submission
- Real-time juror/vote indexer
- PDF/XLSX binary export libraries
- E2E encryption / banking-grade claims
- 24/7 support SLA

---

## 7. Sign-off criteria for “no CI failures”

1. Latest `main` CI conclusion = **success**
2. `npm run validate` passes locally
3. `docs/KLEROS.md`, `docs/SPEC.md`, `docs/AUDIT.md` present
4. README brand table matches this audit
5. No integration flag set true without matching implementation

**Auditor note:** A red CI on an old commit is historical. Only `main` HEAD matters for release readiness.
