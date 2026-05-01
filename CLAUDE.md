# CLAUDE.md

Repo role: mockup or proposal repo for a potential client, not a primary maintained live client surface right now.

## Business Context

- Treat this repo as a sales asset and template candidate.
- Shared workflow rules live in `/home/cresp3/Portfolio/AI-WORKFLOW.md`.

## Claude Role Here

- Use Claude for luxury product positioning, layout direction, copy, and mockup polish.
- Let Codex handle implementation and template reuse if this repo becomes active work.

## Working Notes

- This repo should stay in the mockup lane unless explicitly promoted.
- Keep the design premium and gift-focused rather than treating it like a generic commerce build.

## Useful Commands

```bash
npm run dev
npm run build
npm run lint
npm run start
npm run stitch:init
npm run stitch:doctor
npm run stitch:proxy
```

## Shared AI Tooling

- Follow `AI-WORKFLOW.md` for the shared CSolutions AI stack.
- Use repo-local `.claude/skills/` for `code-review-graph`, `Impeccable`, and `mattpocock/skills` workflows.
- Use `.mcp.json` with `code-review-graph` after running `code-review-graph build` so exploration and reviews stay token-efficient.
- Use OpenSpec for larger changes that benefit from proposal, spec, and task artifacts.
