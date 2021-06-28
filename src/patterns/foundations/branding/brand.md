---
title: Brand
maturity: ready
control: exclude
styles: ''
items: 
  - name: Brand
    path: 
      - styleguide/branding/kampmann-wort-bild-marke.svg
      - styleguide/branding/kampmann-wort-bild-marke-light.svg
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
.image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 280px;
  height: 300px;
  background-color: #ababab;
  border: 1px solid whitesmoke;
  margin-bottom: 1rem;
  padding: 30px;
}
img {
  max-height: 100%;
}
p {
  margin: 0;
}
</style>
<ul class="set">
{% for item in page.items %} 
  {% for brand in item.path %}
    <li>
      <div class="image"><img src="{{ site.baseurl }}/{{ brand }}"/></div>
      <p class="header">{{ item.name }}</p>
      <p><a target="__blank" href="{{ site.baseurl }}/{{ brand }}">{{ brand }}</a></p>
    </li>
  {% endfor %}
{% endfor %}
</ul>