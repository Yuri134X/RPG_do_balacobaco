const resume = document.getElementById('resume');


const nomeSalvo = localStorage.getItem('nome');

resume.textContent = `${nomeSalvo} ardendo com a chama da vingança, jurou retribuir a desonra imposta por Lunaro. Em seu coração ferido, a decisão de buscar justiça se enraizou, e agora ele deve ponderar cuidadosamente sobre como se preparar para a iminente e perigosa jornada.`
` Entre as sombras da traição e os murmúrios de antigas alianças, ${nomeSalvo} enfrenta um dilema: qual caminho trilhará para reunir a força necessária e enfrentar seu pérfido inimigo? As opções diante dele são muitas, cada uma com seus próprios perigos e promessas, exigindo sabedoria e coragem para escolher o curso que o conduzirá ao seu destino de vingança.`;



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