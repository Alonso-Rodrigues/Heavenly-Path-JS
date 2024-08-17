
document.addEventListener("DOMContentLoaded", function () {
    const iconElement = document.querySelector("nav");
    const ulElement = document.querySelector("ul");
  
    iconElement.addEventListener("click", function () {

      ulElement.classList.toggle("open");
    });
  });


