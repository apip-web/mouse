function initTextareaApp() {
  const textarea = document.getElementById('pesan');
  const saveBtn  = document.getElementById('saveBtn');
  const loadBtn  = document.getElementById('loadBtn');
  const clearBtn = document.getElementById('clearBtn');

  if (!textarea) return;

  const STORAGE_KEY = 'autosave_textarea';
  const RESET_DELAY = 2000;

  function flashButton(btn, text) {
    if (!btn) return;

    const original = btn.textContent;
    btn.textContent = text;

    setTimeout(() => {
      btn.textContent = original;
    }, RESET_DELAY);
  }

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
    flashButton(saveBtn, 'Saved');
  });

  loadBtn?.addEventListener('click', () => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data !== null) {
      textarea.value = data;
      flashButton(loadBtn, 'Loaded');
    }
  });

  clearBtn?.addEventListener('click', () => {
    textarea.value = '';
    localStorage.removeItem(STORAGE_KEY);
    flashButton(clearBtn, 'Cleared');
  });
}
