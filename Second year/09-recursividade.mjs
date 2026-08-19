/* FATORIAL ITERATIVO*/

function fatorial(n){
    let resultado = 1
    for(let i = n; i > 1; i--){
        resultado = resultado * i
    }
    return resultado
}

console.log(fatorial(3))

/* FATORIAL RECURSIVO */

function fatorialR(n){
    if(n <= 1){
        return 1;
    }
    return n * fatorialR(n - 1)
}

console.log(fatorialR(3))