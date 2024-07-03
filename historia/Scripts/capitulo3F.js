const resume = document.getElementById('resume');
const nomeSalvo = localStorage.getItem('nome');

resume.innerHTML = `${nomeSalvo}, com o coração pleno de determinação e reverência pela magia antiga que permeia a floresta, invoca os espíritos da floresta. Ele recita encantamentos aprendidos em seus estudos e oferece sinceras promessas de proteger a floresta e seus segredos. Os espíritos, sensibilizados pela sua devoção e propósito, emergem das sombras e se revelam a ele.
<p></p>
Esses espíritos, sendo guardiões antigos da floresta e possuidores de vasto conhecimento e poder, se unem a ${nomeSalvo}. Eles oferecem não apenas seu poder arcano, mas também sua sabedoria e apoio. Cada espírito contribui com uma fração de sua força, fortalecendo ${nomeSalvo} de maneiras que ele nunca imaginou ser possível. Com suas bênçãos, ${nomeSalvo} é capaz de canalizar a energia da floresta, tornando-se um receptáculo de poder natural e arcano.
<p></p>
Juntos, eles elaboram estratégias detalhadas para enfrentar Lunaro. Os espíritos compartilham segredos antigos e táticas que Lunaro jamais poderia antecipar. Fortalecido e orientado pelos espíritos, ${nomeSalvo} agora tem em suas mãos a chave para derrotar seu rival e restaurar o equilíbrio que Lunaro ameaçou destruir.`;

document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "final3.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "final2.html";
});