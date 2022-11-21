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

<div style="display:block; height:5rem"></div>
<h2>Farben</h2>
<p>Mittels Shorthand-Klassen weisen Sie Elementen eine Text- bzw. Hintergrundfarbe zu</p>

<h3>Notation</h3>
<p>Die Klassen werden im folgenden Muster angegeben: 
  <ul>
    <li><code>{property}-{color}</code></li>
  </ul>
</p>

<p><strong>PROPERTY</strong></p>
<ul>
  <li><code>bg</code> - für Hintergründe</li>
  <li><code>text</code> - für Textfarben</li>
</ul>

<p><strong>COLOR</strong></p>
<ul>
  <li style="position: relative; padding-left: 25px;"><svg style="position:absolute; top:5px; left:0;" width="15" height="15" viewBox="0 0  15 15"><rect x="0" y="0"  width="15" height="15" fill="#0E2249"/></svg><code>primary</code> – Hauptfarbe (Dunkelblau)</li>
  <li style="position: relative; padding-left: 25px;"><svg style="border: 1px solid #ebebeb;position:absolute; top:5px; left:0;" width="15" height="15" viewBox="0 0  15 15"><rect x="0" y="0"  width="15" height="15" fill="#FFF"/></svg><code>secondary</code> - Sekundärfarbe (Weiß)</li>
  <li style="position: relative; padding-left: 25px;"><svg style="position:absolute; top:5px; left:0;" width="15" height="15" viewBox="0 0  15 15"><rect x="0" y="0"  width="15" height="15" fill="#0E2249"/></svg><code>blue</code></li>
  <li style="position: relative; padding-left: 25px;"><svg style="position:absolute; top:5px; left:0;" width="15" height="15" viewBox="0 0  15 15"><rect x="0" y="0"  width="15" height="15" fill="#95C11F"/></svg><code>green</code></li>
  <li style="position: relative; padding-left: 25px;"><svg style="position:absolute; top:5px; left:0;" width="15" height="15" viewBox="0 0  15 15"><rect x="0" y="0"  width="15" height="15" fill="#008F8C"/></svg><code>teal</code></li>
  <li style="position: relative; padding-left: 25px;"><svg style="position:absolute; top:5px; left:0;" width="15" height="15" viewBox="0 0  15 15"><rect x="0" y="0"  width="15" height="15" fill="#79C08B"/></svg><code>aloevera</code></li>
  <li style="position: relative; padding-left: 25px;"><svg style="position:absolute; top:5px; left:0;" width="15" height="15" viewBox="0 0  15 15"><rect x="0" y="0"  width="15" height="15" fill="#58C7DA"/></svg><code>cyan</code></li>
  <li style="position: relative; padding-left: 25px;"><svg style="border: 1px solid #ebebeb;position:absolute; top:5px; left:0;" width="15" height="15" viewBox="0 0  15 15"><rect x="0" y="0"  width="15" height="15" fill="#FFF"/></svg><code>white</code></li>
  <li style="position: relative; padding-left: 25px;"><svg style="position:absolute; top:5px; left:0;" width="15" height="15" viewBox="0 0  15 15"><rect x="0" y="0"  width="15" height="15" fill="#F1F0EE"/></svg><code>gray-light</code></li>
  <li style="position: relative; padding-left: 25px;"><svg style="position:absolute; top:5px; left:0;" width="15" height="15" viewBox="0 0  15 15"><rect x="0" y="0"  width="15" height="15" fill="#F0EFEC"/></svg><code>gray-medium</code></li>
  <li style="position: relative; padding-left: 25px;"><svg style="position:absolute; top:5px; left:0;" width="15" height="15" viewBox="0 0  15 15"><rect x="0" y="0"  width="15" height="15" fill="#D7D5CD"/></svg><code>gray-dark</code></li>
  <li style="position: relative; padding-left: 25px;"><svg style="position:absolute; top:5px; left:0;" width="15" height="15" viewBox="0 0  15 15"><rect x="0" y="0"  width="15" height="15" fill="#000"/></svg><code>black</code></li>
</ul>

{% include pattern_block.html url='/src/patterns/foundations/bootstrap/colors.html' %}
