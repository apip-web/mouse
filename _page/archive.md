---
layout: default
---

<h1>Blog Archive</h1>

<div id="archive-list">
  {% assign blog_posts = site.blog | sort: "date" | reverse %}
  {% for post in blog_posts %}
    <ul><li data-date="{{ post.date | date: "%Y-%m-%d" }}">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li></ul>
  {% endfor %}
</div>

<script>
const list = document.getElementById('archive-list');
const items = Array.from(list.querySelectorAll('li'));
list.innerHTML = ''; // Kosongkan list untuk rebuild

let currentMonth = '';
let currentUL = null;

items.forEach(li => {
  const date = new Date(li.dataset.date);
  const month = date.toLocaleString('default', { month: 'long', year: 'numeric' });

  if (month !== currentMonth) {
    // Buat header bulan baru
    const header = document.createElement('h3');
    header.textContent = month;
    list.appendChild(header);

    currentUL = document.createElement('ul');
    list.appendChild(currentUL);

    currentMonth = month;
  }

  currentUL.appendChild(li);
});
</script>

---
layout: default
title: Blog Archive
---

<h1>Blog Archive</h1>

{% assign posts = site.blog | sort: "date" | reverse %}
{% assign current_month = "" %}

{% for post in posts %}
{% assign month = post.date | date: "%B %Y" %}

{% if month != current_month %}
{% if current_month != "" %}
</ul>
{% endif %}

<h3>{{ month }}</h3>
<ul>

{% assign current_month = month %}
{% endif %}

<li>
  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
</li>
{% endfor %}

</ul>
