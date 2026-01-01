---
layout: default
---

# This is HomePage

> Here you can say lots of fun things about your site.
> 
> Maybe say a some things about yourself.
> 
> Or maybe what you plan to blog about.

<div class="audio-player" data-audio="/audio/sample.mp3">
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

<script src="https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.wave-auto').forEach(el => {
    if (el.dataset.ready) return;
    el.dataset.ready = '1';

    const ws = WaveSurfer.create({
      container: el,
      waveColor: '#ccc',
      progressColor: '#ff0f00',
      height: 60,
      barWidth: 2,
    });

    ws.load(el.dataset.audio);

    el.addEventListener('click', () => ws.playPause());
  });
});
</script>
