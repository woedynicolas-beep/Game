/* Prüft die Story-Daten: Verweise, Sackgassen, Platzhalter, Beat-Objekte. */
const {STORY, files} = require('./_load')();
const N = STORY.nodes, ids = Object.keys(N);
const FILLS = new Set(['ABENDE','FRAUEN','LEVERAGE','BINDUNG','BINDUNG_ENDE','ABGANG_ENDE']);
const TAGS  = new Set(require('../media/manifest.json')._tags);
let err = 0, warn = 0;
const fail = m => { console.log('FEHLER ' + m); err++; };
const warned = m => { console.log('WARN   ' + m); warn++; };

// Von der Engine dynamisch erzeugte Ziele: <frau>_<stufe>
const dyn = new Set();
STORY.frauenOrder.forEach(f => [1,2,3,4].forEach(s => dyn.add(`${f}_${s}`)));

const ref = new Set(['hub','f1']);
for (const id of ids){
  const n = N[id];
  if (!n.text || !n.text.length) fail(`${id}: kein Text`);
  if (!n.chapter) warned(`${id}: kein Kapitel`);

  const outs = [];
  if (n.next) outs.push(n.next);
  (n.choices || []).forEach(c => outs.push(c.to));
  outs.forEach(t => { ref.add(t); if (!N[t]) fail(`${id} -> ${t}: Ziel fehlt`); });

  if (!n.next && !(n.choices || []).length && !n.ending && !n.hub)
    fail(`${id}: Sackgasse`);

  (n.text || []).forEach((l, i) => {
    const v = (typeof l[l.length-1] === 'object' && !Array.isArray(l[l.length-1])) ? l.pop() : null;
    if (l[0] === 'said' && l.length < 3) fail(`${id} Zeile ${i}: said unvollstaendig`);
    const txt = l[l.length - 1];
    if (typeof txt === 'string')
      (txt.match(/\{([A-Z_]+)\}/g) || []).forEach(m => {
        if (!FILLS.has(m.slice(1,-1))) fail(`${id}: unbekannter Platzhalter ${m}`);
      });
    if (v){
      l.push(v);                                     // zuruecklegen
      if (v.i != null && (v.i < 0 || v.i > 1)) fail(`${id} Zeile ${i}: intensity ${v.i} ausserhalb 0..1`);
      if (v.portrait && !STORY.women[v.portrait]) fail(`${id} Zeile ${i}: portrait '${v.portrait}' unbekannt`);
      if (v.v && !TAGS.has(v.v) && !/^(flash_|now_|p_|dinner|sitzung|end_)/.test(v.v))
        warned(`${id} Zeile ${i}: Visual-Tag '${v.v}' nicht im Manifest`);
    }
  });

  // Stufen-Knoten muessen zur Frau und zur Stufe passen
  if (n.frau){
    if (!STORY.women[n.frau]) fail(`${id}: frau '${n.frau}' unbekannt`);
    if (id !== `${n.frau}_${n.stufe}`) fail(`${id}: Name passt nicht zu frau/stufe`);
    if (n.stufe > 1 && !N[`${n.frau}_${n.stufe - 1}`]) fail(`${id}: Vorstufe fehlt`);
    const zurueck = (n.choices || []).every(c => c.to === 'hub');
    if (!zurueck) fail(`${id}: nicht jede Entscheidung fuehrt zurueck zum Hub`);
    const bind = (n.choices || []).every(c => c.set && c.set.bind && c.set.bind[n.frau] === 1);
    if (!bind) fail(`${id}: nicht jede Entscheidung erhoeht bind.${n.frau} um 1`);
  }
}
ids.forEach(id => { if (id !== 'start' && !ref.has(id) && !dyn.has(id)) warned(`${id}: unerreichbar`); });
dyn.forEach(id => { if (!N[id]) fail(`Stufenknoten ${id} fehlt`); });

// Galerie
const unlocks = new Set(ids.map(i => N[i].unlock).filter(Boolean));
STORY.gallery.forEach(g => { if (!unlocks.has(g.w)) warned(`Galerie '${g.w}' wird nie freigeschaltet`); });

const endings = ids.filter(i => N[i].ending);
const woerter = ids.reduce((a,i) => a + (N[i].text||[]).reduce((b,l) => {
  const t = l.filter(x => typeof x === 'string').pop() || '';
  return b + t.split(/\s+/).filter(Boolean).length; }, 0), 0);

console.log(`\nDateien: ${files.length}  Knoten: ${ids.length}  Stufenszenen: ${dyn.size}`);
console.log(`Frauen: ${STORY.frauenOrder.length}  Enden: ${endings.length}  Woerter: ${woerter}`);
console.log(`Enden: ${endings.map(i => N[i].ending.name).join(', ')}`);
console.log(err ? `\n${err} Fehler, ${warn} Warnungen` : `\nKeine Fehler. ${warn} Warnungen.`);
process.exit(err ? 1 : 0);
