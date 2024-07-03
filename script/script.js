//const startButton = document.getElementById('start-button');
//const formContainer = document.getElementById('form-container');
//const loginButton = document.getElementById('login-button');
//const signupButton = document.getElementById('signup-button');
//const noSignupButton = document.getElementById('no-signup-button');
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

//startButton.addEventListener('click', () => {
//  startButton.style.display = 'none';
//  formContainer.style.display = 'block';
//  loginButton.style.display = 'block';
//  signupButton.style.display = 'block';
//});

//loginButton.addEventListener('click', () => {
//  signupButton.style.display = 'none';
//  loginForm.style.display = 'block';
//});

//signupButton.addEventListener('click', () => {
//  loginButton.style.display = 'none';
//  loginForm.style.display = 'none';
//  signupForm.style.display = 'block';
//});

//loginButton.addEventListener('click', () => {
//    window.location.href = './login.html';
//});
//signupButton.addEventListener('click', () => {
//    window.location.href = './signup.html';
//});

//noSignupButton.addEventListener('click', () => {
//  window.location.href = './game.html';
//});

noSignupButton.addEventListener('click', () => {
  window.location.href = './game.html';
});

function playMusic() {
  var audio = document.getElementById("myAudio");
  audio.play();
}

