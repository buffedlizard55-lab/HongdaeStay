/* Regenerates itineraries.md from data.js — the master list of itineraries.
 * Usage:  node gen-md.js
 */
const fs = require("fs");
const path = require("path");

const root = __dirname;
global.window = {};
require(path.join(root, "data.js"));
const D = window.HS;
const byId = {};
D.PLACES.concat(D.EVENTS).forEach(x => { byId[x.id] = x; });

const md = [];
const push = (s = "") => md.push(s);

push("# Master list of itineraries — Mercure Ambassador Seoul Hongdae");
push();
push("**Stay:** Mon 16 Nov 2026 (check-in from 15:00) → Sun 22 Nov 2026 (check-out by 12:00) · 2 travellers");
push(`**Verification passes:** ${D.VERIFIED_ON}. Nothing entered an itinerary before its hours/date were read off an official page — the pass-2 ledger is in [audit/VERIFICATION-2026-09-02.md](audit/VERIFICATION-2026-09-02.md).`);
push("**Live site:** https://buffedlizard55-lab.github.io/HongdaeStay/");
push();
push("## Summary");
push();
push("| # | Itinerary | Days needing transit | Best for |");
push("|---|---|---|---|");
D.ITINS.forEach((it, i) => {
  push(`| ${i + 1} | **${it.name}** — ${it.tagline} | ${it.transitDays === 0 ? "none" : it.transitDays} | ${it.best} |`);
});
push();
push("## Confirmed dated events in the window");
push();
push("| Event | When | Price | Source |");
push("|---|---|---|---|");
D.EVENTS.forEach(e => {
  const src = e.src.map(s => `[${s[0]}](${s[1]})`).join(" · ");
  push(`| ${e.name} | ${e.when} | ${e.price} | ${src} |`);
});
push();
push("---");
push();

D.ITINS.forEach((it, i) => {
  push(`## ${i + 1}. ${it.name}`);
  push();
  push(`*${it.tagline}*`);
  push();
  push(it.summary);
  push();
  push(`- **Best for:** ${it.best}`);
  push(`- **Days needing public transport:** ${it.transitDays === 0 ? "none — every day is walkable from the hotel" : it.transitDays}`);
  push();
  it.days.forEach(d => {
    push(`### ${d.date} — ${d.title} (${d.pace})`);
    push();
    push("| Time | Plan | Verified source |");
    push("|---|---|---|");
    d.items.forEach(row => {
      const ref = row[2] && byId[row[2]];
      const link = ref ? `[${row[2]} ${ref.name}](${ref.src[0][1]})` : "—";
      push(`| ${row[0]} | ${row[1]} | ${link} |`);
    });
    push();
    if (d.note) push(`> ⚑ ${d.note}`), push();
  });
  push("---");
  push();
});

push("## Flagged for review");
push();
D.FLAGS.forEach(f => {
  const src = f.src.map(s => `[${s[0]}](${s[1]})`).join(" · ");
  push(`- **[${f.level.toUpperCase()}] ${f.item}.** ${f.text} ${src}`);
});
push();
push("## Excluded (out of window or unverifiable)");
push();
D.EXCLUDED.forEach(x => {
  const src = x.src.map(u => `<${u}>`).join(" ");
  push(`- **${x.name}.** ${x.why} ${src}`);
});
push();
push(`_Generated from data.js by gen-md.js — ${D.ITINS.length} itineraries, ${D.PLACES.length} places + ${D.EVENTS.length} events, ${D.FLAGS.length} flags, ${D.EXCLUDED.length} exclusions._`);
push();

fs.writeFileSync(path.join(root, "itineraries.md"), md.join("\n"));
console.log(`itineraries.md regenerated — ${md.length} lines`);
