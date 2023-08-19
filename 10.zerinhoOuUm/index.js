/*
function solucao(jogadores) {
  //seu codigo aqui
    const jogadaUm = jogadores.filter((currentvalue) => currentvalue.jogada == 1);
    const jogadaZero= jogadores.filter((currentvalue) => currentvalue.jogada == 0);  
    if(jogadaUm.length === 1) {
        console.log(jogadaUm[0].nome);
    } else if(jogadaZero.length === 1) {
        console.log(jogadaZero[0].nome);
    } else {
        console.log("NINGUEM")
    }
}
*/
function solucao(jogadores) {
    //seu codigo aqui
    let quantidadeZeros = 0;
    let quantidadeUm = 0;
    for (const jogador of jogadores) {
        if (jogador.jogada === 0) {
            quantidadeZeros++;
        } else if (jogador.jogada === 1) {
            quantidadeUm++;
        }
    }
    if (quantidadeZeros == 1) {
        const pessoaPerdedora = jogadores.reduce((acc, curr) => {
            if (curr.jogada == 0) {
                acc = curr;
            }
            return acc;
        }, 0)
        console.log(pessoaPerdedora.nome);
    } else if (quantidadeUm == 1) {
        const pessoaPerdedora = jogadores.reduce((acc, curr) => {
            if (curr.jogada == 1) {
                acc = curr;
            }
            return acc;
        }, 0)
        console.log(pessoaPerdedora.nome);
    } else {
        console.log("NINGUEM");
    }
}

