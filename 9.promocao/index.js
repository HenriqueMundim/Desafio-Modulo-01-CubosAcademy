
function solucao(precos) {
    //seu codigo aqui
    let menorPreco = precos[0];
    const soma = precos.reduce((acc, curr) => {
        if (curr < menorPreco) {
            menorPreco = curr;
        }
        return acc += curr;
    })
    if (precos.length >= 3) {
        console.log(soma - (menorPreco / 2));
    } else {
        console.log(soma);
    }
}

