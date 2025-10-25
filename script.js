function toggleMenu(){
  const nav = document.getElementById('mainnav');
  const isOpen = getComputedStyle(nav).display !== 'none';
  nav.style.display = isOpen ? 'none' : 'flex';
}
document.getElementById('year').textContent = new Date().getFullYear();


window.addEventListener("scroll", function() {
  const header = document.querySelector(".site-header");
  const maxScroll = 300; // point at which background becomes fully opaque
  const scrollTop = window.scrollY;
  
  // calculate opacity between 0 and 1
  const opacity = Math.min(scrollTop / maxScroll, 1);
  
  // choose your target color (RGB)
  const baseColor = "255, 255, 255"; // white background

  header.style.backgroundColor = `rgba(${baseColor}, ${opacity})`;

  // Optional: switch text color once background is mostly opaque
  if (opacity > 0.5) {
    header.classList.add("dark");
  } else {
    header.classList.remove("dark");
  }
});