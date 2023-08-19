
function solucao(min, max, valores) {
    //seu codigo aqui
    const valoresValidos = valores.filter((valorAtual) => valorAtual >= min && valorAtual <= max);
    return console.log(valoresValidos);
}


