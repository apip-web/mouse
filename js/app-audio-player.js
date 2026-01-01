function initWaveSurfer() {
  if (!window.WaveSurfer) return;

  document.querySelectorAll('.audio-player').forEach(player => {
    if (player.dataset.ready) return;
    player.dataset.ready = '1';

    const waveEl = player.querySelector('.wave');
    const btn = player.querySelector('.play');
    const src = player.dataset.audio;

    const audio = new Audio(src);
    audio.preload = 'metadata';

    const ws = WaveSurfer.create({
      container: waveEl,
      media: audio,
      waveColor: '#d1d5db',
      progressColor: '#ff4500',
      cursorColor: '#ff4500',
      height: 60,
      barWidth: 2,
      barRadius: 2,
      responsive: true,
    });

    btn.addEventListener('click', () => ws.playPause());

    ws.on('play', () => btn.textContent = 'Pause');
    ws.on('pause', () => btn.textContent = 'Play');
    ws.on('finish', () => btn.textContent = 'Play');
  });
}
