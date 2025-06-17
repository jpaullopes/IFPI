// Função para exibir erro (reutilizada da questão anterior)
function exibirErro(idElemento, mensagem) {
    var errorMessage = document.getElementById(idElemento);
    errorMessage.innerHTML = mensagem;
    errorMessage.classList.remove('oculto');
    
    setTimeout(function() {
        errorMessage.classList.add('oculto');
    }, 3000);
}

// Função principal para exibir conteúdo
function exibirConteudo() {
    // Obter o valor do campo de texto
    var conteudo = document.getElementById('caixaDeTexto').value;
    
    // Remover espaços usando trim() e verificar se está vazio
    if (conteudo.trim() === '') {
        // Exibir mensagem de erro se o campo estiver vazio
        exibirErro('mensagemErro', 'Por favor, digite algum texto antes de exibir!');
        return;
    }
    
    // Exibir o conteúdo na div
    document.getElementById('conteudo').innerHTML = conteudo;
}

// Aguardar o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento de clique ao botão
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirConteudo);
    
    // Permitir pressionar Enter no campo de texto
    var caixaTexto = document.getElementById('caixaDeTexto');
    caixaTexto.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            exibirConteudo();
        }
    });
    
    console.log('Sistema de validação de campo carregado!');
});
