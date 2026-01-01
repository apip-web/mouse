function initWaveSurfer() {
  const container = document.getElementById('waveform');
  const playBtn   = document.getElementById("playBtn");
  const timeText  = document.getElementById("timeText");

  if (!container || !playBtn || !timeText || !window.WaveSurfer) return;

  const wave = WaveSurfer.create({
    container: container,
    waveColor: '#777',
    progressColor: '#ff5722',
    height: 90,
    barWidth: 2,
    responsive: true,
    cursorColor: '#ffab40'
  });

  const audioSrc = container.dataset.audio || ''; // bisa ambil dari data-audio
  if (!audioSrc) return;
  wave.load(audioSrc);

  playBtn.onclick = () => wave.playPause();

  wave.on('play', () => playBtn.textContent = 'Pause');
  wave.on('pause', () => playBtn.textContent = 'Play');

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
}
