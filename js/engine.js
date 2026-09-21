/* ══════════════════════════════════════════════════════════════
   engine.js — Ablauf, Zustand, Speicherstand, UI
   ══════════════════════════════════════════════════════════════ */
(() => {
'use strict';

const $ = s => document.querySelector(s);
const SAVE_KEY = 'hollmann.save.v1';
const PROG_KEY = 'hollmann.progress.v1';
const SET_KEY  = 'hollmann.settings.v1';
const GATE_KEY = 'hollmann.gate.v1';

const W = () => STORY.women, ORDER = () => STORY.frauenOrder;

/* ── Zustand ───────────────────────────────────────────────── */
const blank = () => ({
  node:'start', beat:0,
  abende: STORY.meta.abende,
  stats:{rache:0, kontrolle:0, ruf:0},
  bind: Object.fromEntries(ORDER().map(k => [k, 0])),
  flags:{}, log:[], unlocked:{}, endings:{}, seen:{}
});
let S = blank();

let settings = Object.assign(
  {media:true, skipAdult:false, big:false},
  JSON.parse(localStorage.getItem(SET_KEY) || '{}')
);
const saveSettings = () => localStorage.setItem(SET_KEY, JSON.stringify(settings));

/* ── Abgeleitete Werte ─────────────────────────────────────── */
function ctx(){
  const b = S.bind;
  return Object.assign({
    flags:S.flags, stats:S.stats, bind:b, abende:S.abende,
    stufe4: ORDER().filter(k => b[k] >= 4).length,
    stufe3: ORDER().filter(k => b[k] >= 3).length,
    summe:  ORDER().reduce((a,k) => a + b[k], 0),
    alleMin: Math.min(...ORDER().map(k => b[k]))
  }, S.stats, b);
}
const condCache = {};
function test(expr){
  if (!expr) return true;
  try {
    const fn = condCache[expr] || (condCache[expr] =
      new Function('c', 'with(c){return !!(' + expr + ')}'));
    return fn(ctx());
  } catch(e){ console.warn('Bedingung:', expr, e); return false; }
}

/* ── Platzhalter ───────────────────────────────────────────── */
const FILL = {
  ABENDE(){
    const n = S.abende;
    if (n <= 0) return '<b>Die vierzehn Abende sind vorbei.</b> Am Freitag tagt die Gesellschafterversammlung.';
    return `<b>Noch ${n} von ${STORY.meta.abende} Abenden.</b> Danach ist die Kapitalrunde abgeschlossen, und was bis dahin nicht passiert ist, passiert nicht mehr.`;
  },
  FRAUEN(){
    return ORDER().map(k => {
      const w = W()[k], st = S.bind[k];
      const punkte = '●'.repeat(st) + '○'.repeat(4 - st);
      return `<span style="color:${w.farbe}">${punkte}</span> &nbsp;<b>${w.n}</b>, ${w.a} — <i>${w.rolle}</i><br>` +
             `<span style="opacity:.6;font-size:.92em">${STORY.meta.stufen[st]}${st >= 4 ? ' — nichts mehr offen' : ''}</span>`;
    }).join('<br><br>');
  },
  LEVERAGE(){
    const f = S.flags, out = [];
    if (f.sabine_stick)   out.push('— <b>Die echten Zwischenabschlüsse</b>, 2022 bis heute. Von seiner Frau.');
    if (f.christa_bericht)out.push('— <b>Der Bericht der Kinderklinik Aachen</b>, Februar 2009. Von seiner Ex-Frau.');
    if (f.lena_vergabe)   out.push('— <b>Die Vergabeunterlagen Gewerbegebiet Nord.</b> Von seiner Tochter.');
    if (f.andrea_stimme)  out.push('— <b>Dreißig Prozent und § 9 des Gesellschaftsvertrags.</b> Von seiner Schwester.');
    if (f.werner_anteil)  out.push('— <b>Werners stille zwölf Prozent aus 1988.</b> Von seiner Tante.');
    if (f.lena_selbst)    out.push('— <i>Lena reicht selbst ein. Das ist nicht deins.</i>');
    if (f.andrea_frei)    out.push('— <i>Andrea entscheidet selbst, ob sie stimmt.</i>');
    if (!out.length) out.push('— Nichts. Vierzehn Abende, fünf Frauen, und kein einziges Blatt Papier.');
    return out.join('<br>');
  },
  BINDUNG(){
    const hoch = ORDER().filter(k => S.bind[k] >= 4).map(k => W()[k].n.split(' ')[0]);
    if (!hoch.length) return 'Keine von ihnen wird am Freitag etwas für dich tun, das sie sich nicht selbst überlegt hat.';
    if (hoch.length >= 4) return `<b>${hoch.join(', ')}</b> — vier oder mehr von ihnen richten ihre Woche inzwischen um dich herum ein. Keine von ihnen redet mit den anderen darüber. Noch nicht.`;
    return `<b>${hoch.join(', ')}</b> würde am Freitag alles tun, worum du bittest. Das ist keine Vermutung mehr.`;
  },
  BINDUNG_ENDE(){
    return ORDER().filter(k => S.bind[k] > 0).map(k => {
      const w = W()[k], st = S.bind[k], vn = w.n.split(' ')[0];
      return ({
        1:`<b>${vn}</b> weicht dir seitdem aus, höflich und gründlich.`,
        2:`<b>${vn}</b> schreibt dir manchmal spät abends und löscht es wieder, bevor du antwortest.`,
        3:`<b>${vn}</b> kommt noch. Seltener, und sie hasst sich jedes Mal dafür ein bisschen mehr.`,
        4:`<b>${vn}</b> hat ihr Leben um zwei Nachmittage pro Woche herum gebaut und wird das noch Jahre tun.`
      })[st];
    }).join('<br>') || 'Keine von ihnen denkt heute noch an dich.';
  },
  ABGANG_ENDE(){
    const hoch = ORDER().filter(k => S.bind[k] >= 3);
    if (!hoch.length)
      return 'Du hast in Steinbach niemanden zurückgelassen, dem du gefehlt hättest. Das ist sauberer, als es sich anfühlt.';
    return `Du hast ${hoch.length} ${hoch.length === 1 ? 'Frau' : 'Frauen'} zurückgelassen, ` +
      `bei ${hoch.length === 1 ? 'der' : 'denen'} du etwas angefangen hast, das du nicht zu Ende gebracht hast. ` +
      `${hoch.map(k => W()[k].n.split(' ')[0]).join(', ')} — keine von ihnen hat dich je darum gebeten, und keine hat dir je etwas vorgeworfen. ` +
      `Das ist der Teil, der bleibt.`;
  }
};
const fill = h => String(h).replace(/\{([A-Z_]+)\}/g, (m, k) => FILL[k] ? FILL[k]() : m);

/* ── Knoten anzeigen ───────────────────────────────────────── */
let current = null;

function goto(id, keepBeat){
  const n = STORY.nodes[id];
  if (!n){ console.error('Unbekannter Knoten:', id); return; }
  current = n; S.node = id;
  if (!keepBeat) S.beat = 0;

  if (n.unlock) S.unlocked[n.unlock] = 1;
  if (n.ending) S.endings[n.ending.id] = 1;

  $('#hud-chapter').textContent = n.chapter || '';
  $('#scene-title').textContent = n.title || '';
  $('#hud-abende').textContent = n.hub || n.frau ? `${S.abende} Abende` : '';

  S.log.push({c:n.chapter, t:n.title});
  if (S.log.length > 400) S.log.shift();

  render();
  autosave();
}

function lines(n){
  if (settings.skipAdult && n.adult) return [
    ['beat','· · ·'],
    ['narr','<i>Explizite Szenen sind in den Einstellungen ausgeblendet.</i>'],
    ['narr','Was an diesem Abend passiert, passiert zwischen zwei erwachsenen Menschen, die beide wissen, warum sie hier sind — und verschiebt etwas, das sich danach nicht zurückschieben lässt.'],
    ['beat','· · ·']
  ];
  return n.text;
}

// Eine Textzeile kann als letztes Element ein Objekt {v, i, portrait} tragen.
function visualOf(line){
  const last = line[line.length - 1];
  return (last && typeof last === 'object' && !Array.isArray(last)) ? last : null;
}

function render(){
  const n = current, ls = lines(n);
  const beatMode = n.mode === 'beat' && !(settings.skipAdult && n.adult);
  const upto = beatMode ? Math.min(S.beat, ls.length - 1) : ls.length - 1;

  const prose = $('#prose');
  prose.innerHTML = '';
  for (let i = 0; i <= upto; i++) prose.appendChild(para(ls[i], beatMode ? 0 : i));

  // Visual des aktuell sichtbaren Beats
  const vis = visualOf(ls[upto]) || {};
  const base = n.scene || {};
  Media.show({
    id: vis.v || base.id,
    who: n.frau || base.who,
    palette: base.palette || 'night',
    intensity: vis.i != null ? vis.i : (base.intensity || .2),
    figures: base.figures != null ? base.figures : 2,
    motion: (vis.i != null ? vis.i : base.intensity || 0) > .45 ? 'pulse' : (base.motion || 'drift'),
    label: base.label
  });
  if (vis.portrait) portrait(vis.portrait);

  const mehr = beatMode && upto < ls.length - 1;
  $('#continue-hint').classList.toggle('hidden', !mehr);
  $('#choices').innerHTML = '';
  if (!mehr) choices(n);

  if (beatMode && S.beat > 0){
    const tp = $('#textpane');
    tp.scrollTop = tp.scrollHeight;
  } else $('#textpane').scrollTop = 0;
}

function para(l, delay){
  const p = document.createElement('p');
  p.style.animationDelay = Math.min(delay * 60, 600) + 'ms';
  if (l[0] === 'said'){
    p.className = 'said' + (l[3] === 'mc' ? ' mc' : '');
    p.innerHTML = '<b>' + l[1] + '</b>' + (l[2] ? fill(l[2]) : '<i>…</i>');
  } else {
    p.className = l[0];
    p.innerHTML = fill(l[1]);
  }
  return p;
}

/* ── Porträtkarte beim ersten Auftritt ─────────────────────── */
let portraitTimer = 0;
function portrait(tag){
  const w = W()[tag]; if (!w) return;
  // Immer nur eine Karte: am Familientisch treten mehrere Frauen in
  // aufeinanderfolgenden Beats auf, sonst stapeln sie sich.
  const alt = $('#stage .portrait-card'); if (alt) alt.remove();
  clearTimeout(portraitTimer);
  const erst = !S.seen[tag]; S.seen[tag] = 1;
  const card = document.createElement('div');
  card.className = 'portrait-card';
  card.innerHTML = `
    <div class="pc-img" style="--c:${w.farbe}">${Media.portraitHTML(tag, w)}</div>
    <div class="pc-txt">
      <b>${w.n}</b><span>${w.a} Jahre · ${w.rolle}</span>
      <p>${erst ? w.lang : w.kurz}</p>
    </div>
    <button class="pc-close" aria-label="Schließen">✕</button>`;
  $('#stage').appendChild(card);
  const weg = () => card.remove();
  card.querySelector('.pc-close').onclick = weg;
  portraitTimer = setTimeout(weg, erst ? 9000 : 5000);
}

/* ── Entscheidungen ────────────────────────────────────────── */
function choices(n){
  const box = $('#choices');
  if (n.ending){ endingCard(n); return; }
  if (n.hub){ hubChoices(box); return; }

  const vis = (n.choices || []).filter(c =>
    (!c.hide || !test(c.hide)) && (!c.show || test(c.show)));
  if (!vis.length){ box.appendChild(btn({t:'Weiter.', to:'hub'})); return; }
  vis.forEach(c => box.appendChild(btn(c)));
}

function hubChoices(box){
  let offen = 0;
  ORDER().forEach(k => {
    const w = W()[k], st = S.bind[k];
    if (st >= 4 || S.abende <= 0) return;
    const ziel = `${k}_${st + 1}`;
    if (!STORY.nodes[ziel]) return;
    offen++;
    const b = document.createElement('button');
    b.className = 'btn choice-frau';
    b.style.setProperty('--c', w.farbe);
    b.innerHTML = `<b>${w.n}</b> <span class="cf-rolle">${w.rolle}</span>
      <span class="cf-st">${STORY.meta.stufen[st]} → ${STORY.meta.stufen[st + 1]}</span>`;
    b.addEventListener('click', () => pick({to:ziel}), {once:true});
    box.appendChild(b);
  });

  if (!offen || S.abende <= 0){
    box.appendChild(btn({t:'<b>Zur Gesellschafterversammlung.</b>', to:'f1', tag:'m'}));
  } else if (ORDER().some(k => S.bind[k] > 0)){
    box.appendChild(btn({t:'Es reicht. Zieh die Sache jetzt zu Ende.', to:'f1', tag:'m'}));
  }
}

function btn(c){
  const b = document.createElement('button');
  b.className = 'btn';
  b.innerHTML = c.t + (c.tag ? ` <span class="tag ${c.tag}">${
    {r:'Rache', h:'Nähe', m:'Kontrolle', x:'18+'}[c.tag] || ''}</span>` : '');
  b.addEventListener('click', () => pick(c), {once:true});
  return b;
}

function pick(c){
  if (c.set) apply(c.set);
  if (S.log.length) S.log[S.log.length - 1].pick = String(c.t || '').replace(/<[^>]+>/g, '');
  goto(c.to);
}

function apply(set){
  for (const k in set){
    if (k === 'flags'){ Object.assign(S.flags, set.flags); continue; }
    if (k === 'bind'){
      for (const f in set.bind){
        S.bind[f] = Math.min(4, (S.bind[f] || 0) + set.bind[f]);
        S.abende = Math.max(0, S.abende - 1);   // jede Stufe kostet einen Abend
      }
      continue;
    }
    S.stats[k] = (S.stats[k] || 0) + set[k];
  }
}

/* ── Weiter-Tippen ─────────────────────────────────────────── */
$('#textpane').addEventListener('click', e => {
  if (e.target.closest('button')) return;
  if (!current || current.ending) return;
  const ls = lines(current);
  if (current.mode === 'beat' && S.beat < ls.length - 1){
    S.beat++; render(); autosave();
  }
});

/* ── Endbildschirm ─────────────────────────────────────────── */
function endingCard(n){
  const box = $('#choices');
  const got = Object.keys(S.endings).length;
  box.innerHTML = `<div class="ending-card">
      <p class="kicker">Ende erreicht</p><h2>${n.ending.name}</h2>
      <p class="en-sub">${n.ending.sub}</p>
      <p class="en-sub">${got} von 5 Enden gefunden</p></div>`;

  const s = document.createElement('div');
  s.className = 'ending-card';
  s.innerHTML = '<div class="en-body">' +
    Object.keys(STORY.meta.stats).map(k =>
      bar(STORY.meta.stats[k].label, S.stats[k], STORY.meta.stats[k].color, S.stats[k] * 6)).join('') +
    '<h4 style="margin-top:18px">Bindung</h4>' +
    ORDER().map(k => bar(W()[k].n.split(' ')[0] + ' — ' + STORY.meta.stufen[S.bind[k]],
                         '', W()[k].farbe, S.bind[k] * 25)).join('') + '</div>';
  box.appendChild(s);

  [['Neues Spiel', () => { const p = loadProgress(); S = blank();
      S.unlocked = p.unlocked || {}; S.endings = p.endings || {}; goto('start'); }],
   ['Galerie', showGallery], ['Zum Titelbild', toTitle]
  ].forEach(([t, fn]) => {
    const b = document.createElement('button');
    b.className = 'btn btn-ghost'; b.textContent = t; b.onclick = fn; box.appendChild(b);
  });
}
const bar = (lbl, val, col, pct) =>
  `<div class="stat-row"><div class="lbl"><span>${lbl}</span><span>${
    val === '' ? '' : (val > 0 ? '+' : '') + val}</span></div>
   <div class="bar"><i style="width:${Math.max(2, Math.min(100, pct))}%;background:${col}"></i></div></div>`;

/* ── Speichern ─────────────────────────────────────────────── */
function autosave(){
  saveProgress();
  if (current && current.ending){ localStorage.removeItem(SAVE_KEY); return; }
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(Object.assign({ts:Date.now()}, S))); } catch(_){}
}
function loadSave(){
  try {
    const d = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    return (d && d.node && STORY.nodes[d.node]) ? d : null;
  } catch(_){ return null; }
}
function saveProgress(){
  try { localStorage.setItem(PROG_KEY,
    JSON.stringify({unlocked:S.unlocked, endings:S.endings})); } catch(_){}
}
function loadProgress(){
  try { return JSON.parse(localStorage.getItem(PROG_KEY) || '{}') || {}; } catch(_){ return {}; }
}
function toast(m){
  const t = $('#toast'); t.textContent = m; t.classList.remove('hidden');
  clearTimeout(toast._h); toast._h = setTimeout(() => t.classList.add('hidden'), 1900);
}

/* ── Panels ────────────────────────────────────────────────── */
function togglePanel(sel){
  const p = $(sel), hidden = p.classList.contains('hidden');
  ['#statspanel','#menupanel'].forEach(s => $(s).classList.add('hidden'));
  if (hidden) p.classList.remove('hidden');
}
document.querySelectorAll('.panel-close').forEach(b =>
  b.onclick = () => b.closest('.panel').classList.add('hidden'));
$('#hud-menu').onclick  = () => togglePanel('#menupanel');
$('#hud-stats').onclick = () => { renderStats(); togglePanel('#statspanel'); };

function renderStats(){
  $('#stat-rows').innerHTML =
    `<div class="lbl" style="margin-bottom:10px"><span>Verbleibende Abende</span><span>${S.abende} / ${STORY.meta.abende}</span></div>` +
    Object.keys(STORY.meta.stats).map(k => {
      const m = STORY.meta.stats[k], v = S.stats[k] || 0;
      return bar(m.label, v, m.color, 50 + v * 4) +
        `<div class="lbl" style="margin:-6px 0 12px;font-size:11px;opacity:.55"><span>${m.desc}</span></div>`;
    }).join('') +
    '<h4>Bindung</h4>' +
    ORDER().map(k => {
      const w = W()[k], st = S.bind[k];
      return bar(`${w.n.split(' ')[0]} — ${STORY.meta.stufen[st]}`, '', w.farbe, st * 25);
    }).join('');

  const known = [['sabine_stick','Zwischenabschlüsse'], ['christa_bericht','Bericht Aachen'],
    ['lena_vergabe','Vergabeunterlagen'], ['andrea_stimme','Andreas Stimme'],
    ['werner_anteil','Werners 12 %']];
  $('#flag-rows').innerHTML = known.map(([k, l]) =>
    `<span class="chip${S.flags[k] ? ' on' : ''}">${l}</span>`).join('');
}

/* ── Overlays ──────────────────────────────────────────────── */
function overlay(t, h){
  $('#overlay-title').textContent = t; $('#overlay-body').innerHTML = h;
  $('#overlay').classList.remove('hidden');
}
$('#overlay-close').onclick = () => $('#overlay').classList.add('hidden');
$('#overlay').addEventListener('click', e => {
  if (e.target.id === 'overlay') $('#overlay').classList.add('hidden'); });

function showGallery(){
  overlay('Galerie', '<div class="gal-grid">' + STORY.gallery.map(g => {
    const on = S.unlocked[g.w];
    return `<div class="gal-item${on ? '' : ' locked'}"><b>${on ? g.t : '???'}</b>
      <span>${on ? g.s : 'noch nicht freigeschaltet'}</span></div>`;
  }).join('') + '</div><p style="margin-top:16px;font-size:13px;color:var(--ink-faint)">' +
  'Freigeschaltete Szenen bleiben auf diesem Gerät gespeichert, auch nach einem neuen Spiel.</p>');
}

function showCast(){
  overlay('Figuren', ORDER().map(k => {
    const w = W()[k];
    return `<div class="cast-row" style="--c:${w.farbe}">
      <div class="cast-img">${Media.portraitHTML(k, w)}</div>
      <div><b>${w.n}</b><span>${w.a} Jahre · ${w.rolle}</span><p>${w.kurz}</p></div></div>`;
  }).join('') + `<p style="font-size:12.5px;color:var(--ink-faint);margin-top:14px">
    Alle Figuren sind frei erfunden. Eigene Porträtbilder lassen sich über
    <code>media/manifest.json</code> hinterlegen.</p>`);
}

function showLog(){
  const seen = [];
  S.log.slice(-70).forEach(e => {
    const last = seen[seen.length - 1];
    if (!last || last.t !== e.t) seen.push(e); else if (e.pick) last.pick = e.pick;
  });
  overlay('Verlauf', seen.map(e =>
    `<div class="log-entry"><b>${e.c || ''}</b>${e.t || ''}${
      e.pick ? `<br><i>▸ ${e.pick}</i>` : ''}</div>`).join('') || '<p>Noch nichts passiert.</p>');
}

function showSettings(){
  overlay('Einstellungen', `
    <div class="set-row"><span>Eigene Clips abspielen<small>Spielt Videos ab, die in
      <code>media/manifest.json</code> hinterlegt sind — pro Beschreibung ein eigener Clip.
      Ohne Eintrag läuft die eingebaute Animation.</small></span>
      <label class="switch"><input type="checkbox" id="set-media" ${settings.media ? 'checked' : ''}><i></i></label></div>
    <div class="set-row"><span>Explizite Szenen ausblenden<small>Ersetzt Sexszenen durch eine
      kurze Überblendung. Handlung, Werte und Enden bleiben identisch.</small></span>
      <label class="switch"><input type="checkbox" id="set-skip" ${settings.skipAdult ? 'checked' : ''}><i></i></label></div>
    <div class="set-row"><span>Größere Schrift</span>
      <label class="switch"><input type="checkbox" id="set-big" ${settings.big ? 'checked' : ''}><i></i></label></div>
    <div class="set-row"><span>Alles zurücksetzen<small>Löscht Speicherstand, Galerie und
      Altersbestätigung auf diesem Gerät.</small></span>
      <button class="btn btn-ghost btn-sm" id="set-wipe" style="width:auto;margin:0">Löschen</button></div>`);
  $('#set-media').onchange = e => { settings.media = e.target.checked; saveSettings(); Media.setEnabled(settings.media); };
  $('#set-skip').onchange  = e => { settings.skipAdult = e.target.checked; saveSettings(); S.beat = 0; render(); };
  $('#set-big').onchange   = e => { settings.big = e.target.checked; saveSettings(); applyBig(); };
  $('#set-wipe').onclick   = () => {
    if (!confirm('Wirklich alles löschen? Das lässt sich nicht rückgängig machen.')) return;
    [SAVE_KEY, PROG_KEY, SET_KEY, GATE_KEY].forEach(k => localStorage.removeItem(k));
    location.reload();
  };
}
const applyBig = () => document.body.style.fontSize = settings.big ? '19px' : '';

/* ── Menü ──────────────────────────────────────────────────── */
$('#m-save').onclick     = () => { autosave(); toast('Gespeichert'); };
$('#m-load').onclick     = () => { const d = loadSave(); if (!d) return toast('Kein Speicherstand');
                                   S = Object.assign(blank(), d); goto(S.node, true); toast('Geladen'); };
$('#m-log').onclick      = showLog;
$('#m-cast').onclick     = showCast;
$('#m-gallery').onclick  = showGallery;
$('#m-settings').onclick = showSettings;
$('#m-title').onclick    = () => { autosave(); toTitle(); };

/* ── Bildschirme ───────────────────────────────────────────── */
const show = id => ['#agegate','#titlescreen','#game'].forEach(s =>
  $(s).classList.toggle('hidden', s !== id));

function toTitle(){
  $('#overlay').classList.add('hidden');
  ['#statspanel','#menupanel'].forEach(s => $(s).classList.add('hidden'));
  $('#btn-continue').classList.toggle('hidden', !loadSave());
  show('#titlescreen');
}

$('#gate-confirm').onchange = e => $('#gate-enter').disabled = !e.target.checked;
$('#gate-enter').onclick = () => { localStorage.setItem(GATE_KEY, '1'); toTitle(); };
$('#gate-leave').onclick = () => { location.href = 'https://www.google.com'; };

$('#btn-new').onclick = () => {
  if (loadSave() && !confirm('Es gibt einen Speicherstand. Neues Spiel starten und ihn überschreiben?')) return;
  const p = loadProgress();
  S = blank(); S.unlocked = p.unlocked || {}; S.endings = p.endings || {};
  show('#game'); goto('start');
};
$('#btn-continue').onclick = () => {
  const d = loadSave(); if (!d) return toast('Kein Speicherstand');
  S = Object.assign(blank(), d); show('#game'); goto(S.node, true);
};
$('#btn-gallery').onclick  = () => { S.unlocked = loadProgress().unlocked || {}; showGallery(); };
$('#btn-cast').onclick     = showCast;
$('#btn-settings').onclick = showSettings;

/* ── Start ─────────────────────────────────────────────────── */
(async function boot(){
  applyBig();
  await Media.init($('#media-layer'), $('#media-badge'));
  Media.setEnabled(settings.media);
  const p = loadProgress();
  S.unlocked = p.unlocked || {}; S.endings = p.endings || {};
  if (localStorage.getItem(GATE_KEY)) toTitle(); else show('#agegate');
})();

})();
