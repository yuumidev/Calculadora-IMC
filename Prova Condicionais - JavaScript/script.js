function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const alturaEmCm = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(alturaEmCm) || isNaN(peso) || nome.trim() === "") {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const alturaEmMetros = alturaEmCm / 100;
    const imc = peso / (alturaEmMetros * alturaEmMetros);

    let classificacao;
    if (imc < 16) {
        classificacao = "Baixo peso muito grave";
    } else if (imc >= 16 && imc <= 16.99) {
        classificacao = "Baixo peso grave";
    } else if (imc >= 17 && imc <= 18.49) {
        classificacao = "Baixo peso";
    } else if (imc >= 18.50 && imc <= 24.99) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.99) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.99) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc <= 39.99) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>Nome: <strong>${nome}</strong></p>
                           <p>IMC: <strong>${imc.toFixed(2)}</strong></p>
                           <p>Classificação: <strong>${classificacao}</strong></p>`;
}
