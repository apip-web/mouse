---
layout: post
title: Textarea Online
---
  <style>
    body {
      font-family: monospace, Arial, sans-serif;
      background: #f4f4f9;
    }
    .textarea-container {
      width: 100%;
      max-width: 700px;
    }
    textarea {
      width: auto;
      height: 300px;
      padding: 15px;
      font-size: 12px;
      border: 2px solid #3498db;
      border-radius: 12px;
      resize: vertical;
      outline: none;
      transition: border 0.3s, box-shadow 0.3s;
      background: #fff;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    textarea:focus {
      border-color: #2980b9;
      box-shadow: 0 0 15px rgba(52,152,219,0.4);
    }
    label {
      display: block;
      margin-bottom: 10px;
      font-weight: bold;
      color: #2c3e50;
    }
    button {
      margin-top: 15px;
      padding: 12px 25px;
      background: #3498db;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
    }
    button:hover {
      background: #2980b9;
    }
  </style>

  <div class="textarea-container">
    <label for="pesan">Tulis sesuatu di sini:</label>
    <textarea id="pesan" placeholder="Ketik pesan atau catatan kamu di sini..."></textarea>
    <br>
    <button onclick="alert('Cleared!')">Clear</button>
  </div>

  <script>
    const textarea = document.getElementById('pesan');
    const STORAGE_KEY = 'autosave_textarea';

    // Load saved content saat halaman dibuka
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      textarea.value = saved;
    }

    // Save otomatis setiap kali user mengetik
    textarea.addEventListener('input', () => {
      localStorage.setItem(STORAGE_KEY, textarea.value);
    });

    // Optional: clear storage saat tombol diklik
    document.querySelector('button').addEventListener('click', () => {
      localStorage.removeItem(STORAGE_KEY);
    });
  </script>
