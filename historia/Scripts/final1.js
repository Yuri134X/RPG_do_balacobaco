const resume = document.getElementById('final');
const nomeSalvo = localStorage.getItem('nome');

final.innerHTML = `
  ${nomeSalvo}, decidido a utilizar todo o poder sombrio que adquiriu, resolve se aliar a Lunaro, ocultando suas verdadeiras intenções. Com sua nova força, ele se aproxima de Lunaro, oferecendo-se como aliado em troca de promessas de domínio e poder. Lunaro, enganado pela aparente submissão de ${nomeSalvo}, aceita-o em seu círculo de confiança, sem suspeitar da traição que se desenrola nas sombras.
            <p></p>
    Durante sua convivência, ${nomeSalvo} aprende mais sobre os segredos arcanos de Lunaro, aprimorando suas habilidades e preparando-se para o momento oportuno. Quando finalmente o dia chega, ${nomeSalvo} revela sua verdadeira intenção: destruir não apenas Lunaro, mas toda a essência mágica do mundo. Ele canaliza toda a energia sombria que adquiriu, lançando um feitiço cataclísmico que aniquila a magia em todas as suas formas, erradicando seres mágicos e até a si mesmo no processo.
            <p></p>
     Enquanto o mundo é devastado pela ausência de magia, ${nomeSalvo} percebe que sua vingança foi consumada a um custo inimaginável. No entanto, ao contemplar o vazio deixado por sua destruição, ele pondera se sua escolha final foi realmente a correta ou se, em sua busca por poder e vingança, perdeu aquilo que o tornava humano. E assim, o legado de sua decisão ecoa na história, um aviso sombrio das consequências de se entregar às trevas.
`;


document.getElementById("inicio-game").addEventListener("click", function() {
    window.location.href = "../index.html";
});