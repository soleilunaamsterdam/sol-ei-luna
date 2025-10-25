function toggleMenu(){
  const nav = document.getElementById('mainnav');
  const isOpen = getComputedStyle(nav).display !== 'none';
  nav.style.display = isOpen ? 'none' : 'flex';
}
document.getElementById('year').textContent = new Date().getFullYear();


window.addEventListener("scroll", function() {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});