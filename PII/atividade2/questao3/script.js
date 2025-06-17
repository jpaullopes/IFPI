// Função para exibir erro (reutilizada)
function exibirErro(idElemento, mensagem) {
    var errorMessage = document.getElementById(idElemento);
    errorMessage.innerHTML = mensagem;
    errorMessage.classList.remove('oculto');
    
    setTimeout(function() {
        errorMessage.classList.add('oculto');
    }, 3000);
}

// Função para calcular a taxa de engajamento
function calcularTaxaEngajamento() {
    // Obter valores dos campos
    var numInteracoes = document.getElementById('numInteracoes').value;
    var numVisualizacoes = document.getElementById('numVisualizacoes').value;
    
    // Validar se os campos estão preenchidos
    if (numInteracoes === '' || numVisualizacoes === '') {
        exibirErro('mensagemErro', 'Por favor, preencha todos os campos!');
        return;
    }
    
    // Converter para números
    numInteracoes = parseFloat(numInteracoes);
    numVisualizacoes = parseFloat(numVisualizacoes);
    
    // Validar se são números válidos usando isNaN()
    if (isNaN(numInteracoes) || isNaN(numVisualizacoes)) {
        exibirErro('mensagemErro', 'Por favor, insira apenas valores numéricos válidos!');
        return;
    }
    
    // Validar se os números são positivos
    if (numInteracoes < 0 || numVisualizacoes <= 0) {
        exibirErro('mensagemErro', 'Os valores devem ser positivos e as visualizações devem ser maiores que zero!');
        return;
    }
    
    // Calcular a taxa de engajamento
    var taxaEngajamento = (numInteracoes / numVisualizacoes) * 100;
    
    // Exibir o resultado
    exibirResultado(taxaEngajamento);
}

// Função para exibir o resultado
function exibirResultado(taxa) {
    var resultadoDiv = document.getElementById('resultado');
    var taxaValor = document.getElementById('taxaValor');
    var interpretacao = document.getElementById('interpretacao');
    
    // Formatar a taxa para 2 casas decimais
    taxaValor.textContent = taxa.toFixed(2) + '%';
    
    // Interpretar o resultado
    var textoInterpretacao = '';
    var classeInterpretacao = '';
    
    if (taxa >= 10) {
        textoInterpretacao = '🎉 Excelente! Taxa de engajamento muito alta!';
        classeInterpretacao = 'excelente';
    } else if (taxa >= 5) {
        textoInterpretacao = '👍 Bom! Taxa de engajamento satisfatória.';
        classeInterpretacao = 'bom';
    } else if (taxa >= 2) {
        textoInterpretacao = '⚠️ Regular. Pode ser melhorada.';
        classeInterpretacao = 'regular';
    } else {
        textoInterpretacao = '📉 Baixa. Precisa de melhorias no conteúdo.';
        classeInterpretacao = 'baixo';
    }
    
    interpretacao.textContent = textoInterpretacao;
    interpretacao.className = 'interpretacao ' + classeInterpretacao;
    
    // Mostrar o resultado
    resultadoDiv.classList.remove('oculto');
}

// Aguardar o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento de clique ao botão
    var calcularBtn = document.getElementById('calcularBtn');
    calcularBtn.addEventListener('click', calcularTaxaEngajamento);
    
    // Permitir pressionar Enter nos campos de entrada
    var campos = ['numInteracoes', 'numVisualizacoes'];
    campos.forEach(function(campoId) {
        document.getElementById(campoId).addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                calcularTaxaEngajamento();
            }
        });
    });
    
    console.log('Calculadora de Taxa de Engajamento carregada!');
});
