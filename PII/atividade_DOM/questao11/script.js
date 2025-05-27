const itemTextoInput = document.getElementById("itemTexto");
const btnAddItem = document.getElementById("btnAddItem");
const minhaLista = document.getElementById("minhaLista");

if (itemTextoInput && btnAddItem && minhaLista) {
    btnAddItem.addEventListener("click", function() {
        const textoDoItem = itemTextoInput.value.trim(); 

        if (textoDoItem === "") {
            alert("Por favor, digite algo para adicionar à lista.");
            return;
        }
        const novoItemLi = document.createElement("li");
        novoItemLi.textContent = textoDoItem;
        minhaLista.appendChild(novoItemLi);

        itemTextoInput.value = "";
        itemTextoInput.focus(); 
    });
}