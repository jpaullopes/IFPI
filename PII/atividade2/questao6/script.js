// Função para exibir erro (reutilizada)
function exibirErro(idElemento, mensagem) {
    var errorMessage = document.getElementById(idElemento);
    errorMessage.innerHTML = mensagem;
    errorMessage.classList.remove('oculto');
    
    setTimeout(function() {
        errorMessage.classList.add('oculto');
    }, 3000);
}

// Função para validar e exibir redes sociais selecionadas
function validarRedesSociais() {
    // Utilizar document.getElementsByName() para obter todos os checkboxes
    var checkboxes = document.getElementsByName('redesSociais');
    var redesSelecionadas = [];
    
    // Percorrer o array de checkboxes testando a propriedade checked
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            redesSelecionadas.push(checkboxes[i].value);
        }
    }
    
    // Validar se pelo menos um checkbox foi marcado
    if (redesSelecionadas.length === 0) {
        exibirErro('mensagemErro', 'Por favor, selecione pelo menos uma rede social!');
        // Ocultar resultado se não há seleção
        document.getElementById('redesSelecionadas').classList.add('oculto');
        return;
    }
    
    // Exibir as redes selecionadas
    exibirRedesSelecionadas(redesSelecionadas);
}

// Função para exibir as redes selecionadas
function exibirRedesSelecionadas(redes) {
    var resultadoDiv = document.getElementById('redesSelecionadas');
    var listaRedes = document.getElementById('listaRedes');
    
    // Limpar lista anterior
    listaRedes.innerHTML = '';

    redes.forEach(function(rede) {
        var redeTag = document.createElement('span');
        redeTag.className = 'rede-tag';
        
        var emoji = '';
        switch(rede) {
            case 'Facebook': emoji = '📘'; break;
            case 'Twitter': emoji = '🐦'; break;
            case 'Instagram': emoji = '📷'; break;
            case 'LinkedIn': emoji = '💼'; break;
            case 'TikTok': emoji = '🎵'; break;
        }
        
        redeTag.textContent = emoji + ' ' + rede;
        listaRedes.appendChild(redeTag);
    });
    
    // Mostrar o resultado
    resultadoDiv.classList.remove('oculto');
    
    console.log('Redes sociais selecionadas:', redes);
}

// Função para limpar a seleção
function limparSelecao() {
    // Ocultar mensagem de erro e resultado
    document.getElementById('mensagemErro').classList.add('oculto');
    document.getElementById('redesSelecionadas').classList.add('oculto');
    
    console.log('Seleção limpa');
}

// Aguardar o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento de clique ao botão enviar
    var enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.addEventListener('click', validarRedesSociais);
    
    // Adicionar evento ao botão limpar
    var limparBtn = document.getElementById('limparBtn');
    limparBtn.addEventListener('click', limparSelecao);
    
    // Adicionar eventos de mudança aos checkboxes para validação em tempo real
    var checkboxes = document.getElementsByName('redesSociais');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', function() {
            // Ocultar mensagem de erro quando uma seleção for feita
            if (this.checked) {
                document.getElementById('mensagemErro').classList.add('oculto');
            }
        });
    }
    
    console.log('Sistema de validação de redes sociais carregado!');
});
