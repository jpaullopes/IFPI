// Função para exibir erro
function exibirErro(mensagem) {
    var errorMessage = document.getElementById('mensagemErro');
    var successMessage = document.getElementById('mensagemSucesso');
    
    errorMessage.innerHTML = mensagem;
    errorMessage.classList.remove('oculto');
    successMessage.classList.add('oculto');
    
    setTimeout(function() {
        errorMessage.classList.add('oculto');
    }, 3000);
}

// Função para exibir sucesso
function exibirSucesso(mensagem) {
    var successMessage = document.getElementById('mensagemSucesso');
    var errorMessage = document.getElementById('mensagemErro');
    
    successMessage.innerHTML = mensagem;
    successMessage.classList.remove('oculto');
    errorMessage.classList.add('oculto');
    
    setTimeout(function() {
        successMessage.classList.add('oculto');
    }, 2000);
}

// Função para atualizar estado dos botões
function atualizarBotoes() {
    var ativosDisponiveis = document.getElementById('ativosDisponiveis');
    var carteiraInvestimentos = document.getElementById('carteiraInvestimentos');
    var btnDireita = document.getElementById('moverParaDireitaBtn');
    var btnEsquerda = document.getElementById('moverParaEsquerdaBtn');
    
    // Habilitar botão direita se há ativos selecionados em ativosDisponiveis
    btnDireita.disabled = ativosDisponiveis.selectedOptions.length === 0;
    
    // Habilitar botão esquerda se há ativos selecionados em carteiraInvestimentos
    btnEsquerda.disabled = carteiraInvestimentos.selectedOptions.length === 0;
}

// Função para mover ativos para a direita (para carteira de investimentos)
function moverParaDireita() {
    var ativosDisponiveis = document.getElementById('ativosDisponiveis');
    var carteiraInvestimentos = document.getElementById('carteiraInvestimentos');
    
    // Verificar se há itens selecionados
    if (ativosDisponiveis.selectedOptions.length === 0) {
        exibirErro('Selecione pelo menos um ativo para mover!');
        return;
    }
    
    // Obter os ativos selecionados
    var ativosSelecionados = Array.from(ativosDisponiveis.selectedOptions);
    var quantidade = ativosSelecionados.length;
    var nomesMovidos = [];
    
    // Mover cada ativo selecionado
    ativosSelecionados.forEach(function(option) {
        nomesMovidos.push(option.textContent);
        // Remover do select origem
        ativosDisponiveis.removeChild(option);
        // Adicionar ao select destino
        carteiraInvestimentos.appendChild(option);
    });
    
    // Atualizar botões
    atualizarBotoes();
    
    // Exibir mensagem de sucesso
    var mensagem = `${quantidade} ativo${quantidade > 1 ? 's' : ''} movido${quantidade > 1 ? 's' : ''} para Carteira de Investimentos!`;
    exibirSucesso(mensagem);
    
    console.log('Ativos movidos para direita:', nomesMovidos);
}

// Função para mover ativos para a esquerda (de volta para disponíveis)
function moverParaEsquerda() {
    var ativosDisponiveis = document.getElementById('ativosDisponiveis');
    var carteiraInvestimentos = document.getElementById('carteiraInvestimentos');
    
    // Verificar se há itens selecionados
    if (carteiraInvestimentos.selectedOptions.length === 0) {
        exibirErro('Selecione pelo menos um ativo para mover!');
        return;
    }
    
    // Obter os ativos selecionados
    var ativosSelecionados = Array.from(carteiraInvestimentos.selectedOptions);
    var quantidade = ativosSelecionados.length;
    var nomesMovidos = [];
    
    // Mover cada ativo selecionado
    ativosSelecionados.forEach(function(option) {
        nomesMovidos.push(option.textContent);
        // Remover do select origem
        carteiraInvestimentos.removeChild(option);
        // Adicionar ao select destino
        ativosDisponiveis.appendChild(option);
    });
    
    // Reordenar os ativos disponíveis por ordem alfabética
    reordenarAtivos(ativosDisponiveis);
    
    // Atualizar botões
    atualizarBotoes();
    
    // Exibir mensagem de sucesso
    var mensagem = `${quantidade} ativo${quantidade > 1 ? 's' : ''} retornado${quantidade > 1 ? 's' : ''} para Ativos Disponíveis!`;
    exibirSucesso(mensagem);
    
    console.log('Ativos movidos para esquerda:', nomesMovidos);
}

// Função para reordenar ativos alfabeticamente
function reordenarAtivos(select) {
    var options = Array.from(select.options);
    
    // Ordenar por texto
    options.sort(function(a, b) {
        return a.textContent.localeCompare(b.textContent);
    });
    
    // Limpar select
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    
    // Adicionar opções ordenadas
    options.forEach(function(option) {
        select.appendChild(option);
    });
}

// Aguardar o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    var ativosDisponiveis = document.getElementById('ativosDisponiveis');
    var carteiraInvestimentos = document.getElementById('carteiraInvestimentos');
    var btnDireita = document.getElementById('moverParaDireitaBtn');
    var btnEsquerda = document.getElementById('moverParaEsquerdaBtn');
    
    // Adicionar eventos aos botões
    btnDireita.addEventListener('click', moverParaDireita);
    btnEsquerda.addEventListener('click', moverParaEsquerda);
    
    // Adicionar eventos de mudança de seleção
    ativosDisponiveis.addEventListener('change', atualizarBotoes);
    ativosDisponiveis.addEventListener('click', atualizarBotoes);
    carteiraInvestimentos.addEventListener('change', atualizarBotoes);
    carteiraInvestimentos.addEventListener('click', atualizarBotoes);
    
    // Adicionar eventos de teclado para acessibilidade
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'ArrowRight') {
            event.preventDefault();
            moverParaDireita();
        } else if (event.ctrlKey && event.key === 'ArrowLeft') {
            event.preventDefault();
            moverParaEsquerda();
        }
    });
    
    // Inicializar estado dos botões
    atualizarBotoes();
    
    console.log('Sistema de movimentação de ativos financeiros carregado!');
    console.log('Atalhos: Ctrl+→ (mover para direita), Ctrl+← (mover para esquerda)');
});
