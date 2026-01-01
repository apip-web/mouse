---
layout: default
---

# This is HomePage

> Here you can say lots of fun things about your site.
> 
> Maybe say a some things about yourself.
> 
> Or maybe what you plan to blog about.

### Blog:
<ul>
  {% for p in site.blog | sort: "date" | reverse | limit: 2 %}
    <li style="margin-bottom:10px;">
      <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
    </li>
  {% endfor %}
</ul>

<a href="{{ '/page/archive' | relative_url }}">Lihat semua post</a>

<div class="audio-player" data-audio="https://assets.mixkit.co/active_storage/sfx/1356/1356-preview.mp3">
  <div class="wave"></div>
  <button class="play">Play</button>
</div>

<script src="https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.min.js"></script>

<style>
.audio-player {
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 700px;
}

.audio-player .wave {
  width: 100%;
  border-radius: 6px;
  background: #f8f8f8;   /* background gelombang */
  margin-bottom: 0.5em;
}

.audio-player .play {
  padding: 0.5em 1em;
  border-radius: 6px;
  border: none;
  background: #ff4500;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}
.audio-player .play:hover {
  background: #e03e00;
}
</style>
