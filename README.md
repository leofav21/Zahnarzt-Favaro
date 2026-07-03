# Zahnarztpraxis Favaro – Website

Moderne, responsive One-Page-Website für die Zahnarztpraxis Favaro.
Ruhiges, professionelles Design im Stil moderner Schweizer Zahnarztpraxen
(inspiriert von der Referenz [zahnarzt-bolt.ch](https://www.zahnarzt-bolt.ch)).

## Aufbau

```
index.html        # Gesamte Seitenstruktur (alle Sektionen)
css/styles.css    # Design, Farben, Layout, Responsive
js/main.js        # Menü, Scroll-Animationen, Formular
assets/           # Platz für eigene Bilder/Logos
```

Kein Build-Schritt nötig – reines HTML/CSS/JS. Einfach `index.html` im
Browser öffnen oder auf einem beliebigen Webhosting ablegen.

## Sektionen

- **Hero** – Claim „Menschlich, modern und für Sie da."
- **Trust-Leiste** – Vertrauenspunkte auf einen Blick
- **Über uns / Willkommen**
- **Leistungen** – Prophylaxe, Ästhetik, Implantologie, Kinder, Schienen, Notfall
- **Praxis / Warum wir** – mit Öffnungszeiten-Karte
- **Team**
- **Patientenstimmen**
- **CTA-Banner**
- **Kontakt** – Infos, Karte (Platzhalter) und Terminformular
- **Footer** – Navigation, Kontakt, Impressum/Datenschutz

## Anpassen (Platzhalter-Inhalte ersetzen)

Alle Inhalte sind Platzhalter und sollten durch die echten Daten ersetzt werden:

| Was | Wo |
|-----|-----|
| Telefonnummer `071 552 02 05` | `index.html` (Suche & Ersetzen) |
| E-Mail `info@zahnarzt-favaro.ch` | `index.html` |
| Adresse `Musterstrasse 1, 9524 Zuzwil SG` | `index.html` |
| Team-Namen & Rollen | Sektion `#team` |
| Öffnungszeiten | Sektionen `#praxis` und Footer |
| Farben | `css/styles.css` → `:root` (z. B. `--teal-700`) |

### Echte Bilder einsetzen
Die Illustrationen (Zahn, Praxis-Vorschau, Karte, Team-Avatare) sind als
Inline-SVG umgesetzt, damit die Seite ohne externe Dateien funktioniert.
Für Fotos die jeweiligen SVG-Blöcke durch `<img src="assets/...">` ersetzen.

### Google-Maps-Karte
Der Karten-Platzhalter in der Kontakt-Sektion kann durch einen echten
Google-Maps-`<iframe>` ersetzt werden (Element `.map-embed`).

### Kontaktformular scharf schalten
Das Formular zeigt aktuell nur eine Demo-Bestätigung. Für den Live-Betrieb
in `js/main.js` die Daten an ein Backend oder einen Dienst wie
[Formspree](https://formspree.io) senden (Stelle ist im Code kommentiert).

## Rechtliches
Vor dem Livegang **Impressum** und **Datenschutzerklärung** ergänzen
(in der Schweiz nach DSG erforderlich).
