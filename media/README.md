# Medien-Ordner

## Wie die visuelle Schicht funktioniert

Das Spiel bringt eine **eingebaute, prozedurale Animation** mit (Canvas, abstrakte
Silhouetten, Tempo und Farbe aus den Szenendaten). Die läuft ohne jede externe
Datei und ist der Auslieferungszustand.

Zusätzlich gibt es einen Haken für **eigenes Videomaterial**: Trägst du in
`manifest.json` bei einer Szenen-ID ein `src` ein, spielt die Engine dieses Video
statt der Animation ab.

```json
"sc_nadine": {
  "src": "clips/214.mp4",
  "poster": "clips/214.jpg",
  "credit": "© Studio XY – Lizenz #1234",
  "license": "Kommerzielle Lizenz, erworben am 2026-03-04",
  "muted": true
}
```

Szenen-IDs: `sc_nadine`, `sc_selina`, `sc_yvonne`, `sc_ricarda`, `sc_trio`.

Empfehlung: MP4/H.264 oder WebM, 720p, 8–20 Sekunden, nahtlose Schleife, unter
4 MB pro Clip. Die Engine spielt stumm und `playsinline` (sonst erzwingt iOS
Vollbild).

## Warum hier nichts mitgeliefert wird

Dieses Repository enthält **kein** Videomaterial und **lädt auch keines
automatisch herunter**. Es gibt in der Engine bewusst keine Scraper-, Such- oder
Einbettungsfunktion für fremde Seiten.

Der Grund ist nicht Prüderie, sondern Haftung und Anstand:

* **Einwilligung.** Aufnahmen realer Personen sexuell weiterzuverbreiten, ohne
  dass diese Personen der Verbreitung zugestimmt haben, ist in Deutschland nach
  § 184k und § 201a StGB strafbar und in fast jeder anderen Rechtsordnung
  ebenfalls. Material aus einer Tube-Site ist regelmäßig genau das: ohne
  Zustimmung der Abgebildeten weiterverbreitet.
* **Urheber- und Leistungsschutzrecht.** Clips von Porno-Plattformen sind
  urheberrechtlich geschützt. Herunterladen, Weiterverbreiten oder Einbetten in
  ein eigenes Produkt ist eine Rechtsverletzung, auch wenn es technisch trivial
  ist.
* **Altersnachweis.** Wer in den USA solches Material veröffentlicht, braucht
  nach 18 U.S.C. § 2257 Aufzeichnungen über das Alter jeder abgebildeten Person.
  Für geladenes Fremdmaterial hast du die nie.
* **Persönlichkeitsrecht.** Eine reale Person visuell in die Rolle „Ehefrau, an
  der sich jemand rächt" zu setzen, ist eine eigenständige Verletzung — auch
  wenn der Clip selbst legal wäre.

## Wenn du eigene Clips einsetzen willst

Rechtlich sauber sind im Wesentlichen drei Wege:

1. **Lizenziertes Studiomaterial.** Mehrere Produzenten vergeben
   B2B-Lizenzen für genau solche Zwecke. Du bekommst Lizenzvertrag und
   2257-Unterlagen dazu.
2. **Eigenproduktion** mit volljährigen Darstellerinnen und Darstellern,
   schriftlicher Einwilligung (Model Release, ausdrücklich auch für diesen
   Verwendungszweck) und Ausweiskopien.
3. **Vollsynthetisches Material**, das keine real existierende Person abbildet
   und mit einem Werkzeug erzeugt wurde, dessen Nutzungsbedingungen das
   erlauben.

In allen drei Fällen: Trag die Lizenzangabe in `license` und `credit` ein. Das
Feld `credit` wird im Spiel unten links eingeblendet.

Lege Dateien nach `media/clips/`. Dieser Ordner ist in `.gitignore`, damit du
nicht versehentlich lizenziertes Material in ein öffentliches Repository pushst.
