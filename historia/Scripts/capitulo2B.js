const resume = document.getElementById('resume');
const route1 = document.getElementById('route1');
const route2 = document.getElementById('route2');
const route3 = document.getElementById('route3');

const nomeSalvo = localStorage.getItem('nome');

resume.textContent = `${nomeSalvo} viaja para as montanhas e encontra Elazar, que concorda em ajudá-lo a aprimorar suas habilidades arcanas.`;

route1.textContent = `${nomeSalvo} dedica-se completamente ao treinamento intensivo com Elazar, aprimorando suas habilidades e aprendendo novas magias.`

route2.textContent = `${nomeSalvo} opta por explorar formas de magia menos convencionais, buscando um método inovador para enfrentar Lunaro.`

route3.textContent = `${nomeSalvo} decide que precisa de mais do que apenas treino arcano e parte para buscar aliados entre as criaturas mágicas.`

document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "capitulo3C.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "capitulo3D.html";
});
document.getElementById("path-3").addEventListener("click", function() {
    window.location.href = "capitulo2C.html";
});