---
layout: default
---

# This is HomePage

> Here you can say lots of fun things about your site.
> 
> Maybe say a some things about yourself.
> 
> Or maybe what you plan to blog about.

<div class="audio-player" data-audio="https://dw.zobj.net/download/v1/bIbah8Iw9pz7z5Ai5YTdwP8bAvAbjgGSSx1kX_6iUwoX95S_0UVoBC4VipmQLxRJuR-eEQKijoToBU1LCt8zc0kNy2m9FYLSpk6-ol2blia1J04ZgDytLbYvN_aM/?a=&c=72&f=pop_pop_pop.mp3&special=1767266380-%2FRbSOMHm1sBi5jCGITN2LuyINbJIqWhQt4cbnWCIF7Y%3D">
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
