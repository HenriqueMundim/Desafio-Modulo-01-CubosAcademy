
function solucao(lista) {
    //seu codigo aqui
    const resultado = lista.reduce((acc, curr) => {
        return acc += curr;
    })
    return console.log(resultado);
}

