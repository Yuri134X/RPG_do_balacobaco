document.getElementById('botao').addEventListener('click', function() {
  var texto1 = document.getElementById('texto1');
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
