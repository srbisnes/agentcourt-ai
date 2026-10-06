# AgentCourt AI — Deployment

**Product:** AgentCourt AI  
**Builder:** ElCryptoBoy  
**Repo:** https://github.com/srbisnes/agentcourt-ai

---

## Vercel (recommended)

1. Import `srbisnes/agentcourt-ai` in Vercel.
2. Framework: **Next.js** (auto-detected).
3. Build command: `npm run build`
4. Output: Next default (no static export required).
5. Node.js: **20.x**
6. Root directory: repository root.
7. Deploy production branch: `main`.

### Environment variables

None required for the public demo shell.

When adding AI / DB / Kleros later, document each variable here and keep secrets out of git.

### Custom domain

Point DNS to Vercel; keep `https://agentcourt-ai.vercel.app` as the canonical demo until custom domain is verified.

---

## GitHub Actions CI

On every push to `main`:

1. `npm install`
2. `npm run validate` (tests + typecheck)
3. `npm run docs:check`
4. `npm run build`

Release only when the latest CI run is **success**.

---

## Local

```bash
npm install
npm run dev      # http://localhost:3000
npm test
npm run build
```

---

## What “professional deploy” means for v0.1

| Expectation | Status |
|-------------|--------|
| HTTPS live site | Vercel |
| Green CI on main | Required |
| Honest capability flags | `/api/v1/health` |
| Working routes `/` `/cases` `/dashboard` `/docs` | Required |
| Live PNK / juror indexer | Not yet |
| Autonomous agent runtime | Not yet — “File Agent Dispute” is a **demo case flow** |

Do not force-push over `main` without CI green.
