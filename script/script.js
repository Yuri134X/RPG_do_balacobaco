//const startButton = document.getElementById('start-button');
//const formContainer = document.getElementById('form-container');
//const loginButton = document.getElementById('login-button');
//const signupButton = document.getElementById('signup-button');
//const noSignupButton = document.getElementById('no-signup-button');
const form = document.getElementById('form-nome');

form.addEventListener('submit', (e) => {
 e.preventDefault();
 const nome = document.getElementById('nome').value;
 localStorage.setItem('nome', nome);
 window.location.href = './game.html';
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