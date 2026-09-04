function quickSort(vetor, fncomp, ini = 0, fim = vetor.length - 1){
    
    // só trabalhamos se a região do vetor tiver, pelo menos, 2 elementos
    if(fim <= ini) return; // condição de saida

    const pivot = fim; // pivot

    let div = ini - 1; // divisor de regiões (inicialmente, antes do início)

    for(let i = ini; i < fim; i++){
        if(fncomp(vetor[pivot], vetor[i])){
            div++;
            if(div !== i){
                [vetor[i],vetor[div]]=[vetor[div],vetor[i]];
            }
        }
    }

    div++
    //colocamos o pivo em seu lugar definitivo

    if(fncomp(vetor[div], vetor[pivot]) && div !== pivot){
        [vetor[div], vetor[pivot]]=[vetor[pivot], vetor[div]]
    }

    quickSort(vetor, fncomp, ini, div-1)
    quickSort(vetor, fncomp, div+1, fim)
}

import {objMotoristas} from "./data/motoristas-obj-desord.mjs"

quickSort(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social) return elem1.nome_motorista > elem2.nome_motorista
    else return elem1.razao_social > elem2.razao_social
})

console.log(objMotoristas)