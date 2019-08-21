function buscar(array, search) {
    let inicio = new Date();
    let encontrado = false;
    var low = 0;
    var high = array.length - 1;
    while (!encontrado && low <= high) {
        var middle = Math.floor((low + high) / 2);
        var guess = array[middle];
        if (guess === search) {
            encontrado = true;
        }
        if (guess > search) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }
    let fin = new Date();
    let miliseconds = fin.getTime() - inicio.getTime();
    console.log(array.length);
    console.log(search + ' encontrado = ' + encontrado);
    console.log(miliseconds + " miliseconds");
}

function ejecutar(n) {
    let array = [];
    for (let index = 0; index < n; index++) {
        array[index] = Math.floor((Math.random() * n) + 1);
    }
    array.sort((a, b) => (a- b));
    buscar(array, n-10);
}

ejecutar(10);
ejecutar(1000);
ejecutar(100000);
ejecutar(10000000);