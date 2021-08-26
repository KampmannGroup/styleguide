---
title: Helper Classes
---

<h2>Margin und Padding</h2>
<p>Mittels Shorthand-Klassen weisen Sie Elementen responsive Marginwerte (Abstand nach außen) oder Paddingwerte (Abstand nach innen) zu.</p>

<h3>Notation</h3>
<p>Abstände, die für alle Breakpoints (xs - xxl) gelten, benötigen kein Breakpoint-Kürzel, da sie an kein Media-Query gebunden sind. Soll der Wert ab einem bestimmten Breakpoint aufwärts überschrieben werden, muss ein Kürzel in die Klasse eingefügt werden.</p>
<p>Die Klassen werden im folgenden Muster angegeben: 
  <ul>
    <li>Für xs: <code>{property}{sides}-{size}</code></li>
    <li>Für sm, md, lg, xl und xxl: <code>{property}{sides}-{breakpoint}-{size}</code></li>
  </ul>
</p>

<p><strong>PROPERTY</strong></p>
<ul>
  <li><code>m</code> - für Margin-Klassen</li>
  <li><code>p</code> - für Padding-Klassen</li>
</ul>

<p><strong>SIDES</strong></p>
<ul>
  <li>Ohne Angabe - Abstand in alle Richtungen</li>
  <li><code>t</code> - top: Abstand nach oben</li>
  <li><code>b</code> - bottom: Abstand nach unten</li>
  <li><code>s</code> - start: Abstand zum Start (Der Start wird furch die Leserichtung definiert)</li>
  <li><code>e</code> - end: Abstand zum Ende (Das Ende wird furch die Leserichtung definiert)</li>
  <li><code>x</code> - x-achse: Abstand nach links und rechts</li>
  <li><code>y</code> - y-achse: Abstand nach oben und unten</li>
</ul>

<p><strong>SIZE</strong></p>
<ul>
  <li><code>0</code> - um einen Abstand zu beseitigen</li>
  <li><code>1</code> - 4 Pixel</li>
  <li><code>2</code> - 8 Pixel</li>
  <li><code>3</code> - 16 Pixel</li>
  <li><code>4</code> - 24 Pixel</li>
  <li><code>5</code> - 48 Pixel</li>
  <li><code>auto</code> - automatischer Abstand</li>
</ul>

{% include pattern_block.html url='/src/patterns/foundations/bootstrap/spacing.html' %}
