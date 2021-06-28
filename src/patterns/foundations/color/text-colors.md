---
title: Textfarben
styles: assets/_scss/abstracts/_variables.scss
maturity: ready
control: exclude
colors: 
  - name: $body-color
    hex: '#8A8882'
    rgb: 'rgba(138,136,130,1)'
    hsl: 'hsla(48,3%,53%,1)'
  - name: $primary
    hex: '#0E2249'  
    rgb: 'rgba(14,34,73,1)'
    hsl: 'hsla(220,68%,17%,1)'
  - name: $secondary
    hex: '#FFFFFF'
    rgb: 'rgba(255,255,255,1)'
    hsl: 'hsla(0,0%,100%,1)'
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
    <div class="color" style="background:{{ item.hsl }}"></div> 
    <p>{{ item.name }}</p>
    {% if item.hex %}<p>{{ item.hex }}</p>{% endif %}
    {% if item.rgb %}<p>{{ item.rgb }}</p>{% endif %}
    {% if item.hsl %}<p>{{ item.hsl }}</p>{% endif %}
  </li>
{% endfor %}
</ul>