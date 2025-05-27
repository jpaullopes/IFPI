var titulo = document.getElementById("tituloPrincipal");
if (titulo){
    titulo.textContent = "Título Alterado pelo ID";
    console.log("Elemento h1 encontrado:", titulo);

}

var paragrafo = document.getElementById("paragrafoUnico");
if (paragrafo){
    paragrafo.style.color = "blue";
    console.log("Parágrafo encontrado:", paragrafo);
}