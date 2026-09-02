/* Regenerates the three generated tables in README.md from data.js.
 * Content between the BEGIN/END marker pairs is replaced; everything outside is untouched.
 * Usage:  node gen-readme.js
 */
const fs = require("fs");
const path = require("path");

const root = __dirname;
global.window = {};
require(path.join(root, "data.js"));
const D = window.HS;

const md = [];
const push = (s = "") => md.push(s);

/* ---- itinerary table ---- */
push("| # | Itinerary | Transit days | Best for |");
push("|---|---|---|---|");
D.ITINS.forEach((it, i) => {
  push(`| ${i + 1} | **${it.name}** — ${it.tagline} | ${it.transitDays === 0 ? "none" : it.transitDays} | ${it.best} |`);
});
const itinsTable = md.join("\n");

/* ---- inventory ---- */
const m2 = [];
const push2 = (s = "") => m2.push(s);
const ALL = D.EVENTS.concat(D.PLACES);
push2(`## Verified inventory (${ALL.length} items)`);
push2();
push2("| ID | Item | Status | Hours / date as printed | Verified | Source |");
push2("|---|---|---|---|---|---|");
ALL.forEach(x => {
  const printed = [x.hours, x.when, x.price, x.addr].filter(Boolean).join(" · ") || x.detail;
  const src = x.src.map(s => `[${s[0]}](${s[1]})`).join(" · ");
  push2(`| ${x.id} | ${x.name} | ${x.status} | ${printed} | ${x.verifiedOn} | ${src} |`);
});
const inventory = m2.join("\n");

/* ---- flags ---- */
const m3 = [];
const push3 = (s = "") => m3.push(s);
const LEVEL = { high: "high", med: "med", low: "low" };
push3(`## Flagged irregularities (${D.FLAGS.length})`);
push3();
push3("| Level | Item | Issue |");
push3("|---|---|---|");
D.FLAGS.forEach(f => {
  push3(`| ${LEVEL[f.level]} | ${f.item} | ${f.text} |`);
});
const flags = m3.join("\n");

/* ---- splice into README ---- */
let readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const splice = (begin, end, content) => {
  const re = new RegExp(`(${escapeRegExp(begin)}[\\s\\S]*?${escapeRegExp(end)})`);
  if (!re.test(readme)) throw new Error(`markers not found: ${begin}`);
  readme = readme.replace(re, begin + "\n" + content + "\n" + end);
};
function escapeRegExp(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
splice("<!-- ITINS-TABLE:BEGIN", "<!-- ITINS-TABLE:END -->", itinsTable);
splice("<!-- INVENTORY:BEGIN", "<!-- INVENTORY:END -->", inventory);
splice("<!-- FLAGS:BEGIN", "<!-- FLAGS:END -->", flags);
fs.writeFileSync(path.join(root, "README.md"), readme);
console.log(`README.md tables regenerated — ${D.ITINS.length} itineraries, ${ALL.length} inventory rows, ${D.FLAGS.length} flags`);
