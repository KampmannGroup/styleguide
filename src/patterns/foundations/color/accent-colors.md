---
title: Accent Colors
styles: base/variables.scss
maturity: draft
control: exclude
colors: 
  - name: $blue
    hex: '#0E2249'  
    rgb: 'rgba(14,34,73,1)'
    hsl: 'hsla(220,68%,17%,1)'
  - name: $cyan
    hex: '#58C7DA'
    rgb: 'rgba(88,199,218,1)'
    hsl: 'hsla(189,64%,60%,1)'
  - name: $teal
    hex: '#008F8C'
    rgb: 'rgba(0,143,140,1)'
    hsl: 'hsla(179,100%,28%,1)'
  - name: $green
    hex: '#95C11F'
    rgb: 'rgba(149,193,31,1)'
    hsl: 'hsla(76,72%,44%,1)' 
  - name: $gray
    hex: '#D7D5CD'
    rgb: 'rgba(215,213,205,.35)'
    hsl: 'hsla(48,11%,82%,.35)' 
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
    <div class="color" style="background:{{ item.hex }}"></div> 
    <p>{{ item.name }}</p>
    {% if item.hex %}<p>{{ item.hex }}</p>{% endif %}
    {% if item.rgb %}<p>{{ item.rgb }}</p>{% endif %}
    {% if item.hsl %}<p>{{ item.hsl }}</p>{% endif %}
  </li>
{% endfor %}
</ul>