# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 0.1.x (current demo) | Yes |
| Future production releases | Will be listed here |

## Reporting a Vulnerability

If you discover a security issue in AgentCourt AI:

1. **Do not** open a public GitHub issue.
2. Email the maintainer privately or contact via the X account listed in the README.
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested remediation (if any)

We will acknowledge receipt within 72 hours and provide a timeline for remediation.

## Current Security Posture (v0.1.0)

AgentCourt AI is currently a **public demo shell**.

- No production database
- No authentication
- No real AI inference pipeline
- No blockchain write operations
- No arbitration execution

The health endpoint explicitly advertises this:

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

## Dependency Security

- The project tracks `npm audit` results.
- Known advisories are remediated before any production claim.
- Lockfiles are required for reproducible builds.
- Automated dependency updates (Dependabot / Renovate) will be enabled for production branches.

## Design Principles

- **No silent features**: Capability flags must match reality.
- **Least privilege**: Future production services will run with minimal required permissions.
- **Auditability**: Every AI-generated finding must retain source references and confidence scores.
- **Human / protocol control**: AgentCourt AI never executes final rulings.

## Responsible Disclosure

We follow coordinated disclosure. Public disclosure is requested only after a fix is available or after a mutually agreed timeline.

Thank you for helping keep AgentCourt AI and its users safe.
