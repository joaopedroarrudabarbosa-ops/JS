// ## Calculadora de Desconto (2 pontos)
// **Enunciado:**
// Implemente a função calcularDesconto, que recebe preco e desconto 
// (percentual de 0 a 100).
// A função deve:
// - Retornar "Preço inválido." se preco não for número ou for menor que 0.
// - Retornar "Desconto inválido." se desconto não for número, for menor que 0 
// ou maior que 100.
// - Caso válido, calcular precoFinal = preco - (preco * desconto / 100)
//   e retornar a string: "De R$ <preco> por R$ <precoFinal>."
//   onde precoFinal deve ter 2 casas decimais.
//
// Exemplos:
//   calcularDesconto(100, 20)  → "De R$ 100 por R$ 80.00."
//   calcularDesconto(49.9, 10) → "De R$ 49.9 por R$ 44.91."
//   calcularDesconto(-10, 20)  → "Preço inválido."
//   calcularDesconto(100, 110) → "Desconto inválido."
function calcularDesconto(preco, desconto) {
  // TODO: implementar função
  if (typeof preco !== "number" || preco <= 0) {
    return "Preço inválido."
  }
  if (typeof desconto !== "number" || desconto < 0 || desconto > 100) {
    return "Desconto inválido."
  }
  precoFinal = preco - (preco * desconto / 100)
  return `De R$ ${preco} por R$ ${precoFinal.toFixed(2)}.`
  }

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularDesconto };

// FEITO