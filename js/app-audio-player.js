function initWaveSurfer() {
  if (!window.WaveSurfer) return;

  document.querySelectorAll('.audio-player').forEach(player => {
    if (player.dataset.ready) return; // cegah double init
    player.dataset.ready = '1';

    const waveEl   = player.querySelector('.waveform');
    const playBtn  = player.querySelector('.play-btn');
    const timeText = player.querySelector('.time-text');
    const src      = player.dataset.audio;
    if (!waveEl || !playBtn || !timeText || !src) return;

    const wave = WaveSurfer.create({
      container: waveEl,
      waveColor: '#777',
      progressColor: '#ff5722',
      height: 90,
      barWidth: 2,
      responsive: true,
      cursorColor: '#ffab40',
      mediaControls: false
    });

    // buat audio element sendiri
    const audio = new Audio(src);
    audio.preload = 'metadata';
    wave.load(audio);

    playBtn.addEventListener('click', () => wave.playPause());

    wave.on('play',   () => playBtn.textContent = 'Pause');
    wave.on('pause',  () => playBtn.textContent = 'Play');
    wave.on('finish', () => playBtn.textContent = 'Play');

    wave.on('audioprocess', updateTime);
    wave.on('ready', updateTime);

    function updateTime() {
      const cur = wave.getCurrentTime();
      const dur = wave.getDuration();
      if (dur > 0) {
        timeText.textContent = formatTime(cur) + " / " + formatTime(dur);
      }
    }

    function formatTime(t) {
      const m = Math.floor(t / 60);
      const s = Math.floor(t % 60);
      return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }
  });
}
