const resume = document.getElementById('resume');
const nomeSalvo = localStorage.getItem('nome');

resume.innerHTML = `Com a orientação de Elazar, ${nomeSalvo}, explora novas formas de magia, buscando métodos inovadores para enfrentar Lunaro. Ele mergulha profundamente nos ensinamentos de seu mentor, experimentando com feitiços antigos e técnicas arcanas esquecidas há muito tempo. Cada descoberta traz consigo uma compreensão mais profunda do poder mágico e uma preparação mais robusta para o confronto iminente.
<p></p>
    Durante meses de intenso treinamento nas montanhas isoladas, ${nomeSalvo}, desenvolve habilidades que vão além do convencional, combinando o conhecimento adquirido com sua própria intuição e criatividade. Sob a orientação sábia de Elazar, ele aprende não apenas a dominar a magia, mas também a aplicá-la de maneiras que desafiam as expectativas e surpreendem até mesmo seu mentor.
    <p></p>
    À medida que o tempo passa, a determinação de ${nomeSalvo}, se fortalece. Ele visualiza estratégias complexas para enfrentar Lunaro, considerando não apenas o poder bruto, mas também a sutileza e a astúcia. Cada fase do treinamento o prepara não apenas para um confronto físico, mas também para um duelo de inteligência e habilidade mágica.`;

document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "final3.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "final2.html";
});