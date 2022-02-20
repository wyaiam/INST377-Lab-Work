let slidePosition = 0;
const slides = document.querySelectorAll('.carousel_item');
const totalSlides = slides.length;

document.querySelector('#carousel_button--next').addEventListener("click", function() {
  moveToNextSlide();
});

document.querySelector('#carousel_button--prev').addEventListener("click", function() {
  moveToPrevSlide();
});

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  }
}

function moveToPrevSlide() {
  
}