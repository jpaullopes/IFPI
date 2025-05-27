const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const btnCalcular = document.getElementById("btnCalcular");
const resultadoSpan = document.getElementById("resultadoCalc");
const operacoesRadios = document.getElementsByName("operacao"); 

if (num1Input && num2Input && btnCalcular && resultadoSpan && operacoesRadios.length > 0) {
    btnCalcular.addEventListener("click", function() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        let operacaoSelecionada = null;
        let resultado = 0;

        // Descobre qual radio button está selecionado
        for(const radio of operacoesRadios){
            if (radio.checked) { 
                operacaoSelecionada = radio.value;
                break;
            }
        }
        if(isNaN(num1) || isNaN(num2)){
            resultadoSpan.textContent = "Entrada inválida";
            return;
        }
        switch(operacaoSelecionada){
            case "soma":
                resultado = num1 + num2;
                break;
            case "subtracao":
                resultado = num1 - num2;
                break;
            case "multiplicacao":
                resultado = num1 * num2;
                break;
            case "divisao":
                resultado = num1 / num2;
                break;
            default:
                resultadoSpan.textContent = "Operação inválida";
                return;
        }
        resultadoSpan.textContent = resultado;
    });
}