document.getElementById('difficultyForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked').value;

  // Salvar a dificuldade no localStorage ou passar como parâmetro na URL
  localStorage.setItem('difficulty', selectedDifficulty);

  // Redirecionar para o jogo
  window.location.href = "../pages/game.html";
});