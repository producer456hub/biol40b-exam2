/* BIOL 40B — Lecture Exam 2 hub: theme, progress snapshot, per-mode status. */
(() => {
  const $ = id => document.getElementById(id);

  const root = document.documentElement;
  const saved = localStorage.getItem("b2-theme");
  if (saved) root.setAttribute("data-theme", saved);
  $("theme").onclick = () => {
    const cur = root.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
    const nxt = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", nxt); localStorage.setItem("b2-theme", nxt);
  };

  const grab = k => { try { return JSON.parse(localStorage.getItem(k)) || {}; } catch { return {}; } };
  const results = grab("b2-results");
  const runs = grab("b2-runs");

  /* the whole pool, ids prefixed the same way every page does it */
  const POOL = [
    ...EXAM_A.map(q => ({...q, n:"A"+q.n})),
    ...EXAM_B.map(q => ({...q, n:"B"+q.n})),
    ...HISTO .map(q => ({...q, n:"H"+q.n})),
  ];
  const s = SRS.summary(POOL);
  const hyCount = POOL.filter(q => q.hy).length;

  const seen = Object.keys(results).length;
  const first = Object.values(results).filter(r => r.f).length;

  /* objectives whose every question has retired to criterion */
  const byObj = {};
  POOL.forEach(q => (q.obj||[]).forEach(id => (byObj[id] = byObj[id]||[]).push(q.n)));
  const solid = OBJECTIVES.filter(o => {
    const ids = byObj[o.id] || [];
    return ids.length && ids.every(k => results[k] && results[k].l);
  }).length;

  $("snapshot").innerHTML = `
    <div class="sn"><span class="k">Objectives solid</span><span class="v">${solid} / ${OBJECTIVES.length}</span></div>
    <div class="sn"><span class="k">Retired</span><span class="v">${s.retired} / ${s.total}</span></div>
    <div class="sn"><span class="k">Due for review</span><span class="v">${s.due}</span></div>
    <div class="sn"><span class="k">Right first try</span><span class="v">${seen ? Math.round(100*first/seen)+"%" : "—"}</span></div>`;

  /* the one thing worth nagging about: a due queue, or an unset exam date */
  const db = $("duebanner");
  if (s.due && seen){
    db.innerHTML = `<div class="hynote" style="margin-top:14px"><span>🔁</span><span><b>${s.due} question${s.due>1?"s":""} due
      for spaced review${s.daysToExam !== null ? ` · ${s.daysToExam} day${s.daysToExam===1?"":"s"} to the exam` : ""}.</b>
      Clearing today's queue is worth more than a longer session tomorrow.
      <a href="review.html">Open the review queue →</a></span></div>`;
  } else if (seen && !s.exam){
    db.innerHTML = `<div class="notebox" style="margin-top:14px"><span>📅</span><span>Set your <b>exam date</b> on the
      <a href="review.html">review page</a> and the spacing gaps resize themselves to the time you have left.</span></div>`;
  }

  const fmt = f => {
    const r = runs[f];
    if (!r) return "not attempted yet";
    const d = new Date(r.when);
    return `last finished ${d.toLocaleDateString()} · ${Math.round(100*r.first/r.total)}% first try · ${r.rounds} round${r.rounds>1?"s":""}`;
  };
  $("meta-a").textContent = `80 questions · ${fmt("A")}`;
  $("meta-b").textContent = `80 questions · ${fmt("B")}`;
  $("meta-h").textContent = `20 questions · ${fmt("H")}`;
  $("meta-hy").textContent = `${hyCount} starred questions`;
  $("meta-due").textContent = s.due ? `${s.due} due now` : (s.retired === s.total && s.total ? "all retired" : "nothing due");
})();
