# GitHub Setup Guide — AgentCourt AI

This folder contains the complete documentation and repository skeleton ready for public presentation.

## Files Included

```
agentcourt-ai/
├── .github/workflows/ci.yml    # Basic CI (lint/test/build/audit)
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE                     # MIT
├── README.md                   # Main public face
├── SECURITY.md
├── package.json                # Minimal metadata
└── docs/
    ├── API.md
    ├── ARCHITECTURE.md
    ├── INVESTOR.md             # Investor brief
    ├── POSITIONING.md          # Messaging & pitch variants
    ├── ROADMAP.md              # MVP phases to functional product
    └── GITHUB_SETUP.md         # This file
```

## How to Publish

Already published at: **https://github.com/srbisnes/agentcourt-ai**

## Recommended README Badges (already included)

- Live Demo
- API Health
- Next.js version
- License
- Demo Video

## Next Recommended Steps

1. Resolve remaining `npm audit` warnings on the Next.js app.
2. Align UI case list with `GET /api/v1/cases` (or document the demo split clearly).
3. Add the architecture SVG to `public/` and reference it from ARCHITECTURE.md.
4. Pin the repository and share the link on X with the existing investor narrative.

## Investor-Facing Files

- `README.md` → public face
- `docs/INVESTOR.md` → dedicated brief
- `docs/ARCHITECTURE.md` → technical depth
- `docs/ROADMAP.md` → path to functional MVP
- `docs/POSITIONING.md` → messaging consistency

All documents are written to be consistent with the live product and the honest capability-flag approach.
