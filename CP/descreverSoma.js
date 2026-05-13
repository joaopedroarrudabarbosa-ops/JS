function descreverSoma(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Ambos os parâmetros devem ser números."
    }
    return `A soma de ${a} e ${b} é igual a ${a + b}.`
}

let a = Number(prompt("Digite o primeiro número:"))
let b = Number(prompt("Digite o segundo número:"))

alert(descreverSoma(a,b))

// FEITO