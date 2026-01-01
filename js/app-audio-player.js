function initWaveSurfer() {
  document.querySelectorAll('.audio-player').forEach(player => {
    if (player.dataset.ready) return; // cegah double init
    player.dataset.ready = '1';

    const waveEl = player.querySelector('.wave');
    const btn = player.querySelector('.play');
    const src = player.dataset.audio;

    const ws = WaveSurfer.create({
      container: waveEl,
      waveColor: '#ccc',
      progressColor: '#ff0f00',
      height: 60,
      barWidth: 2,
      responsive: true,
    });

    ws.load(src);

    btn.addEventListener('click', () => {
      ws.playPause();
      btn.textContent = ws.isPlaying() ? 'Pause' : 'Play';
    });
  });
}
