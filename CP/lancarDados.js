// ## Lançador de Dados (2 pontos)
// **Enunciado:**
// Implemente a função lancarDados, que recebe um número inteiro n
// (quantidade de lançamentos de um dado de 6 faces).
//
// A função deve:
// - Retornar "Inválido." se n não for número, for NaN, menor que 0 ou não inteiro.
// - Caso válido, usar um loop FOR para simular n lançamentos,
//   gerando números inteiros aleatórios de 1 a 6.
// - Retornar a string:
//   "Lançamentos: <n> | Soma: <soma> | Maior: <maior> | Menor: <menor>"
//
// Exemplos (valores aleatórios, mas formato sempre igual):
//   lancarDados(5) → "Lançamentos: 5 | Soma: 18 | Maior: 6 | Menor: 2"
//   lancarDados(0) → "Inválido."
//   lancarDados(1.5) → "Inválido."
function lancarDados(n) {
  // TODO: implementar função
  if (typeof n !== "number" || isNaN(n) || n <= 0 || n % 1 !== 0) {
    return "Inválido.";
  }

  let soma = 0;
  let maior = 0;
  let menor = 6;

  for (let i = 0; i < n; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;

    soma += roll;

    if (roll > maior) {
      maior = roll;
    }

    if (roll < menor) {
      menor = roll;
    }
  }

  return `Lançamentos: ${n} | Soma: ${soma} | Maior: ${maior} | Menor: ${menor}`;
}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { lancarDados };
