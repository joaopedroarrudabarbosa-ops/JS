// ## Conversor de Moeda (2 pontos)
// **Enunciado:**
// Implemente a função converterMoeda, que recebe:
// valor, moeda atual, moeda a ser convertida (caso nenhum valor 
// seja fornecido em moeda a ser convertida, o padrão deve ser "USD").
//
// Taxas de conversão a partir de BRL:
//   BRL → USD: dividir por 5.70
//   BRL → EUR: dividir por 6.20
//   BRL → GBP: dividir por 7.10
//
// A função deve:
// - Retornar "Valor inválido." se valor não for número ou for menor que 0.
// - Retornar "Moeda de origem inválida." se moeda atual não for "BRL".
// - Retornar "Moeda de destino inválida." se moeda a ser convertida não for "USD", "EUR" ou "GBP".
// - Caso válido, retornar: "R$ <valor> = <resultado> <moeda_a_ser_convertida>"
//   onde resultado tem 2 casas decimais.
//
// Exemplos:
//   converterMoeda(100, "BRL")        → "R$ 100 = 17.54 USD"
//   converterMoeda(100, "BRL", "EUR") → "R$ 100 = 16.13 EUR"
//   converterMoeda(-50, "BRL")        → "Valor inválido."
//   converterMoeda(100, "USD")        → "Moeda de origem inválida."
function converterMoeda(valor, moedaAtual, moeda = "USD") {
  // TODO: implementar função
  if (typeof valor !== 'number' || valor <= 0) {
      return "Valor inválido."
  }
  if (moedaAtual !== "BRL") {
      return "Moeda de origem inválida."
  }
  if (moeda !== "USD" && moeda !== "EUR" && moeda !== "GBP") {
      return "Moeda de destino inválida."
  }
  else if (moeda === "USD" || moeda === "EUR" || moeda === "GBP") {
      const taxas = {
          "USD": 5.70,
          "EUR": 6.20,
          "GBP": 7.10
      }
      const resultado = valor / taxas[moeda]
      return `R$ ${valor} = ${resultado.toFixed(2)} ${moeda}`
  }
}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { converterMoeda };

// FEITO