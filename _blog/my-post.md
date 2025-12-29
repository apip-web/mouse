---
layout: post
title: test post tanpa tanggal di filename
date: 2025-12-28
tags: [Jekyll, Tutorial]
---

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

## Javascript

```js
/* ===== BLINK FUNCTION (NOT SYNC) ===== */
function startBlink(cell) {
  function blink() {
    const color = randomColor();
    cell.style.backgroundColor = color;
    cell.style.boxShadow = `0 0 15px ${color}`;

    const delay = 300 + Math.random() * 1200; // random timing
    setTimeout(blink, delay);
  }

  blink();
}
```
