/* Browser-Smoketest — braucht Playwright und einen laufenden Server:
 *
 *   python3 -m http.server 8123 &
 *   node tools/smoke-browser.js
 *
 * Prüft die Dinge, die reine Datentests nicht sehen: Altersprüfung,
 * Szenenwechsel, laufende Canvas-Animation, Speicherstand.
 *
 * Der Animationstest hat einmal ein echtes Problem gefunden: Das Canvas wurde
 * beim Boot dimensioniert, während #game noch display:none war — Größe 0x0,
 * also blieb es dauerhaft leer. Deshalb wird hier ganzflächig gehasht und
 * nicht nur ein Bildausschnitt verglichen.
 */
const path = require('path');
const crypto = require('crypto');
const PW = process.env.PLAYWRIGHT_PATH || '/opt/node22/lib/node_modules/playwright';
const {chromium, devices} = require(PW);
const URL = process.env.GAME_URL || 'http://127.0.0.1:8123/index.html';

const hash = s => crypto.createHash('md5').update(s).digest('hex').slice(0, 12);
let fails = 0;
const check = (name, ok, detail) => {
  console.log(`  ${ok ? '✓' : '✗'} ${name}${detail ? '  — ' + detail : ''}`);
  if (!ok) fails++;
};

(async () => {
  const b = await chromium.launch(
    process.env.CHROMIUM ? {executablePath: process.env.CHROMIUM} : {});
  const p = await (await b.newContext({...devices['iPhone 13'], locale:'de-DE'})).newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  // "Neues Spiel" fragt per confirm(), sobald ein Speicherstand existiert
  p.on('dialog', d => d.accept());

  await p.goto(URL, {waitUntil:'networkidle'});

  check('Altersprüfung erscheint', await p.isVisible('#agegate'));
  check('Betreten erst nach Bestätigung', await p.isDisabled('#gate-enter'));
  await p.check('#gate-confirm');
  check('Betreten danach frei', !(await p.isDisabled('#gate-enter')));
  await p.click('#gate-enter');
  await p.waitForSelector('#titlescreen:not(.hidden)');

  await p.click('#btn-new');
  await p.waitForSelector('#game:not(.hidden)');
  await p.waitForTimeout(400);

  check('Erste Szene hat Text', (await p.$$('#prose p')).length > 0);
  check('Erste Szene hat Entscheidungen', (await p.$$('#choices .btn')).length > 0);

  // Canvas: ganzflächig, nicht nur ein Ausschnitt
  const frame = () => p.evaluate(() => {
    const c = document.querySelector('#media-layer canvas');
    return c ? c.toDataURL() : null;
  });
  const f0 = await frame();
  check('Canvas vorhanden', f0 !== null);
  const dim = await p.evaluate(() => {
    const c = document.querySelector('#media-layer canvas');
    return c ? {w: c.width, h: c.height} : {w: 0, h: 0};
  });
  check('Canvas hat Größe', dim.w > 0 && dim.h > 0, `${dim.w}x${dim.h}`);
  await p.waitForTimeout(400);
  const f1 = await frame();
  check('Animation läuft', f0 !== null && hash(f0) !== hash(f1),
        `${hash(f0 || '')} -> ${hash(f1 || '')}`);

  // Verschiedene Szenen sehen verschieden aus
  const look = async id => {
    await p.evaluate(nid => Media.show(STORY.nodes[nid].scene), id);
    await p.waitForTimeout(140);
    return hash(await frame());
  };
  const ruhig = await look('a1_saal'), heiss = await look('n4');
  check('Szenen unterscheiden sich optisch', ruhig !== heiss, `${ruhig} / ${heiss}`);

  // Entscheidung wirkt auf Werte und Speicherstand
  await p.evaluate(() => location.reload());
  await p.waitForSelector('#titlescreen:not(.hidden)');
  await p.click('#btn-new');
  await p.waitForSelector('#game:not(.hidden)');
  await p.click('#choices .btn >> nth=0');
  await p.waitForTimeout(300);
  const save = await p.evaluate(() => JSON.parse(localStorage.getItem('bergheim.save.v1') || 'null'));
  check('Speicherstand geschrieben', !!save, save ? `Knoten "${save.node}"` : '');
  check('Entscheidung verändert Werte', !!save &&
        Object.values(save.stats).some(v => v !== 0), save ? JSON.stringify(save.stats) : '');

  check('Keine JS-Fehler', errs.length === 0, errs.join(' | '));
  await b.close();
  console.log(fails ? `\n${fails} Prüfung(en) fehlgeschlagen` : '\nAlle Prüfungen bestanden');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error('FEHLER:', e.message); process.exit(1); });
