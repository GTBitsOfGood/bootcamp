const slideArea = document.querySelector("div.card");
const images = slideArea.querySelectorAll("img");
let currentSlide = 0;
let z = 1;
let shuffled = false;

// Clicking on the slide area cycles though the images
slideArea.addEventListener("click", () => {
  currentSlide == images.length - 1 ? (currentSlide = 0) : currentSlide++;

  images.forEach((image) => {
    image.style.animation = "";
  });

  images[currentSlide].style.zIndex = z++;
  images[currentSlide].style.animation = "fade 0.5s";
});

// Mousing over the slide area randomly shuffles the image positions by +/- 50px
slideArea.addEventListener("mouseenter", () => {
  if (!shuffled) {
    images.forEach((image) => {
      image.style.transform = `translate(-6px, -6px)`;
    });
    shuffled = true;
  }
});

// Mousing out of the slide area resets the image positions
slideArea.addEventListener("mouseleave", (e) => {
  images.forEach((image) => {
    image.style.transform = "";
  });
  shuffled = false;
});
