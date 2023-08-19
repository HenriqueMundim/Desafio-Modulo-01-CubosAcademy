
function solucao(lista) {
    // seu codigo aqui
    const maioresDeIdade = lista.filter((idade) => idade >= 18)

    if (maioresDeIdade.length === 0) {
        console.log("CRESCA E APARECA")
    } else {
        const pessoaMaisNovaPermitida = maioresDeIdade.reduce((acc, curr) => {
            if (curr < acc) {
                acc = curr;
            }
            return acc
        })
        console.log(pessoaMaisNovaPermitida);
    }
}

