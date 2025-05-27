var todosOsParagrafos = document.getElementsByTagName("p");
console.log("Número de parágrafos encontrados:", todosOsParagrafos.length); 

if (todosOsParagrafos.length > 0){
    todosOsParagrafos[0].textContent = "Primeiro parágrafo alterado";
}
for (let i = 0; i < todosOsParagrafos.length; i++){
    todosOsParagrafos[i].style.border = "1px solid green";
}