const resume = document.getElementById('resume');
const nomeSalvo = localStorage.getItem('nome');

resume.innerHTML = `${nomeSalvo} imerso em sua busca por poder, resolve buscar a orientação de Elazar, um velho amigo e mentor cujos conhecimentos arcanos são tão vastos quanto as montanhas onde habita. <br>
Com passos determinados, ele se dirige às alturas escarpadas, onde a sabedoria de Elazar pode guiá-lo a fortalecer suas habilidades mágicas de maneira ética e justa. Nas montanhas ancestrais, onde os ventos sussurram segredos antigos, ${nomeSalvo} enfrenta uma escolha crucial: aceitar os ensinamentos de Elazar e trilhar o caminho da virtude, ou seguir a sedutora trilha das trevas que o tomo sombrio lhe ofereceu. O destino de sua jornada e a vingança contra Lunaro dependem da escolha que fará ao encontrar seu mentor.`;

document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "capitulo3C.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "capitulo3D.html";
});
document.getElementById("path-3").addEventListener("click", function() {
    window.location.href = "capitulo2C.html";
});