# BIOL 40B — Lecture Exam 2 Trainer

A browser-based practice **lecture exam** for BIOL 40B (A&P 2, second half), built from the five
Exam 2 lecture decks and tagged against the instructor's own learning objectives.

Everything is **multiple choice — one correct answer and four distractors (A–E)**. Pick an answer and
the correct choice plus a short explanation appear immediately; anything you miss is re-queued and
comes back round after round until you have cleared the whole set.

**Play it:** open `index.html`, or the GitHub Pages link.

## What's in it

| Page | What it is |
|------|-----------|
| `index.html` | Hub — progress snapshot, what's due, suggested run |
| `exam-a.html` | **Form A** — a full 80-question exam |
| `exam-b.html` | **Form B** — a second, different 80 over the same objectives |
| `likely.html` | **★ Most likely on the exam** — the 91 predicted high-yield questions |
| `review.html` | **Spaced review** — today's due queue, exam-date aware |
| `drill.html` | Topic drill — one topic at a time out of the full 180-question pool |
| `histology.html` | Histology mini-round — 20 microscopic-anatomy questions |
| `objectives.html` | Objective Scope — all 47 objectives, coverage and mastery per objective |
| `cram.html` | Cram sheet — 195 tap-to-reveal facts in 24 sections, ★100 starred, printable |
| `method.html` | The retention research every mechanic here is built on, with sources |

### Coverage

Two independent 80-question forms, weighted by deck size:

| Topic | Source deck | Per form |
|-------|-------------|----------|
| Blood | Blood winter 25 (71 slides) | 19 |
| Heart anatomy | heart anatomy (47) | 13 |
| Cardiac physiology | cardiophysiology winter 25 (59) | 16 |
| Blood vessels | blood vessels 2 (60) | 16 |
| Respiratory | Respiratory system revised (60) | 16 |

**Each form covers all 47 objectives on its own**, so taking one is full coverage and the second is a
fresh test of the same scope. Objectives come verbatim from the objectives handout plus the objectives
slide of each deck. Enforced by the bank check — see *Data integrity* below.

### The ★ "likely on the exam" prediction

91 of the 180 questions (and 100 of the 195 cram rows) are starred as predicted high-yield, and the star
shows up everywhere — in the question header, on the Objectives page, on the cram sheet, and as its own
mode. The starred set covers all 47 objectives.

Picked on five signals, in order of weight:

1. **His own INDEX CARD slides** — where the instructor stopped and wrote a question himself.
2. **Anything he put a number on** — hematocrit ~45%, the WBC differential, SA 60–100 vs AV 40–60,
   CO = HR × SV, the CO₂ transport percentages, VC = TV+IRV+ERV, the hypertension stages.
3. **Chains he spent several slides building** — conduction pathway, cardiac cycle phases, ECG waves
   and intervals, hemostasis, capillary filtration vs reabsorption, control of breathing.
4. **The named mnemonic** he put on a slide ("Never let monkeys eat bananas").
5. **The standard A&P 2 discriminators** — artery vs vein wall, tricuspid vs bicuspid, S1 vs S2,
   preload vs afterload, VC vs TLC, right lung 3 lobes vs left 2.

This is a **prediction, not inside information**, and it's framed that way in the UI: a supplement to a
full form, never a replacement.

## How it's built (the learning-science part)

`method.html` documents this in full with sources. Short version — the trainer implements the two
techniques Dunlosky et al. (2013) rated **high utility** (practice testing, distributed practice) and
skips the ones they rated low (rereading, highlighting, summarising):

- **Retrieval practice.** 180 questions, no reading passages. Even the cram sheet hides its answers
  behind a tap, so review is still retrieval. *(Roediger & Karpicke)*
- **Successive relearning.** A question doesn't retire until you've answered it correctly on **three
  different days**. Fixing a miss in the same session earns *no* criterion credit — you saw the answer
  seconds ago, so it isn't a spaced retrieval. *(Rawson & Dunlosky; Janes et al. 2020)*
- **Expanding, deadline-aware gaps.** 1 → 3 → 7 → 16 days, each compressed to ~20% of the days left
  before your exam date and clamped so nothing schedules after the exam. *(Cepeda et al. 2006, 2008)*
- **Interleaving.** Every mode except the topic drill shuffles across all five topics. *(Taylor & Rohrer 2010)*
- **Hypercorrection.** You rate confidence *before* the answer is revealed. A miss you marked "sure"
  is flagged on the spot, counted in the calibration panel, and pushed to the front of the review
  queue — because those are both the most correctable errors and the most likely to return.
  *(Butterfield & Metcalfe; Metcalfe & Finn 2011)*
- **Self-explanation.** After a miss you're held for a beat and asked to state *why* the right answer
  is right before moving on.

No streaks, no XP, no daily-flame mechanic — nothing here rewards showing up twice in one day when the
evidence says to come back tomorrow.

## Structure

| File | Purpose |
|------|---------|
| `styles.css` | Cardiopulmonary visual identity, per-topic colour coding, light + dark |
| `engine.js` | MCQ engine: shuffled choices, confidence step, reveal, retry-until-cleared, calibration |
| `srs.js` | Spacing + mastery scheduler (gaps, criterion, due queue, exam-date compression) |
| `exam_a.js` / `exam_b.js` | The two 80-question banks |
| `histology_data.js` | 20-question histology round |
| `cram_data.js` | 195 cram facts in 24 objective-grouped sections |
| `objectives_data.js` | The 47 objectives + the topic/colour map |
| `objectives.js` / `cram.js` / `hub.js` | Page renderers |

### Authoring convention

In every bank the **correct option is written first (`ans:0`)** so the file can be audited at a glance.
The engine reshuffles all five choices on every render, so no answer has a stable position on screen —
verified by an automated pass that plays all 180 questions and asserts the engine marks the
authored-correct option correct every time.

### Data integrity

Progress lives in `localStorage` (`b2-results`, `b2-runs`, `b2-cfg`, `b2-theme`) — no accounts, no
server, nothing leaves the browser. Question ids are shared across pages (`A12`, `B7`, `H3`), so
answering a question in the drill, the starred set or the review queue updates the *same* record as
answering it on its home page.

---

## Slide-figure pass

Several slides in the decks are **image-only** — no extractable text. Those images were pulled out of
the `pptx` files and read, and the banks were corrected against them rather than against general A&P
knowledge. What that changed:

| Figure | What it pinned down |
|--------|--------------------|
| Blood typing plate (agglutination) | Reading the test: clumps with anti-A only → A, anti-B only → B, both → AB, neither → O |
| Fate/destruction of erythrocytes | Globin → amino acids; heme → iron on **transferrin** back to marrow, and biliverdin → bilirubin → liver → bile → gut → **stercobilin** (feces) / **urobilin** (urine) |
| Cardiac-cycle (Wiggers) diagram | **EDV ≈ 135 mL, ESV ≈ 65 mL → SV = 70 mL** (the same 70 in his CO example), ejection fraction ≈ 52%, and the **dicrotic notch** |
| Spirogram | The actual volumes — TV 500, IRV 3,100, ERV 1,200, RV 1,200 → **VC 4,800, TLC 6,000** — plus inspiratory capacity (3,600) and functional residual capacity (2,400) |
| Partial-pressure figure | **Atmospheric 159/0.3 · alveolar 105/40 · venous blood 40/45 · arterial 100/40 · tissue 40/45** |

Five questions in each form were rewritten to carry this figure-grounded content (all now starred), and
nine cram rows were added. Both forms are still exactly 80 questions and still cover all 47 objectives
individually.

---

*Study aid built from the course lecture decks — not for distribution.*
