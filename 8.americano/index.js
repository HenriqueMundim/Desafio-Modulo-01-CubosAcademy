
function solucao(numeros) {
    // seu codigo aqui
    const soma = numeros.reduce((acc, curr) => acc += curr);
    let pessoaEscolhida = 0;
    for (let i = 0; i < soma; i++) {
        if (pessoaEscolhida === numeros.length) {
            pessoaEscolhida = 0;
        }
        pessoaEscolhida++;
    }
    return console.log(pessoaEscolhida);
}
