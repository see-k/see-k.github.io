const body = document.body;
const sidebar = document.getElementById('sidebar');
const collapseToggle = document.getElementById('collapseToggle');
const menuToggle = document.getElementById('menuToggle');

document.getElementById('year').textContent = new Date().getFullYear();

collapseToggle?.addEventListener('click', () => {
  body.classList.toggle('sidebar-collapsed');
  collapseToggle.textContent = body.classList.contains('sidebar-collapsed') ? '→' : '←';
});

menuToggle?.addEventListener('click', () => {
  body.classList.toggle('mobile-sidebar-open');
  const expanded = body.classList.contains('mobile-sidebar-open');
  menuToggle.setAttribute('aria-expanded', String(expanded));
});

sidebar?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('mobile-sidebar-open');
  });
});
