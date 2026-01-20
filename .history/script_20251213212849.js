const track = document.getElementById('carouselTrack');
const dotsContainer = document.getElementById('carouselDots');
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
  dot.onclick = () => goToSlide(index);
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dot');

function goToSlide(index) {
  currentSlide = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
}, 4000);
