const resume = document.getElementById('final');
const nomeSalvo = localStorage.getItem('nome');

final.innerHTML = `
 ${nomeSalvo}, decidido a aproveitar o poder sombrio revelado pelo tomo arcano, mergulha profundamente nos segredos obscuros da magia. Cada encantamento decifrado amplia sua conexão com as trevas, moldando-o em uma figura de poder incomparável. Entretanto, ele mantém um cuidadoso equilíbrio entre a escuridão e sua própria humanidade, consciente dos perigos que a magia sombria representa.
<p></p>
Enquanto sua jornada avança, ${nomeSalvo} se depara com Lunaro em um momento crucial. Em vez de um confronto direto e destrutivo, ele decide utilizar sua magia sombria para um propósito diferente. Com determinação, ${nomeSalvo} emprega suas habilidades para drenar a energia vital de Lunaro, banindo-o da conexão com a magia para sempre.
<p></p>
O feito não apenas neutraliza a ameaça imediata de Lunaro, mas também preserva a integridade da magia no mundo. ${nomeSalvo}, embora tenha usado a escuridão para alcançar seus objetivos, escolheu um caminho que não sacrificou sua humanidade. Ele contempla o preço pago por dominar tais poderes e se compromete a proteger a balança entre luz e sombra no futuro.
<p></p>
Com Lunaro derrotado e a magia restaurada ao seu equilíbrio natural, ${nomeSalvo} se afasta da floresta antiga, ciente de que sua jornada está longe de terminar. Ele agora carrega não apenas o conhecimento proibido das trevas, mas também a responsabilidade de usar esse conhecimento com sabedoria. Assim, sua história continua, um testemunho das escolhas complexas que moldam não apenas indivíduos, mas também o mundo ao seu redor.
`;


document.getElementById("inicio-game").addEventListener("click", function() {
    window.location.href = "../index.html";
});

