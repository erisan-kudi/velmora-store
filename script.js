const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach((item) => observer.observe(item));

const parallaxItems = document.querySelectorAll('.parallax');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  parallaxItems.forEach((item) => {
    const speed = parseFloat(item.dataset.speed || '0.08');
    item.style.transform = `translateY(${y * speed}px)`;
  });
}, { passive: true });
