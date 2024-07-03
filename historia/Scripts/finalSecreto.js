const resume = document.getElementById('final');
const nomeSalvo = localStorage.getItem('nome');

final.innerHTML = `
 ${nomeSalvo}, mergulhando cada vez mais fundo nos segredos ocultos da magia sombria, abraça completamente o poder proibido revelado pelo tomo arcano. Cada feitiço dominado o transforma em uma figura de imenso poder e temor, enquanto ele mergulha nas profundezas da escuridão que agora o envolve.
    <p></p>
    Com o tempo, ${nomeSalvo} se alia a Lunaro, seu antigo rival, mas agora como um agente da escuridão que ambos buscavam dominar. Sob a tutela de Lunaro, ele aprimora suas habilidades sombrias, aprendendo novos rituais e segredos ancestrais que prometem poder absoluto sobre a magia.
    <p></p>  
    No entanto, conforme o poder de ${nomeSalvo} cresce, também cresce sua ambição e paranoia. Ele começa a ver qualquer um que possua qualquer resquício de magia como uma ameaça, uma lembrança de sua própria fraqueza antes de abraçar as trevas. Determinado a purificar o mundo da magia que considera corrupta e perigosa, ${nomeSalvo} trama um plano para usar seu poder recém-descoberto.
    <p></p>        
    Em um ato de desespero e loucura, ${nomeSalvo} canaliza toda a sua energia sombria para lançar um feitiço devastador, uma tempestade de energia negra que se espalha pelo mundo. A magia é rasgada dos seres mágicos, banindo-a do mundo para sempre. No turbilhão de energia, todos os seres mágicos são consumidos, incluindo ${nomeSalvo}, que sacrifica sua própria vida no processo.
    <p></p>        
    O mundo, agora livre da influência mágica, é deixado em silêncio e desolação. A decisão de ${nomeSalvo}, uma mistura de vingança e paranoia, deixou um legado sombrio que ecoará através das eras. A história de ${nomeSalvo} serve como um lembrete sombrio dos perigos de se deixar consumir pelo poder das trevas, uma advertência contra a busca desenfreada por poder que pode levar à destruição não apenas de inimigos, mas também de si mesmo.
`;


document.getElementById("inicio-game").addEventListener("click", function() {
    window.location.href = "../index.html";
});