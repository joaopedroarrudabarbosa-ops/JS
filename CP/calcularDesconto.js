function calcularDesconto(preco, desconto) {
    if (typeof preco !== "number" || preco <= 0) {
        return "Preço inválido. Por favor, insira um número positivo."
    }
    if (typeof desconto !== "number" || desconto < 0 || desconto > 100) {
        return "Desconto inválido. Por favor, insira um número entre 0 e 100."
}
    const precoFinal = preco - (preco * (desconto / 100))
    return `De R$ ${preco.toFixed(2)}, por: R$ ${precoFinal.toFixed(2)}`
}

let preco = parseFloat(prompt("Digite o preço do produto:"))
let desconto = parseFloat(prompt("Digite o percentual de desconto:"))

alert(calcularDesconto(preco, desconto))

// FEITO
