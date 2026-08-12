import { objMotoristas } from "./data/motoristas-obj-desord.mjs"

let pass, comps, trocas;

function bubblesort(vetor, fncomp){
    let trocou

    pass = 0; comps = 0, trocas = 0;

    do{
        pass++;
        trocou = false;

        for(let i = 0; i < vetor.length -1; i++) {
            comps++;
            if(fncomp(vetor[i], vetor[i + 1])){
                [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
                trocou = true;
                trocas++;
            }
        }
    }while(trocou)
}

bubblesort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista);

console.log(objMotoristas);
console.log({pass, comps, trocas});