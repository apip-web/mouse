function initWaveSurfer() {
  if (typeof WaveSurfer === 'undefined') return;

  document.querySelectorAll('.audio-player').forEach(player => {
    if (player.dataset.ready) return;
    player.dataset.ready = '1';

    const waveEl = player.querySelector('.wave');
    const btn = player.querySelector('.play');
    const src = player.dataset.audio;

    const ws = WaveSurfer.create({
      container: waveEl,
      backend: 'MediaElement', // ⭐ WAJIB
      waveColor: '#ccc',
      progressColor: '#ff0f00',
      height: 60,
      barWidth: 2,
      responsive: true,
    });

    ws.load(src);

    btn.addEventListener('click', () => {
      ws.playPause();
    });

    ws.on('play', () => btn.textContent = 'Pause');
    ws.on('pause', () => btn.textContent = 'Play');
    ws.on('finish', () => btn.textContent = 'Play');
  });
}
