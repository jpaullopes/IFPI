// Função para exibir erro (reutilizada)
function exibirErro(idElemento, mensagem) {
    var errorMessage = document.getElementById(idElemento);
    errorMessage.innerHTML = mensagem;
    errorMessage.classList.remove('oculto');
    
    setTimeout(function() {
        errorMessage.classList.add('oculto');
    }, 3000);
}

// Função para carregar e exibir a imagem
function carregarImagem() {
    // Receber a imagem do componente de arquivos
    var uploadImagem = document.getElementById('uploadImagem');
    var arquivoSelecionado = uploadImagem.files[0];
    
    // Verificar se um arquivo foi selecionado
    if (!arquivoSelecionado) {
        exibirErro('mensagemErro', 'Por favor, selecione uma imagem primeiro!');
        return;
    }
    
    // Verificar se o arquivo é uma imagem
    if (!arquivoSelecionado.type.startsWith('image/')) {
        exibirErro('mensagemErro', 'Por favor, selecione apenas arquivos de imagem!');
        return;
    }
    
    // Verificar o tamanho do arquivo (máximo 10MB)
    var tamanhoMaximo = 10 * 1024 * 1024; // 10MB em bytes
    if (arquivoSelecionado.size > tamanhoMaximo) {
        exibirErro('mensagemErro', 'Arquivo muito grande! Tamanho máximo: 10MB');
        return;
    }
    
    // Utilizar document.createElement() para criar a tag img
    var img = document.createElement('img');
    
    // Alterar o atributo src da imagem usando URL.createObjectURL()
    img.src = URL.createObjectURL(arquivoSelecionado);
    
    // Adicionar classe CSS para estilização
    img.className = 'imagem-carregada';
    
    // Adicionar atributo alt
    img.alt = 'Imagem carregada: ' + arquivoSelecionado.name;
    
    // Adicionar evento de carregamento para limpeza da URL
    img.onload = function() {
        // Liberar a URL após o carregamento para economizar memória
        URL.revokeObjectURL(img.src);
    };
    
    // Adicionar evento de erro
    img.onerror = function() {
        exibirErro('mensagemErro', 'Erro ao carregar a imagem. Tente novamente.');
        URL.revokeObjectURL(img.src);
    };
    
    // Obter o container de resultado
    var resultado = document.getElementById('resultado');
    
    // Limpar conteúdo anterior
    resultado.innerHTML = '';
    
    // Adicionar a imagem à div com id="resultado"
    resultado.appendChild(img);
    
    // Criar elemento de informações da imagem
    var infoDiv = document.createElement('div');
    infoDiv.className = 'info-imagem';
    infoDiv.innerHTML = `
        Nome: ${arquivoSelecionado.name}<br>
        Tamanho: ${(arquivoSelecionado.size / 1024).toFixed(1)} KB<br>
        Tipo: ${arquivoSelecionado.type}
    `;
    
    resultado.appendChild(infoDiv);
}

// Aguardar o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento de clique ao botão
    var carregarBtn = document.getElementById('carregarBtn');
    carregarBtn.addEventListener('click', carregarImagem);
    
    // Adicionar evento de mudança no input de arquivo
    var uploadImagem = document.getElementById('uploadImagem');
    uploadImagem.addEventListener('change', function() {
        // Ativar o botão apenas quando um arquivo for selecionado
        var carregarBtn = document.getElementById('carregarBtn');
        carregarBtn.disabled = !this.files[0];
        
        // Carregar automaticamente quando um arquivo for selecionado
        if (this.files[0]) {
            carregarImagem();
        }
    });
    
    // Desabilitar o botão inicialmente
    document.getElementById('carregarBtn').disabled = true;
    
    console.log('Sistema de upload de imagem carregado!');
});
