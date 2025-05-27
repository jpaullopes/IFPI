
let h1Principal = getById('principal')
h1Principal.innerText = 'Aprendendo DOM';

let paragrafo1 = getById('paragrafo1');

//alert(paragrafo1.innerHTML + ' - ' + paragrafo1.textContent);

let paragrafosFilhos = getById('pai').children;

let resultadoFilhos = getById('resultadoFilhos');

for (var i = 0; i < paragrafosFilhos.length; i++) {
    resultadoFilhos.innerHTML += 
        "<a href = '#'>" + paragrafosFilhos[i].innerHTML + '</a> <br>'
}

let botao1 = getById('botao1');
/*
botao1.addEventListener('click', () => {
    alert('Cliquei!');
});
*/

botao1.addEventListener('click', clicar);
function clicar() {
    alert('Cliquei!');
}

function getById(id) {
    return document.getElementById(id);
}

getById('botao2').addEventListener('click', () => {
    getById('resultado2').innerHTML = getById('texto').value;
});

let botaoSomar = getById('botaoSomar');
botaoSomar.addEventListener('click', somar);

function somar() {
    let numero1 = Number(getById('numero1').value);
    let numero2 = Number(getById('numero2').value);

    let resultadoSoma = getById('resultadoSoma');
    resultadoSoma.innerText = numero1 + numero2;
}

let cidades = getById('cidades');
cidades.addEventListener('change', () => {
    getById('resultadoCidade').innerText = 
            'Cidade selecionada: ' + cidades.value;
});

let selecaoCor = getById('selecaoCor');

selecaoCor.addEventListener('change', () => {
    let cor = selecaoCor.value;
    document.body.style.backgroundColor = cor;
});

document.title = "oi"