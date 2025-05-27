const btnAumentar = document.getElementById("btnAumentarFonte");
const btnDiminuir = document.getElementById("btnDiminuirFonte");
const btnResetar = document.getElementById("btnResetarFonte");
const body = document.body;

const tamanhoFonteInicial = 16; 
const passoAjuste = 2; 
let tamanhoAtual = tamanhoFonteInicial;

function aplicarTamanhoFonte(){
    body.style.fontSize = tamanhoAtual + "px";
}
if(btnAumentar && btnDiminuir && btnResetar && body) {
    btnAumentar.addEventListener("click", function() {
        tamanhoAtual += passoAjuste;
        aplicarTamanhoFonte();
    });
    btnDiminuir.addEventListener("click", function() {
        if (tamanhoAtual > passoAjuste * 2) { 
            tamanhoAtual -= passoAjuste;
            aplicarTamanhoFonte();
        }
    });
    btnResetar.addEventListener("click", function() {
        tamanhoAtual = tamanhoFonteInicial;
        aplicarTamanhoFonte(); 
    });
}