function retraso() {
    let max = 999999;
    let array = new Array(max);
    for (let index = 0; index < array.length; index++) {
        array[index] = index;
    }
}

function ejecutar(n) {
    let inicio = new Date();
    let array = new Array(n);
    for (let index = 0; index < n; index++) {
        retraso();
        array[index] = index;
    }
    let fin = new Date();
    let miliseconds = fin.getTime() - inicio.getTime();
    console.log(n);
    console.log(miliseconds + " miliseconds");
}

ejecutar(1);
ejecutar(10);
ejecutar(100);
ejecutar(1000);