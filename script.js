const responses = [
  "Так",
  "Ні",
  "Важко відповісти",
  "Скоріш за все",
  "Можливо"
];

function displayRandomResponse() {
  const randomIndex = Math.floor(Math.random() * responses.length);
  const answer = responses[randomIndex];
  const magicBall = document.getElementById('magic-ball');
  magicBall.textContent = answer;
}

function initMagicBall() {
  const input = document.getElementById('question-input');
  const magicBall = document.getElementById('magic-ball');

  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      displayRandomResponse();
    }
  });

  magicBall.addEventListener('click', displayRandomResponse);
}

window.onload = initMagicBall;
