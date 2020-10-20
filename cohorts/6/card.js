const slideArea = document.querySelector("div.card");
const images = slideArea.querySelectorAll("img");
let currentSlide = 0;
let z = 1;
let shuffled = false;

slideArea.addEventListener("click", () => {
  currentSlide == images.length - 1 ? (currentSlide = 0) : currentSlide++;

  images.forEach((image) => {
    image.style.animation = "";
  });

  images[currentSlide].style.zIndex = z++;
  images[currentSlide].style.animation = "fade 0.5s";
});

slideArea.addEventListener("mouseenter", () => {
  if (!shuffled) {
    images.forEach((image) => {
      image.style.transform = `translate(-6px, -6px)`;
    });
    shuffled = true;
  }
});

slideArea.addEventListener("mouseleave", (e) => {
  images.forEach((image) => {
    image.style.transform = "";
  });
  shuffled = false;
});
