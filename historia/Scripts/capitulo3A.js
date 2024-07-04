const resume = document.getElementById('resume');
const nomeSalvo = localStorage.getItem('nome');

resume.innerHTML = `${nomeSalvo}, sentindo o irresistível chamado das trevas, resolve mergulhar ainda mais profundamente nas artes sombrias reveladas pelo tomo arcano. 
<p></p>
Cada feitiço que decifra o atrai mais para um abismo de poder e escuridão. As runas nas páginas amareladas começam a brilhar com uma luz etérea, revelando segredos ocultos há milênios. Ele invoca espíritos antigos, firmando pactos proibidos, e sua alma se entrelaça cada vez mais com as forças negras que o tomo contém.
<p></p>
Enquanto a magia negra consome sua essência, José se torna uma figura de temível poder, seu coração endurecido pela escuridão que agora domina sua vontade. No entanto, ele percebe que cada novo feitiço e pacto o afasta de sua humanidade, moldando-o em algo além do mortal. 
<p></p>
Com o destino de Lunaro cada vez mais ao seu alcance, José deve ponderar se continuará a se submeter ao irresistível poder sombrio ou se buscará um fio de luz em meio às trevas que o consomem, pois o caminho que escolhe agora definirá não apenas seu destino, mas o de todos ao seu redor.`;

document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "final1.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "finalSecreto.html";
});