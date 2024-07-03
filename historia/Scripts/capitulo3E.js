const resume = document.getElementById('resume');
const nomeSalvo = localStorage.getItem('nome');

resume.innerHTML = `${nomeSalvo}, Após adentrar o reino verdejante das florestas de Sombra Verde e sentir a presença vigilante das criaturas místicas ao seu redor, ${nomeSalvo} se aproxima dos elfos da floresta. Com habilidade e respeito, ele busca ganhar a confiança dessas entidades ancestrais, compartilhando sua determinação em derrotar Lunaro e restaurar o equilíbrio na magia.
<p></p>
Impressionados pela coragem de ${nomeSalvo} e pela sinceridade de sua causa, os elfos da floresta concordam em ajudá-lo. Com seus conhecimentos ancestrais e magia profunda, eles oferecem suporte mágico e estratégias elaboradas para enfrentar Lunaro. Juntos, eles traçam planos intricados, combinando as forças dos elfos com as habilidades recém-adquiridas de ${nomeSalvo}, em uma aliança que promete ser decisiva no confronto por vir.
<p></p>
Fortalecido pelo apoio dos elfos da floresta, ${nomeSalvo} avança com renovada determinação. Ele sabe que o caminho à frente será perigoso e desafiador, mas agora, com aliados ao seu lado, sente-se mais preparado do que nunca para enfrentar seu destino e confrontar o antigo rival que ameaça o equilíbrio do mundo mágico.`;

document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "final3.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "final2.html";
});