# Roadmap — AgentCourt AI

**Goal:** Ship a functional MVP that delivers the full loop shown in the concept video:

> Lock funds → Automated evidence audit → Evidence map → Human/protocol decision → Settlement

---

## Phase 0 — Foundation (Complete / In Progress)

**Status:** Live public demo shell

- [x] Clean Next.js 15.5.27 product shell
- [x] Landing + Dispute Workspace + Docs
- [x] Health API with explicit capability flags
- [x] OpenAPI 3.1 contract
- [x] Honest “demo mode” messaging
- [x] Concept video ([YouTube Shorts](https://youtube.com/shorts/5_4l4GNMRvs))
- [x] Professional GitHub surface (README, Architecture, Investor brief, Security)
- [ ] Resolve remaining npm audit advisories
- [ ] Align UI case list with `GET /api/v1/cases` (or document the demo split)

**Exit criteria:** Investors and partners can open the repo + live site + video and understand the vision without confusion.

---

## Phase 1 — Evidence Core (0–3 months)

**Objective:** Working evidence intelligence on real-looking demo cases.

| Deliverable | Description |
|-------------|-------------|
| Ingestion pipeline | PDF, plain text, chat exports, code snippets, wallet addresses, tx hashes |
| Timeline reconstruction | Ordered event stream from multi-source evidence |
| Contradiction detection | Flag conflicting claims with source links |
| Wallet & tx analysis | Basic on-chain fact verification (read-only) |
| Confidence scores | Every finding carries an explicit score |
| Case detail UI | Clickable case → evidence list, timeline, contradictions, blockchain panel |

**Exit criteria:** A user can open a case, see structured evidence, timeline and contradictions with sources. No production AI or custody yet.

---

## Phase 2 — Decision Support (3–6 months)

**Objective:** Usable decision-support package for real jurors and DAOs.

| Deliverable | Description |
|-------------|-------------|
| RAG + similar cases | Retrieval of analogous past disputes |
| Evidence report export | Markdown / JSON / future PDF with full attribution |
| Expanded public API | Authenticated read/write for pilot partners |
| Multilingual analysis | Priority languages for pilot markets |
| Kleros connector (v1) | Evidence package format compatible with Kleros evidence standards |
| Pilot users | 3–5 design partners (DAO / marketplace / agent platform) |

**Exit criteria:** A Kleros juror or DAO ops person can receive a complete evidence package and act on it faster than with raw files.

---

## Phase 3 — Custody + Settlement Loop (6–12 months)

**Objective:** End-to-end loop matching the concept video.

| Deliverable | Description |
|-------------|-------------|
| Smart custody flows | Lock → condition check → release / freeze |
| Multi-chain path | EVM first, then Stellar / Solana readiness |
| Authentication | Wallet + optional identity layer |
| Production persistence | Database + audit log |
| Evidence map → ruling handoff | Clean interface to human jury or protocol |
| Security hardening | Audit, rate limits, CSP, dependency hygiene |

**Exit criteria:** A full demo of: deposit → agent delivery → automated audit → evidence map → human ruling → funds release or refund.

---

## Phase 4 — Scale (12–18 months)

**Objective:** Production platform for the autonomous economy.

| Deliverable | Description |
|-------------|-------------|
| Protocol integrations | Kleros, additional arbitration and escrow standards |
| Agent-to-agent dispute intelligence | Machine-readable packages for autonomous commerce |
| SaaS + API licensing | Subscription and B2B risk-verification products |
| Governance path | Community / token / decentralized governance design |
| Enterprise features | Private evidence rooms, compliance hooks, SLA |

**Exit criteria:** Paying customers and integrated protocols using AgentCourt AI as the evidence + custody intelligence layer.

---

## Guiding Constraints (Non-Negotiable)

1. **No silent features** — Capability flags in `/api/v1/health` must match reality.
2. **Evidence ≠ Inference** — Every finding keeps its source and confidence.
3. **Decision support, not automated justice** — Final ruling stays with the authorized party.
4. **Honest roadmap** — Dates are targets, not promises. Status is updated publicly.

---

## Success Metrics (MVP → Scale)

| Metric | Phase 1 | Phase 2 | Phase 3 |
|--------|---------|---------|--------|
| Structured cases processed | Demo only | Pilot volume | Production volume |
| Time-to-evidence-map | — | < 5 min for typical case | < 2 min |
| Juror / operator feedback | Qualitative | NPS / time saved | Retention |
| Protocol connectors live | 0 | 1 (Kleros path) | 2+ |
| Funds secured via custody (demo) | 0 | 0 | Live testnet / mainnet pilots |

---

*This roadmap is the single source of truth for product direction.  
Update it when priorities change — never let the README drift from reality.*
