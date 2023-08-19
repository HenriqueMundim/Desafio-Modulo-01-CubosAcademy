
function solucao(texto) {
    // Seu codigo aqui
    const textoFormatado = texto.trim();
    let arrayDePalavras = textoFormatado.split(" ");
    arrayDePalavras = arrayDePalavras.filter((currentValue) => {
        if (currentValue !== " ") {
            return currentValue;
        }
    });
    return console.log(arrayDePalavras.length);
}

