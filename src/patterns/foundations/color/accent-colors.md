---
title: Akzentfarben
styles: assets/_scss/abstracts/_variables.scss
maturity: ready
control: exclude
colors:
  # - name: Frühlingsgrün
  #   mashinename: $green
  #   hex: '#95C11F'
  #   rgb: 'rgba(149,193,31,1)'
  #   hsl: 'hsla(76,72%,44%,1)'
  - name: Aloe Vera
    mashinename: $aloevera
    hex: '#79C08B'
    rgb: 'rgba(121,192,139,1)'
    hsl: 'hsla(135,36%,61%,1)'
    cmyk: '57/0/57/0'
    css: 'var(--color-aloevera)'
  - name: Petrol
    mashinename: $teal
    hex: '#008F8C'
    rgb: 'rgba(0,143,140,1)'
    hsl: 'hsla(179,100%,28%,1)'
    cmyk: '81/21/47/5'
    css: 'var(--color-teal)'
  - name: Cyan
    mashinename: $cyan
    hex: '#58C7DA'
    rgb: 'rgba(88,199,218,1)'
    hsl: 'hsla(189,64%,60%,1)'
    cmyk: '61/0/16/0'
    css: 'var(--color-cyan)'
  - name: Beige
    mashinename: $gray-dark
    hex: '#D7D5CD'
    rgb: 'rgba(215,213,205,1)'
    hsl: 'hsla(48,11%,82%,1)'
    cmyk: '18/13/20/0'
  - name: Beige 35%
    mashinename: $gray-medium
    hex: '#F0EFEC'
    rgb: 'rgba(240,239,236,1)'
    hsl: 'hsla(45,12%,93%,1)'
  - name: Beige hell
    mashinename: $gray-light
    hex: '#F1F0EE'
    rgb: 'rgba(241,240,238,1)'
    hsl: 'hsla(40,10%,94%,1)'
    cmyk: '7/5/7/0'
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
  flex: 1 0 25%;
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
    <div class="color" style="background:{{ item.rgb }}"></div> 
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
