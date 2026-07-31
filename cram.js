/* BIOL 40B — Lecture Exam 2 cram sheet renderer.
   Tap a row to reveal its answer. Cues stay visible so the sheet works as active recall
   rather than re-reading. Expand-all + print give you a paper cheat sheet. */
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
  /* cram answers are authored with a little inline <b> markup, so allow those through */
  const rich = s => esc(s).replace(/&lt;(\/?)(b|i|br\s*\/?)&gt;/g, "<$1$2>");

  let total = 0, starred = 0;

  $("cramsecs").innerHTML = CRAM.map((sec, si) => {
    const T = TOPICS[sec.topic] || { color:"var(--accent)", ic:"•", name:sec.topic };
    total += sec.items.length;
    const secStars = sec.items.filter(it => it.hy).length;
    starred += secStars;
    const rows = sec.items.map((it, i) => `
      <button class="cram-row${it.hy ? " hy" : ""}" type="button" data-hy="${it.hy ? 1 : 0}" style="--tc:${it.hy ? "var(--hy)" : T.color}">
        <span class="cram-num">${si+1}.${i+1}</span>
        <span class="cram-cue">
          <span class="cue">${it.hy ? `<span class="hystar" title="predicted to be on the exam">★</span> ` : ""}${rich(it.c)}</span>
          <span class="cram-reveal">tap to reveal</span>
          <span class="cram-ans">${rich(it.a)}</span>
        </span>
      </button>`).join("");
    return `<details class="cram-sec" id="${sec.id}" style="--tc:${T.color}">
      <summary><span class="cram-dot"></span><span>${esc(sec.title)}</span>
        <span class="cram-count">${sec.obj} · ${sec.items.length}${secStars ? ` · ★${secStars}` : ""}</span></summary>
      <div class="cram-body">
        ${sec.mn ? `<div class="cram-mnem"><span class="cram-mnem-t">mnemonic</span>${sec.mn}</div>` : ""}
        <div class="cram-rows">${rows}</div>
      </div>
    </details>`;
  }).join("");

  /* table of contents chips */
  $("cram-toc").innerHTML = CRAM.map(sec =>
    `<a class="toc-chip" href="#${sec.id}" style="border-left:4px solid ${(TOPICS[sec.topic]||{}).color||"var(--accent)"}">${esc(sec.title.replace(/^\d+\s·\s/, ""))}</a>`
  ).join("");

  $("cram-total").textContent = `${total} facts · ${CRAM.length} sections · ★${starred} predicted high-yield`;

  /* ★-only filter: hide the rest and collapse any section left with nothing */
  let starOnly = false;
  $("staronly").onclick = () => {
    starOnly = !starOnly;
    document.querySelectorAll(".cram-row").forEach(r => {
      r.classList.toggle("hidden", starOnly && r.dataset.hy !== "1");
    });
    document.querySelectorAll(".cram-sec").forEach(d => {
      const left = [...d.querySelectorAll(".cram-row")].filter(r => !r.classList.contains("hidden")).length;
      d.classList.toggle("hidden", starOnly && left === 0);
      const c = d.querySelector(".cram-count");
      if (c && !c.dataset.full) c.dataset.full = c.textContent;
      if (c) c.textContent = starOnly ? `★ ${left} likely` : c.dataset.full;
    });
    $("staronly").textContent = starOnly ? "Show all facts" : "★ Likely-only";
    $("staronly").classList.toggle("btn-primary", starOnly);
    $("staronly").classList.toggle("btn-ghost", !starOnly);
  };

  /* tap to reveal */
  document.addEventListener("click", e => {
    const row = e.target.closest(".cram-row");
    if (row) row.classList.toggle("show");
  });

  /* tools */
  let allOpen = false;
  $("expand").onclick = () => {
    allOpen = !allOpen;
    document.querySelectorAll(".cram-sec").forEach(d => d.open = allOpen);
    $("expand").textContent = allOpen ? "Collapse all sections" : "Expand all sections";
  };
  let allShown = false;
  $("revealall").onclick = () => {
    allShown = !allShown;
    document.querySelectorAll(".cram-row").forEach(r => r.classList.toggle("show", allShown));
    $("revealall").textContent = allShown ? "Hide all answers" : "Reveal all answers";
  };
  $("printbtn").onclick = () => {
    document.querySelectorAll(".cram-sec").forEach(d => d.open = true);
    window.print();
  };

  /* deep link: opening #section-id expands it */
  const openHash = () => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el && el.classList.contains("cram-sec")) { el.open = true; el.scrollIntoView({block:"start"}); }
  };
  window.addEventListener("hashchange", openHash);
  openHash();
})();
