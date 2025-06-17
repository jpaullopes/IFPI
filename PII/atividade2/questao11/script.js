// Função para exibir erro
function exibirErro(mensagem) {
    var errorMessage = document.getElementById('mensagemErro');
    var successMessage = document.getElementById('mensagemSucesso');
    
    errorMessage.innerHTML = mensagem;
    errorMessage.classList.remove('oculto');
    successMessage.classList.add('oculto');
    
    setTimeout(function() {
        errorMessage.classList.add('oculto');
    }, 4000);
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
    }, 3000);
}

// Função para atualizar contadores e interface
function atualizarInterface() {
    var ativosDisponiveis = document.getElementById('ativosDisponiveis');
    var carteiraInvestimentos = document.getElementById('carteiraInvestimentos');
    var btnDireita = document.getElementById('moverParaDireitaBtn');
    var btnEsquerda = document.getElementById('moverParaEsquerdaBtn');
    
    // Atualizar contadores
    document.getElementById('countDisponiveis').textContent = ativosDisponiveis.options.length;
    document.getElementById('countCarteira').textContent = carteiraInvestimentos.options.length;
    
    // Contar selecionados
    var totalSelecionados = ativosDisponiveis.selectedOptions.length + carteiraInvestimentos.selectedOptions.length;
    document.getElementById('countSelecionados').textContent = totalSelecionados;
    
    // a) Validação: pelo menos um item deve estar selecionado antes de tentar movê-lo
    var temSelecaoDisponiveis = ativosDisponiveis.selectedOptions.length > 0;
    var temSelecaoCarteira = carteiraInvestimentos.selectedOptions.length > 0;
    
    // b) Habilitar/desabilitar botões de forma lógica
    btnDireita.disabled = !temSelecaoDisponiveis;
    btnEsquerda.disabled = !temSelecaoCarteira;
    
    // Atualizar informações de movimento
    var infoMovimento = document.getElementById('infoMovimento');
    if (temSelecaoDisponiveis) {
        var qtd = ativosDisponiveis.selectedOptions.length;
        infoMovimento.textContent = `${qtd} ativo${qtd > 1 ? 's' : ''} →`;
    } else if (temSelecaoCarteira) {
        var qtd = carteiraInvestimentos.selectedOptions.length;
        infoMovimento.textContent = `← ${qtd} ativo${qtd > 1 ? 's' : ''}`;
    } else {
        infoMovimento.textContent = 'Selecione ativos';
    }
    
    // Atualizar botões de seleção
    var btnSelTodosDisp = document.getElementById('selecionarTodosDisp');
    var btnLimparDisp = document.getElementById('limparSelecaoDisp');
    var btnSelTodosCart = document.getElementById('selecionarTodosCart');
    var btnLimparCart = document.getElementById('limparSelecaoCart');
    
    btnSelTodosDisp.disabled = ativosDisponiveis.options.length === 0;
    btnLimparDisp.disabled = ativosDisponiveis.selectedOptions.length === 0;
    btnSelTodosCart.disabled = carteiraInvestimentos.options.length === 0;
    btnLimparCart.disabled = carteiraInvestimentos.selectedOptions.length === 0;
}

// Função para validar movimentação (a)
function validarMovimentacao(origem, destino, direcao) {
    if (origem.selectedOptions.length === 0) {
        var mensagem = direcao === 'direita' ? 
            '❌ Selecione pelo menos um ativo dos Disponíveis para mover!' :
            '❌ Selecione pelo menos um ativo da Carteira para retornar!';
        exibirErro(mensagem);
        return false;
    }
    return true;
}

// Função para mover ativos para a direita
function moverParaDireita() {
    var ativosDisponiveis = document.getElementById('ativosDisponiveis');
    var carteiraInvestimentos = document.getElementById('carteiraInvestimentos');
    
    // Validar antes de mover
    if (!validarMovimentacao(ativosDisponiveis, carteiraInvestimentos, 'direita')) {
        return;
    }
    
    var ativosSelecionados = Array.from(ativosDisponiveis.selectedOptions);
    var quantidade = ativosSelecionados.length;
    var nomesMovidos = [];
    
    ativosSelecionados.forEach(function(option) {
        nomesMovidos.push(option.textContent);
        ativosDisponiveis.removeChild(option);
        carteiraInvestimentos.appendChild(option);
    });
    
    // Reordenar carteira
    reordenarAtivos(carteiraInvestimentos);
    
    atualizarInterface();
    
    var mensagem = `✅ ${quantidade} ativo${quantidade > 1 ? 's' : ''} movido${quantidade > 1 ? 's' : ''} para a Carteira de Investimentos!`;
    exibirSucesso(mensagem);
    
    console.log('Ativos movidos para carteira:', nomesMovidos);
}

// Função para mover ativos para a esquerda
function moverParaEsquerda() {
    var ativosDisponiveis = document.getElementById('ativosDisponiveis');
    var carteiraInvestimentos = document.getElementById('carteiraInvestimentos');
    
    // Validar antes de mover
    if (!validarMovimentacao(carteiraInvestimentos, ativosDisponiveis, 'esquerda')) {
        return;
    }
    
    var ativosSelecionados = Array.from(carteiraInvestimentos.selectedOptions);
    var quantidade = ativosSelecionados.length;
    var nomesMovidos = [];
    
    ativosSelecionados.forEach(function(option) {
        nomesMovidos.push(option.textContent);
        carteiraInvestimentos.removeChild(option);
        ativosDisponiveis.appendChild(option);
    });
    
    // Reordenar ativos disponíveis
    reordenarAtivos(ativosDisponiveis);
    
    atualizarInterface();
    
    var mensagem = `✅ ${quantidade} ativo${quantidade > 1 ? 's' : ''} retornado${quantidade > 1 ? 's' : ''} para Ativos Disponíveis!`;
    exibirSucesso(mensagem);
    
    console.log('Ativos retornados para disponíveis:', nomesMovidos);
}

// Função para reordenar ativos alfabeticamente
function reordenarAtivos(select) {
    var options = Array.from(select.options);
    
    options.sort(function(a, b) {
        return a.textContent.localeCompare(b.textContent);
    });
    
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    
    options.forEach(function(option) {
        select.appendChild(option);
    });
}

// Função para selecionar todos os itens de um select
function selecionarTodos(selectId) {
    var select = document.getElementById(selectId);
    for (var i = 0; i < select.options.length; i++) {
        select.options[i].selected = true;
    }
    atualizarInterface();
}

// Função para limpar seleção de um select
function limparSelecao(selectId) {
    var select = document.getElementById(selectId);
    for (var i = 0; i < select.options.length; i++) {
        select.options[i].selected = false;
    }
    atualizarInterface();
}

// c) Criar um leiaute que coloque os botões entre os selects
// (Já implementado no HTML e CSS com grid layout)

// Aguardar o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    var ativosDisponiveis = document.getElementById('ativosDisponiveis');
    var carteiraInvestimentos = document.getElementById('carteiraInvestimentos');
    var btnDireita = document.getElementById('moverParaDireitaBtn');
    var btnEsquerda = document.getElementById('moverParaEsquerdaBtn');
    
    // Eventos dos botões principais
    btnDireita.addEventListener('click', moverParaDireita);
    btnEsquerda.addEventListener('click', moverParaEsquerda);
    
    // Eventos dos botões auxiliares
    document.getElementById('selecionarTodosDisp').addEventListener('click', function() {
        selecionarTodos('ativosDisponiveis');
    });
    
    document.getElementById('limparSelecaoDisp').addEventListener('click', function() {
        limparSelecao('ativosDisponiveis');
    });
    
    document.getElementById('selecionarTodosCart').addEventListener('click', function() {
        selecionarTodos('carteiraInvestimentos');
    });
    
    document.getElementById('limparSelecaoCart').addEventListener('click', function() {
        limparSelecao('carteiraInvestimentos');
    });
    
    // Eventos de mudança de seleção
    ativosDisponiveis.addEventListener('change', atualizarInterface);
    ativosDisponiveis.addEventListener('click', atualizarInterface);
    carteiraInvestimentos.addEventListener('change', atualizarInterface);
    carteiraInvestimentos.addEventListener('click', atualizarInterface);
    
    // Atalhos de teclado
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'ArrowRight') {
            event.preventDefault();
            moverParaDireita();
        } else if (event.ctrlKey && event.key === 'ArrowLeft') {
            event.preventDefault();
            moverParaEsquerda();
        } else if (event.ctrlKey && event.key === 'a') {
            event.preventDefault();
            // Selecionar todos do select focado
            if (document.activeElement === ativosDisponiveis) {
                selecionarTodos('ativosDisponiveis');
            } else if (document.activeElement === carteiraInvestimentos) {
                selecionarTodos('carteiraInvestimentos');
            }
        }
    });
    
    // Inicializar interface
    atualizarInterface();
    
    console.log('Sistema avançado de gestão de ativos financeiros carregado!');
    console.log('Melhorias implementadas:');
    console.log('- a) Validação antes de mover');
    console.log('- b) Botões habilitados logicamente');
    console.log('- c) Layout com botões entre selects');
    console.log('Atalhos: Ctrl+→, Ctrl+←, Ctrl+A (selecionar todos)');
});
