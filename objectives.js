/* BIOL 40B — Lecture Exam 2 · Objective Scope.
   Lays out every learning objective the instructor gave for this unit, shows which
   questions in the banks test it, and turns your saved answers into a per-objective
   mastery meter. "Cleared" means the last time you saw that question, you got it right. */
(() => {
  const $ = id => document.getElementById(id);

  /* theme */
  const root = document.documentElement;
  const saved = localStorage.getItem("b2-theme");
  if (saved) root.setAttribute("data-theme", saved);
  $("theme").onclick = () => {
    const cur = root.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
    const nxt = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", nxt); localStorage.setItem("b2-theme", nxt);
  };

  const esc = s => String(s).replace(/[&<>]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
  const results = (() => { try { return JSON.parse(localStorage.getItem("b2-results")) || {}; } catch { return {}; } })();

  /* ---- index every question by objective ---- */
  const byObj = {}, hyByObj = {};
  const add = (bank, prefix) => bank.forEach(q => {
    (q.obj || []).forEach(id => {
      (byObj[id] = byObj[id] || []).push(prefix + q.n);
      if (q.hy) (hyByObj[id] = hyByObj[id] || []).push(prefix + q.n);
    });
  });
  add(EXAM_A, "A"); add(EXAM_B, "B"); add(HISTO, "H");

  const totalQuestions = EXAM_A.length + EXAM_B.length + HISTO.length;

  function stats(ids){
    let attempted = 0, cleared = 0, first = 0, retired = 0;
    ids.forEach(k => {
      const r = results[k];
      if (!r) return;
      attempted++;
      if (r.l) cleared++;
      if (r.f) first++;
      if (SRS.isRetired(r)) retired++;
    });
    return { total: ids.length, attempted, cleared, first, retired };
  }
  function pill(s){
    if (!s.attempted) return `<span class="pill untouched">not started</span>`;
    const pct = s.cleared / s.total;
    if (s.attempted < s.total) return `<span class="pill mid">in progress</span>`;
    if (pct >= 1)  return `<span class="pill solid">solid</span>`;
    if (pct >= .5) return `<span class="pill mid">shaky</span>`;
    return `<span class="pill shaky">needs work</span>`;
  }

  /* ---- render ---- */
  let solidCount = 0, attemptedQ = 0, firstQ = 0;
  Object.keys(results).forEach(k => { attemptedQ++; if (results[k].f) firstQ++; });

  const secs = Object.keys(TOPICS).map(tk => {
    const T = TOPICS[tk];
    const objs = OBJECTIVES.filter(o => o.topic === tk);
    let secTotal = 0, secCleared = 0;

    const rows = objs.map(o => {
      const ids = byObj[o.id] || [];
      const hyIds = hyByObj[o.id] || [];
      const s = stats(ids);
      secTotal += s.total; secCleared += s.cleared;
      if (s.total && s.cleared === s.total) solidCount++;
      const pct = s.total ? Math.round(100 * s.cleared / s.total) : 0;
      const marked = ids.map(k => hyIds.includes(k) ? `★${k}` : k).join(" · ");
      return `<div class="objrow">
        <span class="oid">${o.id}</span>
        <span class="otxt">
          <span class="ot">${esc(o.text)}</span>
          <span class="om">
            <span class="meter"><i style="width:${pct}%"></i></span>
            <span class="mlab">${s.cleared}/${s.total} cleared${s.retired ? ` · ${s.retired} retired` : ""}</span>
            ${pill(s)}
            ${hyIds.length ? `<span class="hycount">★ ${hyIds.length} likely</span>` : ""}
          </span>
          <span class="qlinks">${ids.length ? "tested by " + marked : "no question tagged"}</span>
        </span>
      </div>`;
    }).join("");

    const secPct = secTotal ? Math.round(100 * secCleared / secTotal) : 0;
    return `<details class="objsec" style="--tc:${T.color}"${secPct < 100 ? " open" : ""}>
      <summary><span>${T.ic}</span><span>${esc(T.name)}</span>
        <span class="deck">${objs.length} objectives · ${secPct}%</span></summary>
      <div class="objbody">${rows}</div>
    </details>`;
  }).join("");

  $("objsecs").innerHTML = secs;

  $("snapshot").innerHTML = `
    <div class="sn"><span class="k">Objectives solid</span><span class="v">${solidCount} / ${OBJECTIVES.length}</span></div>
    <div class="sn"><span class="k">Questions seen</span><span class="v">${attemptedQ} / ${totalQuestions}</span></div>
    <div class="sn"><span class="k">Right first try</span><span class="v">${attemptedQ ? Math.round(100*firstQ/attemptedQ)+"%" : "—"}</span></div>`;

  $("reset").onclick = () => {
    if (!confirm("Clear all saved progress? Every objective meter goes back to zero. This cannot be undone.")) return;
    localStorage.removeItem("b2-results");
    localStorage.removeItem("b2-runs");
    location.reload();
  };
})();
