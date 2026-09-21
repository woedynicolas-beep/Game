# Bergheim Protokoll

Eine textbasierte, verzweigende Erzählung für Erwachsene (18+). Läuft als reine
Webseite ohne Build-Schritt, ohne Server, ohne Abhängigkeiten — auf dem Handy
genauso wie am Desktop.

> **18+** — Dieses Projekt enthält explizite sexuelle Inhalte.
> Vollständige Liste: [`docs/INHALTSWARNUNGEN.md`](docs/INHALTSWARNUNGEN.md)

## Sofort spielen

**Auf dem Handy, ohne Installation:** GitHub Pages einschalten —
*Settings → Pages → Source: „Deploy from a branch" → Branch:
`claude/nsfw-18-plus-game-uzxr1w`, Ordner `/ (root)` → Save.*
Nach ein bis zwei Minuten liegt das Spiel unter
`https://woedynicolas-beep.github.io/Game/`.

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

Jonas Reiter, 34, wurde am Gymnasium Bergheim drei Jahre lang gequält. Heute hat
er sein Unternehmen verkauft und fährt zum fünfzehnten Klassentreffen zurück —
mit einer Mappe über die wirtschaftlichen Schwachstellen der drei Männer, die
ihm das angetan haben.

Vier Frauen stehen zwischen ihm und dem, was er vorhat. Jede von ihnen hat
eigene Gründe, mit ihm zu reden, und jede weiß mehr als er.

**Umfang:** 54 Szenen, ~7.600 Wörter, 4 Handlungsstränge, **5 Enden**.

**Werte,** die jede Entscheidung verschieben und am Ende bestimmen, welche
Schlüsse offenstehen: *Rache*, *Nähe*, *Einfluss*, *Ruf*.

## Funktionen

* Vier verzweigende Handlungsstränge, frei in beliebiger Reihenfolge spielbar
* Fünf Enden, zwei davon an Bedingungen geknüpft
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
js/story-*.js           Reine Daten: Szenen, Text, Entscheidungen
media/                  Manifest für optionales eigenes Videomaterial
docs/INHALTSWARNUNGEN.md
```

### Eine neue Szene anlegen

```js
STORY.nodes.meine_szene = {
  chapter:'Akt II · Nadine', title:'Donnerstag · Büro',
  scene:{id:'office', palette:'warm', intensity:.4, figures:2, motion:'pulse'},
  text:[
    ['narr','Beschreibender Text.'],
    ['said','NADINE','Wörtliche Rede.'],
    ['said','JONAS','Antwort.','mc'],
    ['think','Innerer Monolog.'],
    ['beat','· · ·']
  ],
  choices:[
    {t:'Entscheidung', to:'naechster_knoten',
     set:{rache:2, flags:{etwas_passiert:1}}, tag:'r'}
  ]
};
```

`show` / `hide` an einer Entscheidung nehmen einen Ausdruck, der gegen den
Zustand ausgewertet wird: `show:'flags.nordhang && rache >= 4'`. Verfügbar sind
`flags`, `stats`, die Werte direkt (`rache`, `naehe`, `macht`, `ruf`) sowie
`tracks` und `allies`.

Verweise prüfen:

```bash
node tools/validate.js
```

## Die visuelle Schicht

Ausgeliefert wird eine **prozedurale Canvas-Animation**: abstrakte Silhouetten,
Farbpalette, Bewegungstempo und Intensität kommen aus den Szenendaten. Sie
braucht keine Dateien und funktioniert offline.

Optional kannst du in `media/manifest.json` **eigene Clips** hinterlegen, die
dann statt der Animation laufen.

**Dieses Repository enthält kein Videomaterial und lädt auch keines herunter.**
Es gibt bewusst keine Funktion, die Clips von Porno-Plattformen bezieht oder
einbettet — das wäre gegenüber den abgebildeten Personen eine Verbreitung ohne
deren Einwilligung (§§ 184k, 201a StGB) und gegenüber den Produzenten eine
Urheberrechtsverletzung. Welche Wege stattdessen tragfähig sind — lizenziertes
Studiomaterial, Eigenproduktion mit Model Release, vollsynthetisches Material —
steht in [`media/README.md`](media/README.md).

## Lizenz

Code und Text: siehe [`LICENSE`](LICENSE).

## Tests

```bash
node tools/validate.js       # alle Szenenverweise aufloesbar, keine Sackgassen
node tools/reachability.js   # 4000 Zufallsdurchlaeufe: jedes Ende erreichbar?
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
