// ===== CAROUSEL =====
const track = document.getElementById('carouselTrack');
const dotsContainer = document.getElementById('carouselDots');
const slides = document.querySelectorAll('.carousel-slide');

let currentSlide = 0;
const totalSlides = slides.length;
let interval;

// Criar dots
slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.classList.add('carousel-dot');
  if (index === 0) dot.classList.add('active');

  dot.addEventListener('click', () => {
    goToSlide(index);
    resetAutoPlay();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dot');

// Função para ir ao slide
function goToSlide(index) {
  currentSlide = index;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

// Próximo slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  goToSlide(currentSlide);
}

// Autoplay
function startAutoPlay() {
  interval = setInterval(nextSlide, 4000);
}

// Reset autoplay quando clicar
function resetAutoPlay() {
  clearInterval(interval);
  startAutoPlay();
}

// Iniciar
startAutoPlay();
