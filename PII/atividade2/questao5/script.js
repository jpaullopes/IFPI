// Configuração das imagens disponíveis
var imagensDisponiveis = {
    'paisagem1': {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        nome: 'Paisagem Montanhosa',
        descricao: 'Bela vista de montanhas cobertas de neve ao nascer do sol'
    },
    'paisagem2': {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
        nome: 'Praia Tropical',
        descricao: 'Praia paradisíaca com águas cristalinas e areias brancas'
    },
    'paisagem3': {
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
        nome: 'Floresta',
        descricao: 'Densa floresta verde com árvores centenárias'
    }
};

// Função para carregar a imagem selecionada
function carregarImagemSelecionada() {
    // Obter o valor selecionado
    var seletor = document.getElementById('seletorImagens');
    var valorSelecionado = seletor.value;
    var resultado = document.getElementById('resultado');
    
    // Verificar se uma opção válida foi selecionada
    if (!valorSelecionado || !imagensDisponiveis[valorSelecionado]) {
        // Mostrar placeholder se nada foi selecionado
        resultado.innerHTML = '<p class="placeholder">Selecione uma imagem para visualizar</p>';
        return;
    }
    
    // Obter dados da imagem
    var dadosImagem = imagensDisponiveis[valorSelecionado];
    
    // Utilizar document.createElement() para criar a tag img
    var img = document.createElement('img');
    
    // Configurar os atributos da imagem
    img.src = dadosImagem.url;
    img.alt = dadosImagem.nome;
    img.className = 'imagem-demo';
    
    // Criar elemento com informações da imagem
    var infoDiv = document.createElement('div');
    infoDiv.className = 'info-imagem-demo';
    infoDiv.innerHTML = `
        <strong>${dadosImagem.nome}</strong><br>
        ${dadosImagem.descricao}
    `;
    
    // Adicionar evento de carregamento
    img.onload = function() {
        console.log('Imagem carregada:', dadosImagem.nome);
    };
    
    // Adicionar evento de erro
    img.onerror = function() {
        // Se a imagem da URL não carregar, criar uma imagem de placeholder colorida
        var placeholderDiv = document.createElement('div');
        placeholderDiv.style.cssText = `
            width: 400px;
            height: 300px;
            background: linear-gradient(135deg, #a29bfe, #6c5ce7);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        `;
        placeholderDiv.innerHTML = dadosImagem.nome.split(' ')[0] + '<br>Imagem Demo';
        
        // Limpar resultado e adicionar placeholder
        resultado.innerHTML = '';
        resultado.appendChild(placeholderDiv);
        resultado.appendChild(infoDiv);
        return;
    };
    
    // Limpar conteúdo anterior
    resultado.innerHTML = '';
    
    // Adicionar a imagem e informações ao resultado
    resultado.appendChild(img);
    resultado.appendChild(infoDiv);
}

// Aguardar o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento de mudança no select
    var seletor = document.getElementById('seletorImagens');
    seletor.addEventListener('change', carregarImagemSelecionada);
    
    console.log('Sistema de seletor de imagens carregado!');
    console.log('Imagens disponíveis:', Object.keys(imagensDisponiveis));
});
