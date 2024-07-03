const resume = document.getElementById('resume');
const nomeSalvo = localStorage.getItem('nome');

resume.innerHTML = `${nomeSalvo}, com o coração pleno de determinação e respeito pela vida selvagem mágica da floresta, busca se conectar com os animais mágicos que habitam Sombra Verde. Ele sabe que esses seres possuem uma força e habilidades únicas que poderiam ser decisivas na luta contra Lunaro. Usando feitiços de comunicação aprendidos durante suas viagens, ele convoca os animais mágicos e faz um apelo sincero por sua ajuda.
<p></p>
Impressionados pela coragem e sinceridade de ${nomeSalvo}, os animais mágicos da floresta decidem unir forças com ele. Criaturas como unicórnios, grifos, e lobos espectrais se aproximam, cada uma trazendo suas habilidades únicas e poderosas. Eles oferecem sua força bruta, agilidade e conhecimentos antigos que foram passados de geração em geração.
<p></p>
Com seus novos aliados, ${nomeSalvo} começa a treinar e a preparar estratégias de combate. Os unicórnios, com sua magia curativa e velocidade, ajudam a restaurar suas energias e a acelerar seus movimentos. Os grifos, com sua habilidade de voo e visão aguçada, fornecem reconhecimento aéreo e ataques surpresa. Os lobos espectrais, com sua furtividade e lealdade, se tornam seus olhos e ouvidos na floresta, sempre alertas para qualquer sinal de Lunaro.
<p></p>
Fortalecido pela aliança com os animais mágicos, ${nomeSalvo} sente-se mais preparado do que nunca para enfrentar Lunaro. Cada passo que dá é acompanhado por suas novas companhias, cujas presenças lhe infundem uma coragem renovada. Eles ensaiam movimentos e táticas, utilizando o terreno da floresta a seu favor e combinando suas forças em um verdadeiro espetáculo de união entre homem e natureza.`;

document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "final3.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "final2.html";
});
