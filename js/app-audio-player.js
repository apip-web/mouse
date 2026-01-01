function initWaveSurfer() {
  if (!window.WaveSurfer) return;

  document.querySelectorAll('.audio-player').forEach(player => {
    if (player.dataset.ready) return;
    player.dataset.ready = '1';

    const waveEl = player.querySelector('.wave');
    const btn = player.querySelector('.play');
    const src = player.dataset.audio;

    // BUAT AUDIO ELEMENT SENDIRI
    const audio = new Audio(src);
    audio.preload = 'metadata';

    const ws = WaveSurfer.create({
      container: waveEl,
      media: audio,            // ⭐ WAJIB v7
      waveColor: '#ccc',
      progressColor: '#ff0f00',
      height: 60,
      barWidth: 2,
    });

    btn.addEventListener('click', () => {
      ws.playPause();
    });

    ws.on('play',   () => btn.textContent = 'Pause');
    ws.on('pause',  () => btn.textContent = 'Play');
    ws.on('finish', () => btn.textContent = 'Play');
  });
}
