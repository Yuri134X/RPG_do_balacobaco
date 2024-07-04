const resume = document.getElementById('resume');
const nomeSalvo = localStorage.getItem('nome');

resume.innerText = `${nomeSalvo}, decidido a reforçar suas fileiras, resolve buscar aliados entre as enigmáticas criaturas mágicas das florestas de Sombra Verde. Nestas profundezas encantadas, ele espera encontrar seres dispostos a unir forças em sua ardente busca por vingança. 

À medida que adentra o reino verdejante, repleto de antigos segredos e feitiços viventes, ele sente a presença vigilante dos habitantes místicos ao seu redor. Em meio a este domínio de magia e mistério, José deve agora decidir como ganhar a confiança dessas entidades, sabendo que sua causa e a destruição de Lunaro dependem da próxima aliança que forjar.`;

document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "capitulo3E.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "capitulo3F.html";
});
document.getElementById("path-3").addEventListener("click", function() {
    window.location.href = "capitulo3G.html";
});