const fs=require('fs'),vm=require('vm');
const c={};c.window=c;vm.createContext(c);
['story-core','story-nadine','story-selina','story-yvonne','story-ricarda','story-finale']
  .forEach(f=>vm.runInContext(fs.readFileSync(`js/${f}.js`,'utf8'),c,{filename:f}));
const N=c.STORY.nodes;

function ctxOf(S){
  const f=S.flags;
  const tracks=['nadine_done','selina_done','yvonne_done'].filter(k=>f[k]).length;
  const allies=['nadine_done','yvonne_done'].filter(k=>f[k]).length
             +(f.selina_done&&!f.selina_verbrannt?1:0);
  return Object.assign({flags:f,stats:S.stats,tracks,allies},S.stats);
}
const cache={};
const test=(e,S)=>!e||(cache[e]||(cache[e]=new Function('c','with(c){return !!('+e+')}')))(ctxOf(S));

function run(rng){
  let S={node:'start',stats:{rache:0,naehe:0,macht:0,ruf:0},flags:{}},steps=0;
  while(steps++<300){
    const n=N[S.node];
    if(n.ending) return {ending:n.ending.id, stats:S.stats, steps};
    if(!n.choices){ S.node=n.next; continue; }
    const vis=n.choices.filter(ch=>(!ch.hide||!test(ch.hide,S))&&(!ch.show||test(ch.show,S)));
    if(!vis.length){ S.node='f1'; continue; }
    const ch=vis[Math.floor(rng()*vis.length)];
    if(ch.set) for(const k in ch.set){
      if(k==='flags') Object.assign(S.flags,ch.set.flags);
      else S.stats[k]=(S.stats[k]||0)+ch.set[k];
    }
    S.node=ch.to;
  }
  return {ending:'ENDLOSSCHLEIFE', stats:S.stats, steps};
}

let seed=42; const rng=()=>(seed=seed*1103515245+12345&0x7fffffff)/0x7fffffff;
const hits={}, lens=[];
for(let i=0;i<4000;i++){ const r=run(rng); hits[r.ending]=(hits[r.ending]||0)+1; lens.push(r.steps); }
const all=Object.keys(N).filter(k=>N[k].ending).map(k=>N[k].ending.id);
console.log('Zufallsdurchläufe: 4000\n');
all.forEach(e=>{
  const h=hits[e]||0;
  console.log(`  ${h?'✓':'✗'} ${N[Object.keys(N).find(k=>N[k].ending&&N[k].ending.id===e)].ending.name.padEnd(18)} ${String(h).padStart(5)}  (${(h/40).toFixed(1)}%)`);
});
if(hits.ENDLOSSCHLEIFE) console.log(`\n  ✗ ENDLOSSCHLEIFEN: ${hits.ENDLOSSCHLEIFE}`);
console.log(`\nSzenen pro Durchlauf: min ${Math.min(...lens)}, max ${Math.max(...lens)}, Schnitt ${(lens.reduce((a,b)=>a+b)/lens.length).toFixed(1)}`);
const fehlend=all.filter(e=>!hits[e]);
process.exit(fehlend.length||hits.ENDLOSSCHLEIFE?1:0);
