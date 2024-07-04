// game.html
const texto1 = document.getElementById('texto1');
const texto2 = document.getElementById('texto2');
const texto3 = document.getElementById('texto3');
const botao = document.getElementById('botao');
const botao2 = document.getElementById('botao2');
const botao3= document.getElementById('botao3');
const startButton = document.getElementById('start');

const nomeSalvo = localStorage.getItem('nome');

texto1.textContent = `${nomeSalvo}, um jovem mago, vivia em uma vila pacífica chamada Sombra Verde. Seus dias eram preenchidos com o estudo das artes arcanas e a cura de seus vizinhos com ervas mágicas.`;

texto2.textContent = `Um dia, porém, a tranquilidade de Sombra Verde foi quebrada. Um mago perverso chamado Lunaro, um feiticeiro habilidoso, mas sua magia era escura e cruel.`;

texto3.textContent = `${nomeSalvo} testemunhou a crueldade de Lunaro com seus próprios olhos. O mago perverso lançou uma maldição sobre a família de ${nomeSalvo}. 
${nomeSalvo} viu sua esposa e seus filhos mortos. A dor e a raiva queimaram em seu coração, fazendo ele partir em uma jornada perigosa e cheia de escolhas.`;

botao.addEventListener('click', function() {
  texto1.style.display = 'none';
  texto2.style.display = 'block';
  botao2.style.display = 'block';
  
})

  botao2.addEventListener('click', function()  {
    texto2.style.display = 'none';
    texto3.style.display = 'block';
    botao2.style.display = 'none';
    botao3.style.display = 'block';
});

botao3.addEventListener('click', function() {
  window.location.href = './historia/capitulo1.html';

})