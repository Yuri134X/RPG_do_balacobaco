const resume = document.getElementById('resume');
const route1 = document.getElementById('route1');
const route2 = document.getElementById('route2');
const route3 = document.getElementById('route3');

const nomeSalvo = localStorage.getItem('nome');

resume.textContent = `${nomeSalvo} se aprofunda nas artes sombrias, ganhando um poder tremendo, mas correndo o risco de ser consumido pela escuridão.`;

route1.textContent = `${nomeSalvo} procura os elfos que habitam as profundezas da floresta, conhecidos por sua sabedoria e habilidades mágicas.`

route2.textContent = `${nomeSalvo} combina seu poder sombrio com astúcia, planejando se unir a Lunaro.`


document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "final1.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "finalSecreto.html";
});