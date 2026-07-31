/* BIOL 40B — Lecture Exam 2 · spacing + mastery scheduler.

   This is the part of the trainer that isn't just "a quiz." It implements the two
   techniques that come out of the research with the strongest support, plus the two
   that change what you should do with a miss:

   1. RETRIEVAL PRACTICE. Repeated testing beats repeated restudy at a delay — in
      Roediger & Karpicke's work, repeated studying did nothing for delayed recall while
      repeated testing produced a large gain. Dunlosky et al. (2013) rate practice
      testing and distributed practice as the only two techniques with HIGH utility.

   2. SUCCESSIVE RELEARNING. Rawson & Dunlosky: retrieve each item correctly to a
      criterion, then do it AGAIN in later spaced sessions. In their course study that
      was worth more than a full letter grade on the real exam. So an item here is not
      "done" the first time you get it right — it must be retrieved correctly in
      THREE SEPARATE SESSIONS on different days before it retires.

   3. EXPANDING SPACED GAPS. Cepeda et al.: the best gap between sessions runs about
      10–20% of the interval you need to remember it for (~20% at a delay of a few
      weeks). So gaps expand 1 → 3 → 7 → 16 days, and if you tell the trainer your exam
      date, every gap is compressed to ~20% of the days you have left and nothing is
      ever scheduled after the exam.

   4. HYPERCORRECTION. Butterfield & Metcalfe: errors you made *confidently* are the
      ones that correct best given immediate specific feedback — but they also tend to
      come back, so they need re-testing rather than a single correction. Confident
      misses are therefore tagged and pushed to the front of the review queue.

   Record shape in localStorage "b2-results", per question id:
     a    attempts            c    times correct
     f    1 = right first try l    1 = right most recently
     box  gap index 0..3      due  ms timestamp when it is next due
     succ correct retrievals in DISTINCT sessions (retires at 3)
     day  last session day counted, "YYYY-MM-DD"
     cw   number of confident misses
*/
const SRS = (() => {
  const RKEY  = "b2-results";
  const CFGK  = "b2-cfg";
  const GAPS  = [1, 3, 7, 16];   // days
  const CRITERION = 3;           // spaced correct retrievals before an item retires

  const load = () => { try { return JSON.parse(localStorage.getItem(RKEY)) || {}; } catch { return {}; } };
  const save = o  => { try { localStorage.setItem(RKEY, JSON.stringify(o)); } catch {} };
  const cfg  = () => { try { return JSON.parse(localStorage.getItem(CFGK)) || {}; } catch { return {}; } };
  const setCfg = o => { try { localStorage.setItem(CFGK, JSON.stringify({...cfg(), ...o})); } catch {} };

  const DAY = 86400000;
  const dayKey = (d = new Date()) =>
    `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
  const startOfToday = () => { const d = new Date(); d.setHours(0,0,0,0); return d.getTime(); };

  /* days until the exam, or null if no date is set */
  function daysToExam(){
    const e = cfg().exam;
    if (!e) return null;
    const [y,m,d] = e.split("-").map(Number);
    const t = new Date(y, m-1, d); t.setHours(0,0,0,0);
    return Math.max(0, Math.round((t.getTime() - startOfToday()) / DAY));
  }

  /* Cepeda-style compression: a gap should be ~20% of the time you must hold the
     material, and it must never land after the exam. */
  function gapDays(box){
    const base = GAPS[Math.min(box, GAPS.length-1)];
    const left = daysToExam();
    if (left === null) return base;
    if (left <= 1) return 1;                       // exam is today/tomorrow: keep cycling daily
    const ideal = Math.max(1, Math.round(left * 0.20));
    return Math.max(1, Math.min(base, ideal, left));
  }

  /* Record one answer. `conf` is "sure" | "think" | "guess" | undefined. */
  function record(id, correct, firstAttempt, conf){
    const all = load();
    const r = all[id] || { a:0, c:0, f:0, l:0, box:0, due:0, succ:0, day:"", cw:0 };
    r.a++;
    if (correct) r.c++;
    if (firstAttempt && correct) r.f = 1;
    r.l = correct ? 1 : 0;

    const today = dayKey();
    if (correct){
      if (r.missDay === today){
        // You missed this one earlier today and have just fixed it in the retry round.
        // That is NOT a spaced retrieval — you saw the answer seconds ago — so it earns
        // no criterion credit and no gap. It comes back tomorrow, from box 0.
        r.box = 0;
        r.due = startOfToday() + DAY;
      } else if (r.day !== today){
        // A genuine retrieval on a new day: one criterion credit, then the next gap.
        // Schedule from the CURRENT box before advancing it, so the very first correct
        // answer earns the shortest gap (1 day) and the sequence really is 1 → 3 → 7 → 16.
        r.succ = (r.succ||0) + 1; r.day = today;
        r.due = startOfToday() + gapDays(r.box || 0) * DAY;
        r.box = Math.min((r.box||0)+1, GAPS.length-1);
      } else {
        // already credited today; keep the existing due date
        r.due = r.due || (startOfToday() + gapDays(r.box) * DAY);
      }
    } else {
      r.succ = 0; r.box = 0; r.day = ""; r.missDay = today;
      r.due = startOfToday() + DAY;                // a miss comes back tomorrow
      if (conf === "sure") r.cw = (r.cw||0) + 1;   // confident miss — hypercorrection target
    }
    if (conf) r.conf = conf;
    all[id] = r;
    save(all);
    return r;
  }

  const isRetired = r => !!r && (r.succ||0) >= CRITERION;
  const isDue = (r, now = Date.now()) => !r ? true : (isRetired(r) ? false : (r.due||0) <= now);

  /* The review queue: everything due, ordered by what the research says to hit first —
     confident misses, then most overdue, then the predicted-high-yield items. */
  function queue(pool){
    const all = load();
    const now = Date.now();
    return pool
      .filter(q => isDue(all[q.n], now))
      .sort((x, y) => {
        const rx = all[x.n] || {}, ry = all[y.n] || {};
        if ((ry.cw||0) !== (rx.cw||0)) return (ry.cw||0) - (rx.cw||0);
        const dx = rx.due || 0, dy = ry.due || 0;
        if (dx !== dy) return dx - dy;
        return (y.hy||0) - (x.hy||0);
      });
  }

  function summary(pool){
    const all = load();
    const now = Date.now();
    let retired = 0, learning = 0, due = 0, unseen = 0, confidentMisses = 0;
    pool.forEach(q => {
      const r = all[q.n];
      if (!r) { unseen++; due++; return; }
      if (isRetired(r)) { retired++; return; }
      learning++;
      if ((r.due||0) <= now) due++;
      confidentMisses += (r.cw||0) ? 1 : 0;
    });
    return { total: pool.length, retired, learning, due, unseen, confidentMisses,
             criterion: CRITERION, daysToExam: daysToExam(), exam: cfg().exam || null };
  }

  /* human-readable "next up" for a single item */
  function nextLabel(id){
    const r = load()[id];
    if (!r) return "not started";
    if (isRetired(r)) return "retired";
    const days = Math.ceil(((r.due||0) - startOfToday()) / DAY);
    if (days <= 0) return "due now";
    return days === 1 ? "due tomorrow" : `due in ${days} days`;
  }

  return { record, queue, summary, isDue, isRetired, nextLabel, cfg, setCfg,
           daysToExam, gapDays, GAPS, CRITERION, load };
})();
