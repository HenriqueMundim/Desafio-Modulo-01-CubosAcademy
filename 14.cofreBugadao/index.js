function processData(input) {
    //Enter your code here
    const linhas = input.trim().split("\n");
    let index = 0;
    const senha = linhas[0];
    let supostaSenha = "";
    for (const senhaInserida of linhas[1]) {
        if (senhaInserida === senha[index]) {
            supostaSenha += senhaInserida;
            index++;
        }
    }
    console.log(supostaSenha === senha ? "SIM" : "NAO");
}

