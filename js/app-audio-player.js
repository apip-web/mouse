function initWaveSurfer() {
  if (!window.WaveSurfer) return;

  // cari semua audio-player yang belum di-init
  document.querySelectorAll('.audio-player').forEach(player => {
    if (player.dataset.ready) return; // cegah double init
    player.dataset.ready = '1';

    const waveEl = player.querySelector('.wave');
    const btn = player.querySelector('.play');
    const src = player.dataset.audio;
    if (!waveEl || !btn || !src) return;

    // buat audio element sendiri
    const audio = new Audio(src);
    audio.preload = 'metadata';

    const ws = WaveSurfer.create({
      container: waveEl,
      media: audio,       // wajib v7
      waveColor: '#ccc',
      progressColor: '#ff0f00',
      height: 60,
      barWidth: 2,
      responsive: true,
      cursorColor: '#ffab40'
    });

    // tombol play/pause
    btn.addEventListener('click', () => ws.playPause());

    // update teks tombol
    ws.on('play',   () => btn.textContent = 'Pause');
    ws.on('pause',  () => btn.textContent = 'Play');
    ws.on('finish', () => btn.textContent = 'Play');

    // optional: update waktu (bisa diadaptasi dari versi kamu)
    const timeEl = player.querySelector('.time-text');
    if (timeEl) {
      const updateTime = () => {
        const cur = ws.getCurrentTime();
        const dur = ws.getDuration();
        if (dur > 0) {
          const m = Math.floor(cur / 60);
          const s = Math.floor(cur % 60);
          const dm = String(m).padStart(2,'0');
          const ds = String(s).padStart(2,'0');

          const dm2 = Math.floor(dur / 60).toString().padStart(2,'0');
          const ds2 = Math.floor(dur % 60).toString().padStart(2,'0');

          timeEl.textContent = `${dm}:${ds} / ${dm2}:${ds2}`;
        }
      };
      ws.on('audioprocess', updateTime);
      ws.on('ready', updateTime);
    }
  });
}
