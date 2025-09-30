

// carousel effect
let slideIndex = 1;
const items = document.querySelectorAll(".carousel-item");
const carousel = document.querySelector(".carousel");
const totalItems = items.length;
let slideWidth = items[0].clientWidth;

carousel.style.transform = `translateX(-${slideWidth * slideIndex}px)`;

function showSlides(index) {
  carousel.style.transition = "transform 1.5s ease-in-out";
  carousel.style.transform = `translateX(-${slideWidth * index}px)`;
}

carousel.addEventListener("transitionend", () => {
  if (slideIndex === totalItems - 1) {
    carousel.style.transition = "none";
    slideIndex = 1;
    carousel.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  }
  else if (slideIndex <= 0) {
    carousel.style.transition = "none";
    slideIndex = totalItems - 2;
    carousel.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  }
});

function nextSlide() {
  if (slideIndex < totalItems - 1) {
    slideIndex++;
    showSlides(slideIndex);
  }
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
    showSlides(slideIndex);
  }
}

window.addEventListener("resize", () => {
  slideWidth = items[0].clientWidth;
  carousel.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  carousel.style.transition = "none";
});

setInterval(() => {
  nextSlide();
}, 5000);


//parallax effect
window.addEventListener("scroll", function() {
  const parallaxElements = document.querySelectorAll(".parallax");
  let scrollPosition = window.pageYOffset;

  for (let i = 0; i < parallaxElements.length; i++) {
    parallaxElements[i].style.backgroundPosition = `center ${scrollPosition * 1}px`;
  }

});

