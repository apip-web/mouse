function initTextareaApp() {
  const textarea = document.getElementById('pesan');
  const saveBtn  = document.getElementById('saveBtn');
  const loadBtn  = document.getElementById('loadBtn');
  const clearBtn = document.getElementById('clearBtn');

  if (!textarea) return;

  const STORAGE_KEY = 'autosave_textarea';

  // load otomatis
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved !== null) {
    textarea.value = saved;
  }

  // autosave
  textarea.addEventListener('input', () => {
    localStorage.setItem(STORAGE_KEY, textarea.value);
  });

  saveBtn?.addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY, textarea.value);
    alert('Text saved!');
  });

  loadBtn?.addEventListener('click', () => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data !== null) {
      textarea.value = data;
      alert('Text loaded!');
    } else {
      alert('No saved text found.');
    }
  });

  clearBtn?.addEventListener('click', () => {
    textarea.value = '';
    localStorage.removeItem(STORAGE_KEY);
    alert('Cleared!');
  });
}
