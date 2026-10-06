# Architecture — AgentCourt AI

> Concept video: [Cómo AgentCourt AI Protege Tu Dinero](https://youtube.com/shorts/5_4l4GNMRvs)

## High-Level Positioning

```
┌─────────────────────────────────────────────────────────────┐
│                    Dispute Sources                          │
│  Marketplaces · DAOs · Escrows · Freelance · AI Agents      │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                 AgentCourt AI                               │
│     Intelligence Layer + Smart Custody                      │
│                                                             │
│  Smart Custody → Ingest → Verify → Reason → Report          │
│                                                             │
│  • Fund locking (digital vault)                             │
│  • Structured evidence                                      │
│  • Timelines & contradiction detection                      │
│  • Confidence scores + source attribution                   │
│  • Evidence map for human / protocol decision               │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│              Decision / Settlement Layer                    │
│                                                             │
│  Kleros · DAO Governance · Escrow Contracts ·               │
│  Agent Courts · Human Arbitrators                           │
│                                                             │
│  → Funds release or refund according to ruling              │
└─────────────────────────────────────────────────────────────┘
```

AgentCourt AI **never** issues the final ruling.  
It protects funds, produces an auditable evidence package and hands the decision to the authorized party.

---

## Evidence-First Workflow

```
DIGITAL EVIDENCE          CASE STRUCTURE           REVIEWABLE FINDINGS          HUMAN / PROTOCOL
documents · records       sources · claims         clear · attributable         DECISION
claims                    conflicts                cautious
```

### Pipeline Detail

| Stage | Inputs | Processing | Outputs |
|-------|--------|------------|--------|
| **Ingest** | PDFs, text, images, wallet addresses, tx hashes, chat exports | Parsing, normalization, deduplication | Evidence corpus |
| **Verify** | Evidence corpus + chain data | Hash checks, provenance, on-chain fact verification | Verified evidence set + confidence |
| **Reason** | Verified set | Timeline reconstruction, contradiction detection, similarity search, risk signals | Structured findings |
| **Report** | Findings + sources | Packaging with attribution and confidence scores | Decision-support package (JSON / Markdown / future PDF) |

---

## Current Technical Surface (v0.1.0)

### Frontend
- Next.js 15.5.27 (App Router)
- Dark professional UI
- Public routes: `/`, `/cases`, `/docs`

### API
- `GET /api/v1/health` — capability flags + integration status
- `GET /api/v1/openapi` — OpenAPI 3.1 contract
- `GET /api/v1/cases` — demo case list
- `POST /api/v1/cases` — accept new demo case title

### Explicit Non-Features (by design)
- No persistent database
- No live AI inference
- No blockchain writes
- No authentication
- No arbitration execution

These are advertised as `false` in the health endpoint so integrators and investors never assume production capabilities that do not yet exist.

---

## Target Architecture (Roadmap)

```
                    ┌──────────────┐
                    │  Clients     │
                    │  UI · SDK ·  │
                    │  Agents      │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │  API Gateway │
                    │  Auth · Rate │
                    │  Limiting    │
                    └──────┬───────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
   ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐
   │  Ingestion  │  │  Reasoning  │  │  Reporting  │
   │  Service    │  │  Service    │  │  Service    │
   └──────┬──────┘  └──────┬──────┘  └──────┬──────┘
          │                │                │
          └────────────────┼────────────────┘
                           │
                    ┌──────▼───────┐
                    │  Evidence    │
                    │  Store +     │
                    │  Vector DB   │
                    └──────┬───────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
   ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐
   │  On-chain   │  │  External   │  │  Protocol   │
   │  Indexers   │  │  RAG / LLM  │  │  Connectors │
   │  (multi-L2) │  │             │  │  (Kleros…)  │
   └─────────────┘  └─────────────┘  └─────────────┘
```

### Key Design Decisions

1. **Capability flags first** — Health endpoint is the source of truth for what is live.
2. **Source attribution mandatory** — No finding without a link back to original evidence.
3. **Confidence scores** — Every inference carries an explicit confidence value.
4. **Protocol connectors as plugins** — Kleros, DAO tooling, escrow standards can be added without rewriting the core pipeline.
5. **Human / agent dual consumption** — Reports must be readable by both humans and machines.

---

## Security Architecture Notes

- Demo mode has no secrets and no write path to external systems.
- Future production will require:
  - Authentication for write endpoints
  - Rate limiting
  - CSP and security headers
  - Audited dependency tree
  - Optional TEE or secure enclave paths for sensitive evidence (aligned with emerging agent-court patterns)

See [SECURITY.md](../SECURITY.md) for the current policy.

---

## Relation to Existing Systems

| System | Role | AgentCourt AI Role |
|--------|------|--------------------|
| Kleros | Decentralized arbitration (who wins) | Evidence intelligence (what is true / contradictory) |
| UMA / Reality.eth | Optimistic oracles | Same — structured evidence feed |
| Escrow contracts | Settlement | Pre-dispute and during-dispute evidence package |
| DAO governance | Human / token voting | Auditable report for voters |
| Agent platforms | Autonomous commerce | Machine-readable dispute context |

AgentCourt AI is complementary infrastructure, not a competing court.
