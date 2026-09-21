/* ══════════════════════════════════════════════════════════════
   media.js — Visuelle Schicht für Szenen
   ──────────────────────────────────────────────────────────────
   Zwei Modi:

   1) PROZEDURAL (Standard, immer verfügbar)
      Abstrakte, animierte Silhouetten auf Canvas. Tempo, Farbe und
      Intensität werden aus den Szenendaten abgeleitet. Nicht explizit,
      aber stimmungstragend. Braucht keine externen Dateien.

   2) EIGENE CLIPS (optional, vom Betreiber selbst zu hinterlegen)
      Jede Textzeile trägt einen Visual-Tag (kiss, undress, ride …).
      Wechselt die Beschreibung, wechselt der Clip. Gesucht wird in
      dieser Reihenfolge:
          clips["<frau>/<tag>"]   z. B. "lena/ride"
          clips["<tag>"]          z. B. "ride"
          prozedurale Animation

      Diese Dateien werden bewusst NICHT mitgeliefert und von der Engine
      auch nicht automatisch beschafft. Wer hier Material einträgt, ist
      selbst dafür verantwortlich, dass die abgebildeten Personen
      volljährig sind, der Verbreitung zugestimmt haben und die
      Nutzungsrechte vorliegen. Siehe media/README.md.
   ══════════════════════════════════════════════════════════════ */

const Media = (() => {
  let layer, badge, manifest = {clips:{}}, raf = 0, canvas, ctx;
  let cur = null, t = 0, enabled = true, videoEl = null;

  const PALETTES = {
    cold:   ['#1b2a3a','#2f4a63','#4a7ba0'],
    warm:   ['#2a1520','#5c2338','#a33f5a'],
    heat:   ['#2e0f18','#7a1f35','#d4405f'],
    gold:   ['#221a0c','#5c4517','#c9a24a'],
    green:  ['#0f2220','#1d4a44','#3e8f83'],
    night:  ['#12101a','#241f33','#463a63'],
    ash:    ['#16161a','#2c2c33','#55555f']
  };

  async function init(layerEl, badgeEl){
    layer = layerEl; badge = badgeEl;
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    layer.appendChild(canvas);
    resize();
    addEventListener('resize', resize, {passive:true});
    // Beim Start ist #game noch display:none, die Ebene also 0x0 — ohne das
    // hier bliebe das Canvas leer, weil draw() bei Nullgröße aussteigt.
    if (window.ResizeObserver) new ResizeObserver(resize).observe(layer);
    try {
      const r = await fetch('media/manifest.json', {cache:'no-store'});
      if (r.ok) manifest = await r.json();
    } catch(_) { /* offline / file:// — prozedural reicht */ }
    loop();
  }

  function resize(){
    if (!canvas) return;
    const d = Math.min(devicePixelRatio || 1, 2);
    const w = Math.round(layer.clientWidth  * d);
    const h = Math.round(layer.clientHeight * d);
    if (!w || !h) return;                       // Ebene noch nicht sichtbar
    if (canvas.width === w && canvas.height === h) return;  // Zuweisung löscht das Canvas
    canvas.width = w; canvas.height = h;
    canvas.style.width = '100%'; canvas.style.height = '100%';
    ctx.setTransform(d,0,0,d,0,0);
  }

  /* ── Szene/Beat setzen ─────────────────────────────────── */
  let curSrc = null;

  function lookup(id, who){
    const c = manifest.clips || {};
    if (who && c[who + '/' + id] && c[who + '/' + id].src) return c[who + '/' + id];
    if (c[id] && c[id].src) return c[id];
    return null;
  }

  function show(scene){
    const prev = cur;
    cur = Object.assign({palette:'night', intensity:0.2, figures:2, motion:'drift'}, scene||{});
    if (!prev || prev.id !== cur.id) t = 0;

    const clip = enabled && cur.id ? lookup(cur.id, cur.who) : null;
    if (clip){
      // Gleicher Clip wie im vorigen Beat: weiterlaufen lassen, nicht neu starten.
      if (curSrc !== clip.src) playVideo(clip);
      else if (badge) badgeText(clip.credit || cur.label);
      return;
    }
    clearVideo();
    canvas.style.display = 'block';
    resize();
    badgeText(cur.label);
  }

  function badgeText(txt){
    if (!badge) return;
    badge.textContent = txt || '';
    badge.classList.toggle('hidden', !txt);
  }

  /* ── Porträt: eigenes Bild aus dem Manifest, sonst Platzhalter ── */
  function portraitHTML(tag, w){
    const p = manifest.portraits && manifest.portraits[tag];
    if (p && p.src) return `<img src="${p.src}" alt="${w.n}" loading="lazy">`;
    const init = w.n.split(' ').filter(x => !/^(Dr\.|Frau|Herr)$/.test(x))
                    .map(x => x[0]).join('').slice(0, 2);
    return `<span class="pc-init">${init}</span>`;
  }

  function playVideo(clip){
    clearVideo();
    curSrc = clip.src;
    canvas.style.display = 'none';
    videoEl = document.createElement('video');
    Object.assign(videoEl, {
      src: clip.src, loop: true, muted: clip.muted !== false,
      autoplay: true, playsInline: true, preload: 'auto'
    });
    videoEl.setAttribute('playsinline','');          // iOS: kein Fullscreen-Zwang
    if (clip.poster) videoEl.poster = clip.poster;
    layer.appendChild(videoEl);
    videoEl.play().catch(()=>{ /* Autoplay geblockt — Poster bleibt */ });
    badgeText(clip.credit || cur.label);
  }

  function clearVideo(){
    if (videoEl){ videoEl.pause(); videoEl.remove(); videoEl = null; }
    curSrc = null;
  }

  function setEnabled(v){
    enabled = v;
    clearVideo();
    if (cur) show(Object.assign({}, cur));
  }

  /* ── Prozedurale Animation ─────────────────────────────── */
  function loop(){
    raf = requestAnimationFrame(loop);
    if (!cur || videoEl || canvas.style.display === 'none') return;
    t += 0.016;
    draw();
  }

  function draw(){
    const W = layer.clientWidth, H = layer.clientHeight;
    if (!W || !H) return;
    const pal = PALETTES[cur.palette] || PALETTES.night;
    const heat = cur.intensity;                 // 0..1
    const bpm  = 0.55 + heat * 2.6;             // Bewegungstempo
    const pulse = Math.sin(t * bpm * Math.PI);  // -1..1

    // Hintergrundverlauf
    const g = ctx.createLinearGradient(0, 0, W * .35, H);
    g.addColorStop(0, pal[0]);
    g.addColorStop(.55, pal[1]);
    g.addColorStop(1, pal[0]);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

    // Wärmehof, atmet mit der Intensität
    const cx = W * .5 + Math.sin(t * .35) * W * .05;
    const cy = H * .52;
    const rad = Math.min(W, H) * (.34 + heat * .26 + pulse * heat * .05);
    const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
    halo.addColorStop(0, hexA(pal[2], .30 + heat * .30));
    halo.addColorStop(1, hexA(pal[2], 0));
    ctx.fillStyle = halo; ctx.fillRect(0, 0, W, H);

    // Silhouetten
    const n = cur.figures;
    for (let i = 0; i < n; i++){
      const off = (i - (n - 1) / 2) * W * (.11 + heat * .05);
      const sway = cur.motion === 'still' ? 0
                 : cur.motion === 'pulse' ? pulse * (6 + heat * 26)
                 : Math.sin(t * bpm * Math.PI + i * 2.1) * (10 + heat * 22);
      figure(cx + off + sway * (i % 2 ? -1 : 1), cy, Math.min(W, H) * .46,
             hexA('#000000', .52 + heat * .22), t + i * 1.7, heat);
    }

    // Vignette
    const v = ctx.createRadialGradient(W/2, H/2, Math.min(W,H)*.32, W/2, H/2, Math.max(W,H)*.78);
    v.addColorStop(0, 'rgba(0,0,0,0)');
    v.addColorStop(1, 'rgba(0,0,0,.72)');
    ctx.fillStyle = v; ctx.fillRect(0, 0, W, H);

    grain(W, H, .035 + heat * .02);
  }

  // Weiche, abstrakte menschliche Form — bewusst nicht anatomisch
  function figure(x, y, h, color, phase, heat){
    const w = h * .30;
    const lean = Math.sin(phase * (.6 + heat * 1.6)) * h * .045;
    ctx.save(); ctx.translate(x, y); ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(lean, -h * .50);
    ctx.bezierCurveTo(lean + w * .62, -h * .40,  w * .50, -h * .05,  w * .40, h * .22);
    ctx.bezierCurveTo(w * .34, h * .42,  w * .16, h * .50,  0, h * .50);
    ctx.bezierCurveTo(-w * .16, h * .50, -w * .34, h * .42, -w * .40, h * .22);
    ctx.bezierCurveTo(-w * .50, -h * .05, lean - w * .62, -h * .40, lean, -h * .50);
    ctx.closePath(); ctx.fill();
    // Kopf
    ctx.beginPath();
    ctx.ellipse(lean * 1.5, -h * .56, w * .21, w * .25, lean * .01, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  let grainCanvas = null;
  function grain(W, H, alpha){
    if (!grainCanvas){
      grainCanvas = document.createElement('canvas');
      grainCanvas.width = grainCanvas.height = 96;
      const gx = grainCanvas.getContext('2d');
      const img = gx.createImageData(96, 96);
      for (let i = 0; i < img.data.length; i += 4){
        const v = Math.random() * 255;
        img.data[i] = img.data[i+1] = img.data[i+2] = v;
        img.data[i+3] = 255;
      }
      gx.putImageData(img, 0, 0);
    }
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.globalCompositeOperation = 'overlay';
    const p = ctx.createPattern(grainCanvas, 'repeat');
    ctx.fillStyle = p;
    ctx.translate((t * 60 | 0) % 96 - 96, (t * 37 | 0) % 96 - 96);
    ctx.fillRect(0, 0, W + 96, H + 96);
    ctx.restore();
  }

  function hexA(hex, a){
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${n>>16&255},${n>>8&255},${n&255},${a})`;
  }

  return {init, show, setEnabled, portraitHTML, get manifest(){return manifest}};
})();
