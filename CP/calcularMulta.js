function calcularMulta (valorOriginal, diasAtraso) {
    if (typeof valorOriginal !== 'number' && typeof diasAtraso !== 'number') {
        return "Valor original e dias de atraso devem ser números."
    }
    if (valorOriginal < 0 || diasAtraso < 0) { // erro na || e <=
        return "Valor original e dias de atraso devem ser números positivos."
    }
        let total = valorOriginal // valorOriginal
        let dia = 1
    if (diasAtraso > 0) {
        do {
            total = total + 10
            dia++
        } while (dia<=diasAtraso)
        }
        return "Total: R$ " + total.toFixed(2)
}

let valorOriginal = Number(prompt("Digite o valor original:"))
let diasAtraso = Number(prompt("Digite o número de dias de atraso:"))

alert(calcularMulta(valorOriginal, diasAtraso))

// FEITO