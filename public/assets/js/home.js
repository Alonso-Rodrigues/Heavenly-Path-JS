
document.addEventListener("DOMContentLoaded", function () {
  const iconElement = document.querySelector("nav");
  const ulElement = document.querySelector("ul");
  const audioElement = document.getElementById("background-music");

  iconElement.addEventListener("click", function () {

    ulElement.classList.toggle("open");
  });

  audioElement.loop = true;
  document.addEventListener("click", function () {
    audioElement.play();
  });

});




