const nomeImpresso = document.getElementById('nome-impresso');
const textoComNome = document.getElementById('texto-com-nome');
const nomeSalvo = localStorage.getItem('nome');

nomeImpresso.textContent = `${nomeSalvo}, um jovem mago, vivia em uma vila pacífica chamada Sombra Verde. Seus dias eram preenchidos com o estudo das artes arcanas e a cura de seus vizinhos com ervas mágicas.`;

const texto = `${nomeSalvo} testemunhou a crueldade de Lunaro com seus próprios olhos. O mago perverso lançou uma maldição sobre a família de José. José viu sua esposa e seus filhos mortos. A dor e a raiva queimaram em seu coração, fazendo ele partir em uma jornada perigosa e cheia de escolhas.`;
textoComNome.textContent = texto;

document.getElementById('botao').addEventListener('click', function() {
  var texto1 = document.getElementById('nome-impresso');
  var texto2 = document.getElementById('texto2');
  var texto3 = document.getElementById('texto3');
  
  texto1.style.display = 'none';
  texto2.style.display = 'block';
  setTimeout(function() {
    texto2.style.display = 'none';
    texto3.style.display = 'block';
  }, 5000);

  setTimeout(function() {
    window.location.href = './historia/capitulo1.html';
  }, 15000);
});
