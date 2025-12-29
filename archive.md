---
layout: default
title: Blog Archive
---

{% assign blog_posts = site.blog | sort: "date" | reverse %}

<h2>Blog Archive</h2>

<ul>
  {% for post in blog_posts %}
    <li>
      <a href="{{ post.url | relative_url }}">
        {{ post.date | date: "%B %Y" }} - {{ post.title }}
      </a>
    </li>
  {% endfor %}
</ul>
