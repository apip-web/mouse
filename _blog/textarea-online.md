---
layout: default
title: Textarea Online
---

<style>
  body {
    background: #f4f4f9;
  }

  .textarea-container {
    width: 100%;
    max-width: 700px;
  }

  textarea {
    box-sizing: border-box;
    width: 100%;
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

  .buttons {
    margin-top: 15px;
    display: flex;
    gap: 10px;
  }

  button {
    padding: 10px 18px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
  }

  button:hover {
    background: #2980b9;
  }

  button.secondary {
    background: #7f8c8d;
  }

  button.secondary:hover {
    background: #636e72;
  }

  button.danger {
    background: #e74c3c;
  }

  button.danger:hover {
    background: #c0392b;
  }
</style>

<div class="textarea-container">
  <label for="pesan">Tulis sesuatu di sini:</label>
  <textarea id="pesan" placeholder="Ketik pesan atau catatan kamu di sini..."></textarea>

  <div class="buttons">
    <button id="saveBtn">Save</button>
    <button id="loadBtn" class="secondary">Load</button>
    <button id="clearBtn" class="danger">Clear</button>
  </div>
</div>
