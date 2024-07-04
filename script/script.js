const form = document.getElementById('form-nome');
const nomeInput = document.getElementById('nome');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = nomeInput.value.trim(); 
  if (nome !== '') { 
    localStorage.setItem('nome', nome);
    window.location.href = './game.html';
  } else {
    alert('Por favor, digite seu nome de personagem.'); 
  }
});

function playMusic() {
  var audio = document.getElementById("myAudio");
  audio.play();
}
