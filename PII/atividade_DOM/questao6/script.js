//selecionar elementos
const elemento = document.getElementById('meuElemento');
const botao = document.getElementById('mudarCorBtn');

// Array de cores para alternar
const cores = ['lightblue', 'lightcoral', 'lightgreen', 'lightyellow', 'lightpink'];
let indiceAtual = 0;

// Adicionar evento ao  botão
botao.addEventListener('click', function(){
    indiceAtual = (indiceAtual + 1) % cores.length;
    elemento.style.backgroundColor = cores[indiceAtual];
});