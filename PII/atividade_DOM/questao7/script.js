const textoOriginalInput = document.getElementById("textoOriginal");
const textoCopiaInput = document.getElementById("textoCopia");
const copiarBtn = document.getElementById("copiarBtn");

if(textoOriginalInput && textoCopiaInput && copiarBtn){
    copiarBtn.addEventListener("click", function() {
        const valorOriginal = textoOriginalInput.value;
        textoCopiaInput.value = valorOriginal.toUpperCase();
    });
}