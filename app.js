(function () {
  const D = window.HS;
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const byId = {};
  D.PLACES.concat(D.EVENTS).forEach(x => byId[x.id] = x);

  const STATUS_LABEL = { confirmed: "Confirmed", verified: "Verified", recheck: "Re-check", closed: "Closed" };
  const PACE_LABEL = { relax: "Relaxed", moderate: "Moderate", busy: "Busy" };

  function srcLinks(src) {
    if (!src || !src.length) return "";
    return '<div class="srcs">' + src.map(s => `<a href="${esc(s[1])}" target="_blank" rel="noopener">${esc(s[0])} ↗</a>`).join("") + "</div>";
  }

  /* ---------- tabs ---------- */
  document.querySelectorAll("#tabs button").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll("#tabs button").forEach(x => x.classList.toggle("on", x === b));
      document.querySelectorAll(".panel").forEach(p => p.classList.toggle("on", p.id === b.dataset.tab));
      try { history.replaceState(null, "", "#" + b.dataset.tab); } catch (_) {}
      window.scrollTo({ top: 0, behavior: "instant" in window ? "auto" : "auto" });
    });
  });

  /* ---------- hero + hotel ---------- */
  $("#vdate").textContent = D.VERIFIED_ON;
  $("#heroFacts").innerHTML = [
    ["Check-in", "Mon 16 Nov, from 15:00"],
    ["Check-out", "Sun 22 Nov, by 12:00"],
    ["Itineraries", D.ITINS.length + " to choose from"],
    ["Verified items", (D.PLACES.length + D.EVENTS.length) + " with official links"]
  ].map(f => `<span class="fact">${esc(f[0])} · <b>${esc(f[1])}</b></span>`).join("");

  /* ---------- hero week strip ---------- */
  const WEEK = [
    ["Mon 16", "Arrive", "check in from 15:00"],
    ["Tue 17", "Day 1", ""],
    ["Wed 18", "Day 2", "concert · play nights"],
    ["Thu 19", "Day 3", "temple life 14:00"],
    ["Fri 20", "Day 4", ""],
    ["Sat 21", "Day 5", "gugak 15:00 · free tour 14:00"],
    ["Sun 22", "Check out", "by 12:00"]
  ];
  $("#weekStrip").innerHTML = WEEK.map((w, i) => `
    <div class="wday${i === 0 || i === 6 ? " edge" : ""}">
      <span class="wd">${esc(w[0])}</span>
      <span class="wt">${esc(w[1])}</span>
      ${w[2] ? `<span class="ws">${esc(w[2])}</span>` : ""}
    </div>`).join("");

  const S = D.STAY;
  $("#hotelTable").innerHTML = [
    ["Hotel", S.hotel], ["Address", S.address], ["Station", S.station], ["On foot", S.walk],
    ["Check-in", S.checkin], ["Check-out", S.checkout], ["Breakfast", S.breakfast],
    ["Facilities", S.facilities], ["Phone", S.phone],
    ["Source", `<a href="${S.src[0][1]}" target="_blank" rel="noopener">${esc(S.src[0][0])} ↗</a>`]
  ].map(r => `<tr><th>${esc(r[0])}</th><td>${r[0] === "Source" ? r[1] : esc(r[1])}</td></tr>`).join("");

  /* ---------- master table ---------- */
  $("#masterTable").innerHTML =
    "<thead><tr><th>#</th><th>Itinerary</th><th>Character</th><th>Days needing transit</th><th>Best for</th><th></th></tr></thead><tbody>" +
    D.ITINS.map((it, i) => {
      const paces = it.days.reduce((a, d) => (a[d.pace] = (a[d.pace] || 0) + 1, a), {});
      const mix = ["relax", "moderate", "busy"].filter(p => paces[p]).map(p => `${paces[p]} ${PACE_LABEL[p].toLowerCase()}`).join(" · ");
      return `<tr>
        <td><strong>${i + 1}</strong></td>
        <td><strong>${esc(it.name)}</strong><br><span class="fine">${esc(it.tagline)}</span></td>
        <td>${esc(mix)}</td>
        <td>${it.transitDays === 0 ? '<span class="b confirmed">None</span>' : esc(it.transitDays)}</td>
        <td class="fine">${esc(it.best)}</td>
        <td><button class="chip" data-goto="${it.id}">Open</button></td>
      </tr>`;
    }).join("") + "</tbody>";

  /* ---------- stats ---------- */
  const nConfirmed = D.EVENTS.filter(e => e.status === "confirmed").length;
  const nRecheck = D.PLACES.filter(p => p.status === "recheck").length + D.FLAGS.filter(f => f.level === "high").length;
  $("#statCards").innerHTML = [
    [D.PLACES.length + D.EVENTS.length, "items verified against an official page"],
    [nConfirmed, "dated events confirmed inside 16–22 Nov"],
    [D.FLAGS.length, "irregularities flagged for your review"]
  ].map(s => `<div class="stat"><div class="n">${esc(s[0])}</div><div class="l">${esc(s[1])}</div></div>`).join("");

  /* ---------- events table ---------- */
  $("#eventsTable").innerHTML =
    "<thead><tr><th>Event</th><th>When</th><th>Price</th><th>Official source</th></tr></thead><tbody>" +
    D.EVENTS.map(e => `<tr>
      <td><span class="b ${e.status}">${STATUS_LABEL[e.status]}</span><br><strong>${esc(e.name)}</strong><br><span class="fine">${esc(e.detail)}</span></td>
      <td>${esc(e.when)}</td>
      <td>${esc(e.price)}</td>
      <td>${e.src.map(s => `<a href="${esc(s[1])}" target="_blank" rel="noopener">${esc(s[0])} ↗</a>`).join("<br>")}</td>
    </tr>`).join("") + "</tbody>";

  /* ---------- excluded ---------- */
  $("#excludedTable").innerHTML =
    "<thead><tr><th>Not included</th><th>Why</th><th>Checked at</th></tr></thead><tbody>" +
    D.EXCLUDED.map(x => `<tr><td><strong>${esc(x.name)}</strong></td><td>${esc(x.why)}</td>
      <td>${x.src.map(u => `<a href="${esc(u)}" target="_blank" rel="noopener">source ↗</a>`).join(" ")}</td></tr>`).join("") + "</tbody>";

  /* ---------- itineraries ---------- */
  const itinChips = $("#itinChips");
  itinChips.innerHTML = D.ITINS.map((it, i) => `<button class="chip${i === 0 ? " on" : ""}" data-itin="${it.id}">${i + 1}. ${esc(it.name)}</button>`).join("");

  function renderItin(id) {
    const it = D.ITINS.find(x => x.id === id);
    itinChips.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c.dataset.itin === id));
    const dayChips = $("#dayChips");
    dayChips.innerHTML = it.days.map((d, i) =>
      `<button class="chip daychip" data-day="${i}">${esc(d.date.split(" ")[0])} ${esc(d.date.split(" ")[1])} · ${esc(d.title)}</button>`).join("");
    dayChips.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => {
      const el = document.getElementById("day-" + c.dataset.day);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    $("#itinBody").innerHTML = `
      <div class="itin-head">
        <h2>${esc(it.name)}</h2>
        <div class="tag">${esc(it.tagline)}</div>
        <p>${esc(it.summary)}</p>
        <div class="metarow">
          <span class="meta"><strong>Best for:</strong> ${esc(it.best)}</span>
          <span class="meta"><strong>Days needing transit:</strong> ${it.transitDays === 0 ? "none — fully walkable" : it.transitDays}</span>
          <span class="meta"><strong>Nights:</strong> 6 · Mon 16 → Sun 22 Nov 2026</span>
        </div>
        <button class="printbtn" id="printItin" type="button">🖨 Print / save as PDF</button>
      </div>` +
      it.days.map((d, di) => `
        <div class="day" id="day-${di}">
          <div class="day-h">
            <span class="d">${esc(d.date)}</span>
            <span class="b ${d.pace}">${PACE_LABEL[d.pace]}</span>
            <span class="t">${esc(d.title)}</span>
          </div>
          <table class="sched"><tbody>${d.items.map(row => {
            const ref = row[2] && byId[row[2]];
            return `<tr>
              <td class="tm">${esc(row[0])}</td>
              <td>${esc(row[1])}</td>
              <td class="ref">${ref ? `<a href="${esc(ref.src[0][1])}" target="_blank" rel="noopener" title="${esc(ref.name)} — official source">${esc(ref.id)} ↗</a>` : ""}</td>
            </tr>`;
          }).join("")}</tbody></table>
          ${d.note ? `<div class="daynote">⚑ ${esc(d.note)}</div>` : ""}
        </div>`).join("");
  }
  itinChips.addEventListener("click", e => { if (e.target.dataset.itin) renderItin(e.target.dataset.itin); });
  renderItin(D.ITINS[0].id);

  document.addEventListener("click", e => {
    const g = e.target.dataset && e.target.dataset.goto;
    if (!g) return;
    document.querySelector('#tabs button[data-tab="itins"]').click();
    renderItin(g);
  });

  /* ---------- inventory ---------- */
  const ALL = D.EVENTS.concat(D.PLACES);
  const clusterKeys = Object.keys(D.CLUSTERS);
  let invCluster = "all";
  let invQuery = "";
  $("#invChips").innerHTML = `<button class="chip on" data-cl="all">All (${ALL.length})</button>` +
    clusterKeys.map(k => {
      const n = ALL.filter(x => x.cluster === k).length;
      return n ? `<button class="chip" data-cl="${k}">${esc(D.CLUSTERS[k].name)} (${n})</button>` : "";
    }).join("");

  function renderInv() {
    $("#invChips").querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c.dataset.cl === invCluster));
    const q = invQuery.trim().toLowerCase();
    const list = ALL.filter(x =>
      (invCluster === "all" || x.cluster === invCluster) &&
      (!q || [x.name, x.type, x.addr, x.note, x.hours, x.price, x.id, x.walk].filter(Boolean).join(" ").toLowerCase().includes(q))
    );
    const countLine = q ? `<p class="sub">${list.length} of ${ALL.length} verified items match “${esc(invQuery)}”.</p>` : "";
    $("#invBody").innerHTML = countLine + (list.length ? list.map(x => {
      const rows = [];
      if (x.addr) rows.push(["Address", x.addr]);
      if (x.walk) rows.push(["From the hotel", x.walk]);
      if (x.when) rows.push(["When", x.when]);
      if (x.hours) rows.push(["Hours", x.hours]);
      if (x.price) rows.push(["Price", x.price]);
      if (x.transit) rows.push(["Getting there", x.transit]);
      if (x.note) rows.push(["Notes", x.note]);
      if (x.detail) rows.push(["Detail", x.detail]);
      if (x.readsAs) rows.push(["Page prints", x.readsAs]);
      rows.push(["Cluster", D.CLUSTERS[x.cluster].name]);
      rows.push(["Verified", x.verifiedOn]);
      return `<div class="inv">
        <div class="top">
          <span class="id">${esc(x.id)}</span>
          <h3>${esc(x.name)}</h3>
          <span class="b ${x.status}">${STATUS_LABEL[x.status]}</span>
          ${x.type ? `<span class="type">${esc(x.type)}</span>` : ""}
        </div>
        <dl>${rows.map(r => `<dt>${esc(r[0])}</dt><dd>${esc(r[1])}</dd>`).join("")}</dl>
        ${x.flag ? `<div class="flagline"><strong>Flag:</strong> ${esc(x.flag)}</div>` : ""}
        ${srcLinks(x.src)}
      </div>`;
    }).join("") : '<div class="card note">No verified item matches that search in this cluster — try clearing the box.</div>');
  }
  $("#invChips").addEventListener("click", e => { if (e.target.dataset.cl) { invCluster = e.target.dataset.cl; renderInv(); } });
  $("#invSearch").addEventListener("input", e => { invQuery = e.target.value; renderInv(); });
  renderInv();

  /* ---------- clusters ---------- */
  $("#clusterBody").innerHTML = clusterKeys.map(k => {
    const c = D.CLUSTERS[k];
    const items = ALL.filter(x => x.cluster === k);
    if (!items.length) return "";
    return `<div class="cl" style="border-left-color:${c.color}">
      <h3>${esc(c.name)} <span class="fine">· ${items.length} verified items</span></h3>
      <p>${esc(c.note)}</p>
      <div class="who">${items.map(i => esc(i.name)).join(" · ")}</div>
    </div>`;
  }).join("");

  /* ---------- flags ---------- */
  const LEVEL = { high: "Action needed", med: "Caution", low: "For information" };
  $("#flagBody").innerHTML = D.FLAGS
    .slice().sort((a, b) => ["high", "med", "low"].indexOf(a.level) - ["high", "med", "low"].indexOf(b.level))
    .map(f => `<div class="flag">
      <h3><span class="b ${f.level}">${LEVEL[f.level]}</span> ${esc(f.item)}</h3>
      <p>${esc(f.text)}</p>
      ${srcLinks(f.src)}
    </div>`).join("");

  /* ---------- verification log ---------- */
  $("#logTable").innerHTML =
    "<thead><tr><th>#</th><th>Item</th><th>Status</th><th>What the official page printed</th><th>Source</th></tr></thead><tbody>" +
    ALL.map((x, i) => `<tr>
      <td>${i + 1}</td>
      <td><strong>${esc(x.name)}</strong><br><span class="fine">${esc(x.id)} · ${esc(D.CLUSTERS[x.cluster].name)} · re-read ${esc(x.verifiedOn)}</span></td>
      <td><span class="b ${x.status}">${STATUS_LABEL[x.status]}</span></td>
      <td class="fine">${esc(x.readsAs || [x.hours, x.when, x.price, x.addr].filter(Boolean).join(" · "))}</td>
      <td>${x.src.map(s => `<a href="${esc(s[1])}" target="_blank" rel="noopener">↗</a>`).join(" ")}</td>
    </tr>`).join("") + "</tbody>";

  /* ---------- deep link ---------- */
  const h = location.hash.replace("#", "");
  if (h) { const b = document.querySelector(`#tabs button[data-tab="${h}"]`); if (b) b.click(); }

  /* ---------- print current itinerary ---------- */
  document.addEventListener("click", e => {
    if (e.target && e.target.id === "printItin") {
      document.body.classList.add("print-one");
      window.print();
      setTimeout(() => document.body.classList.remove("print-one"), 60);
    }
  });

  /* ---------- back to top ---------- */
  const topBtn = $("#topBtn");
  window.addEventListener("scroll", () => topBtn.classList.toggle("show", window.scrollY > 500), { passive: true });
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();
