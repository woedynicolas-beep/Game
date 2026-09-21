const fs=require('fs'),vm=require('vm');
const ctx={};ctx.window=ctx;vm.createContext(ctx);
['story-core','story-nadine','story-selina','story-yvonne','story-ricarda','story-finale']
  .forEach(f=>vm.runInContext(fs.readFileSync(`js/${f}.js`,'utf8'),ctx,{filename:f}));
const S=ctx.STORY, N=S.nodes, ids=Object.keys(N);
let err=0, warn=0;
const ref=new Set();
for(const id of ids){
  const n=N[id];
  if(!n.text||!n.text.length){console.log(`FEHLER ${id}: kein Text`);err++;}
  if(!n.chapter){console.log(`WARN  ${id}: kein Kapitel`);warn++;}
  const outs=[];
  if(n.next)outs.push(n.next);
  (n.choices||[]).forEach(c=>outs.push(c.to));
  outs.forEach(t=>{ref.add(t); if(!N[t]){console.log(`FEHLER ${id} -> ${t}: Ziel fehlt`);err++;}});
  if(!n.next&&!n.choices&&!n.ending){console.log(`FEHLER ${id}: Sackgasse`);err++;}
  (n.text||[]).forEach(l=>{ if(l[0]==='said'&&l.length<3){console.log(`FEHLER ${id}: said unvollständig`);err++;} });
}
ids.forEach(id=>{if(id!=='start'&&!ref.has(id)){console.log(`WARN  ${id}: unerreichbar`);warn++;}});
// Platzhalter
const FILLS=new Set(['LEVERAGE','ABSPRUNG_ENDE']);
ids.forEach(id=>(N[id].text||[]).forEach(l=>{
  const s=l[l.length-1]; if(typeof s!=='string')return;
  (s.match(/\{([A-Z_]+)\}/g)||[]).forEach(m=>{const k=m.slice(1,-1);
    if(!FILLS.has(k)){console.log(`FEHLER ${id}: unbekannter Platzhalter ${m}`);err++;}});
}));
// Unlocks vs. Galerie
const gal=new Set(S.gallery.map(g=>g.w));
ids.forEach(id=>{const u=N[id].unlock; if(u&&!gal.has(u)){console.log(`WARN  ${id}: unlock '${u}' nicht in Galerie`);warn++;}});
const unlocked=new Set(ids.map(i=>N[i].unlock).filter(Boolean));
S.gallery.forEach(g=>{if(!unlocked.has(g.w)){console.log(`WARN  Galerie '${g.w}' wird nie freigeschaltet`);warn++;}});

const endings=ids.filter(i=>N[i].ending);
console.log(`\nKnoten: ${ids.length}  Enden: ${endings.length}  Galerie: ${S.gallery.length}`);
console.log(`Wörter gesamt: ${ids.reduce((a,i)=>a+(N[i].text||[]).reduce((b,l)=>b+String(l[l.length-1]).split(/\s+/).length,0),0)}`);
console.log(`Enden: ${endings.map(i=>N[i].ending.name).join(', ')}`);
console.log(err?`\n${err} Fehler, ${warn} Warnungen`:`\nKeine Fehler. ${warn} Warnungen.`);
process.exit(err?1:0);
