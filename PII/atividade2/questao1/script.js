// Função reutilizável para exibir mensagens de erro
function exibirErro(idElemento, mensagem) {
    // Obter o elemento onde a mensagem será exibida
    var errorMessage = document.getElementById(idElemento);
    
    // Definir a mensagem de erro
    errorMessage.innerHTML = mensagem;
    
    // Remover a classe 'oculto' para mostrar a mensagem
    errorMessage.classList.remove('oculto');
    
    // Usar setTimeout para ocultar a mensagem após 3 segundos (3000ms)
    setTimeout(function() {
        errorMessage.classList.add('oculto');
    }, 3000);
}

// Função específica usando o botão do exemplo original
function mostrarErro(mensagem) {
    document.getElementById('botaoErro').addEventListener('click', function() {
        var errorMessage = document.getElementById('mensagemErro');
        errorMessage.innerHTML = mensagem;
        errorMessage.classList.remove('oculto');
        
        setTimeout(function() {
            errorMessage.classList.add('oculto');
        }, 3000);
    });
}

// Aguardar o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sistema de mensagens de erro carregado!');
});
