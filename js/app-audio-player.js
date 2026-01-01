function initWaveSurfer() {
  const container = document.getElementById('waveform');
  const playBtn   = document.querySelector('.play-btn');
  const timeText  = document.querySelector('.time-text');
  const audioSrc  = container?.dataset.audio || '';

  if (!container || !playBtn || !timeText || !audioSrc || !window.WaveSurfer) return;

  const audio = new Audio(audioSrc);
  audio.preload = 'metadata';

  const wave = WaveSurfer.create({
    container: container,
    media: audio,          // wajib di v7+
    waveColor: '#777',
    progressColor: '#ff5722',
    height: 90,
    barWidth: 2,
    responsive: true,
    cursorColor: '#ffab40'
  });

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
}

document.addEventListener('DOMContentLoaded', initWaveSurfer);
