let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + totalSlides) % totalSlides;
  slides[currentSlide].classList.add("active");

  document.getElementById("slideNumber").textContent = `${
    currentSlide + 1
  } / ${totalSlides}`;

  document.getElementById("prevBtn").disabled = currentSlide === 0;
  document.getElementById("nextBtn").disabled =
    currentSlide === totalSlides - 1;
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    showSlide(currentSlide + 1);
  }
}

function previousSlide() {
  if (currentSlide > 0) {
    showSlide(currentSlide - 1);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight" || event.key === " ") {
    nextSlide();
  } else if (event.key === "ArrowLeft") {
    previousSlide();
  }
});

showSlide(0);
