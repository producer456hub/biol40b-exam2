/* BIOL 40B — Lecture Exam 2 · shared MCQ engine.
   Drives Exam A, Exam B, the predicted high-yield set, the spaced review queue, the
   topic drill and the histology round. A page sets a global EXAM_CFG before loading:

     EXAM_CFG = { bank: EXAM_A, form:"A", allowTopics:false }

   Behaviour: pick an answer → (optionally rate how sure you are) → every choice locks,
   the correct one lights up, an explanation appears → Next. Missed questions are
   re-queued and come back round after round until the whole set is cleared.

   Two research-driven wrinkles, both explained in method.html:
   · CONFIDENCE FIRST. You rate certainty before the answer is revealed. A miss you were
     sure about is the single most correctable kind of error given immediate feedback
     (hypercorrection), so those get tagged and pushed to the front of the review queue.
   · SPACED MASTERY. Every answer feeds srs.js, which requires three correct retrievals
     on three different days before an item retires. */
(() => {
  const $ = id => document.getElementById(id);
  const LETTERS = ["A","B","C","D","E"];
  const cfg = window.EXAM_CFG || {};
  const BANK = cfg.bank || [];
  // "" is legitimate: the drill and review pages carry the form letter inside q.n itself
  // so results land on the same key the question has on its own page. Don't `||` it away.
  const FORM = cfg.form === undefined ? "X" : cfg.form;

  /* ---------------- theme (shared across every page) ---------------- */
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("b2-theme");
  if (savedTheme) root.setAttribute("data-theme", savedTheme);
  const themeBtn = $("theme");
  if (themeBtn) themeBtn.onclick = () => {
    const cur = root.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
    const nxt = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", nxt);
    localStorage.setItem("b2-theme", nxt);
  };

  const shuffle = a => { for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];} return a; };
  const escapeHtml = s => String(s).replace(/[&<>]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));

  function saveRun(stats){
    try {
      const runs = JSON.parse(localStorage.getItem("b2-runs")) || {};
      runs[cfg.runKey || FORM || "drill"] = stats;
      localStorage.setItem("b2-runs", JSON.stringify(runs));
    } catch {}
  }

  /* ---------------- state ---------------- */
  let pool=[], idx=0, retry=[], round=1, totalItems=0, firstTry=0, answeredFirst=new Set();
  let missed=[], missedKeys=new Set(), doneMissed=[];
  let locked=false, order=[], pending=null, useConf=true, revealed=false;
  let byTopic={}, confLog=[];

  function show(which){ for(const id of ["start","exam","done"]) { const el=$(id); if(el) el.classList.toggle("hidden", id!==which); } }
  function banner(html){ const b=$("banner"); if(b) b.innerHTML = html; }

  /* ---------------- pool ---------------- */
  function selectedTopics(){
    return [...document.querySelectorAll('input[name="topic"]:checked')].map(b => b.value);
  }
  function buildPool(){
    let all = BANK.slice();
    if (cfg.allowTopics){
      // No topic ticked means "nothing", not "everything" — return an empty pool so the
      // caller shows the warning instead of quietly serving all 180 questions.
      all = all.filter(q => selectedTopics().includes(q.topic));
    }
    const hyOnly = $("mode-hy");
    if (hyOnly && hyOnly.checked) all = all.filter(q => q.hy);
    const quick = $("mode-quick");
    if (quick && quick.checked) all = shuffle(all).slice(0, Number(quick.dataset.n || 25));
    return all;
  }

  function beginSession(all){
    if(!all.length){ banner(`<div class="box"><span class="ico">⚠️</span><span>Nothing to serve — loosen the filters above and try again.</span></div>`); return; }
    const cbox = $("mode-conf");
    useConf = cbox ? cbox.checked : true;
    pool = shuffle(all.slice()); idx=0; retry=[]; round=1;
    totalItems=all.length; firstTry=0; answeredFirst=new Set();
    missed=[]; missedKeys=new Set(); confLog=[];
    byTopic={};
    all.forEach(q => { (byTopic[q.topic] = byTopic[q.topic] || {n:0, first:0}).n++; });
    banner(""); show("exam"); render(); window.scrollTo({top:0});
  }
  function start(){ beginSession(buildPool()); }

  /* ---------------- render ---------------- */
  function render(){
    locked=false; pending=null; revealed=false;
    const q = pool[idx];
    const T = (typeof TOPICS !== "undefined" && TOPICS[q.topic]) || {name:q.topic, color:"var(--accent)"};
    const card = $("exam");
    if (card) card.style.setProperty("--tc", T.color);

    $("q-badge").textContent = "#" + q.n;
    const tl = $("q-topic"); if (tl) tl.textContent = T.name;
    const ot = $("q-obj");   if (ot) ot.textContent = (q.obj || []).join(" · ");
    const hy = $("q-hy");
    if (hy) hy.classList.toggle("hidden", !q.hy);
    $("q-prompt").textContent = q.q;

    // shuffle the choice order every time, so nothing is memorised by position
    order = shuffle(q.opts.map((_,i) => i));
    const box = $("choices"); box.innerHTML = "";
    order.forEach((origIdx, pos) => {
      const btn = document.createElement("button");
      btn.type = "button"; btn.className = "choice";
      btn.innerHTML = `<span class="ltr">${LETTERS[pos]}</span><span class="ctxt">${escapeHtml(q.opts[origIdx])}</span>`;
      btn.onclick = () => pick(pos);
      box.appendChild(btn);
    });

    const cf = $("confbox"); if (cf) cf.classList.add("hidden");
    const ex = $("explain"); ex.className = "explain hidden"; ex.innerHTML = "";
    $("next").classList.add("hidden");
    updateStatus();
  }

  function updateStatus(){
    $("s-round").textContent = round;
    $("s-left").textContent = pool.length - idx;
    $("s-retry").textContent = retry.length;
    $("s-acc").textContent = answeredFirst.size ? Math.round(100*firstTry/answeredFirst.size)+"%" : "—";
    $("bar").style.width = (100*idx/Math.max(1,pool.length))+"%";
    $("q-count").textContent = `Question ${Math.min(idx+1,pool.length)} of ${pool.length}` + (round>1 ? " · this round" : "");
  }

  /* ---------------- answer ---------------- */
  function pick(pos){
    if(locked) return;
    locked = true;
    // lock the choices immediately so the answer can't be changed once committed
    $("choices").querySelectorAll(".choice").forEach((b,i) => {
      b.disabled = true;
      if (i === pos) b.classList.add("chosen");
    });
    pending = pos;
    const cf = $("confbox");
    if (useConf && cf){ cf.classList.remove("hidden"); cf.scrollIntoView({block:"nearest",behavior:"smooth"}); }
    else reveal(undefined);
  }

  function reveal(conf){
    if (revealed) return;          // guard: a double-tap on a confidence button must not re-record
    revealed = true;
    const cf = $("confbox"); if (cf) cf.classList.add("hidden");
    const pos = pending;
    const q = pool[idx];
    const chosen = order[pos];              // map back to the original option index
    const correct = chosen === q.ans;
    const key = q.n;

    const firstAttempt = !answeredFirst.has(key);
    if(firstAttempt){
      answeredFirst.add(key);
      if(correct){ firstTry++; if(byTopic[q.topic]) byTopic[q.topic].first++; }
    }
    const rec = SRS.record(FORM + q.n, correct, firstAttempt, conf);
    if (conf) confLog.push({ n:key, conf, correct });

    const btns = $("choices").querySelectorAll(".choice");
    btns.forEach((b,i) => {
      b.classList.remove("chosen");
      if(order[i] === q.ans) b.classList.add("correct");
      else if(i === pos) b.classList.add("wrong");
      else b.classList.add("dim");
    });
    const correctLetter = LETTERS[order.indexOf(q.ans)];

    const objs = (q.obj || []).map(id => {
      const o = (typeof OBJ_BY_ID !== "undefined" && OBJ_BY_ID[id]);
      return o ? `${id} — ${o.text}` : id;
    }).join("  ·  ");

    // a confident miss is the highest-value correction there is — say so, out loud
    const confidentMiss = !correct && conf === "sure";
    const ex = $("explain");
    ex.className = "explain " + (correct ? "ok" : "no");
    ex.innerHTML = (correct
      ? `<div class="head"><span class="mk">✓ CORRECT</span><span class="lbl">why</span></div>
         <div class="why">${escapeHtml(q.why)}</div>`
      : `<div class="head"><span class="mk">✗ INCORRECT</span><span class="lbl">the answer is ${correctLetter}</span></div>
         <div class="why"><b>${escapeHtml(q.opts[q.ans])}</b><br>${escapeHtml(q.why)}</div>`)
      + (confidentMiss ? `<div class="hitcorrect"><b>★ You were sure — so this one is worth the most.</b>
           An error you were confident about is the kind that corrects best, as long as you deal with it now:
           say the correct answer out loud, in your own words, before you move on.</div>` : "")
      + (!correct && !confidentMiss ? `<div class="selfex">Before you tap Next: say <b>why</b> the right answer is right,
           in your own words. Reading the explanation is not the same as producing it.</div>` : "")
      + (objs ? `<div class="objline">Objective ${escapeHtml(objs)}<br>Retrieved correctly ${rec.succ||0}/${SRS.CRITERION} sessions · ${SRS.nextLabel(FORM + q.n)}</div>` : "");

    if(!correct){
      retry.push(q);
      if(!missedKeys.has(key)){ missedKeys.add(key); missed.push(q); }
    }

    $("next").classList.remove("hidden");
    $("next").focus();
    updateStatus();
  }

  /* ---------------- advance ---------------- */
  function next(){
    idx++;
    if(idx < pool.length){ render(); window.scrollTo({top:0,behavior:"smooth"}); return; }
    if(retry.length === 0) return finish();
    round++; pool = shuffle(retry.slice()); retry = []; idx = 0;
    banner(`<div class="box"><span class="ico">🔁</span><span><b>Round ${round}.</b> Back through the ${pool.length} question${pool.length>1?"s":""} you missed — this keeps going until every one is cleared.</span></div>`);
    render(); window.scrollTo({top:0,behavior:"smooth"});
  }

  function finish(){
    show("done");
    $("done-p").textContent = firstTry === totalItems
      ? `A clean sweep — all ${totalItems} correct on the first try.`
      : `You went back through every miss until nothing was left. ${firstTry} of ${totalItems} were right first time.`;
    $("d-items").textContent = totalItems;
    $("d-first").textContent = `${Math.round(100*firstTry/Math.max(1,totalItems))}%`;
    $("d-rounds").textContent = round;

    /* per-topic first-try bars */
    const ts = $("topicscore");
    if (ts){
      const rows = Object.keys(byTopic).map(k => {
        const T = (typeof TOPICS !== "undefined" && TOPICS[k]) || {name:k, color:"var(--accent)"};
        const d = byTopic[k], pct = Math.round(100*d.first/Math.max(1,d.n));
        return `<div class="ts-row" style="--tc:${T.color}">
          <span class="ts-name">${escapeHtml(T.name)}</span>
          <span class="ts-bar"><i style="width:${pct}%"></i></span>
          <span class="ts-val">${d.first}/${d.n}</span></div>`;
      }).join("");
      ts.innerHTML = rows ? `<div class="progress-cap" style="margin:0 0 4px;text-align:left">First-try accuracy by topic</div>${rows}` : "";
    }

    /* calibration: the gap between how sure you felt and how right you were */
    const cal = $("calibration");
    if (cal){
      const firstPass = {};
      confLog.forEach(e => { if (!(e.n in firstPass)) firstPass[e.n] = e; });
      const rows = Object.values(firstPass);
      if (!rows.length) cal.innerHTML = "";
      else {
        const bucket = c => rows.filter(r => r.conf === c);
        const cell = (label, list) => {
          const right = list.filter(r => r.correct).length;
          const pct = list.length ? Math.round(100*right/list.length) : 0;
          return { label, n:list.length, right, pct };
        };
        const sure = cell("Sure", bucket("sure")), think = cell("Think so", bucket("think")), guess = cell("Guess", bucket("guess"));
        const confMiss = bucket("sure").filter(r => !r.correct).length;
        cal.innerHTML = `
          <div class="progress-cap" style="margin:0 0 6px;text-align:left">Calibration — were you as sure as you should have been?</div>
          <div class="calgrid">
            ${[sure,think,guess].map(c => `<div class="calcell"><span class="cl">${c.label}</span>
              <span class="cv">${c.n ? c.pct+"%" : "—"}</span>
              <span class="cs">${c.n ? c.right+" of "+c.n+" right" : "not used"}</span></div>`).join("")}
          </div>
          ${confMiss ? `<div class="hitcorrect" style="margin-top:10px"><b>★ ${confMiss} confident miss${confMiss>1?"es":""}.</b>
            That is the most valuable thing this run found — you didn't know you didn't know. Those are now first
            in the <a href="review.html">spaced review</a> queue.</div>`
           : `<div class="selfex" style="margin-top:10px">No confident misses — your sense of what you know matched
            what you actually knew. That calibration is worth as much as the score.</div>`}`;
      }
    }

    saveRun({ total:totalItems, first:firstTry, rounds:round, when:Date.now() });

    doneMissed = missed.slice();
    const btn = $("retry-missed");
    if(btn){
      if(doneMissed.length){ btn.textContent = `Drill the ${doneMissed.length} you missed`; btn.classList.remove("hidden"); }
      else btn.classList.add("hidden");
    }
  }

  /* ---------------- wire ---------------- */
  $("next").onclick = next;
  const quit = $("quit"); if(quit) quit.onclick = () => { show("start"); banner(""); };
  const again = $("again"); if(again) again.onclick = () => show("start");
  const rm = $("retry-missed"); if(rm) rm.onclick = () => { if(doneMissed.length) beginSession(doneMissed); };
  $("startBtn").onclick = start;
  document.querySelectorAll("#confbox [data-conf]").forEach(b => b.onclick = () => reveal(b.dataset.conf));

  /* start screen: how many questions each topic contributes */
  const sl = $("speclist");
  if (sl && typeof TOPICS !== "undefined"){
    const counts = {}, hy = {};
    BANK.forEach(q => { counts[q.topic] = (counts[q.topic]||0)+1; if (q.hy) hy[q.topic] = (hy[q.topic]||0)+1; });
    sl.innerHTML = Object.keys(TOPICS).filter(k => counts[k]).map(k =>
      `<div class="spec" style="--tc:${TOPICS[k].color}"><span>${TOPICS[k].ic}</span><b>${TOPICS[k].name}</b>` +
      `<span class="n">${counts[k]} Q${hy[k] ? ` · ★${hy[k]}` : ""}</span></div>`
    ).join("");
  }
})();
