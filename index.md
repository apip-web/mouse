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

## #3

<div class="audio-player" data-audio="https://assets.mixkit.co/active_storage/sfx/1361/1361-preview.mp3">
  <div class="wave"></div>
  <button class="play">Play</button>
</div>

<div class="audio-player" data-audio="https://assets.mixkit.co/active_storage/sfx/1354/1354-preview.mp3">
  <div class="wave"></div>
  <button class="play">Play</button>
</div>

<div class="audio-player" data-audio="https://assets.mixkit.co/active_storage/sfx/1354/1354-preview.mp3">
  <div class="wave"></div>
  <div class="controls-row">
    <div class="time-text">00:00 / 00:00</div>
    <button class="play">Play</button>
  </div>
</div>

<script src="https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.min.js"></script>

<style>
.audio-player {
  max-width: 520px;
  background: #1a1a1a;
  border: 1px solid #333;
  padding: 12px;
  border-radius: 10px;
  color: #ddd;
  font-family: sans-serif;
  margin: 10px 0;
}

.audio-player .wave {
  height: 60px;
  border-radius: 6px;
  background: #0d0d0d;
  margin-bottom: 10px;
}

.audio-player .controls-row {
  display: flex;
  align-items: center;
  justify-content: space-between; /* waktu kiri, tombol kanan */
}

.audio-player .time-text {
  font-size: 13px;
  color: #aaa;
}

.audio-player .play {
  padding: 6px 12px;
  font-size: 14px;
  background: #1a1a1a;
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
}
</style>
