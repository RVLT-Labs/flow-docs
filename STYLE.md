# Writing guide — RVLT Flow user guide

How pages in this guide are structured. Agreed in the docs-structure planning
session (gearflow#959), informed by research into Linear, Notion, Slack,
Shopify, and the rental-industry help centers (Current RMS, Rentman, Flex).

Three companion pieces make this actionable:

- **[VOICE.md](./VOICE.md)** — the words: voice rules, terminology law, the
  AI-slop detection checklist, and the TODO-not-guess rule for gaps. Binding
  on every article.
- **[`templates/`](./templates/)** — copyable skeletons for the three page
  types (task, overview, troubleshooting) with the anatomy annotated inline.
- **`.claude/skills/write-article/`** — the brain-dump-to-article workflow:
  paste raw notes into a session, get a drafted, slop-checked, build-verified
  article on a branch.

## The structure in one paragraph

Top level = **business-function sections** ordered as a user journey (not literal
app-nav labels: "Quotes & invoicing", not "Finance"). Two guided artifacts sit at
the top — **Getting started** (a finite, ordered setup path) and **The rental
workflow** (one end-to-end narrative) — and everything after them is flat,
searchable reference. Each section is **hybrid**: one overview/concept page
("How X works", the category link) plus **verb-first task pages** ("Create a
project", "Deploying gear"). Guided content and reference content never
interleave. `sidebars.ts` is the single source of section order.

## Page types

Copyable skeletons for all three live in [`templates/`](./templates/) —
start from those rather than a blank file.

### Section overview (the `index.mdx` of each folder)

The concept page: what X is, how it relates to everything else, and the one
mental model the section depends on (e.g. model vs asset vs bulk stock; why
finance documents freeze). Ends with `<DocCardList />` for the section's task
pages. If a reader only reads one page per section, it's this one.

### Task page

One job, verb-first title. Anatomy, in order:

1. **Title** — the task, as a verb phrase ("Create and send a quote").
2. **One-line value statement** — why this exists, in the product's voice.
3. **Who can do this** — role/permission note up front (Slack's "Who can use
   this feature?" pattern), so nobody reads ten steps they can't perform.
4. **Numbered steps** — bold the UI labels the user actually clicks. Keep steps
   atomic; the theme renders top-level ordered lists as step badges.
5. **Tip / Note / Warning callouts** — edge cases and gotchas live in
   admonitions, never buried in step prose.
6. **Screenshot placeholders** — `_Screenshot: description_` markers now; a
   dedicated capture pass replaces them once content settles (agreed decision).
7. **Related links** — pointers to adjacent tasks and the owning concepts.

### Troubleshooting page

Symptom-titled ("Why can't I edit prices on this project?"), structured as
symptom → cause → fix. Lives in **Fix a problem**, not in the module sections —
users in pain search the symptom, not the module.

## Stub convention (while scaffolded)

Un-written pages carry a `:::note[🚧 Not written yet]` admonition and a
"What this page will cover" outline. Writing a page = replacing the outline
with real content and deleting the admonition. Don't delete outlines without
writing the content they promise.

## Voice and terminology

Fully specified in **[VOICE.md](./VOICE.md)** — voice rules, the terminology
table, the banned-word/construction/structure slop checklist, and the
before/after examples. The two decisions that shape everything there:

- **Dry, mostly straight.** Personality budget is one wry line per page, in
  the intro or an aside — never in steps, never in troubleshooting. The
  homepage carries the snark; articles carry the answers.
- **Terminology is law** — this guide's [Glossary](docs/glossary.mdx) (and
  the app repo's `gearflow/docs/glossary.md` behind it) define the words;
  synonyms are defects.

Scope rule that lives here because it's structural: this is a **user
guide** — no code, no schema names, no API routes. The developer docs live
in the app repo. The one exception is Integrations & AI, which may show the
minimum a user needs to paste.

## v1 scope (agreed)

Real content lands first for the core rental workflow: Getting started, The
rental workflow, Projects, Quotes & invoicing, Assets & inventory, Warehouse,
Crew, Fix a problem, Glossary. The remaining sections (Clients & suppliers,
Maintenance & compliance, Settings & administration, Integrations & AI) stay
as outlines until the core is written.
