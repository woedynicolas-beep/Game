# Das Hollmann-Protokoll

Eine textbasierte, verzweigende Erzählung für Erwachsene (18+). Läuft als reine
Webseite ohne Build-Schritt, ohne Server, ohne Abhängigkeiten — auf dem Handy
genauso wie am Desktop.

> **18+** — Dieses Projekt enthält explizite sexuelle Inhalte.
> Vollständige Liste: [`docs/INHALTSWARNUNGEN.md`](docs/INHALTSWARNUNGEN.md)

## Sofort spielen

**Auf dem Handy, ohne Installation:** Nichts einzurichten — der Workflow in
`.github/workflows/pages.yml` schaltet GitHub Pages beim ersten Lauf selbst ein
(`configure-pages` mit `enablement: true`) und deployt dorthin. Ein bis zwei
Minuten nach dem Push liegt das Spiel unter
`https://woedynicolas-beep.github.io/Game/`.

Den Stand des Deploys zeigt der Reiter **Actions** im Repository.

Die Adresse im Handy-Browser öffnen, „Zum Home-Bildschirm hinzufügen" wählen —
dank `manifest.webmanifest` startet es dann wie eine App im Vollbild.

**Lokal:**

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

(`index.html` direkt per Doppelklick geht auch, dann greift nur `fetch()` auf
`media/manifest.json` nicht — die eingebaute Animation läuft trotzdem.)

## Die Geschichte

Jonas Reiter, 51, wurde am Steinbacher Gymnasium drei Jahre lang von Ralf
Hollmann gequält. Einunddreißig Jahre später hat er sein Unternehmen verkauft —
und Hollmann Bau sucht elf Millionen Kapital.

Er mietet ein Haus am See und plant vierzehn Abende. Um Ralf herum stehen fünf
Frauen: seine Frau, seine Ex-Frau, seine Tochter, seine Schwester und seine
angeheiratete Tante. Jede hat seit Jahren keinen Grund gehabt, sich auf etwas
zu freuen.

**Umfang:** 32 Szenenknoten, ~7.600 Wörter, 5 Handlungsstränge à 4 Stufen,
**5 Enden**.

### Bindungsstufen

Jede Frau durchläuft vier Stufen — *Neugier · Übertritt · Verlangen ·
Abhängigkeit*. Jede Stufe kostet einen Abend, und es gibt nur vierzehn davon
bei zwanzig möglichen Stufen. Wer alle fünf tief führen will, schafft es nicht;
wer zwei ausreizt, verliert drei. Diese Knappheit ist die zentrale
Entscheidung des Spiels.

Das verborgene Ende **Die Fünf** verlangt Breite statt Tiefe: Bindungssumme
mindestens 13 bei jeder Frau auf mindestens Stufe 2 — mit vierzehn Abenden
genau erreichbar, etwa als 3/3/3/3/2.

**Werte:** *Rache*, *Kontrolle*, *Ruf*.

## Funktionen

* Fünf Handlungsstränge à vier Stufen, frei in beliebiger Reihenfolge spielbar
* Abend-Budget, das Tiefe gegen Breite ausspielt
* Fünf Enden, zwei davon an den Spielzustand geknüpft
* Beat-für-Beat-Erzählung: ein Absatz pro Tap, das Bild wechselt mit
* Porträtkarte beim ersten Auftritt jeder Figur
* Automatisches Speichern; Galerie freigeschalteter Szenen überlebt Neustarts
* Verlauf mit allen getroffenen Entscheidungen
* Explizite Szenen in den Einstellungen abschaltbar
* Mobile-first: Vollbild, `safe-area`, Querformat-Layout ab Tablet-Breite

## Aufbau

```
index.html              Shell, Altersprüfung, Titelbild
css/style.css           Ein Stylesheet, mobile-first
js/engine.js            Zustand, Verzweigung, Speicherstand, UI
js/media.js             Visuelle Schicht (s. u.)
js/story-core.js        Figuren, Werte, Prolog, Hub
js/story-<frau>.js      Je vier Stufen pro Figur
js/story-finale.js      Gesellschafterversammlung und Enden
media/                  Manifest für optionales eigenes Videomaterial
docs/INHALTSWARNUNGEN.md
```

### Eine neue Szene anlegen

Jede Textzeile kann als letztes Element ein Visual-Objekt tragen. Wechselt es,
wechselt das Bild — im Beat-Modus also bei jedem Tap.

```js
STORY.nodes.sabine_2 = {
  chapter:'Sabine · Stufe 2', title:'Übertritt',
  frau:'sabine', stufe:2, mode:'beat', adult:true, unlock:'sabine_st2',
  scene:{id:'buero', palette:'warm', intensity:.4, figures:2},
  text:[
    ['narr','Beschreibender Text.',        {v:'kiss',    i:.5}],
    ['said','SABINE','Wörtliche Rede.',    {v:'undress', i:.6}],
    ['said','JONAS','Antwort.','mc',       {v:'undress', i:.6}],
    ['narr','Erster Auftritt einer Figur.',{v:'close', i:.3, portrait:'sabine'}],
    ['beat','· · ·']
  ],
  choices:[
    {t:'Entscheidung', to:'hub',
     set:{kontrolle:2, bind:{sabine:1}, flags:{etwas:1}}, tag:'m'}
  ]
};
```

Für Stufenknoten gilt eine Konvention, die `tools/validate.js` erzwingt: Der
Knotenname ist `<frau>_<stufe>`, jede Entscheidung führt zurück zum Hub und
erhöht `bind.<frau>` um genau 1 — daraus zieht die Engine den Abendverbrauch.

`show` / `hide` an einer Entscheidung nehmen einen Ausdruck gegen den
Spielzustand: `show:'summe >= 13 && alleMin >= 2'`. Verfügbar sind `flags`,
`stats`, `bind`, `abende`, die Werte direkt (`rache`, `kontrolle`, `ruf`), die
Frauen direkt (`sabine`, `lena`, …) sowie `summe`, `alleMin`, `stufe3`,
`stufe4`.

## Die visuelle Schicht

Ausgeliefert wird eine **prozedurale Canvas-Animation**: abstrakte Silhouetten,
Farbpalette und Bewegungstempo aus den Szenendaten. Sie braucht keine Dateien
und funktioniert offline.

Zusätzlich gibt es den Haken für **eigene Clips**, und zwar pro Beschreibung:
Jede Textzeile trägt einen Visual-Tag (`kiss`, `undress`, `ride`, …). Wechselt
der Tag, wechselt der Clip. Gesucht wird in dieser Reihenfolge:

```
clips["lena/ride"]   →   clips["ride"]   →   prozedurale Animation
```

`media/manifest.json` bringt die Slots fertig mit: 15 Tags, einmal allgemein
und einmal je Figur, dazu fünf Porträt-Slots. Läuft in zwei aufeinander­
folgenden Beats derselbe Clip, wird er nicht neu gestartet.

**Dieses Repository enthält kein Bild- oder Videomaterial und lädt auch keines
herunter.** Es gibt bewusst keine Funktion, die Clips oder Fotos von fremden
Plattformen bezieht. Bei realen, identifizierbaren Personen wäre das eine
Verbreitung ohne deren Einwilligung (§§ 22 KUG, 184k, 201a StGB) und zugleich
eine Urheberrechtsverletzung — beides unabhängig davon, ob damit Geld verdient
wird. Welche Wege tragfähig sind, steht in [`media/README.md`](media/README.md).

## Tests

```bash
node tools/validate.js       # Verweise, Sackgassen, Stufen-Konvention, Visual-Tags
node tools/reachability.js   # 5000 Zufalls- plus gerichtete Durchlaeufe
```

Beide laufen bei jedem Push in GitHub Actions, bevor deployt wird.

Dazu ein Browser-Smoketest, der lokal gegen einen laufenden Server geht und
die Dinge prueft, die Datentests nicht sehen — Altersprüfung, Szenenwechsel,
laufende Canvas-Animation, Speicherstand:

```bash
python3 -m http.server 8123 &
node tools/smoke-browser.js
```

Braucht Playwright; Pfad notfalls ueber `PLAYWRIGHT_PATH` und `CHROMIUM` setzen.
