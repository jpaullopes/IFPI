# Exercícios sobre DOM 
## Aluno: João Paulo Lopes da Silva
## Questões e Resoluções

### 2) Crie dois exemplos usando os métodos do objeto `document`:
   a. `getElementById();`
   b. `getElementsByTagName();`

**Resolução:**
Os códigos de exemplo para esta questão foram desenvolvidos e podem ser encontrados nos arquivos `index.html` e `script.js` dentro da pasta [/questao2/](./questao2/).


### 3) Crie um código que conte o número de parágrafos dentro de uma `div` e exiba o resultado em uma outra `div`.

**Resolução:**
A solução para contagem de parágrafos está implementada nos arquivos `index.html` e `script.js`, localizados na pasta [/questao3/](./questao3/).


### 4) Considere o exemplo abaixo crie um segundo botão chamado "limpar" que limpe o conteúdo do texto do parágrafo.

**Resolução:**
O código original foi modificado para incluir o botão "limpar". A implementação está nos arquivos `index.html` e `script.js` na pasta [/questao4/](./questao4/).


### 5) Qual a diferença entre as propriedades `textContent`, `innerText` e `innerHTML` dos elementos HTML? Cite exemplos.

As três servem para acessar ou modificar o conteúdo de um elemento HTML, mas com diferenças importantes:

* **`textContent`**:
    * **O que faz**: Pega ou define *todo* o conteúdo textual de um nó e de seus descendentes
    * **Detalhes**: Inclui o texto de tags `<script>` e `<style>`. Retorna o texto "cru", sem considerar estilos CSS. É geralmente mais rápido para obter ou definir apenas texto.
    * *Exemplo*: Para `<div id="teste">Olá <span>Mundo Cruel</span> </div>`, `document.getElementById('teste').textContent` retornaria algo como "Olá Mundo Cruel ".

* **`innerText`**:
    * **O que faz**: Pega ou define o conteúdo textual que é visível na página.
    * **Detalhes**: Leva em consideração o estilo CSS. Não retorna texto de elementos ocultos. Tenta aproximar o que o usuário realmente vê, podendo normalizar espaços e quebras de linha. Não inclui conteúdo de tags `<script>` e `<style>`.
    * *Exemplo*: Se no exemplo anterior o `<span>` tivesse `display: none;`, `innerText` retornaria apenas "Olá ".
    * *Observação*: O comportamento exato pode ter pequenas variações entre navegadores.

* **`innerHTML`**:
    * **O que faz**: Pega ou define todo o conteúdo HTML(incluindo as tags) dentro de um elemento.
    * **Detalhes**: Quando você atribui um valor a `innerHTML`, o navegador interpreta essa string como HTML e reconstrói o DOM dentro do elemento.
    * *Exemplo*: Para `<div id="teste">Olá <strong>Mundo</strong>!</div>`, `document.getElementById('teste').innerHTML` retornaria "Olá <strong>Mundo</strong>!".


### 6) Crie um exemplo em que uma propriedade CSS de um elemento HTML é alterada via DOM.

**Resolução:**
Um exemplo de manipulação de estilos CSS via JavaScript (DOM) está disponível nos arquivos `index.html` e `script.js` na pasta [/questao6/](./questao6/).


### 7) Criar um código que copie o conteúdo de uma caixa de texto para outra só que em caixa alta.

**Resolução:**
A funcionalidade de copiar e transformar texto para caixa alta está implementada. Veja os arquivos `index.html` e `script.js` na pasta [/questao7/](./questao7/).


### 8) Cria código que tenha botão de alto contraste que alterne a cor de fundo do `body` para preto e cor do texto para branco. Adicionalmente, crie um botão para resetar as cores originais.

**Resolução:**
Os botões de alto contraste e reset de cores foram implementados. O código está nos arquivos `index.html` e `script.js` na pasta [/questao8/](./questao8/).


### 9) Crie um script acionado por botões que aumentem o tamanho do texto de toda a página e outro que faça o contrário.

**Resolução:**
A funcionalidade de aumentar/diminuir o tamanho da fonte da página está nos arquivos `index.html` e `script.js` da pasta [/questao9/](./questao9/).


### 10) Crie uma pequena calculadora com as 4 operações. A operação deve ser selecionada de botões de radio. Para isso, teste a propriedade `checked` para descobrir qual operação está selecionada.

**Resolução:**
Uma calculadora simples foi desenvolvida. Os arquivos `index.html` e `script.js` estão na pasta [/questao10/](./questao10/).


### 11) Pesquise como criar elementos e adicione o conteúdo de uma caixa de texto em uma lista não ordenada.

**Resolução:**
O exemplo de criação dinâmica de elementos `<li>` e adição a uma `<ul>` a partir de um input está nos arquivos `index.html` e `script.js` da pasta [/questao11/](./questao11/).


### 12) Repita o exercício anterior adicionando o conteúdo da caixa de texto em um elemento de um `select`.

**Resolução:**
A solução para adicionar dinamicamente opções (`<option>`) a um elemento `<select>` está nos arquivos `index.html` e `script.js` da pasta [questao12](./questao12/).

