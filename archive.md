---
layout: default
title: Blog Archive
---

<ul id="archive-list">
  {% assign blog_posts = site.blog | sort: "date" | reverse %}
  {% for post in blog_posts %}
    <li data-date="{{ post.date | date: "%Y-%m-%d" }}">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

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
