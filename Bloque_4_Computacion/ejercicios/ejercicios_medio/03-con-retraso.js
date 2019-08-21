function retraso() {
    let max = 999999;
    let array = new Array(max);
    for (let index = 0; index < array.length; index++) {
        array[index] = index;
    }    
}

let inicio = new Date();
let n = 10;
retraso();
console.log(n);
let fin = new Date();
let miliseconds = fin.getTime() - inicio.getTime();
console.log(miliseconds + " miliseconds");