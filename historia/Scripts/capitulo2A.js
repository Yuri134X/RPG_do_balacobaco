const resume = document.getElementById('resume');
const nomeSalvo = localStorage.getItem('nome');

resume.innerHTML = `${nomeSalvo}, adentrando as profundezas da ancestral floresta, se depara com um tomo arcano oculto entre as serpenteantes raízes de uma venerável árvore. Ao erguer o misterioso volume, uma aura de poder sombrio emana de suas páginas amareladas, envolvendo-o como um manto de trevas. Ele sente a magia negra lentamente permeando sua alma, insidiosa e irresistível, prometendo-lhe forças além da compreensão mortal. <br>
Em meio ao silêncio sepulcral da floresta, ${nomeSalvo} percebe que sua essência está sendo inexoravelmente moldada pela presença arcana. Agora, ele deve decidir se abraçará o poder das trevas ou buscará um meio de resistir à sua sedução, pois seu destino, e a vingança contra Lunaro, dependem de sua próxima escolha.`;

document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "capitulo3A.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "capitulo3B.html";
});
document.getElementById("path-3").addEventListener("click", function() {
    window.location.href = "capitulo2C.html";
});