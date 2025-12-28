---
layout: home
---

Here you can say lots of fun things about your site.

Maybe say a some things about yourself.

Or maybe what you plan to blog about.

some lined

### Pages
<ul>
  {% for p in site.blog %}
    <li>
      <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
    </li>
  {% endfor %}
</ul>
