/* Zufallsdurchläufe: Ist jedes Ende erreichbar? Bleibt nichts hängen?
   Bildet die dynamische Hub-Logik der Engine nach. */
const {STORY} = require('./_load')();
const N = STORY.nodes, ORDER = STORY.frauenOrder;

const neu = () => ({node:'start', abende:STORY.meta.abende,
  stats:{rache:0,kontrolle:0,ruf:0},
  bind:Object.fromEntries(ORDER.map(k => [k,0])), flags:{}});

function ctx(S){
  return Object.assign({flags:S.flags, stats:S.stats, bind:S.bind, abende:S.abende,
    stufe4: ORDER.filter(k => S.bind[k] >= 4).length,
    stufe3: ORDER.filter(k => S.bind[k] >= 3).length,
    summe:  ORDER.reduce((a,k) => a + S.bind[k], 0),
    alleMin: Math.min(...ORDER.map(k => S.bind[k]))}, S.stats, S.bind);
}
const cache = {};
const test = (e,S) => !e || (cache[e] || (cache[e] = new Function('c','with(c){return !!('+e+')}')))(ctx(S));

function hubChoices(S){
  const out = [];
  ORDER.forEach(k => {
    const st = S.bind[k];
    if (st >= 4 || S.abende <= 0) return;
    if (N[`${k}_${st+1}`]) out.push({to:`${k}_${st+1}`});
  });
  const offen = out.length;
  if (!offen || S.abende <= 0) out.push({to:'f1'});
  else if (ORDER.some(k => S.bind[k] > 0)) out.push({to:'f1'});
  return out;
}

function apply(S, set){
  for (const k in set){
    if (k === 'flags'){ Object.assign(S.flags, set.flags); continue; }
    if (k === 'bind'){
      for (const f in set.bind){
        S.bind[f] = Math.min(4, S.bind[f] + set.bind[f]);
        S.abende = Math.max(0, S.abende - 1);
      }
      continue;
    }
    S.stats[k] = (S.stats[k] || 0) + set[k];
  }
}

/* Strategien für die Hub-Auswahl. 'rnd' = reiner Zufall (Verteilung),
   die übrigen sind gerichtet, um jedes Ende beweisbar zu erreichen. */
const STRAT = {
  rnd:   (o, S, rng) => o[Math.floor(rng() * o.length)],
  breit: (o, S) => pick(o, S, (a,b) => S.bind[a] - S.bind[b]),   // flachste zuerst
  tief:  (o, S) => pick(o, S, (a,b) => S.bind[b] - S.bind[a]),   // tiefste zuerst
  lena:  (o, S) => o.find(c => c.to.startsWith('lena_')) || pick(o, S, (a,b) => S.bind[b] - S.bind[a])
};
function pick(o, S, cmp){
  const frauen = o.filter(c => c.to !== 'f1');
  if (!frauen.length) return o[0];
  return frauen.sort((x,y) => cmp(x.to.split('_')[0], y.to.split('_')[0]))[0];
}

function run(rng, strat){
  const S = neu(); let steps = 0;
  const waehl = STRAT[strat || 'rnd'];
  while (steps++ < 400){
    const n = N[S.node];
    if (n.ending) return {ending:n.ending.id, S, steps};
    let opts;
    if (n.hub){
      opts = hubChoices(S);
      // Gerichtete Läufe gehen erst zum Finale, wenn nichts mehr offen ist.
      if (strat && strat !== 'rnd' && opts.some(c => c.to !== 'f1'))
        opts = opts.filter(c => c.to !== 'f1');
      const c = waehl(opts, S, rng);
      if (c.set) apply(S, c.set);
      S.node = c.to; continue;
    }
    opts = (n.choices || []).filter(c => (!c.hide || !test(c.hide,S)) && (!c.show || test(c.show,S)));
    if (!opts.length) opts = n.next ? [{to:n.next}] : [{to:'hub'}];
    // In gerichteten Läufen die zuletzt gelistete Option bevorzugen (die tiefste Eskalation).
    const c = strat && strat !== 'rnd' ? opts[opts.length - 1] : opts[Math.floor(rng() * opts.length)];
    if (c.set) apply(S, c.set);
    S.node = c.to;
  }
  return {ending:'ENDLOSSCHLEIFE', S, steps};
}

let seed = 7; const rng = () => (seed = seed*1103515245+12345 & 0x7fffffff)/0x7fffffff;
const hits = {}, lens = [], reste = [];
const RUNS = 5000;
for (let i = 0; i < RUNS; i++){
  const r = run(rng);
  hits[r.ending] = (hits[r.ending] || 0) + 1;
  lens.push(r.steps); reste.push(r.S.abende);
}
const alle = Object.keys(N).filter(k => N[k].ending);
console.log(`Zufallsdurchläufe: ${RUNS}\n`);
alle.forEach(k => {
  const e = N[k].ending, h = hits[e.id] || 0;
  console.log(`  ${h ? '✓' : '✗'} ${e.name.padEnd(18)} ${String(h).padStart(5)}  (${(h/RUNS*100).toFixed(1)} %)`);
});
if (hits.ENDLOSSCHLEIFE) console.log(`\n  ✗ ENDLOSSCHLEIFEN: ${hits.ENDLOSSCHLEIFE}`);
console.log(`\nSzenen pro Durchlauf: min ${Math.min(...lens)}, max ${Math.max(...lens)}, Schnitt ${(lens.reduce((a,b)=>a+b)/RUNS).toFixed(1)}`);
console.log(`Ungenutzte Abende:    Schnitt ${(reste.reduce((a,b)=>a+b)/RUNS).toFixed(1)} von ${STORY.meta.abende}`);
// Gerichtete Läufe: jedes Ende muss von mindestens einer Strategie erreicht werden.
console.log('\nGerichtete Durchläufe:');
const erreicht = new Set(Object.keys(hits));
['breit','tief','lena'].forEach(st => {
  const r = run(rng, st);
  erreicht.add(r.ending);
  const name = N[Object.keys(N).find(k => N[k].ending && N[k].ending.id === r.ending)];
  console.log(`  ${st.padEnd(6)} → ${(name ? name.ending.name : r.ending).padEnd(18)} ` +
    `Bindung ${ORDER.map(k => r.S.bind[k]).join('/')}  Summe ${ORDER.reduce((a,k)=>a+r.S.bind[k],0)}  Rest ${r.S.abende}`);
});

console.log('');
const fehlt = alle.filter(k => !erreicht.has(N[k].ending.id));
fehlt.forEach(k => console.log(`  ✗ NIE ERREICHT: ${N[k].ending.name}`));
console.log(fehlt.length ? `${fehlt.length} Ende(n) unerreichbar` : 'Alle Enden erreichbar.');
process.exit(fehlt.length || hits.ENDLOSSCHLEIFE ? 1 : 0);
