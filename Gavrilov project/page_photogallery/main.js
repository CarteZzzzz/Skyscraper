const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.querySelector(".theme_img");
const body = document.body;

var theme = "light";

toggleButton.addEventListener('click', () => {
  
    if (theme == "light") {
        theme = "dark";
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeIcon.src = "../img/icons/bebra.png";
    } else {
        theme = "light";
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeIcon.src = "../img/icons/icons8-луна-100 1.png";
    }});


    document.getElementById('burger-menu').addEventListener('click', function() {
      const navLinks = document.getElementById('nav-links');
      
      if (navLinks.classList.contains('active')) {
          navLinks.style.opacity = '0'; 
          setTimeout(() => {
              navLinks.classList.remove('active'); 
          }, 300);
      } else {
          navLinks.classList.add('active');
          setTimeout(() => {
              navLinks.style.opacity = '1'; 
          }, 10); 
      }
  });