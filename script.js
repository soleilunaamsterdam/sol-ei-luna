function toggleMenu(){
  const nav = document.getElementById('mainnav');
  const isOpen = getComputedStyle(nav).display !== 'none';
  nav.style.display = isOpen ? 'none' : 'flex';
}
document.getElementById('year').textContent = new Date().getFullYear();
