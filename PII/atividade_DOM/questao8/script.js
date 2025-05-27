const btnAltoContraste = document.getElementById("btnAltoContraste");
const btnResetarCores = document.getElementById("btnResetarCores");
const body = document.body; 
const corFundoOriginal = window.getComputedStyle(body).backgroundColor;
const corTextoOriginal = window.getComputedStyle(body).color;

let contrasteAtivo = false;

if (btnAltoContraste && btnResetarCores && body){
    btnAltoContraste.addEventListener("click", function() {
        contrasteAtivo = !contrasteAtivo; 
        if (contrasteAtivo) {
            body.classList.add("alto-contraste");
        } else {
            body.classList.remove("alto-contraste");
        }
    });

    btnResetarCores.addEventListener("click", function() {
        contrasteAtivo = false;
        body.classList.remove("alto-contraste");
        body.style.backgroundColor = "";
        body.style.color = "";
    });
}