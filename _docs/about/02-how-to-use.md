---
title: Technische Nutzung
info: Ein kurzes How-To in dem gezeigt wird, wie der Styleguide zu nutzen ist.
---

## Allgemeine Information & struktureller Aufbau

Der Styleguide liegt in einem [öffentlichen Repository](https://github.com/KampmannGroup/styleguide/) bei GitHub. Bei jeglichen Updates wird in der üblichen, semantischen Versionierung ein [Release inkl. Release Notes](https://github.com/KampmannGroup/styleguide/releases) erstellt.

Die wichtigen Dateien für Nutzer des Styleguides liegen allesamt im Ordner `dist`. Dort liegt eine gebundelte CSS Datei, zwei JavaScript Bundles (ESM und UMD Format) sowie die Schriften.

```
├── ...
├── dist
│   ├── css
│   │   └── kampmann.min.css
│   ├── fonts
│   │   └── circular
│   └── js
│       ├── kampmann.esm.min.js
│       └── kampmann.umd.min.js
├── ...
```

## Installation

Der beste und einfachste Weg den Styleguide zu installieren ist per NPM. Dazu einfach folgenden Befehl ausführen (natürlich müssen Node und NPM auf dem System installiert sein):

```bash
$ npm install KampmannGroup/styleguide 
```

## Import der Dateien

Hier unterscheidet sich der richtige Weg natürlich je nach verwendetem Build Tool/Bundler. Grundsätzlich sieht der Weg aber wie folgt aus:

#### CSS importieren
```css
@import '@kampmanngroup/styleguide/dist/css/kampmann.min.css';
```

#### JavaScript importieren
ESM:
```javascript
import styleguide from '@kampmanngroup/styleguide'
```

UMD (veraltet): 
```javascript
const styleguide = require('@kampmanngroup/styleguide')
```

#### Fertig!

Da normalerweise aktuelle Build Tools/Bundler (Webpack, Vite) automatisch die Fonts (dank der Deklaration in der CSS Datei) ziehen, sollte der Styleguide nun vollständig im Projekt importiert sein.

**Achtung:** Bitte die imports des CSS und JS immer an erster Stelle eures Projektes machen!