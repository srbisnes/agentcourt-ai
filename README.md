# AgentCourt AI

## The Intelligence Layer for Decentralized Justice

[![Live Demo](https://img.shields.io/badge/Live%20Demo-agentcourt--ai.vercel.app-blue?style=flat-square)](https://agentcourt-ai.vercel.app)
[![CI](https://github.com/srbisnes/agentcourt-ai/actions/workflows/ci.yml/badge.svg)](https://github.com/srbisnes/agentcourt-ai/actions/workflows/ci.yml)

AgentCourt AI is building an **evidence-first intelligence layer for decentralized dispute resolution**.

> **Evidence first. Intelligence second. Judgment remains human and decentralized.**

It turns digital evidence into structured, reviewable dispute intelligence for jurors, DAOs, marketplaces and autonomous-agent workflows. **It does not decide disputes.**

### Verified in this release

- Next.js + TypeScript foundation
- Public landing page and deterministic case demonstration
- Architecture visualization
- Health endpoint and minimal OpenAPI contract
- Non-persistent demo case API
- Automated Node smoke tests
- GitHub Actions CI for tests and production build

### Explicitly not implemented yet

The public release does **not** claim live AI inference, database persistence, authentication, wallet signing, blockchain writes, Kleros/UMA/Reality.eth submission, smart custody or production evidence storage. These remain roadmap items until implemented and verified.

## Product flow

**Evidence → Verification → Intelligence → Reviewable Report → Human/Protocol Decision**

The long-term platform will support contracts, PDFs, chats, images, transaction hashes and other evidence while preserving provenance, confidence and contradiction state.

## Public routes

| Route | Purpose |
|---|---|
| `/` | Product landing |
| `/cases` | Deterministic evidence-review demo |
| `/docs` | Implemented API documentation |
| `/api/v1/health` | Capability-aware service health |
| `/api/v1/openapi` | OpenAPI 3.1 contract |
| `/api/v1/cases` | Non-persistent demo case endpoint |

## Local verification

```bash
npm ci
npm test
npm run build
```

## Architecture

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md). Production integrations are added only after tests, security review and explicit capability verification.

## Security

See [SECURITY.md](SECURITY.md). Do not commit secrets or real dispute evidence.

## Built by

**ElCryptoBoy** — Web3 / decentralized infrastructure builder.

Project: https://agentcourt-ai.vercel.app
GitHub: https://github.com/srbisnes/agentcourt-ai
