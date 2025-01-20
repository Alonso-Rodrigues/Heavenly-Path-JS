document.getElementById('difficultyForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked').value;

  // Save the difficulty in localStorage or pass it as a parameter in the URL
  localStorage.setItem('difficulty', selectedDifficulty);

  // Redirect to the game
  window.location.href = "../pages/game.html";
});