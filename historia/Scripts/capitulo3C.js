const resume = document.getElementById('resume');
const nomeSalvo = localStorage.getItem('nome');

resume.innerHTML = `Durante os meses de treinamento nas montanhas isoladas, ${nomeSalvo} aprimora suas habilidades mágicas, explorando novas técnicas e refinando seu controle sobre os elementos. Elazar, com sua vasta experiência, orienta ${nomeSalvo} não apenas na arte da magia, mas também na importância de manter o equilíbrio entre poder e responsabilidade.
<p></p>
Enquanto isso, a sombra de Lunaro paira sobre eles, uma ameaça constante que não pode ser ignorada. ${nomeSalvo} se prepara diligentemente para o confronto iminente, combinando o conhecimento adquirido com Elazar com sua determinação de enfrentar seu antigo rival.
<p></p>
Finalmente, chegando ao ápice de seu treinamento, ${nomeSalvo} se sente pronto para o confronto. Armado com habilidades fortalecidas e um senso renovado de propósito, ele se despede de Elazar e parte em direção ao covil de Lunaro, onde a batalha que decidirá o destino de ambos aguarda.
<p></p>
O caminho que ${nomeSalvo} escolheu, guiado pela ética e sabedoria de Elazar, moldará não apenas o resultado do confronto iminente, mas também o próprio caminho que ele seguirá adiante.`;

document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "final3.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "final2.html";
});