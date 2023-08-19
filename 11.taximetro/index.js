
function solucao(min, km) {
    //seu codigo aqui
    let diferencaKm;
    let valorTotal;
    let diferencaMinutos;
    if (min <= 20 && km <= 10) {
        valorTotal = (min * 50) + (km * 70);
        console.log(valorTotal);
    } else if (min <= 20 && km > 10) {
        diferencaKm = km - 10;
        valorTotal = (10 * 70) + (diferencaKm * 50) + (min * 50);
        console.log(valorTotal);
    } else if (min > 20 && km <= 10) {
        diferencaMinutos = min - 20;
        valorTotal = (20 * 50) + (km * 70) + (diferencaMinutos * 30);
        console.log(valorTotal);
    } else {
        diferencaKm = km - 10;
        diferencaMinutos = min - 20;
        valorTotal = (20 * 50) + (10 * 70) + (diferencaKm * 50) + (diferencaMinutos * 30);
        console.log(valorTotal);
    }
}

