const opcaoTextoInput = document.getElementById("opcaoTexto");
const btnAddOpcao = document.getElementById("btnAddOpcao");
const meuSelect = document.getElementById("meuSelect");

if(opcaoTextoInput && btnAddOpcao && meuSelect){
    btnAddOpcao.addEventListener("click", function(){
        const textoDaOpcao = opcaoTextoInput.value.trim();

        if (textoDaOpcao === "") {
            alert("Por favor, digite algo para adicionar ao select.");
            return;
        }

        const novaOpcao = document.createElement("option");
        novaOpcao.textContent = textoDaOpcao;
        novaOpcao.value = textoDaOpcao.toLowerCase().replace(/\s+/g, '-');

        meuSelect.appendChild(novaOpcao);
        opcaoTextoInput.value = "";
        opcaoTextoInput.focus();
    });
}