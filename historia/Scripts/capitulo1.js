const resume = document.getElementById('resume');

const nomeSalvo = localStorage.getItem('nome');

resume.textContent = `${nomeSalvo} está determinado a buscar vingança contra Lunaro. Ele deve escolher como se preparar para essa jornada perigosa.`;
//José está determinado a buscar vingança contra Lunaro. Ele deve escolher como se preparar para essa jornada perigosa.
document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "capitulo2A.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "capitulo2B.html";
});
document.getElementById("path-3").addEventListener("click", function() {
    window.location.href = "capitulo2C.html";
});