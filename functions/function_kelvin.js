// Função validar.
function Validar() {
    // Pega o valor do elemento de id 'valor_grayus'.
    var vg = document.getElementById("valor_graus").value
    // Condições.
    if (vg == "") {
        // VCaso valor seja vazio.
        alert('Erro: Nenhum Valor Inserido!')
        document.getElementById('txt').innerHTML = "0°K";

    }
    // Caso valor não seja um número.
    else if (isNaN(vg)) {
        alert("Erro: Tipo de Dado Inválido!")
        document.getElementById('txt').innerHTML = "0°C";
        document.getElementById('valor_graus').value = "";
    }
    else {
        // Caso esteja tudo certo.
        ConverterK()
    }
}

function ConverterK() {
    // Condições.
    // Se valor do elemento de id de nome 'unidade' == 'f' (Farhrenheit).
    if (document.getElementById("unidade").value == 'f') {
        // Pega o valor do id de nome 'valor_graus' e cria a fórmula de conversão (°F > °C).
        var f = document.getElementById("valor_graus").value;
        var k = (f - 32) * (5 / 9) + 273.15;
        // Mostra resultado no id de nome 'txt'.
        document.getElementById('txt').innerHTML = Math.round(k * 100) / 100 + "°K";
    }
    // Se valor do elemento de id de nome 'unidade' == 'K' (kelvin).
    else if (document.getElementById("unidade").value == 'c') {
        // Pega o valor do id de nome 'valor_graus' e cria a fórmula de conversão (°K > °C).
        var c = document.getElementById("valor_graus").value;
        var k = c + 273.15;
        // Mostra resultado no id de nome 'txt'.
        document.getElementById('txt').innerHTML = Math.round(k * 100) / 100 + "°K"
    }
}
