const prevButtons = document.querySelectorAll('.previous');
const nextButtons = document.querySelectorAll('.next');

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll('.card');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('visible');
  }
  slides[slideIndex - 1].classList.add('visible');
}

prevButtons.forEach((button) => {
  button.addEventListener('click', () => {
    plusSlides(-1);
  });
});

nextButtons.forEach((button) => {
  button.addEventListener('click', () => {
    plusSlides(1);
  });
});

let slideIndex = 1;
showSlides(slideIndex);
