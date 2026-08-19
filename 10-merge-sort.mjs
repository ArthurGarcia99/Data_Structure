function mergeSort(vetor){
    if( vetor.length < 2) return vetor
    
    let meio = Math.floor(vetor.length / 2)

    let vetEsq = vetor.slice(0,meio);
    let vetDir = vetor.slice(meio);

    vetEsq = mergeSort(vetEsq);
    vetDir = mergeSort(vetDir);
}