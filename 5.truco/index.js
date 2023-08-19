
function solucao(carta) {
    //seu codigo aqui
    const possiveisManilhas = ["Q", "J", "K", "A", "2", "3"];
    const indexCarta = possiveisManilhas.indexOf(carta);
    const indexProximaCarta = (indexDaCarta + 1) % possiveisManilhas.length
    console.log(possiveisManilhas[indexProximaCarta])
}

