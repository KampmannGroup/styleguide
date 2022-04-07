---
title: Hauptfarben
styles: assets/_scss/abstracts/_variables.scss
maturity: ready
control: exclude
colors:
  - name: Kampmann Blau
    mashinename: $primary
    hex: '#0E2249'
    rgb: 'rgba(14,34,73,1)'
    hsl: 'hsla(220,68%,17%,1)'
    cmyk: '100/70/10/50'
    css: 'var(--color-blue)'
  - name: Frühlingsgrün
    mashinename: $green
    hex: '#95C11F'
    rgb: 'rgba(149,193,31,1)'
    hsl: 'hsla(76,72%,44%,1)'
    cmyk: '50/0/100/0'
    css: 'var(--color-green)'
---

<style>
.set {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
  margin-top: 0;
  padding: 0;
  list-style: none;
}
li {
  flex: 1 0 20%;
  margin: 1rem;
}
.color {
  width: 100%;
  min-width: 160px;
  height: 80px;
  color: white;
  border: 1px solid whitesmoke;
  margin-bottom: 1rem;
}
p {
  margin: 0;
}
</style>
<ul class="set">
{% for item in page.colors %} 
  <li>
    <div class="color" style="background:{{ item.css }}"></div> 
    <p><strong>{{ item.name }}</strong></p>
    <p><span class="label">SCSS:</span> {{ item.mashinename }}</p>
    {% if item.css %}<p><span class="label">CSS:</span> {{ item.css }}</p>{% endif %}
    {% if item.hex %}<p><span class="label">HEX:</span> {{ item.hex }}</p>{% endif %}
    {% if item.rgb %}<p><span class="label">RGB:</span> {{ item.rgb }}</p>{% endif %}
    {% if item.hsl %}<p><span class="label">HSL:</span> {{ item.hsl }}</p>{% endif %}
    {% if item.cmyk %}<p><span class="label">CYMK:</span> {{ item.cmyk }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
