function converterMoeda(valor, moedaAtual, moeda = "USD") {
    if (typeof valor !== 'number' || valor < 0) {
        return "Valor inválido."
    }
    if (moedaAtual !== "BRL") {
        return "Moeda de destino inválida."
    }
    const taxas = {
        "USD": 5.70,
        "EUR": 6.20,
        "GBP": 7.10
    }
}