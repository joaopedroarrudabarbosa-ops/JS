function lancarDados (n) {
    if ((isNaN(n) || n <= 0 || n % 1 !== 0)) {
        return "O número de dados deve ser um número e positivo."
    }
    let soma = 0
    let maior = 0
    let menor = 6
    for (i = 0; i < n; i++) {
        let dado = Math.floor(Math.random() * 6) + 1
        soma += dado
        if (dado > maior) {
            maior = dado
        }
        if (dado < menor) {
            menor = dado
        }
    }
    return `Lançamentos: ${n} | Soma: ${soma} | Maior: ${maior} | Menor: ${menor}`
}

let n = Number(prompt("Digite o número de dados a serem lançados:"))

alert(lancarDados(n))

// FEITO