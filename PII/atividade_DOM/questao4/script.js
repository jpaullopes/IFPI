var botao = document.getElementById("botao");
var botaoLimpar = document.getElementById("botaoLimpar");

if (botao){
    botao.addEventListener("click", function() {
        var paragrafo = document.getElementById("paragrafo");
        if (paragrafo) {
            paragrafo.textContent = "O texto deste parágrafo foi alterado";
        }
    });
}
if(botaoLimpar){
    botaoLimpar.addEventListener("click", function() {
        var paragrafo = document.getElementById("paragrafo");
        if (paragrafo) {
            paragrafo.textContent = ""; 
        }
    });
}