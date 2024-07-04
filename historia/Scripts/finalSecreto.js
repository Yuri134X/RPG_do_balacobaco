const resume = document.getElementById('final');
const nomeSalvo = localStorage.getItem('nome');

const texto1 = document.getElementById('texto1');
const texto2 = document.getElementById('texto2');
const texto3 = document.getElementById('texto3');
const texto4 = document.getElementById('texto4');
const texto5 = document.getElementById('texto5');
const botao = document.getElementById('botao');
const botao2 = document.getElementById('botao2');
const botao4 = document.getElementById('botao4');
const botao5 = document.getElementById('botao5');
const botao6 = document.getElementById('botao6');
const botao3= document.getElementById('inicio-game');
const final = document.getElementById('imageFim');

texto1.textContent = ` ${nomeSalvo}, mergulhando cada vez mais fundo nos segredos ocultos da magia sombria, abraça completamente o poder proibido revelado pelo tomo arcano. Cada feitiço dominado o transforma em uma figura de imenso poder e temor, enquanto ele mergulha nas profundezas da escuridão que agora o envolve.`
    
texto2.textContent = `Com o tempo, ${nomeSalvo} se alia a Lunaro, seu antigo rival, mas agora como um agente da escuridão que ambos buscavam dominar. Sob a tutela de Lunaro, ele aprimora suas habilidades sombrias, aprendendo novos rituais e segredos ancestrais que prometem poder absoluto sobre a magia.`
     
texto3.textContent =`No entanto, conforme o poder de ${nomeSalvo} cresce, também cresce sua ambição e paranoia. Ele começa a ver qualquer um que possua qualquer resquício de magia como uma ameaça, uma lembrança de sua própria fraqueza antes de abraçar as trevas. Determinado a purificar o mundo da magia que considera corrupta e perigosa, ${nomeSalvo} trama um plano para usar seu poder recém-descoberto.`
            
texto4.textContent =`Em um ato de desespero e loucura, ${nomeSalvo} canaliza toda a sua energia sombria para lançar um feitiço devastador, Transformando-se em um monstro no processo, acaba lançando uma tempestade de energia negra que se espalha pelo mundo. A magia é rasgada dos seres mágicos, banindo-a do mundo para sempre. No turbilhão de energia, todos os seres mágicos são consumidos, incluindo ${nomeSalvo}, que sacrifica sua própria vida no processo.`
            
texto5.textContent =`O mundo, agora livre da influência mágica, é deixado em silêncio e desolação. A decisão de ${nomeSalvo}, uma mistura de vingança e paranoia, deixou um legado sombrio que ecoará através das eras. A história de ${nomeSalvo} serve como um lembrete sombrio dos perigos de se deixar consumir pelo poder das trevas, uma advertência contra a busca desenfreada por poder que pode levar à destruição não apenas de inimigos, mas também de si mesmo.`


botao.addEventListener('click', function() {
  texto1.style.display = 'none';
  texto2.style.display = 'block';
  botao2.style.display = 'block';
  
})

  botao2.addEventListener('click', function()  {
    texto2.style.display = 'none';
    texto3.style.display = 'block';
    botao2.style.display = 'none';
    botao5.style.display = 'block';
   

});

botao5.addEventListener('click', function()  {
  texto3.style.display = 'none';
  texto4.style.display = 'block';
  botao5.style.display = 'none';
  botao6.style.display = 'block';
 

});

botao6.addEventListener('click', function()  {
texto4.style.display = 'none';
texto5.style.display = 'block';
botao6.style.display = 'none';
botao4.style.display = 'block';


});


botao4.addEventListener('click', function()  {
  botao4.style.display = 'none';
  texto5.style.display = 'none';
  final.style.display = 'block';
  botao3.style.display = 'block';

})

botao3.addEventListener('click', function() {
  window.location.href = "../index.html";

})