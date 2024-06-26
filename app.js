
const heroBackground = document.querySelector('.hero-background');
const heroImage = document.querySelector('.hero-background img');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});