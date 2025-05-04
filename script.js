// Carousel Logic
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

let currentIndex = 0;

function updateCarousel(position) {
  track.style.transform = 'translateX(-' + position * 100 + '%)';
  slides.forEach((slide, index) => {
    slide.classList.toggle('current-slide', index === position);
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle('current-dot', index === position);
  });
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel(currentIndex);
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});
