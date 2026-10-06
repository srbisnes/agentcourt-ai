# AgentCourt AI — Product Specification (v0.1.0)

This document is the contract between product claims and implemented behavior.

---

## 1. Purpose

AgentCourt AI is an **evidence intelligence layer** for decentralized dispute workflows.

It does **not**:
- Decide disputes
- Replace jurors or protocols
- Move funds
- Claim live AI, custody or arbitration until those integrations are verified

It does:
- Expose a public product shell
- Demonstrate the intended evidence-first workflow with deterministic demo data
- Advertise capabilities honestly via `/api/v1/health`

---

## 2. Current release (verified)

| Capability | Implemented | Notes |
|------------|-------------|-------|
| Landing page `/` | Yes | Positioning + architecture SVG |
| Case demo `/cases` | Yes | Seeded cases + create form (demo API) |
| Docs `/docs` | Yes | Lists implemented API routes |
| `GET /api/v1/health` | Yes | Capability + integration flags |
| `GET /api/v1/openapi` | Yes | OpenAPI 3.1 minimal contract |
| `GET /api/v1/cases` | Yes | Seeded demo cases, `persistent: false` |
| `POST /api/v1/cases` | Yes | Accepts `{ title }`, returns 202, **does not store** |
| CI (test + typecheck + build) | Yes | GitHub Actions |
| Security headers | Yes | `next.config.ts` |

### Health contract (source of truth)

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

Any UI or marketing claim that contradicts these flags is a bug.

---

## 3. Explicitly NOT implemented

| Feature | Status |
|---------|--------|
| Persistent case storage | No |
| File / evidence upload | No |
| AI analysis of evidence | No |
| Generated report (PDF/Markdown with real pipeline) | No |
| Case close / settle workflow | No |
| Smart custody / escrow | No |
| Wallet auth | No |
| Kleros / UMA / Reality.eth submission | No |
| Roles (client / freelancer / juror) | No |
| Multi-tenant accounts | No |

---

## 4. User flows (current vs target)

### 4.1 Client — current

1. Open `/`
2. Open `/cases`
3. Optionally submit title via **Create demo case** → API returns 202, nothing stored
4. View seeded demo cases and static evidence panel

**Blocked for real use:** cannot create a real case, upload evidence, lock funds, or invite parties.

### 4.2 Freelancer — current

No role, invite, or delivery screen. **Blocked.**

### 4.3 Juror — current

No assignment queue, vote, or export. Can only read demo evidence cards. **Blocked for real adjudication.**

### 4.4 Target MVP flow (roadmap)

```
Client creates case
  → parties join (auth)
  → evidence uploaded + hashed
  → optional AI structuring (flagged when live)
  → evidence map + confidence
  → human/protocol decision
  → optional custody release (separate integration)
```

---

## 5. API specification

### GET /api/v1/health

Returns service readiness and integration flags.

### GET /api/v1/openapi

Returns OpenAPI 3.1 document for implemented paths.

### GET /api/v1/cases

```json
{
  "status": "ready",
  "mode": "demo",
  "persistent": false,
  "note": "Seeded demo cases only. POST does not persist.",
  "cases": [
    { "id": "AC-10482", "title": "...", "status": "ACTIVE", "confidence": 87 }
  ]
}
```

### POST /api/v1/cases

**Body:** `{ "title": "string (required, max 200)" }`

**202:**
```json
{
  "status": "accepted",
  "mode": "demo",
  "persistent": false,
  "note": "Case accepted for demo only. Not stored. No evidence pipeline ran.",
  "case": { "id": "demo-…", "title": "…", "status": "ACTIVE", "confidence": null }
}
```

**400:** `{ "error": "title is required" }`

---

## 6. Code map

```
app/
  page.tsx                 Landing
  cases/page.tsx           Workspace (list + evidence + create form)
  cases/CreateCaseForm.tsx Client form → POST /api/v1/cases
  docs/page.tsx            API docs page
  api/v1/health/route.ts
  api/v1/openapi/route.ts
  api/v1/cases/route.ts
lib/
  demo-cases.ts            Seeded demo data
docs/
  SPEC.md                  This file
  ARCHITECTURE.md
  ROADMAP.md
  INVESTOR.md
  API.md
```

---

## 7. Definition of “usable without Sergio”

A stranger can complete a real dispute only when all of the following are true:

1. Create case from UI and see it listed after refresh (persistence)
2. Upload at least one evidence item
3. See structured findings generated or clearly queued
4. Export or view a report with source links
5. Close or hand off the case to a human/protocol decision path

Until then, the product is a **verified foundation + demo**, not a production dispute tool.

---

## 8. Change policy

- New integrations must flip the corresponding flag in `/api/v1/health` only after tests pass.
- README and SPEC must be updated in the same PR as capability changes.
- No marketing claim without a matching capability flag.
