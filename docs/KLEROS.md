# Kleros integration path — AgentCourt AI

**Audience:** Kleros core, Court integrators, arbitrable builders.

AgentCourt AI is an **evidence intelligence layer**. It does not replace Kleros Court.
It prepares structured evidence so jurors spend less time on chaos and more on judgment.

---

## What exists today (verified)

| Capability | Status |
|------------|--------|
| Demo case workspace | Live |
| ERC-1497-shaped evidence JSON export | Live (client-side) |
| Markdown / CSV report export | Live |
| Dispute dashboard (demo metrics) | Live |
| On-chain `Evidence` event | **Not implemented** |
| IPFS pin of evidence files | **Not implemented** |
| `@kleros/kleros-sdk` submitEvidence | **Not implemented** |
| Live juror / vote indexer | **Not implemented** |

Health flags remain `arbitration: false` until the above on-chain path is tested.

---

## Why Kleros should care

Kleros already solves **who wins** (crypto-economic juries).

Jurors still receive unordered PDFs, chats, screenshots and tx hashes.

AgentCourt AI targets that gap:

1. Structure evidence before the evidence period
2. Surface contradictions with sources
3. Export packages in the format Court UIs already understand (ERC-1497 / V2 evidence JSON)
4. Keep final ruling with Kleros — never claim automated justice

This matches Kleros’s own direction on AI for **case preparation**, not silent replacement of jurors.

---

## ERC-1497 evidence JSON (V1 / widely supported)

```json
{
  "name": "Delivery confirmation",
  "description": "Email confirming delivery of the website",
  "fileURI": "/ipfs/Qm…",
  "fileHash": "0x…",
  "fileTypeExtension": "pdf"
}
```

AgentCourt export adds case-level context (contradictions, finding, confidence) in a wrapper while keeping each item ERC-1497-compatible.

---

## V2 path (Arbitrum + SDK)

From [Kleros V2 SDK](https://docs.kleros.io/reference/sdk/kleros-sdk):

```ts
import { uploadEvidence, submitEvidence } from "@kleros/kleros-sdk";

const { uri } = await uploadEvidence({
  name: "Delivery Receipt",
  description: "…",
  fileURI: "/ipfs/QmFile…",
});

await submitEvidence(walletClient, {
  arbitrator: KLEROS_CORE_ADDRESS,
  evidenceGroupID: txID,
  evidence: uri,
});
```

**AgentCourt role before that call:**

- Collect multi-source evidence
- Hash + provenance
- Build name/description/fileURI package
- Present to the party for explicit wallet submission

AgentCourt should **never** auto-submit without user authorization.

---

## Proposed integration phases

### Phase A — Format (done in demo)

- [x] Build ERC-1497-shaped JSON from case data
- [x] Export for human / integrator review
- [x] Document this path

### Phase B — Storage

- [ ] Persist cases + evidence blobs
- [ ] Compute content hashes
- [ ] Optional IPFS/Atlas pin (Kleros-aligned storage)

### Phase C — Read-only Court data

- [ ] Subgraph or indexer for dispute status, draws, votes
- [ ] Dashboard switches from demo metrics to live reads
- [ ] Flip health capability only after tests

### Phase D — Write path

- [ ] Wallet connect
- [ ] `uploadEvidence` + `submitEvidence` via SDK
- [ ] Map AgentCourt case ID ↔ evidence group / dispute ID
- [ ] Audit + security review

---

## What we will not claim

- “Live Kleros integration” without on-chain txs in a verified environment
- “Real-time juror tracking” without an indexer
- “Banking-grade E2E encryption” without a threat model and implementation
- Automated verdicts that bypass Court

---

## Contact for partnership

Product: https://agentcourt-ai.vercel.app  
Repo: https://github.com/srbisnes/agentcourt-ai  
Builder: ElCryptoBoy / @rodriboero1986

Ask for a pilot: **one real dispute type** (e.g. freelance delivery) → AgentCourt structures evidence → parties submit to Court via standard evidence flow → measure juror time-to-decision vs baseline.
