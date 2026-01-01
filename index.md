---
layout: default
---

# This is HomePage

> Here you can say lots of fun things about your site.
> 
> Maybe say a some things about yourself.
> 
> Or maybe what you plan to blog about.

<div class="audio-player" data-audio="https://assets.mixkit.co/active_storage/sfx/1356/1356-preview.mp3">
  <div class="wave"></div>
  <button class="play">Play</button>
</div>

### Blog:
<ul>
  {% for p in site.blog | sort: "date" | reverse | limit: 2 %}
    <li style="margin-bottom:10px;">
      <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
    </li>
  {% endfor %}
</ul>

<a href="{{ '/page/archive' | relative_url }}">Lihat semua post</a>

<audio controls preload="metadata">
  <source src="https://assets.mixkit.co/active_storage/sfx/1356/1356-preview.mp3" type="audio/mpeg">
  Browser kamu tidak mendukung audio.
</audio>

<script src="https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.min.js"></script>
