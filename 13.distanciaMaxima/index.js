function processData(input) {
    //Enter your code here
    const linhas = input.trim().split("\n");
    const n = parseInt(input[0], 10);
    const coordenadas = [];
    let maximaDistancia = 0;
    let distancia;
    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ");
        coordenadas.push({
            x: parseFloat(coord[0]),
            y: parseFloat(coord[1])
        });
    }
    for (let i = 0; i < coordenadas.length; i++) {
        for (let j = 0; j < coordenadas.length; j++) {
            distancia = Math.sqrt(Math.pow((coordenadas[j].x - coordenadas[i].x), 2) + (Math.pow((coordenadas[j].y - coordenadas[i].y), 2)));
            if (distancia > maximaDistancia) {
                maximaDistancia = distancia;
            }
        }
    }
    console.log(maximaDistancia);
}

