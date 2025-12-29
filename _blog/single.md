---
layout: post
title: Single Page
date: 2025-12-29
---

<div id="page_holder">
  <!-- Konten homepage bisa ditulis di sini secara statis -->
  <h1>Selamat Datang</h1>
  <p>Ini adalah halaman utama.</p>
</div>

<!-- Daftar link navigasi -->
<nav>
  <a href="#home">Home</a>

  {% for post in site.blog limit:10 %}
    <a href="#{{ post.url | replace: '/', '' | remove: '.html' }}">{{ post.title }}</a>
  {% endfor %}
</nav>

<script>
$(document).ready(function() {
  // Handle semua klik pada link yang dimulai dengan #
  $(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();

    let hash = $(this).attr('href').substring(1);  // ambil nilai setelah #

    // Jika hash kosong atau hanya '#', abaikan
    if (!hash) return;

    let pageUrl = hash + '.html';

    // Tampilkan loading sementara (opsional)
    $('#page_holder').html('<p style="text-align:center; padding:2em;">Loading...</p>');

    // Muat konten
    $('#page_holder').load(pageUrl + ' > *', function(response, status, xhr) {
      if (status === "error") {
        $('#page_holder').html(
          '<div style="padding:2em; text-align:center; color:#d9534f;">' +
          '<h3>Halaman tidak ditemukan</h3>' +
          '<p>File <strong>' + pageUrl + '</strong> tidak ada atau error ' + xhr.status + '</p>' +
          '</div>'
        );
      } else {
        // Update URL tanpa reload (opsional, untuk back/forward button)
        history.pushState(null, '', '#' + hash);
      }
    });
  });

  // Handle tombol back/forward browser
  $(window).on('popstate', function() {
    let hash = window.location.hash.substring(1);
    if (hash) {
      $('#page_holder').load(hash + '.html > *');
    }
  });
});
</script>
