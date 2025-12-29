---
layout: default
title: Blog Archive
---

{% assign blog_posts = site.blog | sort: "date" | reverse %}

{% assign current_month = "" %}
{% for post in blog_posts %}
  {% assign post_month = post.date | date: "%B %Y" %}
  {% if post_month != current_month %}
    {% unless forloop.first %}</ul>{% endunless %}
    <h3>{{ post_month }}</h3>
    <ul>
    {% assign current_month = post_month %}
  {% endif %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% if forloop.last %}</ul>{% endif %}
{% endfor %}
