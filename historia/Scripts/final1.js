const resume = document.getElementById('final');
const nomeSalvo = localStorage.getItem('nome');

const texto1 = document.getElementById('texto1');
const texto2 = document.getElementById('texto2');
const texto3 = document.getElementById('texto3');
const botao = document.getElementById('botao');
const botao2 = document.getElementById('botao2');
const botao4 = document.getElementById('botao4');
const botao3= document.getElementById('inicio-game');
const final = document.getElementById('imageFim');

texto1.textContent = `${nomeSalvo}, decidido a utilizar todo o poder sombrio que adquiriu, resolve se aliar a Lunaro, ocultando suas verdadeiras intenções. Com sua nova força, ele se aproxima de Lunaro, oferecendo-se como aliado em troca de promessas de domínio e poder. Lunaro, enganado pela aparente submissão de ${nomeSalvo}, aceita-o em seu círculo de confiança, sem suspeitar da traição que se desenrola nas sombras.`
    
    texto2.textContent = `Durante sua convivência, ${nomeSalvo} aprende mais sobre os segredos arcanos de Lunaro, aprimorando suas habilidades e preparando-se para o momento oportuno. Quando finalmente o dia chega, ${nomeSalvo} revela sua verdadeira intenção: destruir não apenas Lunaro, mas toda a essência mágica do mundo. Ele canaliza toda a energia sombria que adquiriu, lançando um feitiço cataclísmico que aniquila a magia em todas as suas formas, erradicando seres mágicos e até a si mesmo no processo.`
        
    texto3.textContent = `Enquanto o mundo é devastado pela ausência de magia, ${nomeSalvo} percebe que sua vingança foi consumada a um custo inimaginável. No entanto, ao contemplar o vazio deixado por sua destruição, ele pondera se sua escolha final foi realmente a correta ou se, em sua busca por poder e vingança, perdeu aquilo que o tornava humano. E assim, o legado de sua decisão ecoa na história, um aviso sombrio das consequências de se entregar às trevas.`

botao.addEventListener('click', function() {
  texto1.style.display = 'none';
  texto2.style.display = 'block';
  botao2.style.display = 'block';
  
})

  botao2.addEventListener('click', function()  {
    texto2.style.display = 'none';
    texto3.style.display = 'block';
    botao2.style.display = 'none';
    botao4.style.display = 'block';
   

});

botao4.addEventListener('click', function()  {
  botao4.style.display = 'none';
  texto3.style.display = 'none';
  final.style.display = 'block';
  botao3.style.display = 'block';

})

botao3.addEventListener('click', function() {
  window.location.href = "../index.html";

})