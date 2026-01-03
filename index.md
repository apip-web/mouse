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

<div class="audio-player" data-audio="{{ '/assets/audio/whisper-chad.mp3' | relative_url }}">
  <div class="wave"></div>
  <div class="controls-row">
    <div>
      <div class="audio-title">Whisper Chad</div>
      <div class="time-text">00:00 / 00:00</div>
    </div>
    <button class="play">Play</button>
  </div>
</div>

<div class="audio-player" data-audio="{{ '/assets/audio/sad-nia.mp3' | relative_url }}">
  <div class="wave"></div>
  <div class="controls-row">
    <div class="time-text">00:00 / 00:00</div>
    <button class="play">Play</button>
  </div>
</div>

<div class="audio-player" data-audio="https://assets.mixkit.co/active_storage/sfx/1354/1354-preview.mp3">
  <div class="audio-title">Mice Audio</div>
  <div class="wave"></div>
  <div class="controls-row">
    <div class="time-text">00:00 / 00:00</div>
    <button class="play">Play</button>
  </div>
</div>

<style>
.audio-player {
  max-width: 520px;
  background: #fdf6f0;        /* putih pastel */
  border: 1px solid #eee;     /* border lembut */
  padding: 12px;
  border-radius: 10px;
  color: #555;                 /* teks gelap tapi lembut */
  font-family: sans-serif;
  margin: 10px 0;
}

.audio-player .wave {
  height: 60px;
  border-radius: 6px;
  background: #f5f0eb;        /* gelombang latar lembut */
  margin-bottom: 10px;
}

.audio-player .controls-row {
  display: flex;
  align-items: center;
  justify-content: space-between; /* waktu kiri, tombol kanan */
}

.audio-player .audio-title {
  font-size: 14px;
  color: #8c6d62;              /* judul pastel */
  font-weight: 500;
  margin-bottom: 6px;
}

.audio-player .time-text {
  font-size: 13px;
  color: #777;                 /* waktu sedikit gelap */
}

.audio-player .play {
  padding: 6px 12px;
  font-size: 14px;
  background: #ffe1c6;         /* tombol pastel oranye muda */
  border: none;
  border-radius: 6px;
  color: #555;                 /* teks tombol gelap */
  cursor: pointer;
}
</style>
