const slides = document.querySelectorAll(".slide");
const sliderNav = document.querySelectorAll(".slider-nav a");
let counter = 0;

// Set initial active bullet
sliderNav[counter].classList.add("active");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goToSlide = (index) => {
  if (index >= 0 && index < slides.length) {
    counter = index;
    slideImage();
    setActiveBullet();
  }
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const setActiveBullet = () => {
  sliderNav.forEach((bullet, index) => {
    bullet.classList.remove("active");
    if (index === counter) {
      bullet.classList.add("active");
    }
  });
};

const goNext = () => {
  if (counter < slides.length - 1) {
    counter++;
    slideImage();
    setActiveBullet();
  }
};

const goPrev = () => {
  if (counter > 0) {
    counter--;
    slideImage();
    setActiveBullet();
  }
};

sliderNav.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    goToSlide(index);
  });
});
