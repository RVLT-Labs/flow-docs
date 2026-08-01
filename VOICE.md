# Voice & slop control — RVLT Flow user guide

How articles in this guide sound, and how to catch writing that sounds like a
language model instead of a person who loads trucks. [STYLE.md](./STYLE.md)
covers structure; this file covers the words. Both are binding on every
article, whoever (or whatever) drafts it.

## The voice

Written by someone who has done the job, for someone doing the job right now.
Production-crew vocabulary, short sentences, zero marketing.

**The rules:**

1. **Second person, present tense, active voice.** "Scan the tag" — not "the
   tag can be scanned", not "users should scan".
2. **Short sentences. One idea each.** If a sentence needs a second comma,
   try making it two sentences.
3. **Concrete over abstract.** The truck, the dock, the shelf, load-in, the
   show — not "workflows", "processes", or "solutions". If a rental company's
   floor manager wouldn't say the word out loud, find one they would.
4. **State facts flat.** Flow either does a thing or it doesn't. Check which,
   then write it with no hedge. "Deployed gear leaves the bookable pool" —
   not "this may affect availability in some cases".
5. **Never call anything easy.** "Simply", "just", "effortless" insult the
   reader who's stuck. Describe the steps; let them be easy.
6. **The manual doesn't sell.** The reader already bought Flow. "Flow's
   powerful availability engine" is ad copy; "Flow counts every booking
   against your stock" is documentation.

**The personality budget: one wry line per page, maximum.** It lives in the
intro or a callout aside — never in steps, never in error explanations,
never in anything a person mid-crisis at the returns station has to read to
fix their problem. When in doubt, spend zero. The homepage carries the
snark; articles carry the answers.

## Terminology is law

The [Glossary](./docs/glossary.mdx) defines the vocabulary; use its terms
exactly and never a synonym. The ones that drift:

| Always | Never |
|---|---|
| **Deploy / Return** | check out / check in, dispatch / receive (in prose) |
| **client** | customer, account |
| **pick slip** | packing list, pull sheet (aliases exist; the guide picks one) |
| **pencilled** | tentative, provisional, soft-booked |
| **model / asset / bulk stock** | product, item, SKU, unit (unqualified) |
| **kit** | package, bundle |
| **sub-hire** | cross-hire, re-rent |
| **crew** | staff, resources |

UI labels are **bold** and copied character-for-character from the screen.
Keyboard keys in `backticks`. If the app's label and the glossary term
differ, the label wins inside steps and the glossary term wins in prose.

## AI slop detection

Every article gets a slop pass before it's committed. Slop is writing that
pattern-matches "helpful article" without carrying information — a model's
reflexes where a person's knowledge should be. Three layers: banned words,
banned constructions, and structural tells.

### Layer 1 — banned words (grep for these, literally)

Never in an article, in any form:

> delve, leverage (as a verb), robust, seamless, seamlessly, streamline,
> streamlined, utilize, empower, elevate, supercharge, unlock (metaphorical),
> harness (as a verb), effortless, effortlessly, hassle-free, intuitive,
> cutting-edge, game-changer, game-changing, best-in-class, world-class,
> state-of-the-art, next-level, revolutionize, transform (as praise),
> powerful (as praise), comprehensive (as praise), rich (as in "rich
> feature set"), vibrant, crucial, vital (when "needed" would do),
> furthermore, moreover, additionally (as a sentence opener), navigate
> (metaphorical — "navigate the process"), landscape (metaphorical),
> journey (metaphorical), dive (metaphorical), explore (when you mean
> "read about")

And the filler minimizers: **simply**, **just** (as in "just click"),
**easily**, **quickly** (as promises). Steps don't promise speed; they
deliver it by being short.

### Layer 2 — banned constructions

- "**Whether you're** a small shop **or** a large operation…" — the
  audience-flattering fork. Cut the sentence; the content should work for
  both without saying so.
- "**In this article, we'll**…" / "**Let's dive in**" / "**Welcome to**…" —
  throat-clearing. Start with the thing.
- "**It's important to note that**…" / "**Please note that**…" — if it's
  important, it's a Note admonition or it's just the next sentence.
- "**It's not just X — it's Y**" and every other antithesis reflex
  ("more than a", "isn't merely"). One is a device; three is a tic; this
  guide's budget is zero.
- "**…has never been easier**" / "**Say goodbye to**…" / "**Take your X to
  the next level**" — ad copy.
- "**That's it!**" / "**And you're done!**" / "**Happy renting!**" — empty
  closers. An article ends when the information ends.
- "**Don't worry**" / "**No need to panic**" — reassurance without content.
  If something looks scary but is safe, say *why* it's safe.
- "**As mentioned earlier**…" — either link the earlier section or trust
  the reader.
- Rhetorical questions as section transitions ("So what happens when the
  gear comes back?"). Headings do that job.

### Layer 3 — structural tells

- **The triad reflex.** "Fast, reliable, and secure." Models emit
  adjectives and list items in threes; people pick the one that's true.
  Any list of exactly three qualities is a suspect; keep the one that
  carries information.
- **Bold-lead-in bullet disease.** "**Flexibility:** you can…" repeated
  down a list. If every bullet needs a bolded label, the list probably
  wants to be a table or prose.
- **Uniform paragraphs.** Every paragraph three sentences, every section
  ending with a mini-summary. Real explanations are lumpy — a one-line
  paragraph next to a six-line one is a good sign.
- **Hedge stacking.** "may", "might", "can potentially", "in some cases" —
  more than one hedge in a sentence means nobody checked the behavior.
  Check it (or TODO it), then state it.
- **Em-dash + antithesis loops.** This site's voice legitimately uses
  em-dashes, so they're not banned — but "not X — Y" constructions and
  more than one dash per paragraph is the machine showing through.
- **Symmetric section padding.** A "Benefits" section, a "Best practices"
  section, a "Conclusion" — sections that exist because articles-shaped
  things have them, not because there's content. STYLE.md defines the only
  sections a page needs.

### The two tests

Run both on every paragraph of a draft:

1. **The information test.** Does this sentence contain something the brain
   dump said, the glossary defines, or a step the user takes? If it's none
   of the three, it's filler — delete it.
2. **The competitor test.** Could this sentence appear unchanged in
   Rentman's or Current RMS's docs? Then it says nothing about Flow — cut
   it or sharpen it until it couldn't.

## Before / after

**Slop:**

> Flow's powerful quoting engine makes it effortless to create professional
> quotes in seconds. Whether you're a small AV shop or a large production
> house, simply click Create Quote and let Flow do the rest!

**Real:**

> The project's gear list and pricing become a branded PDF. Click **Create
> quote**, check the preview, send it.

---

**Slop:**

> It's important to note that maintenance may potentially impact the
> availability of your assets in some cases.

**Real:**

> Gear in maintenance leaves the bookable pool. It stays out until the
> maintenance record is completed.

---

**Slop:**

> Kits are a powerful, flexible, and intuitive way to group your equipment.
> They're not just containers — they're a whole new way to think about your
> inventory!

**Real:**

> A kit is gear that travels and prices as one line: the projector with its
> lens, frame, and cabling. One price on the quote, every component tracked
> underneath.

## Gaps: TODOs, not guesses

When the brain dump doesn't cover something, never invent it. Two markers:

- **Invisible gap** — the article reads fine without it (a missing edge
  case, an unconfirmed limit). Leave an MDX comment where it belongs:
  `{/* TODO(jayden): what happens if the client declines? */}` — readers
  never see it; the next writing pass greps for `TODO(`.
- **Visible gap** — a whole promised section is missing and a reader would
  be misled by its absence. Use the stub admonition on just that section:
  `:::note[🚧 Not written yet]` with one line on what's coming.

A wrong "fact" in a published guide is worse than a visible hole. When in
doubt, TODO it.
