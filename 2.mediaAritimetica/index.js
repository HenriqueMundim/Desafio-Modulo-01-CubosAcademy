
function solucao(lista) {
    //seu codigo aqui
    const media = lista.reduce((acc, curr) => acc += curr) / lista.length;
    return console.log(media);
}

