
document.addEventListener("DOMContentLoaded", function () {
  const iconElement = document.querySelector("nav");
  const ulElement = document.querySelector("ul");
  const audioElement = document.getElementById("background-music");

  // Play the music automatically when the page is loaded
  audioElement.loop = true; // Loop the music indefinitely
  audioElement.play().catch((error) => {
    console.log("Auto-play waiting for user interaction.");
  });
  
  // Toggle the menu when the nav icon is clicked
  iconElement.addEventListener("click", function () {
    ulElement.classList.toggle("open");
  });



});




