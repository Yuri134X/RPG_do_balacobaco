const resume = document.getElementById('resume');
const nomeSalvo = localStorage.getItem('nome');

resume.innerHTML = `${nomeSalvo}, decidido a aproveitar o poder sombrio revelado pelo tomo arcano, resolve explorar todo o potencial da magia negra, consciente dos riscos para sua alma. Mergulhando de cabeça nos segredos obscuros, ele decifra encantamentos e rituais que desafiam a própria natureza do universo. O poder flui através dele como uma correnteza implacável, transformando-o em uma força a ser temida e respeitada.
<p></p>
Cada feitiço que lança e cada pacto que firma aprofundam sua conexão com as trevas, mas ${nomeSalvo} não se deixa consumir completamente. Em vez disso, busca um equilíbrio delicado, combinando a magia sombria com suas próprias habilidades inatas. Ele mantém um fio de sua humanidade, usando a escuridão como uma ferramenta, não como um mestre.`;

document.getElementById("path-1").addEventListener("click", function() {
    window.location.href = "final3.html";
});
document.getElementById("path-2").addEventListener("click", function() {
    window.location.href = "final2.html";
});