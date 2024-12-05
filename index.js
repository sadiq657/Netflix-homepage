const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 200;

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ top: 0, left: scrollAmount, behavior: 'smooth' });
  scrollAmount += 50;
});

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ top: 0, left: -scrollAmount, behavior: 'smooth' });
  scrollAmount -= 50;
});