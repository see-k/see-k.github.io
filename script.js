const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
const menuToggle = document.getElementById('menuToggle');
menuToggle?.addEventListener('click', () => {
  document.body.classList.toggle('mobile-sidebar-open');
  menuToggle.setAttribute('aria-expanded', String(document.body.classList.contains('mobile-sidebar-open')));
});
document.querySelectorAll('#sidebar a').forEach((link) => {
  link.addEventListener('click', () => document.body.classList.remove('mobile-sidebar-open'));
});
