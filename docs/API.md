# API Reference — AgentCourt AI v0.1.0

Base URL: `https://agentcourt-ai.vercel.app`

The current public API surface is intentionally small and deterministic.  
All production integrations are disabled until implemented and tested.

---

## GET /api/v1/health

Returns service health and explicit capability flags.

**Response 200**

```json
{
  "ok": true,
  "status": "ready",
  "version": "0.1.0",
  "capabilities": [
    "public-case-demo",
    "health-api",
    "openapi-contract"
  ],
  "integrations": {
    "database": false,
    "ai": false,
    "blockchain": false,
    "authentication": false,
    "arbitration": false
  }
}
```

Use this endpoint to discover what is actually live. Never assume features that are flagged `false`.

---

## GET /api/v1/openapi

Returns the OpenAPI 3.1.0 contract for the public surface.

**Response 200** — OpenAPI JSON document describing:

- `GET /api/v1/health`
- `GET /api/v1/cases`
- `POST /api/v1/cases`

---

## GET /api/v1/cases

Returns the current demo case list.

**Response 200**

```json
{
  "status": "ready",
  "mode": "demo",
  "persistent": false,
  "cases": []
}
```

Note: The UI may display illustrative cases while the API remains in non-persistent demo mode. This is intentional and will be unified as the product matures.

---

## POST /api/v1/cases

Accepts a new demo case.

**Request body**

```json
{
  "title": "Example case"
}
```

**Response 202** — Case accepted (demo mode).  
**Response 400** — Title required.

---

## Design Notes

- No authentication is required or available in v0.1.0.
- No rate limiting is enforced yet (will be added before write-heavy production use).
- All responses are deterministic and suitable for integration testing.
- Future versions will expand the contract while preserving the health capability flags pattern.

For the live contract always prefer the OpenAPI endpoint over this static document.
