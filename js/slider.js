let currentSlide = 0;
const slides = document.querySelectorAll(".hero__Item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  const translateValue = -currentSlide * 100 + "%";
  slides.forEach((slide) => {
    slide.style.transform = "translateX(" + translateValue + ")";
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

showSlide(currentSlide);
