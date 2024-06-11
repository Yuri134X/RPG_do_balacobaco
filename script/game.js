let paragraphs = document.querySelectorAll('.typing-text p');
let continuarButton = document.getElementById('continuar');
let iniciarJogoButton = document.getElementById('iniciar-jogo');
let currentParagraph = 0;

continuarButton.addEventListener('click', function() {
  paragraphs[currentParagraph].classList.remove('active');
  currentParagraph++;
  paragraphs[currentParagraph].classList.add('active');
  if (currentParagraph === paragraphs.length - 1) {
    continuarButton.style.display = 'none';
    iniciarJogoButton.style.display = 'block';
  }
});

iniciarJogoButton.addEventListener('click', function() {
  window.location.href = './historia/capitulo1.html';
});