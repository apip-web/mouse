---
layout: post
title: test post tanpa tanggal di filename
date: 2025-12-28
---

<div id='page_holder'></div>

<script>
$(document).ready(function() {
  const $holder = $('#page_holder');

  // Tampilkan loading sementara (opsional, untuk UX lebih baik)
  $holder.html('<p>Loading content...</p>');

  $.getJSON('/html.json')
    .done(function(data) {
      $holder.pagify({
        pages: data,
        defaultPage: 'home'  // atau nama halaman default Anda
      });
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      // Tampilkan pesan error langsung di dalam #page_holder
      let errorMessage = '<div style="padding: 2em; text-align: center; color: #d9534f; background: #f2dede; border: 1px solid #ebccd1; border-radius: 8px;">';
      errorMessage += '<h3>Gagal memuat konten</h3>';
      errorMessage += '<p><strong>Error:</strong> ' + textStatus + '</p>';
      if (errorThrown) {
        errorMessage += '<p><strong>Detail:</strong> ' + errorThrown + '</p>';
      }
      errorMessage += '<p>Periksa koneksi internet atau coba refresh halaman.</p>';
      errorMessage += '</div>';

      $holder.html(errorMessage);
    });
});
</script>
