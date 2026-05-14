// ## Debug: Calculadora de Multa por Atraso (2 pontos)
// **Enunciado:**
// A função abaixo deveria calcular o valor total de uma conta com multa por atraso.
// Ela recebe valorOriginal (número) e diasAtraso (número) e deve:
// - Retornar "Valor inválido." se valorOriginal OU diasAtraso não for número.
// - Retornar "Valor inválido." se valorOriginal OU diasAtraso menor que 0.
// - Se diasAtraso maior que 0, usar um loop DO WHILE para somar R$10 de multa por cada dia de atraso.
// - Retornar a string "Total: R$ <valor>" onde valor tem 2 casas decimais.
//
// O código abaixo contém 5 erros. Encontre e corrija todos eles.
//
// Exemplos esperados após a correção:
//   calcularMulta(100, 3)   → "Total: R$ 130.00"
//   calcularMulta(50, 0)    → "Total: R$ 50.00"
//   calcularMulta(200, 1)   → "Total: R$ 210.00"
//   calcularMulta(-10, 3)   → "Valor inválido."
//   calcularMulta(100, -1)  → "Valor inválido."
//   calcularMulta("100", 3) → "Valor inválido."
function calcularMulta(valorOriginal, diasAtraso) {
  // TODO: implementar função
  if (
    typeof valorOriginal !== "number" ||
    typeof diasAtraso !== "number" ||
    isNaN(valorOriginal) ||
    isNaN(diasAtraso)
  ) {
    return "Valor inválido.";
  }

  if (valorOriginal < 0 || diasAtraso < 0) {
    return "Valor inválido.";
  }

  let total = valorOriginal;
  let dia = 1;

  if (diasAtraso > 0) {
    do {
      total += 10;
      dia++;
    } while (dia <= diasAtraso);
  }

  return `Total: R$ ${total.toFixed(2)}`;
}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularMulta };