

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  slides.style.transform = "translateX(-" + currentSlide * 100 + "%)";
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

showSlide(currentSlide);





const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.querySelector(".theme_img");
const body = document.body;

var theme = "light";

toggleButton.addEventListener('click', () => {
  
    if (theme == "light") {
        theme = "dark";
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeIcon.src = "./img/icons/bebra.png";
    } else {
        theme = "light";
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeIcon.src = "./img/icons/icons8-луна-100.png";
    }});