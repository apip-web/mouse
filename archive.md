---
layout: default
title: Blog Archive
---

<h1>Blog Archive</h1>

{% assign posts = site.blog | sort: "date" | reverse %}  
<ul>  
{% for post in posts %}  
  <li>  
    <a href="{{ post.url | relative_url }}">  
      {{ post.date | date: "%B %Y" }} - {{ post.title }}  
    </a>  
  </li>  
{% endfor %}  
</ul>

---

---

<h1>Blog Archive</h1>

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
  items.forEach(li => {
    const date = new Date(li.dataset.date);
    const month = date.toLocaleString('default', { month: 'long', year: 'numeric' });

    if (month !== currentMonth) {
      // Buat header bulan baru
      const header = document.createElement('h3');
      header.textContent = month;
      list.appendChild(header);
      const ul = document.createElement('ul');
      list.appendChild(ul);
      currentMonth = month;
      li.parentUL = ul; // Simpan referensi ul untuk li
    }

    li.parentUL.appendChild(li);
  });
</script>
