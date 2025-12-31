---
layout: post
title: Struktur Blog Ini
date: 2025-12-29
---

<ul>
  <li>
    <strong>Root Project</strong>
    <ul>
      <li><code>_layouts/</code> — layout utama halaman
        <ul>
          <li><code>default.html</code> — layout SPA utama</li>
          <li><code>post.html</code> — layout untuk postingan</li>
        </ul>
      </li>

      <li><code>_includes/</code> — komponen reusable
        <ul>
          <li><code>head.html</code> — meta, title, css</li>
          <li><code>app-spa.html</code> — script SPA utama</li>
        </ul>
      </li>

      <li><code>blog/</code> — direktori postingan
        <ul>
          <li><code>my-post.md</code></li>
          <li><code>another-post.md</code></li>
        </ul>
      </li>

      <li><code>about.md</code> — halaman statis (di luar folder blog)</li>
      <li><code>index.md</code> — homepage</li>
      <li><code>404.md</code> — halaman 404 custom</li>
    </ul>
  </li>

  <li>
    <strong>Assets</strong>
    <ul>
      <li><code>/css/</code> — stylesheet</li>
      <li><code>/js/</code> — JavaScript
        <ul>
          <li><code>app-spa.js</code> — SPA navigation (fetch + history)</li>
          <li><code>app-textarea.js</code> — fitur textarea (init manual)</li>
          <li><code>app-directory-path.js</code> — breadcrumb / directory path</li>
        </ul>
      </li>
      <li><code>/img/</code> — gambar dan media</li>
    </ul>
  </li>
</ul>
