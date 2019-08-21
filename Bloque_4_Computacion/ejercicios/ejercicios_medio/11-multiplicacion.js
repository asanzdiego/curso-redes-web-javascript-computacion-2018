function retraso() {
    let max = 999999;
    let array = new Array(max);
    for (let index = 0; index < array.length; index++) {
        array[index] = index;
    }
}

function ejecutar(n) {
    let inicio = new Date();
    let array = new Array(n*n);
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            retraso();
            array.push(i*j);
        }
    }
    let fin = new Date();
    let miliseconds = fin.getTime() - inicio.getTime();
    console.log(n);
    console.log(miliseconds + " miliseconds");
}

ejecutar(2);
ejecutar(4);
ejecutar(8);
ejecutar(16);