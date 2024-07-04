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

texto1.textContent = `Com o equilíbrio entre luz e sombra finalmente encontrado, ${nomeSalvo} opta por um confronto equilibrado com Lunaro. Ao se aproximar do covil de seu inimigo, ele sente a tensão no ar, uma preparação para o embate que decidirá o destino de ambos. Lunaro, confiante em seu próprio poder, aceita o desafio de ${nomeSalvo}, rindo ao pensar que seu antigo rival ousaria enfrentá-lo de igual para igual.`

texto2.textContent = `No campo de batalha, cercado pelas ruínas de um antigo templo, os dois combatentes se enfrentam. ${nomeSalvo}, determinado e focado, utiliza suas habilidades arcanas sem se deixar consumir pela escuridão. Cada feitiço lançado por Lunaro é meticulosamente contrariado por ${nomeSalvo}, que combina a magia sombria com sua própria força e engenhosidade.`

texto3.textContent = `A batalha é feroz e equilibrada, com ambos os lados exibindo um poder impressionante. ${nomeSalvo} sente a tentação de ceder completamente ao poder sombrio para garantir a vitória, mas lembra-se do equilíbrio que lutou para alcançar. Com um último esforço, ele canaliza todas as suas forças, tanto as escuras quanto as claras, em um feitiço final que encapsula a essência de sua jornada.`

texto4.textContent = `O impacto da magia é devastador, desarmando Lunaro e deixando-o vulnerável. ${nomeSalvo}, em vez de terminar com uma execução brutal, oferece a chance de redenção. Lunaro, surpreso pela oferta, hesita, mas o equilíbrio precário que ${nomeSalvo} manteve mostra seu verdadeiro poder: a capacidade de escolher a compaixão sobre a vingança absoluta.`

texto5.textContent =`${nomeSalvo}, triunfante, não apenas venceu Lunaro, mas também provou a si mesmo que é possível utilizar o poder sombrio sem perder a própria humanidade. No entanto, a verdadeira prova ainda o aguarda: manter esse equilíbrio recém-descoberto em um mundo onde as forças da luz e das trevas estão em constante conflito. Seu caminho futuro depende das escolhas que fizer a partir deste momento de vitória, onde o destino do mundo ainda pende na balança.`

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

