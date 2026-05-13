function converterMoeda(valor, moedaAtual, moeda = "USD") {
    if (typeof valor !== 'number' || valor < 0) {
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
        return `${valor} = ${resultado.toFixed(2)} ${moeda}`
    }
}

let valor = parseFloat(prompt("Digite o valor em reais: "))
let moedaAtual = prompt("Digite a moeda atual (BRL): ")
let moedaDestino = prompt("Digite a moeda de destino (USD, EUR ou GBP):")

alert(converterMoeda(valor, moedaAtual, moedaDestino))

// FEITO