# AgentCourt AI — Scalability

## Architecture principle

The system should scale independently across:

- evidence ingestion
- AI inference
- blockchain reads
- search/retrieval
- case storage
- reporting
- reviewer workflows

## Target architecture

Client
-> API gateway
-> authentication / authorization
-> case service
-> evidence storage
-> queue
-> processing workers
-> evidence graph
-> retrieval/index
-> intelligence services
-> report service
-> reviewer / protocol adapters

## Horizontal scaling

Long-running analysis should run asynchronously.

Workers can scale independently for:

- OCR/document parsing
- embeddings
- LLM analysis
- blockchain indexing
- report generation

The web layer should remain stateless.

## Multi-chain strategy

Start with a small number of high-value EVM networks.

Use adapter interfaces so chain-specific code does not leak into core evidence models.

Later support:

- Ethereum
- Base
- Arbitrum
- other EVM networks
- non-EVM adapters where justified by demand

## Reliability

Production targets should eventually include:

- queue retry policies
- idempotent jobs
- dead-letter queues
- circuit breakers for external providers
- rate limiting
- observability
- backup/restore
- disaster recovery

## Cost control

AI inference is the largest variable cost risk.

Controls should include:

- evidence deduplication
- chunk caching
- model routing
- retrieval before generation
- bounded context
- asynchronous processing
- per-organization budgets

The architecture should optimize for cost per resolved case, not raw AI usage.
