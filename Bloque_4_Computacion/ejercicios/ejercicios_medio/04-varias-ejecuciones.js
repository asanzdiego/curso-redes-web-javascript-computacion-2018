function retraso() {
    let max = 999999;
    let array = new Array(max);
    for (let index = 0; index < array.length; index++) {
        array[index] = index;
    }
}

function ejecutar(n) {
    let inicio = new Date();
    retraso();
    console.log(n);
    let fin = new Date();
    let miliseconds = fin.getTime() - inicio.getTime();
    console.log(miliseconds + " miliseconds");
}

ejecutar(10);
ejecutar(1000);
ejecutar(100000);
ejecutar(10000000);