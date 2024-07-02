const resume = document.getElementById('resume');
const route1 = document.getElementById('route1');
const route2 = document.getElementById('route2');
const route3 = document.getElementById('route3');

const nomeSalvo = localStorage.getItem('nome');

resume.textContent = `${nomeSalvo} está na floresta, e encontra um tomo arcano entre as Raizes de uma antiga arvore. Ele sente a magia sombria começando a tomar conta de sua alma.`;

route1.textContent = `${nomeSalvo} decide explorar todo o potencial da magia sombria, apesar dos riscos para sua alma.`

route2.textContent = `${nomeSalvo} tenta encontrar um equilíbrio entre a magia sombria e suas próprias habilidades naturais para evitar ser consumido por ela.`

route3.textContent = `${nomeSalvo} percebe os perigos da magia sombria e decide procurar ajuda com as criaturas mágicas na floresta.`

document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "capitulo3A.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "capitulo3B.html";
});
document.getElementById("path-3").addEventListener("click", function() {
    window.location.href = "capitulo2C.html";
});