document.addEventListener("DOMContentLoaded", function () {
  const audioElement = document.getElementById("background-music");

  audioElement.loop = true;  // Make the music loop

  // Try to play music automatically when the page loads
  const playMusic = () => {
    audioElement.play().catch((error) => {
      // Handle cases where the browser doesn't allow auto-play
      console.log("Auto-play blocked, waiting for user interaction.");
    });
  };

  playMusic();

  // Listen for a user click to resume or pause the music if necessary
  document.addEventListener("click", function () {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  });
});