function verificarPalavra(frase, palavraBuscar) {
    frase = frase.trim();
    if (frase.length < 5) {
        return "A frase é muito curta."
    }
    else if (frase.includes(palavraBuscar)) {
        return `A palavra "${palavraBuscar}" foi encontrada na frase.`
    }
    else {
        return `A palavra "${palavraBuscar}" não foi encontrada na frase.`
    }
}

let frase = prompt("Digite uma frase:")
let palavraBuscar = prompt("Digite a palavra que deseja buscar na frase:")

alert(verificarPalavra(frase, palavraBuscar))

// FEITO
