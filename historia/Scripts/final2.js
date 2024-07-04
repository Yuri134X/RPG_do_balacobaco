const resume = document.getElementById('final');
const nomeSalvo = localStorage.getItem('nome');

const texto1 = document.getElementById('texto1');
const texto2 = document.getElementById('texto2');
const texto3 = document.getElementById('texto3');
const texto4 = document.getElementById('texto4');
const botao = document.getElementById('botao');
const botao2 = document.getElementById('botao2');
const botao4 = document.getElementById('botao4');
const botao3= document.getElementById('inicio-game');
const final = document.getElementById('imageFim');

texto1.textContent = `${nomeSalvo}, decidido a aproveitar o poder sombrio revelado pelo tomo arcano, mergulha profundamente nos segredos obscuros da magia. Cada encantamento decifrado amplia sua conexão com as trevas, moldando-o em uma figura de poder incomparável. Entretanto, ele mantém um cuidadoso equilíbrio entre a escuridão e sua própria humanidade, consciente dos perigos que a magia sombria representa.`

texto2.textContent = `Enquanto sua jornada avança, ${nomeSalvo} se depara com Lunaro em um momento crucial. Em vez de um confronto direto e destrutivo, ele decide utilizar sua magia sombria para um propósito diferente. Com determinação, ${nomeSalvo} emprega suas habilidades para drenar a energia vital de Lunaro, banindo-o da conexão com a magia para sempre.`

texto3.textContent = `O feito não apenas neutraliza a ameaça imediata de Lunaro, mas também preserva a integridade da magia no mundo. ${nomeSalvo}, embora tenha usado a escuridão para alcançar seus objetivos, escolheu um caminho que não sacrificou sua humanidade. Ele contempla o preço pago por dominar tais poderes e se compromete a proteger a balança entre luz e sombra no futuro.`

texto4.textContent = `Com Lunaro derrotado e a magia restaurada ao seu equilíbrio natural, ${nomeSalvo} se afasta da floresta antiga, ciente de que sua jornada está longe de terminar. Ele agora carrega não apenas o conhecimento proibido das trevas, mas também a responsabilidade de usar esse conhecimento com sabedoria. Assim, sua história continua, um testemunho das escolhas complexas que moldam não apenas indivíduos, mas também o mundo ao seu redor.`

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

  botao2.addEventListener('click', function()  {
    texto3.style.display = 'none';
    texto4.style.display = 'block';
    botao5.style.display = 'none';
    botao4.style.display = 'block';
   

});
  
  botao4.addEventListener('click', function()  {
    botao4.style.display = 'none';
    texto4.style.display = 'none';
    final.style.display = 'block';
    botao3.style.display = 'block';
  
  })
  
  botao3.addEventListener('click', function() {
    window.location.href = "../index.html";
  
  })

