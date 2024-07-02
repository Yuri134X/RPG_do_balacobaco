const resume = document.getElementById('resume');
const route1 = document.getElementById('route1');
const route2 = document.getElementById('route2');
const route3 = document.getElementById('route3');

const nomeSalvo = localStorage.getItem('nome');

resume.textContent = `${nomeSalvo} está determinado a buscar vingança contra Lunaro. Ele deve escolher como se preparar para essa jornada perigosa.`;

route1.textContent = `${nomeSalvo} decide ir para uma flortesta proxima em busca de magia sombria. Ele acredita que o poder sombrio pode ser a chave para derrotar Lunaro.`

route2.textContent = `${nomeSalvo} decide buscar a orientação de Elazar, um velho amigo e mentor que vive nas montanhas. Elazar pode ajudá-lo a fortalecer suas habilidades arcanas de forma ética.`

route3.textContent = `${nomeSalvo} resolve buscar aliados entre as criaturas mágicas das florestas de Sombra Verde. Ele espera que alguma esteja disposta a ajudá-lo em sua busca por vingança.`

document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "capitulo2A.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "capitulo2B.html";
});
document.getElementById("path-3").addEventListener("click", function() {
    window.location.href = "capitulo2C.html";
});
//José resolve buscar aliados entre as criaturas mágicas das florestas de Sombra Verde. Ele espera que alguma esteja disposta a ajudá-lo em sua busca por vingança.