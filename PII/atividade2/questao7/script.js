// Função para exibir erro (reutilizada)
function exibirErro(idElemento, mensagem) {
    var errorMessage = document.getElementById(idElemento);
    errorMessage.innerHTML = mensagem;
    errorMessage.classList.remove('oculto');
    
    setTimeout(function() {
        errorMessage.classList.add('oculto');
    }, 3000);
}

// Função para adicionar hashtag à lista
function adicionarHashtag() {
    var input = document.getElementById('hashtagInput');
    var hashtag = input.value.trim();
    var select = document.getElementById('hashtagsList');
    
    // Validar se o campo não está vazio
    if (hashtag === '') {
        exibirErro('mensagemErro', 'Por favor, digite uma hashtag!');
        return;
    }
    
    // Remover # se o usuário digitou
    if (hashtag.startsWith('#')) {
        hashtag = hashtag.substring(1);
    }
    
    // Validar se ainda não está vazia após remover #
    if (hashtag === '') {
        exibirErro('mensagemErro', 'Por favor, digite uma hashtag válida!');
        return;
    }
    
    // Verificar se já existem 5 hashtags (limite máximo)
    if (select.options.length >= 5) {
        exibirErro('mensagemErro', 'Máximo de 5 hashtags permitido!');
        return;
    }
    
    // Verificar se a hashtag já existe na lista
    var hashtagJaExiste = false;
    for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].value.toLowerCase() === hashtag.toLowerCase()) {
            hashtagJaExiste = true;
            break;
        }
    }
    
    if (hashtagJaExiste) {
        exibirErro('mensagemErro', 'Esta hashtag já foi adicionada!');
        return;
    }
    
    // Utilizar document.createElement() para criar tag option
    var option = document.createElement('option');
    option.value = hashtag.toLowerCase();
    option.textContent = '#' + hashtag.toLowerCase();
    
    // Utilizar appendChild para adicionar a opção ao select
    select.appendChild(option);
    
    // Limpar o campo de entrada
    input.value = '';
    
    // Focar no campo para facilitar a adição de mais hashtags
    input.focus();
    
    console.log('Hashtag adicionada:', hashtag);
}

// Função para adicionar hashtag sugerida
function adicionarHashtagSugerida(hashtag) {
    var input = document.getElementById('hashtagInput');
    input.value = hashtag;
    adicionarHashtag();
}

// Aguardar o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento de clique ao botão
    var adicionarBtn = document.getElementById('adicionarBtn');
    adicionarBtn.addEventListener('click', adicionarHashtag);
    
    // Permitir pressionar Enter no campo de entrada
    var input = document.getElementById('hashtagInput');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarHashtag();
        }
    });
    
    // Adicionar eventos aos botões de sugestão
    var botoesSugestao = document.querySelectorAll('.sugestao-btn');
    botoesSugestao.forEach(function(botao) {
        botao.addEventListener('click', function() {
            var hashtag = this.getAttribute('data-hashtag');
            adicionarHashtagSugerida(hashtag);
        });
    });
    
    // Adicionar evento para ocultar erro quando o usuário começar a digitar
    input.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            document.getElementById('mensagemErro').classList.add('oculto');
        }
    });
    
    console.log('Sistema de lista de hashtags carregado!');
});
