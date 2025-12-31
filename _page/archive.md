---
layout: default
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

<li style="margin-bottom:10px;">
  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
</li>
{% endfor %}

</ul>
