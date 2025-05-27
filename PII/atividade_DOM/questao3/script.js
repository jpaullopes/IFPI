function contarParagrafos() {

    var divPrincipal = document.getElementById("containerPrincipal");
    var divResultado = document.getElementById("resultado");

    if(divPrincipal && divResultado){

        var paragrafosDentroDaDiv = divPrincipal.getElementsByTagName("p");
        var numeroDeParagrafos = paragrafosDentroDaDiv.length;
        divResultado.textContent = "Numero de parágrafos dentro da div 'containerPrincipal': "+ numeroDeParagrafos;
    }else{
        console.error("Uma das divs não foi encontrada");
    }
}