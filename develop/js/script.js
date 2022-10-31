// get a complete list of slides within an array
// on btn click,

const buttons = document.querySelectorAll('.carousel-controls button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('previous')) {
      document.querySelector('.carousel__gallery').scrollLeft -= 300;
    }

    if (button.classList.contains('next')) {
      document.querySelector('.carousel__gallery').scrollLeft += 300;
    }
  });
});
