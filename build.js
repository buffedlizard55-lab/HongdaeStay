/* HongdaeStay static pre-render.
 *
 * The site is data-driven (data.js + app.js). If JavaScript fails or is
 * disabled the page renders empty, which is what happened in production.
 * This script runs data.js + app.js in jsdom and writes the fully rendered
 * markup into index.html (and mirrors it to docs/), so the page ships with
 * real content in the HTML source. app.js still runs in the browser and
 * simply re-renders the same markup, so tabs/filters keep working.
 *
 * Usage:  npm install jsdom && node build.js
 */
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const root = __dirname;
const template = fs.readFileSync(path.join(root, "index.template.html"), "utf8");
const dataSrc = fs.readFileSync(path.join(root, "data.js"), "utf8");
const appSrc = fs.readFileSync(path.join(root, "app.js"), "utf8");

const dom = new JSDOM(template, { runScripts: "outside-only", url: "https://buffedlizard55-lab.github.io/HongdaeStay/" });
const w = dom.window;
w.eval(dataSrc);
w.eval(appSrc);

const D = w.HS;
const doc = w.document;

// sanity gates — refuse to emit an empty page
const mustHaveContent = ["masterTable", "itinBody", "invBody", "flagBody", "logTable", "eventsTable", "clusterBody", "heroFacts", "hotelTable", "excludedTable", "statCards", "itinChips", "invChips"];
const empty = mustHaveContent.filter(id => {
  const el = doc.getElementById(id);
  return !el || el.innerHTML.trim().length < 20;
});
if (empty.length) {
  console.error("BUILD FAILED — these regions rendered empty:", empty.join(", "));
  process.exit(1);
}

const html = "<!DOCTYPE html>\n" + doc.documentElement.outerHTML + "\n";
fs.writeFileSync(path.join(root, "index.html"), html);

// mirror the whole site into docs/ so either Pages source works
fs.mkdirSync(path.join(root, "docs"), { recursive: true });
["styles.css", "data.js", "app.js"].forEach(f => fs.copyFileSync(path.join(root, f), path.join(root, "docs", f)));
fs.writeFileSync(path.join(root, "docs", "index.html"), html);
fs.writeFileSync(path.join(root, ".nojekyll"), "");
fs.writeFileSync(path.join(root, "docs", ".nojekyll"), "");

console.log(`Pre-rendered index.html — ${html.length} bytes`);
console.log(`${D.ITINS.length} itineraries · ${D.PLACES.length} places · ${D.EVENTS.length} events · ${D.FLAGS.length} flags`);
