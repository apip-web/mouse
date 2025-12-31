function initBreadcrumb(path = location.pathname) {
  const el = document.getElementById('breadcrumb');
  if (!el) return;

  let clean = path
    .replace(base, '')
    .replace(/\/$/, '');

  if (!clean) {
    el.textContent = '/';
    return;
  }

  const parts = clean.split('/').filter(Boolean);
  let acc = '';

  const html = parts.map((part, i) => {
    acc += '/' + part;

    const label = part
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());

    if (i === parts.length - 1) {
      return `<strong>${label}</strong>`;
    }

    return `<a href="${base}${acc}">${label}</a>`;
  }).join(' <span>›</span> ');

  el.innerHTML = `/ <span>›</span> ${html}`;
}
