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

<div class="audio-player">
  <div class="audio-title">Modern Audio Player</div>
  <div id="waveform"></div>

  <div class="controls-row">
    <button id="playBtn" class="play-btn">Play</button>
    <div id="timeText" class="time-text">00:00 / 00:00</div>
  </div>
</div>

## #2

<div class="audio-player" data-audio="https://assets.mixkit.co/active_storage/sfx/1356/1356-preview.mp3">
  <div class="audio-title">Modern Audio Player</div>
  <div class="waveform"></div>

  <div class="controls-row">
    <button class="play-btn">Play</button>
    <div class="time-text">00:00 / 00:00</div>
  </div>
</div>

<div class="audio-player" data-audio="https://assets.mixkit.co/active_storage/sfx/1361/1361-preview.mp3">
  <div class="audio-title">Second Player</div>
  <div class="waveform"></div>

  <div class="controls-row">
    <button class="play-btn">Play</button>
    <div class="time-text">00:00 / 00:00</div>
  </div>
</div>

## #3

<div class="wave-auto"
     data-audio="https://assets.mixkit.co/active_storage/sfx/1361/1361-preview.mp3">
  <div class="wave"></div>
  <button class="play">Play</button>
</div>

<div class="wave-auto" data-audio="https://assets.mixkit.co/active_storage/sfx/1361/1361-preview.mp3"></div>

## #4

<audio controls preload="metadata">
  <source src="https://assets.mixkit.co/active_storage/sfx/1361/1361-preview.mp3" type="audio/mpeg">
  Browser kamu tidak mendukung audio.
</audio>

<script src="https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.min.js"></script>

<style>
  .audio-player {
    background: #1a1a1a;
    border: 1px solid #333;
    padding: 18px;
    border-radius: 12px;
    max-width: 520px;
    color: #ddd;
    font-family: sans-serif;
    margin: 10px 0;
  }

  .audio-title {
    font-size: 16px;
    margin-bottom: 10px;
    color: #ffa869;
    font-weight: 500;
  }

  #waveform {
    height: 90px;
    border-radius: 6px;
    background: #0d0d0d;
    margin-bottom: 15px;
  }

  .controls-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .play-btn {
    background: #ff5722;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-weight: 600;
  }

  .time-text {
    margin-left: auto;
    font-size: 13px;
    color: #aaa;
  }
</style>
