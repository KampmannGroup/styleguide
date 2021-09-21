---
title: Signalfarben
styles: assets/_scss/abstracts/_variables.scss
maturity: ready
control: exclude
colors:
  # - name: Frühlingsgrün
  #   mashinename: $green
  #   hex: '#95C11F'
  #   rgb: 'rgba(149,193,31,1)'
  #   hsl: 'hsla(76,72%,44%,1)'
  - name: Gelb
    mashinename: $yellow
    hex: "#FFC107"
    rgb: "rgba(255,193,7,1)"
    hsl: "hsla(45,100%,51%,1)"
  - name: Rot
    mashinename: $red
    hex: "#DC3545"
    rgb: "rgba(220,53,69,1)"
    hsl: "hsla(354,70%,54%,1)"
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
    <div class="color" style="background:{{ item.hex }}"></div> 
    <p>{{ item.name }}</p>
    <p>{{ item.mashinename }}</p>
    {% if item.hex %}<p>{{ item.hex }}</p>{% endif %}
    {% if item.rgb %}<p>{{ item.rgb }}</p>{% endif %}
    {% if item.hsl %}<p>{{ item.hsl }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
