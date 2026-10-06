# AgentCourt AI

## The Intelligence Layer for Decentralized Justice

[![Live Demo](https://img.shields.io/badge/Live%20Demo-agentcourt--ai.vercel.app-blue?style=flat-square)](https://agentcourt-ai.vercel.app)
[![CI](https://github.com/srbisnes/agentcourt-ai/actions/workflows/ci.yml/badge.svg)](https://github.com/srbisnes/agentcourt-ai/actions/workflows/ci.yml)

AgentCourt AI is an **evidence-first intelligence layer for decentralized dispute resolution**.

> **Evidence first. Intelligence second. Judgment remains human and decentralized.**

It turns digital evidence into structured, reviewable dispute intelligence for jurors, DAOs, marketplaces and autonomous-agent workflows. **It does not decide disputes.**

### Verified in this release

- Next.js 15 + TypeScript foundation
- Public landing page
- Dispute workspace with **seeded demo cases** and **create-case form** (demo API)
- Architecture visualization
- Health endpoint and minimal OpenAPI contract
- Non-persistent demo case API (`GET` seeded list, `POST` accepts title → 202, not stored)
- Automated tests + GitHub Actions CI
- Product specification: [docs/SPEC.md](docs/SPEC.md)

### Explicitly not implemented yet

Live AI inference, database persistence, authentication, wallet signing, blockchain writes, Kleros/UMA submission, smart custody, evidence upload, case close. See health flags and [docs/SPEC.md](docs/SPEC.md).

## Product flow (target)

**Evidence → Verification → Intelligence → Reviewable Report → Human/Protocol Decision**

## Public routes

| Route | Purpose |
|---|---|
| `/` | Product landing |
| `/cases` | Demo workspace: list + evidence + create form |
| `/docs` | Implemented API documentation |
| `/api/v1/health` | Capability-aware service health |
| `/api/v1/openapi` | OpenAPI 3.1 contract |
| `/api/v1/cases` | Seeded demo cases + non-persistent POST |

## Code map

```
app/page.tsx                 Landing
app/cases/page.tsx           Workspace
app/cases/CreateCaseForm.tsx Client form → POST /api/v1/cases
app/api/v1/*/route.ts        Health, OpenAPI, Cases
lib/demo-cases.ts            Seeded demo data
docs/SPEC.md                 Full product contract
```

## Local verification

```bash
npm install
npm test
npm run typecheck
npm run build
npm run dev
```

## Docs

| Doc | Content |
|-----|--------|
| [docs/SPEC.md](docs/SPEC.md) | What works / what does not / API contract |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | System design |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Phases to usable MVP |
| [docs/INVESTOR.md](docs/INVESTOR.md) | Investor brief |
| [SECURITY.md](SECURITY.md) | Security policy |

## Built by

**ElCryptoBoy** — Web3 / decentralized infrastructure.

- Live: https://agentcourt-ai.vercel.app
- GitHub: https://github.com/srbisnes/agentcourt-ai
