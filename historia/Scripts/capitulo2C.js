const resume = document.getElementById('resume');
const route1 = document.getElementById('route1');
const route2 = document.getElementById('route2');
const route3 = document.getElementById('route3');

const nomeSalvo = localStorage.getItem('nome');

resume.textContent = `${nomeSalvo} adentra as florestas no arredores de Sombra Verde em busca de criaturas mágicas que possam se juntar a ele.`;

route1.textContent = `${nomeSalvo} procura os elfos que habitam as profundezas da floresta, conhecidos por sua sabedoria e habilidades mágicas.`

route2.textContent = `${nomeSalvo} tenta fazer um pacto com os espíritos da floresta, seres antigos e poderosos que podem fornecer-lhe apoio mágico.`

route3.textContent = `${nomeSalvo} se conecta com os animais mágicos da floresta, esperando que eles ofereçam sua força e habilidades únicas em sua jornada.`

document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "capitulo3E.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "capitulo3F.html";
});
document.getElementById("path-3").addEventListener("click", function() {
    window.location.href = "capitulo3G.html";
});