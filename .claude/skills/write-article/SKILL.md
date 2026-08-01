---
name: write-article
description: >
  Turn Jayden's brain dump into a finished RVLT Flow user-guide article.
  Use when the user pastes raw notes/thoughts about a feature and wants a
  docs page written, says "write the article", "here's a brain dump",
  "draft the page for X", or invokes /write-article. Produces a drafted,
  slop-checked, build-verified article committed and pushed on a branch.
---

# write-article — brain dump → published-ready article

You are turning raw, unordered notes from Jayden (the product's builder)
into a finished user-guide article. His dump is authoritative for facts,
emphasis, and what matters; the guide's conventions are authoritative for
everything about how it reads. Never invent product behavior he didn't
state.

## 0. Load the law

Read, in this order, before writing a word:

1. `VOICE.md` — voice, terminology table, the slop checklist, TODO rules.
2. `STYLE.md` — structure, page types, stub convention.
3. The matching skeleton in `templates/` (task / overview / troubleshooting).
4. `docs/glossary.mdx` — the user-facing vocabulary.
5. The target page's current stub — its "What this page will cover" outline
   is a promise list you must either fulfil or consciously drop.

If a `gearflow` checkout is available (check `../gearflow` or ask git),
also read `gearflow/docs/glossary.md`. **Terminology-only fact-check**: use
the glossaries to correct names and terms in the dump (he types fast —
"checkout" means Deploy). Do NOT go verifying behavioral claims against
FEATUREDOCS or code — his dump is gospel on behavior. If the dump uses a
term the glossaries contradict, use the glossary term and note the swap in
your final summary.

## 1. Map the dump to pages

Identify which page(s) the dump covers. A dump often spans several: split
it, and confirm the mapping with the user before writing if there is ANY
ambiguity about where content lands. If content belongs on a page that
doesn't exist yet, propose the new page (section, filename, sidebar
position) — a new page means a `sidebars.ts` entry and, if it's a new
section, homepage consideration too.

## 2. Gap scan — ask blockers, TODO the rest

Before drafting, list what the dump doesn't cover that the page's outline
promises. Sort into:

- **Blockers** — you cannot write the page without it (the actual steps of
  the core task; who can perform it; what saving does). Ask these up front
  via AskUserQuestion, batched, max 4. Don't ask things you can write
  around.
- **Minor gaps** — edge cases, limits, secondary flows. Do NOT ask. Mark
  per VOICE.md: `{/* TODO(jayden): ... */}` MDX comments for invisible
  gaps, a `:::note[🚧 Not written yet]` sub-section stub only when a
  reader would be misled by silent absence.

## 3. Draft

- Start from the template for the page type; keep the fixed anatomy
  (who-can-do-this before steps, `_Screenshot: ..._` placeholder markers,
  related links at the end).
- Replace the stub's 🚧 admonition and outline entirely — an article and an
  outline never coexist on a page.
- Every outline promise is either covered, TODO'd, or deliberately dropped
  (say so in the final summary).
- Cross-link: at minimum the owning overview page and one adjacent task.
  Check pages that already link TO this stub still make sense.
- Word budget: task pages 200–500 words of prose plus steps; split past
  ~700. Troubleshooting pages: answer in the first line.

## 4. The slop pass (non-negotiable)

1. Literally grep the draft for every VOICE.md layer-1 banned word.
2. Reread for layer-2 constructions and layer-3 tells (triads, bold-lead-in
   bullets, hedge stacks, antithesis, empty closers).
3. Run the two tests on each paragraph: information test (dump / glossary /
   step — or delete) and competitor test (could Rentman's docs say this
   unchanged? — cut or sharpen).
4. Count the personality: more than one wry line on the page, cut down to
   the best one. Any personality inside steps or troubleshooting: cut to
   zero.

## 5. Verify and land

1. `pnpm build` — must pass (broken links throw). `pnpm typecheck` if you
   touched any `.ts/.tsx`.
2. Commit on the session's designated branch if one was assigned, else a
   fresh `docs/<page-slug>` branch off `main`. Atomic commits — one page
   per commit. Never commit to `main` directly.
3. `git push -u origin <branch>`.
4. Do NOT open a PR or merge unless asked. End by telling Jayden: which
   page(s), what was TODO'd and why, any terminology swaps made, any
   outline promises dropped, and that "get it live" merges it.

## Failure modes to refuse

- The dump contradicts an already-published page: flag it, ask which is
  right — never silently rewrite the other page.
- The dump is opinion/roadmap ("we should probably add..."): that's not
  documentation; leave it out and say so.
- Zero information for a page the user asked for: say what's missing;
  don't pad a page into existence.
