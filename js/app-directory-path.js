function initBreadcrumb(path = location.pathname) {
  const el = document.getElementById('breadcrumb');
  if (!el) return;

  let clean = path
    .replace(base, '')
    .replace(/\/$/, '');

  if (!clean) {
    el.innerHTML = '<strong>/</strong>';
    return;
  }

  const parts = clean.split('/').filter(Boolean);

  const html = parts.map(part => {
    const label = part
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());

    return `<strong>${label}</strong>`;
  }).join(' <span>›</span> ');

  el.innerHTML = `<strong>/</strong> <span>›</span> ${html}`;
}
