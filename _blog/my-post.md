---
layout: post
title: Arsip Blog
date: 2025-12-28
tags: [Jekyll, Tutorial]
---

### Halaman
<ul>
  {% for p in site.blog %}
    <li>
      <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
    </li>
  {% endfor %}
</ul>
