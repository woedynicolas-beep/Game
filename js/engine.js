/* ══════════════════════════════════════════════════════════════
   engine.js — Ablauf, Zustand, Speicherstand, UI
   ══════════════════════════════════════════════════════════════ */
(() => {
'use strict';

const $  = s => document.querySelector(s);
const SAVE_KEY = 'bergheim.save.v1';    // laufende Partie
const PROG_KEY = 'bergheim.progress.v1'; // Galerie + gefundene Enden, partieübergreifend
const SET_KEY  = 'bergheim.settings.v1';
const GATE_KEY = 'bergheim.gate.v1';

/* ── Zustand ───────────────────────────────────────────────── */
const blank = () => ({
  node:'start',
  stats:{rache:0, naehe:0, macht:0, ruf:0},
  flags:{},
  log:[],
  unlocked:{},
  endings:{}
});
let S = blank();

let settings = Object.assign(
  {media:true, skipAdult:false, big:false},
  JSON.parse(localStorage.getItem(SET_KEY) || '{}')
);
const saveSettings = () => localStorage.setItem(SET_KEY, JSON.stringify(settings));

/* ── Abgeleitete Werte für Bedingungen ─────────────────────── */
function ctx(){
  const f = S.flags;
  const done   = ['nadine_done','selina_done','yvonne_done'].filter(k => f[k]).length;
  const allies = ['nadine_done','yvonne_done'].filter(k => f[k]).length
               + (f.selina_done && !f.selina_verbrannt ? 1 : 0);
  return Object.assign({flags:f, stats:S.stats, tracks:done, allies}, S.stats);
}
const condCache = {};
function test(expr){
  if (!expr) return true;
  try {
    const fn = condCache[expr] || (condCache[expr] =
      new Function('c', 'with(c){return !!(' + expr + ')}'));
    return fn(ctx());
  } catch(e){ console.warn('Bedingung fehlerhaft:', expr, e); return false; }
}

/* ── Platzhalter im Fließtext ──────────────────────────────── */
const FILL = {
  LEVERAGE(){
    const f = S.flags, out = [];
    if (f.ordner)   out.push('— <b>Herzog.</b> Doppelt gemeldete Fahrzeugsicherheiten bei zwei Banken. Kreditbetrug, schriftlich, mit seiner Unterschrift.');
    if (f.kai_buch) out.push('— <b>Brenner.</b> Elf Jahre Zahlungen zwischen Studio und Autohaus, an keiner Buchhaltung vorbei, die diesen Namen verdient.');
    if (f.nordhang) out.push('— <b>Lange.</b> Ein Ausschussmitglied, das über den Wert einer Fläche abstimmt, die zu sechzig Prozent seinem Cousin gehört.');
    if (!out.length) out.push('— Nichts. Eine Woche Bergheim, ein paar Nächte, kein einziges Blatt Papier. Du stehst mit leeren Händen vor der eigenen Rede.');
    return out.join('<br>');
  },
  ABSPRUNG_ENDE(){
    const f = S.flags;
    if (f.ricarda_bindung)
      return 'Ricarda kommt im Februar zum ersten Mal nach Hamburg. Sie findet die Wohnung zu groß und sagt es. Im Sommer darauf zieht sie nicht ein — sie behält ihre schiefen Böden und ihre Robotik-AG, und ihr fahrt zweihundert Kilometer hin und her, und es funktioniert besser, als es sollte.<br><br>Manchmal wacht sie nachts auf, weil du wach liegst. Dann fragt sie nichts. Sie legt nur die Hand auf deine Brust, bis du wieder einschläfst.';
    if (f.nadine_done || f.yvonne_done || f.selina_done)
      return 'Du hörst nie wieder von ihnen, und das ist in Ordnung so. Keine von ihnen hat dir etwas versprochen, und du hast es auch nicht.<br><br>In Hamburg fängst du im Frühjahr an, dreimal die Woche zu schwimmen, weil eine Physiotherapeutin aus Bergheim dir das mal gesagt hat. Die Schulter wird besser. Es dauert vier Jahre.';
    return 'Du fährst an einem Sonntagmorgen aus Bergheim raus, und niemand winkt, weil niemand weiß, dass du da warst.<br><br>In Hamburg fängst du im Frühjahr an, dreimal die Woche zu schwimmen. Die Schulter wird besser. Es dauert vier Jahre, und irgendwann ist es einfach eine Schulter.';
  }
};
const fill = html => html.replace(/\{([A-Z_]+)\}/g, (m, k) => FILL[k] ? FILL[k]() : m);

/* ── Rendering eines Knotens ───────────────────────────────── */
let current = null;

function goto(id){
  const n = STORY.nodes[id];
  if (!n){ console.error('Unbekannter Knoten:', id); return; }
  current = n; S.node = id;

  if (n.unlock) S.unlocked[n.unlock] = 1;
  if (n.ending) S.endings[n.ending.id] = 1;

  $('#hud-chapter').textContent = n.chapter || '';
  $('#scene-title').textContent = n.title || '';

  Media.show(n.scene || {palette:'night', intensity:.1, figures:0, motion:'drift'});

  const prose = $('#prose');
  prose.innerHTML = '';

  const lines = (settings.skipAdult && n.adult) ? fadeLines(n) : n.text;
  lines.forEach((l, i) => {
    const p = document.createElement('p');
    p.style.animationDelay = Math.min(i * 65, 700) + 'ms';
    if (l[0] === 'said'){
      p.className = 'said' + (l[3] === 'mc' ? ' mc' : '');
      p.innerHTML = '<b>' + l[1] + '</b>' + (l[2] ? fill(l[2]) : '<i>…</i>');
    } else {
      p.className = l[0];
      p.innerHTML = fill(l[1]);
    }
    prose.appendChild(p);
  });

  S.log.push({c:n.chapter, t:n.title});
  if (S.log.length > 400) S.log.shift();

  renderChoices(n);
  $('#textpane').scrollTop = 0;
  if (n.ending){ saveProgress(); localStorage.removeItem(SAVE_KEY); }
  else autosave();
}

function fadeLines(n){
  return [
    ['beat','· · ·'],
    ['narr','<i>Explizite Szenen sind in den Einstellungen ausgeblendet.</i>'],
    ['narr','Was in dieser Nacht passiert, passiert zwischen zwei erwachsenen Menschen, die beide genau wissen, warum sie hier sind. Es dauert lange und es ist keiner von beiden danach derselbe.'],
    ['beat','· · ·']
  ];
}

function renderChoices(n){
  const box = $('#choices'), hint = $('#continue-hint');
  box.innerHTML = '';

  if (n.ending){ endingCard(n); hint.classList.add('hidden'); return; }

  if (!n.choices){
    hint.classList.remove('hidden');
    return;
  }
  hint.classList.add('hidden');

  const visible = n.choices.filter(c =>
    (!c.hide || !test(c.hide)) && (!c.show || test(c.show))
  );

  if (!visible.length){                       // Hub ohne offene Wege
    const b = mkChoice({t:'Zieh die Sache zu Ende.', to:'f1'});
    box.appendChild(b); return;
  }
  visible.forEach(c => box.appendChild(mkChoice(c)));
}

function mkChoice(c){
  const b = document.createElement('button');
  b.className = 'btn';
  b.innerHTML = c.t + (c.tag ? ` <span class="tag ${c.tag}">${
    {r:'Rache', h:'Nähe', m:'Einfluss', x:'18+'}[c.tag] || ''}</span>` : '');
  b.addEventListener('click', () => choose(c), {once:true});
  return b;
}

function choose(c){
  if (c.set) apply(c.set);
  if (S.log.length) S.log[S.log.length - 1].pick = c.t.replace(/<[^>]+>/g, '');
  goto(c.to);
}

function apply(set){
  for (const k in set){
    if (k === 'flags'){ Object.assign(S.flags, set.flags); continue; }
    S.stats[k] = (S.stats[k] || 0) + set[k];
  }
}

/* ── Weiter-Tippen ─────────────────────────────────────────── */
$('#textpane').addEventListener('click', e => {
  if (e.target.closest('button')) return;
  if (current && current.next && !current.ending) goto(current.next);
});

/* ── Endbildschirm ─────────────────────────────────────────── */
function endingCard(n){
  const box = $('#choices');
  const got = Object.keys(S.endings).length;
  box.innerHTML = `
    <div class="ending-card">
      <p class="kicker">Ende erreicht</p>
      <h2>${n.ending.name}</h2>
      <p class="en-sub">${n.ending.sub}</p>
      <p class="en-sub">${got} von 5 Enden gefunden</p>
    </div>`;
  const stats = document.createElement('div');
  stats.className = 'ending-card';
  stats.innerHTML = '<div class="en-body">' + Object.keys(STORY.meta.stats).map(k =>
    `<div class="stat-row"><div class="lbl"><span>${STORY.meta.stats[k].label}</span><span>${S.stats[k]}</span></div>
     <div class="bar"><i style="width:${Math.max(0,Math.min(100,S.stats[k]*7))}%;background:${STORY.meta.stats[k].color}"></i></div></div>`
  ).join('') + '</div>';
  box.appendChild(stats);

  [['Neues Spiel', () => { const pr = loadProgress(); S = blank();
      S.unlocked = pr.unlocked || {}; S.endings = pr.endings || {}; goto('start'); }],
   ['Galerie', showGallery],
   ['Zum Titelbild', toTitle]
  ].forEach(([t, fn]) => {
    const b = document.createElement('button');
    b.className = 'btn btn-ghost'; b.textContent = t;
    b.onclick = fn; box.appendChild(b);
  });
}

/* ── Speichern ─────────────────────────────────────────────── */
function autosave(){
  saveProgress();
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(Object.assign({ts:Date.now()}, S))); }
  catch(_){}
}
function loadSave(){
  try {
    const d = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    if (!d || !d.node || !STORY.nodes[d.node]) return null;
    return d;
  } catch(_){ return null; }
}
// Galerie und gefundene Enden überleben Partien und Enden bewusst.
function saveProgress(){
  try { localStorage.setItem(PROG_KEY,
    JSON.stringify({unlocked:S.unlocked, endings:S.endings})); } catch(_){}
}
function loadProgress(){
  try { return JSON.parse(localStorage.getItem(PROG_KEY) || '{}') || {}; }
  catch(_){ return {}; }
}
function toast(msg){
  const t = $('#toast');
  t.textContent = msg; t.classList.remove('hidden');
  clearTimeout(toast._h);
  toast._h = setTimeout(() => t.classList.add('hidden'), 1900);
}

/* ── Panels ────────────────────────────────────────────────── */
function togglePanel(sel){
  const p = $(sel), wasHidden = p.classList.contains('hidden');
  ['#statspanel','#menupanel'].forEach(s => $(s).classList.add('hidden'));
  if (wasHidden) p.classList.remove('hidden');
}
document.querySelectorAll('.panel-close').forEach(b =>
  b.onclick = () => b.closest('.panel').classList.add('hidden'));

$('#hud-menu').onclick  = () => togglePanel('#menupanel');
$('#hud-stats').onclick = () => { renderStats(); togglePanel('#statspanel'); };

function renderStats(){
  $('#stat-rows').innerHTML = Object.keys(STORY.meta.stats).map(k => {
    const m = STORY.meta.stats[k], v = S.stats[k] || 0;
    const pct = Math.max(2, Math.min(100, 50 + v * 5));
    return `<div class="stat-row">
      <div class="lbl"><span>${m.label}</span><span>${v > 0 ? '+' : ''}${v}</span></div>
      <div class="bar"><i style="width:${pct}%;background:${m.color}"></i></div>
      <div class="lbl" style="margin-top:4px;font-size:11px;opacity:.6"><span>${m.desc}</span></div>
    </div>`;
  }).join('');

  const known = [
    ['nadine_done','Nadine'], ['selina_done','Selina'],
    ['yvonne_done','Yvonne'], ['ricarda_done','Ricarda'],
    ['ordner','Herzog-Ordner'], ['kai_buch','Brenners Buch'],
    ['nordhang','Nordhang-Mappe'], ['gestaendnis','Geständnis']
  ];
  $('#flag-rows').innerHTML = known.map(([k, l]) =>
    `<span class="chip${S.flags[k] ? ' on' : ''}">${l}</span>`).join('');
}

/* ── Overlays ──────────────────────────────────────────────── */
function overlay(title, html){
  $('#overlay-title').textContent = title;
  $('#overlay-body').innerHTML = html;
  $('#overlay').classList.remove('hidden');
}
$('#overlay-close').onclick = () => $('#overlay').classList.add('hidden');
$('#overlay').addEventListener('click', e => {
  if (e.target.id === 'overlay') $('#overlay').classList.add('hidden');
});

function showGallery(){
  overlay('Galerie', '<div class="gal-grid">' + STORY.gallery.map(g => {
    const on = S.unlocked[g.w];
    return `<div class="gal-item${on ? '' : ' locked'}">
      <b>${on ? g.t : '???'}</b><span>${on ? g.s : 'noch nicht freigeschaltet'}</span></div>`;
  }).join('') + '</div>' +
  `<p style="margin-top:16px;font-size:13px;color:var(--ink-faint)">
   Freigeschaltete Szenen bleiben auf diesem Gerät gespeichert, auch nach einem neuen Spiel.</p>`);
}

function showLog(){
  const seen = [];
  S.log.slice(-60).forEach(e => {
    const last = seen[seen.length - 1];
    if (!last || last.t !== e.t) seen.push(e);
    else if (e.pick) last.pick = e.pick;
  });
  overlay('Verlauf', seen.map(e =>
    `<div class="log-entry"><b>${e.c || ''}</b>${e.t || ''}${
      e.pick ? `<br><i>▸ ${e.pick}</i>` : ''}</div>`).join('') ||
    '<p>Noch nichts passiert.</p>');
}

function showSettings(){
  overlay('Einstellungen', `
    <div class="set-row">
      <span>Eigene Clips abspielen<small>Spielt Videos ab, die in <code>media/manifest.json</code> hinterlegt sind. Ohne Eintrag läuft die eingebaute Animation.</small></span>
      <label class="switch"><input type="checkbox" id="set-media" ${settings.media ? 'checked' : ''}><i></i></label>
    </div>
    <div class="set-row">
      <span>Explizite Szenen ausblenden<small>Ersetzt Sexszenen durch eine kurze Überblendung. Die Story läuft unverändert weiter.</small></span>
      <label class="switch"><input type="checkbox" id="set-skip" ${settings.skipAdult ? 'checked' : ''}><i></i></label>
    </div>
    <div class="set-row">
      <span>Größere Schrift</span>
      <label class="switch"><input type="checkbox" id="set-big" ${settings.big ? 'checked' : ''}><i></i></label>
    </div>
    <div class="set-row">
      <span>Alles zurücksetzen<small>Löscht Speicherstand, Galerie und Altersbestätigung auf diesem Gerät.</small></span>
      <button class="btn btn-ghost btn-sm" id="set-wipe" style="width:auto;margin:0">Löschen</button>
    </div>`);

  $('#set-media').onchange = e => { settings.media = e.target.checked; saveSettings(); Media.setEnabled(settings.media); };
  $('#set-skip').onchange  = e => { settings.skipAdult = e.target.checked; saveSettings(); if (current) goto(S.node); };
  $('#set-big').onchange   = e => { settings.big = e.target.checked; saveSettings(); applyBig(); };
  $('#set-wipe').onclick   = () => {
    if (!confirm('Wirklich alles löschen? Das lässt sich nicht rückgängig machen.')) return;
    [SAVE_KEY, PROG_KEY, SET_KEY, GATE_KEY].forEach(k => localStorage.removeItem(k));
    location.reload();
  };
}
const applyBig = () => document.body.style.fontSize = settings.big ? '19px' : '';

/* ── Menüaktionen ──────────────────────────────────────────── */
$('#m-save').onclick     = () => { autosave(); toast('Gespeichert'); };
$('#m-load').onclick     = () => { const d = loadSave(); if (!d) return toast('Kein Speicherstand'); S = Object.assign(blank(), d); goto(S.node); toast('Geladen'); };
$('#m-log').onclick      = showLog;
$('#m-gallery').onclick  = showGallery;
$('#m-settings').onclick = showSettings;
$('#m-title').onclick    = () => { autosave(); toTitle(); };

/* ── Bildschirmwechsel ─────────────────────────────────────── */
const show = id => ['#agegate','#titlescreen','#game'].forEach(s =>
  $(s).classList.toggle('hidden', s !== id));

function toTitle(){
  $('#overlay').classList.add('hidden');
  ['#statspanel','#menupanel'].forEach(s => $(s).classList.add('hidden'));
  $('#btn-continue').classList.toggle('hidden', !loadSave());
  show('#titlescreen');
}

function startGame(fresh){
  const keepUnlocks = S.unlocked, keepEnd = S.endings;
  if (fresh){
    S = blank();
    S.unlocked = keepUnlocks || {};      // Galerie bleibt erhalten
    S.endings  = keepEnd || {};
  }
  show('#game');
  goto(S.node);
}

/* ── Altersprüfung ─────────────────────────────────────────── */
$('#gate-confirm').onchange = e => $('#gate-enter').disabled = !e.target.checked;
$('#gate-enter').onclick = () => {
  localStorage.setItem(GATE_KEY, '1');
  toTitle();
};
$('#gate-leave').onclick = () => { location.href = 'https://www.google.com'; };

/* ── Titelmenü ─────────────────────────────────────────────── */
$('#btn-new').onclick = () => {
  const d = loadSave();
  if (d && !confirm('Es gibt einen Speicherstand. Neues Spiel starten und ihn überschreiben?')) return;
  const pr = loadProgress();
  S = blank();
  S.unlocked = pr.unlocked || {}; S.endings = pr.endings || {};
  startGame(false);
};
$('#btn-continue').onclick = () => {
  const d = loadSave(); if (!d) return toast('Kein Speicherstand');
  S = Object.assign(blank(), d); startGame(false);
};
$('#btn-gallery').onclick  = () => { S.unlocked = loadProgress().unlocked || {}; showGallery(); };
$('#btn-settings').onclick = showSettings;

/* ── Start ─────────────────────────────────────────────────── */
(async function boot(){
  applyBig();
  await Media.init($('#media-layer'), $('#media-badge'));
  Media.setEnabled(settings.media);
  const pr = loadProgress();
  S.unlocked = pr.unlocked || {}; S.endings = pr.endings || {};
  if (localStorage.getItem(GATE_KEY)) toTitle();
  else show('#agegate');
})();

})();
