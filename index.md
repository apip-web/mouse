Here you can say lots of fun things about your site.

Maybe say a some things about yourself.

Or maybe what you plan to blog about.

some lined

<ul>
  {% assign posts = site.blog | sort: "date" | reverse %}
  {% for post in posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small>{{ post.date | date: "%d %b %Y" }}</small>
    </li>
  {% endfor %}
</ul>
