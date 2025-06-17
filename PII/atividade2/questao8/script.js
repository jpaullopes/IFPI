// Função para exibir erro
function exibirErro(mensagem) {
    var errorMessage = document.getElementById('mensagemErro');
    var successMessage = document.getElementById('mensagemSucesso');
    var input = document.getElementById('hashtagInput');
    
    errorMessage.innerHTML = mensagem;
    errorMessage.classList.remove('oculto');
    successMessage.classList.add('oculto');
    
    // Adicionar classe de erro ao input
    input.classList.add('erro-input');
    input.classList.remove('sucesso-input');
    
    setTimeout(function() {
        errorMessage.classList.add('oculto');
        input.classList.remove('erro-input');
    }, 3000);
}

// Função para exibir sucesso
function exibirSucesso(mensagem) {
    var successMessage = document.getElementById('mensagemSucesso');
    var errorMessage = document.getElementById('mensagemErro');
    var input = document.getElementById('hashtagInput');
    
    successMessage.innerHTML = mensagem;
    successMessage.classList.remove('oculto');
    errorMessage.classList.add('oculto');
    
    // Adicionar classe de sucesso ao input
    input.classList.add('sucesso-input');
    input.classList.remove('erro-input');
    
    setTimeout(function() {
        successMessage.classList.add('oculto');
        input.classList.remove('sucesso-input');
    }, 2000);
}

// Função para atualizar contador
function atualizarContador() {
    var select = document.getElementById('hashtagsList');
    var contador = document.getElementById('contador');
    contador.textContent = select.options.length;
}

// Função para validar hashtag
function validarHashtag(hashtag) {
    var select = document.getElementById('hashtagsList');
    
    // a) Retire os espaços usando trim() e teste se é nula/vazia
    hashtag = hashtag.trim();
    if (hashtag === '') {
        exibirErro('Hashtag não pode ser vazia!');
        return false;
    }
    
    // Remover # se o usuário digitou
    if (hashtag.startsWith('#')) {
        hashtag = hashtag.substring(1).trim();
    }
    
    // Verificar novamente se não ficou vazia após remover #
    if (hashtag === '') {
        exibirErro('Hashtag não pode ser vazia!');
        return false;
    }
    
    // c) Verificar se tem pelo menos 2 caracteres
    if (hashtag.length < 2) {
        exibirErro('Hashtag deve ter pelo menos 2 caracteres!');
        return false;
    }
    
    // d) Verificar se já existem 5 hashtags (máximo)
    if (select.options.length >= 5) {
        exibirErro('Máximo de 5 hashtags permitido!');
        return false;
    }
    
    // a) Verificar hashtags repetidas
    var hashtagJaExiste = false;
    for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].value.toLowerCase() === hashtag.toLowerCase()) {
            hashtagJaExiste = true;
            break;
        }
    }
    
    if (hashtagJaExiste) {
        exibirErro('Esta hashtag já foi adicionada!');
        return false;
    }
    
    return hashtag;
}

// Função para adicionar hashtag à lista
function adicionarHashtag() {
    var input = document.getElementById('hashtagInput');
    var hashtag = input.value;
    var select = document.getElementById('hashtagsList');
    
    // Validar a hashtag
    var hashtagValidada = validarHashtag(hashtag);
    if (!hashtagValidada) {
        return; // Parar se a validação falhou
    }
    
    // Utilizar document.createElement() para criar tag option
    var option = document.createElement('option');
    option.value = hashtagValidada.toLowerCase();
    option.textContent = '#' + hashtagValidada.toLowerCase();
    
    // Utilizar appendChild para adicionar a opção ao select
    select.appendChild(option);
    
    // Limpar o campo de entrada
    input.value = '';
    
    // Atualizar contador
    atualizarContador();
    
    // Exibir mensagem de sucesso
    exibirSucesso('Hashtag adicionada com sucesso!');
    
    // Focar no campo para facilitar a adição de mais hashtags
    input.focus();
    
    console.log('Hashtag adicionada:', hashtagValidada);
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
    
    // Adicionar evento para ocultar mensagens quando o usuário começar a digitar
    input.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            document.getElementById('mensagemErro').classList.add('oculto');
            document.getElementById('mensagemSucesso').classList.add('oculto');
            this.classList.remove('erro-input', 'sucesso-input');
        }
    });
    
    // Inicializar contador
    atualizarContador();
    
    console.log('Sistema de validação de hashtags carregado!');
});
