// EXERCÍCIO 1 — Formato DENSO
// Fórmula: linhas × colunas × bytes
// 1.000.000 × 10.000 × 4 = 40.000.000.000 bytes
// 40.000.000.000 / 1.000.000.000 = 40 GB
// RESPOSTA: São necessários 40 GB no formato denso.

// EXERCÍCIO 2 — Formato Esparso COO
// Total de entradas (não-zero): 1.000.000 usuários × 100 filmes = 100.000.000 triplas
// Cada tripla ocupa 3 números × 4 bytes = 12 bytes
// 100.000.000 × 12 = 1.200.000.000 bytes
// 1.200.000.000 / 1.000.000.000 = 1,2 GB
// RESPOSTA: São necessários 1,2 GB no formato esparso COO.

// EXERCÍCIO 3 — Economia de Memória
// Fórmula: ((Dense - Sparse) / Dense) × 100
// ((40 - 1,2) / 40) × 100 = (38,8 / 40) × 100 = 97%
// RESPOSTA: A economia real de memória é de 97%.
// O formato esparso usa apenas 3% da memória do formato denso (33x menos).

/**
 * @param {Array} matrizEsparsa - Lista de objetos {linha, coluna, valor}
 * @param {Array} vetorDenso - Array com os pesos dos filmes
 */
function multiplicarRecomendacao(matrizEsparsa, vetorDenso) {
  // 1. Cria o vetor de resultado com tamanho 4 (um score por usuário) preenchido com zeros
  const resultado = new Array(4).fill(0);

  // 2. Percorre APENAS as triplas que existem (sem criar matriz densa)
  for (const tripla of matrizEsparsa) {
    // 3. score do usuário (linha) += nota do filme × peso do filme (coluna)
    resultado[tripla.linha] += tripla.valor * vetorDenso[tripla.coluna];
  }

  // 4. Retorna o vetor de scores final
  return resultado;
}

// --- DADOS PARA TESTE ---
const avaliacoes = [
  { linha: 0, coluna: 1, valor: 5 }, // Usuário 0 -> Filme 1 (Nota 5)
  { linha: 1, coluna: 3, valor: 2 }, // Usuário 1 -> Filme 3 (Nota 2)
  { linha: 3, coluna: 0, valor: 4 }, // Usuário 3 -> Filme 0 (Nota 4)
];

const pesos = [10, 20, 30, 40, 50]; // Pesos para os filmes 0, 1, 2, 3 e 4

// Resultado esperado: [100, 80, 0, 40]
console.log("Seu resultado: ", multiplicarRecomendacao(avaliacoes, pesos));

//Este algoritmo é mais rápido porque ele ignora completamente os zeros. Em uma abordagem tradicional com matriz densa, 
// o código percorreria todas as combinações possíveis de usuário × filme, no exemplo do exercício seriam 4 × 5 = 20 iterações, 
// e em escala Netflix seriam bilhões, mesmo que a grande maioria desses valores seja zero, assim resultando em multiplicações 
// inúteis do tipo 0 × peso = 0 que não contribuem em nada para o resultado. O algoritmo COO, por outro lado, percorre apenas as 
// triplas que realmente existem: no teste foram só 3 iterações para chegar ao resultado correto. Essa diferença cresce de forma 
// dramática em escala real, se um usuário assistiu a 100 filmes de um catálogo de 10.000, a versão densa faz 10.000 operações 
// enquanto o COO faz apenas 100, ou seja, 100x menos trabalho por usuário. Com 1 milhão de usuários, isso representa bilhões de 
// operações economizadas a cada recomendação gerada.