// Função para exibir erro
function exibirErro(mensagem) {
    var errorMessage = document.getElementById('mensagemErro');
    var successMessage = document.getElementById('mensagemSucesso');
    var input = document.getElementById('hashtagInput');
    
    errorMessage.innerHTML = mensagem;
    errorMessage.classList.remove('oculto');
    successMessage.classList.add('oculto');
    
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
    
    input.classList.add('sucesso-input');
    input.classList.remove('erro-input');
    
    setTimeout(function() {
        successMessage.classList.add('oculto');
        input.classList.remove('sucesso-input');
    }, 2000);
}

// Função para atualizar contador e estado do botão remover
function atualizarInterface() {
    var select = document.getElementById('hashtagsList');
    var contador = document.getElementById('contador');
    var removerBtn = document.getElementById('removerBtn');
    
    // Atualizar contador
    contador.textContent = select.options.length;
    
    // Habilitar/desabilitar botão remover baseado na seleção
    var temSelecao = select.selectedOptions.length > 0;
    removerBtn.disabled = !temSelecao;
    
    // Atualizar texto do botão remover
    if (temSelecao) {
        var quantidade = select.selectedOptions.length;
        removerBtn.textContent = `Remover ${quantidade} hashtag${quantidade > 1 ? 's' : ''}`;
    } else {
        removerBtn.textContent = 'Remover Selecionadas';
    }
}

// Função para validar hashtag (mesma da questão anterior)
function validarHashtag(hashtag) {
    var select = document.getElementById('hashtagsList');
    
    hashtag = hashtag.trim();
    if (hashtag === '') {
        exibirErro('Hashtag não pode ser vazia!');
        return false;
    }
    
    if (hashtag.startsWith('#')) {
        hashtag = hashtag.substring(1).trim();
    }
    
    if (hashtag === '') {
        exibirErro('Hashtag não pode ser vazia!');
        return false;
    }
    
    if (hashtag.length < 2) {
        exibirErro('Hashtag deve ter pelo menos 2 caracteres!');
        return false;
    }
    
    if (select.options.length >= 5) {
        exibirErro('Máximo de 5 hashtags permitido!');
        return false;
    }
    
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

// Função para adicionar hashtag
function adicionarHashtag() {
    var input = document.getElementById('hashtagInput');
    var hashtag = input.value;
    var select = document.getElementById('hashtagsList');
    
    var hashtagValidada = validarHashtag(hashtag);
    if (!hashtagValidada) {
        return;
    }
    
    var option = document.createElement('option');
    option.value = hashtagValidada.toLowerCase();
    option.textContent = '#' + hashtagValidada.toLowerCase();
    
    select.appendChild(option);
    
    input.value = '';
    atualizarInterface();
    
    exibirSucesso('Hashtag adicionada com sucesso!');
    input.focus();
    
    console.log('Hashtag adicionada:', hashtagValidada);
}

// Função para remover hashtags selecionadas
function removerHashtagsSelecionadas() {
    var select = document.getElementById('hashtagsList');
    
    // Verificar se há hashtags selecionadas
    if (select.selectedOptions.length === 0) {
        exibirErro('Selecione pelo menos uma hashtag para remover!');
        return;
    }
    
    // Obter as opções selecionadas (usar array para evitar problemas com modificação da lista)
    var opcoesSelecionadas = Array.from(select.selectedOptions);
    var quantidade = opcoesSelecionadas.length;
    var nomesRemovidos = [];
    
    // Utilizar a propriedade selectedOptions e a função removeChild
    opcoesSelecionadas.forEach(function(option) {
        nomesRemovidos.push(option.textContent);
        select.removeChild(option);
    });
    
    // Atualizar interface
    atualizarInterface();
    
    // Exibir mensagem de sucesso
    var mensagem = `${quantidade} hashtag${quantidade > 1 ? 's' : ''} removida${quantidade > 1 ? 's' : ''} com sucesso!`;
    exibirSucesso(mensagem);
    
    console.log('Hashtags removidas:', nomesRemovidos);
}

// Função para limpar todas as hashtags
function limparTodasHashtags() {
    var select = document.getElementById('hashtagsList');
    
    if (select.options.length === 0) {
        exibirErro('Não há hashtags para limpar!');
        return;
    }
    
    var quantidade = select.options.length;
    
    // Remover todas as opções
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    
    atualizarInterface();
    
    exibirSucesso(`Todas as ${quantidade} hashtags foram removidas!`);
    
    console.log('Todas as hashtags foram removidas');
}

// Função para adicionar hashtag sugerida
function adicionarHashtagSugerida(hashtag) {
    var input = document.getElementById('hashtagInput');
    input.value = hashtag;
    adicionarHashtag();
}

// Aguardar o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    var select = document.getElementById('hashtagsList');
    var adicionarBtn = document.getElementById('adicionarBtn');
    var removerBtn = document.getElementById('removerBtn');
    var limparBtn = document.getElementById('limparBtn');
    var input = document.getElementById('hashtagInput');
    
    // Eventos dos botões
    adicionarBtn.addEventListener('click', adicionarHashtag);
    removerBtn.addEventListener('click', removerHashtagsSelecionadas);
    limparBtn.addEventListener('click', limparTodasHashtags);
    
    // Evento Enter no input
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarHashtag();
        }
    });
    
    // Evento de mudança de seleção no select
    select.addEventListener('change', atualizarInterface);
    select.addEventListener('click', atualizarInterface);
    
    // Eventos dos botões de sugestão
    var botoesSugestao = document.querySelectorAll('.sugestao-btn');
    botoesSugestao.forEach(function(botao) {
        botao.addEventListener('click', function() {
            var hashtag = this.getAttribute('data-hashtag');
            adicionarHashtagSugerida(hashtag);
        });
    });
    
    // Evento para ocultar mensagens quando o usuário digitar
    input.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            document.getElementById('mensagemErro').classList.add('oculto');
            document.getElementById('mensagemSucesso').classList.add('oculto');
            this.classList.remove('erro-input', 'sucesso-input');
        }
    });
    
    // Inicializar interface
    atualizarInterface();
    
    console.log('Sistema de gerenciamento de hashtags carregado!');
});
