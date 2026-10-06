# AgentCourt AI

**Intelligence Layer for Decentralized Justice**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-agentcourt--ai.vercel.app-blue?style=flat-square)](https://agentcourt-ai.vercel.app)
[![API Health](https://img.shields.io/badge/API-healthy-brightgreen?style=flat-square)](https://agentcourt-ai.vercel.app/api/v1/health)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.27-black?style=flat-square)](https://nextjs.org)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![Demo Video](https://img.shields.io/badge/Demo%20Video-YouTube%20Shorts-red?style=flat-square)](https://youtube.com/shorts/5_4l4GNMRvs)

> Payments have Stripe. Identity has ENS.  
> **AgentCourt AI builds the dispute intelligence layer for the autonomous economy.**

AgentCourt AI turns contracts, documents, communications and on-chain activity into structured evidence, timelines, contradictions and decision-support reports for jurors, DAOs and autonomous agents.

**It does not decide disputes.**  
It prepares the evidence so humans, protocols or agents can decide with clarity and auditability.

---

## Watch the Concept in 60 Seconds

**[Cómo AgentCourt AI Protege Tu Dinero](https://youtube.com/shorts/5_4l4GNMRvs)** — Official short by ELCRYPTOBOY

> Smart custody protects automated payments. When an AI agent delivers work, funds stay locked in a smart contract until conditions are met. AgentCourt AI acts as an automated auditor: it reads code, analyzes conversations and maps evidence. If the delivery matches the order → funds release. If flaws are detected → payment freezes and a clear evidence map is generated for a decentralized human jury.

This is the core loop the platform is being built to deliver.

---

## The Problem

In Web3 and agent-to-agent commerce, disputes are **evidence-heavy and time-poor**:

- Contracts + chats + PDFs + images + multi-chain transactions arrive unordered.
- Paying an unknown AI agent is high risk if the deliverable is incomplete or broken.
- Jurors (Kleros and similar) have limited time and economic skin-in-the-game.
- DAOs need auditable reports, not opaque LLM opinions.
- Autonomous agents cannot natively process unstructured evidence the way humans do.

Existing arbitration protocols solve **who wins**.  
They do not solve **what evidence is relevant, verified, contradictory and confidence-scored**.

---

## The Solution

AgentCourt AI is an **evidence intelligence + smart custody layer** that sits *before* and *during* dispute resolution.

### Core Loop (from the demo video)

1. **Smart Custody** — Funds locked in a digital vault (smart contract) until conditions are met.
2. **Automated Audit** — AgentCourt AI engine reads code, chats and deliverables.
3. **Evidence Map** — Structured timeline, contradictions and confidence scores.
4. **Human / Protocol Decision** — Decentralized jury or authorized arbitrator rules with clear evidence.
5. **Settlement** — Funds release or refund according to the ruling.

### Case Intelligence Pipeline

| Step | Action | Output |
|------|--------|--------|
| **01 Ingest** | PDFs, text, images, wallets, transaction hashes, chat exports, code | Raw evidence corpus |
| **02 Verify** | Provenance, hashes, on-chain facts | Verified evidence set |
| **03 Reason** | Timeline reconstruction, contradiction detection, similar cases, risk signals | Structured findings |
| **04 Report** | Evidence-linked findings with source + confidence | Decision-support package |

### Core Principles

- **Evidence ≠ Inference** — Every finding retains its source and confidence score.
- **Decision support, not automated justice** — Final ruling remains with the authorized arbitrator or protocol.
- **Auditable by design** — Humans and agents can trace every claim back to original evidence.
- **Protocol-agnostic** — Designed to feed Kleros, DAOs, escrows, or future agent courts.
- **Multi-chain ready** — Architecture targets Stellar, EVM chains, Solana and emerging networks (Monad).

---

## Who It Serves

| Audience | Pain | Value |
|----------|------|-------|
| **AI agents & agent platforms** | Paying / being paid without guarantee of delivery quality | Smart custody + automated evidence audit |
| **Kleros jurors & similar** | Unstructured evidence, time pressure | Faster, clearer review with confidence scores |
| **DAOs** | Internal payment / milestone / grant disputes | Auditable reports for governance |
| **Marketplaces & freelance platforms** | Support cost + fairness perception | Structured evidence reduces resolution time |
| **Escrow & delivery protocols** | Multi-source proof of delivery / non-delivery | Timeline + contradiction detection |

---

## Live Product (Current Status)

| Surface | URL | Status |
|---------|-----|--------|
| Landing | [agentcourt-ai.vercel.app](https://agentcourt-ai.vercel.app) | Live |
| Dispute Workspace | [/cases](https://agentcourt-ai.vercel.app/cases) | Live |
| Documentation | [/docs](https://agentcourt-ai.vercel.app/docs) | Live |
| Health API | [/api/v1/health](https://agentcourt-ai.vercel.app/api/v1/health) | Live |
| OpenAPI | [/api/v1/openapi](https://agentcourt-ai.vercel.app/api/v1/openapi) | Live |
| Concept Video | [YouTube Shorts](https://youtube.com/shorts/5_4l4GNMRvs) | Live |

**Current mode:** Public demo shell.  
Production integrations (database, AI inference, blockchain writes, authentication, arbitration execution) are intentionally disabled until implemented and tested.  
The health endpoint explicitly advertises this so no integrator or investor assumes features that do not yet exist.

```json
{
  "ok": true,
  "status": "ready",
  "version": "0.1.0",
  "capabilities": ["public-case-demo", "health-api", "openapi-contract"],
  "integrations": {
    "database": false,
    "ai": false,
    "blockchain": false,
    "authentication": false,
    "arbitration": false
  }
}
```

---

## Platform Structure

```
agentcourt-ai/
├── app/
│   ├── api/v1/
│   │   ├── cases/          # Demo case list + create
│   │   ├── health/         # Service health + capability flags
│   │   └── openapi/        # OpenAPI 3.1 contract
│   ├── cases/              # Dispute workspace UI
│   ├── docs/               # Product & API documentation
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx            # Landing
├── public/
│   └── architecture.svg
├── tests/
│   ├── findings.test.mjs
│   └── networks.test.mjs
├── docs/                   # GitHub documentation
│   ├── ARCHITECTURE.md
│   ├── INVESTOR.md
│   ├── POSITIONING.md
│   ├── API.md
│   └── ROADMAP.md
├── .github/workflows/ci.yml
├── README.md
├── SECURITY.md
├── LICENSE
└── package.json
```

### Public API (v0.1.0)

```
GET  /api/v1/health
GET  /api/v1/openapi
GET  /api/v1/cases
POST /api/v1/cases   { "title": "Example case" }
```

---

## Roadmap to Functional MVP

| Phase | Horizon | Deliverables | Outcome |
|-------|---------|--------------|--------|
| **0 — Foundation** | Now | Public demo shell, health/OpenAPI, honest capability flags, concept video | Clean, investor-readable surface |
| **1 — Evidence Core** | 0–3 months | Ingestion (PDF/text/chat/code), timeline reconstruction, contradiction detection, wallet + tx analysis, basic confidence scores | Working evidence intelligence on demo cases |
| **2 — Decision Support** | 3–6 months | RAG + similar cases, evidence report export, expanded public API, multilingual, pilot users, native Kleros connector | Usable decision-support package for real jurors/DAOs |
| **3 — Custody + Settlement** | 6–12 months | Smart custody flows, multi-chain readiness (EVM + Stellar + Solana path), authentication, production persistence | End-to-end loop: lock → audit → evidence map → rule → release |
| **4 — Scale** | 12–18 months | Protocol integrations, agent-to-agent dispute intelligence, SaaS + API licensing, governance path | Production platform for autonomous economy |

Detailed breakdown: [docs/ROADMAP.md](docs/ROADMAP.md)

---

## Business Model (Target)

- **Escrow / custody fees** — commission on protected automated payments
- **SaaS subscriptions** — platforms and DAOs that need continuous evidence intelligence
- **API / B2B licensing** — risk verification and evidence packages for other protocols

---

## Positioning

AgentCourt AI does **not** compete with Kleros, UMA or Reality.eth.  
It **feeds** them.

> Kleros decides the outcome.  
> AgentCourt AI prepares the evidence (and protects the funds) so the decision is faster, clearer and more auditable.

This is the same architectural pattern that made Stripe valuable for payments and ENS valuable for identity: a focused intelligence layer on top of the settlement primitive.

---

## Security & Honesty Posture

- No fake production features.
- Integrations are explicitly flagged as `false` in the health endpoint until live.
- npm audit warnings are tracked and will be resolved before any “production-ready” claim.
- See [SECURITY.md](SECURITY.md) for reporting and policy.

---

## Built by

**ElCryptoBoy** ([@rodriboero1986](https://x.com/rodriboero1986))  
Web3 Solutions Architect — sovereign infrastructure across L1/L2, RWA, logistics and energy.

YouTube: [ELCRYPTOBOY](https://www.youtube.com/channel/UCYIFDgwxdtfpDQP0lDwwgKw)

---

## License

MIT — see [LICENSE](LICENSE).

---

## Links

| Resource | URL |
|----------|-----|
| Live product | https://agentcourt-ai.vercel.app |
| Concept video | https://youtube.com/shorts/5_4l4GNMRvs |
| Architecture | [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) |
| Investor brief | [docs/INVESTOR.md](docs/INVESTOR.md) |
| Roadmap | [docs/ROADMAP.md](docs/ROADMAP.md) |
| Positioning | [docs/POSITIONING.md](docs/POSITIONING.md) |
| API contract | https://agentcourt-ai.vercel.app/api/v1/openapi |
| X / Twitter | [@rodriboero1986](https://x.com/rodriboero1986) |

---

*AgentCourt AI — Evidence intelligence + smart custody for the autonomous economy.*
