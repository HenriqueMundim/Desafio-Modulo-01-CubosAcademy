function processData(input) {
    //Enter your code here
    const primeiraLetraMinuscula = input[0].toLowerCase();
    const restantantePalavraMaiuscula = input.slice(1).toUpperCase();
    if ((input === input.toUpperCase()) || (input[0] === primeiraLetraMinuscula && input.slice(1) === restantantePalavraMaiuscula)) {
        let palavraFormatada = "";
        for (const letra of input) {
            if (letra === letra.toUpperCase()) {
                palavraFormatada += letra.toLowerCase();
            } else {
                palavraFormatada += letra.toUpperCase();
            }
        }
        console.log(palavraFormatada);
    } else {
        console.log(input);
    }
}

