# AgentCourt AI

**Intelligence Layer for Decentralized Justice**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-agentcourt--ai.vercel.app-blue?style=flat-square)](https://agentcourt-ai.vercel.app)
[![CI](https://github.com/srbisnes/agentcourt-ai/actions/workflows/ci.yml/badge.svg)](https://github.com/srbisnes/agentcourt-ai/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

> Evidence first. Intelligence second. Judgment remains human and decentralized.

**AgentCourt AI** prepares structured evidence for jurors, DAOs and protocols.  
It does **not** decide disputes. It feeds systems like **Kleros** — it does not replace them.

Built by **ElCryptoBoy** ([@rodriboero1986](https://x.com/rodriboero1986)) · GitHub: [srbisnes/agentcourt-ai](https://github.com/srbisnes/agentcourt-ai)

---

## Live surfaces

| Route | Purpose |
|-------|--------|
| [Landing](https://agentcourt-ai.vercel.app/) | Product positioning |
| [Cases](https://agentcourt-ai.vercel.app/cases) | Demo workspace + ERC-1497 export |
| [Dashboard](https://agentcourt-ai.vercel.app/dashboard) | Demo dispute metrics |
| [Docs](https://agentcourt-ai.vercel.app/docs) | Implemented API |
| [Health](https://agentcourt-ai.vercel.app/api/v1/health) | Capability flags (source of truth) |

---

## Verified in this release

- Next.js 15 + TypeScript product shell
- Case demo with seeded disputes (`AC-*`)
- Create-case form → `POST /api/v1/cases` (accepted, **not persisted**)
- ERC-1497-shaped evidence export (JSON / Markdown / CSV)
- Dispute dashboard (demo metrics, labeled)
- Health + OpenAPI endpoints
- Security response headers
- CI: tests, typecheck, docs check, production build

## Explicitly not live

Database, AI inference, blockchain writes, authentication, on-chain Kleros submission, smart custody.  
See `/api/v1/health` → `integrations.*: false`.

---

## Documentation

| Document | Content |
|----------|--------|
| [docs/SPEC.md](docs/SPEC.md) | Product contract |
| [docs/AUDIT.md](docs/AUDIT.md) | Release audit checklist |
| [docs/KLEROS.md](docs/KLEROS.md) | Kleros integration path |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | System design |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Phases to usable MVP |
| [docs/INVESTOR.md](docs/INVESTOR.md) | Investor brief |
| [SECURITY.md](SECURITY.md) | Security policy |

---

## Local verification

```bash
npm install
npm test
npm run typecheck
npm run docs:check
npm run build
npm run dev
```

---

## Brand

| Item | Value |
|------|--------|
| Product | AgentCourt AI |
| Builder | ElCryptoBoy |
| GitHub | srbisnes/agentcourt-ai |
| X | @rodriboero1986 |
| Live | https://agentcourt-ai.vercel.app |
| License | MIT |

---

*AgentCourt AI — Evidence intelligence for the autonomous economy.*
