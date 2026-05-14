// ## Descrição de Soma (2 pontos)
// **Enunciado:**
// Implemente a função descreverSoma, que recebe dois valores: a e b.
// A função deve:
// - Verificar se AMBOS são números.
// - Retornar "Valores inválidos." se qualquer um não for número.
// - Retornar a string "A soma de <a> e <b> é <resultado>." caso válido.
//
// Exemplos:
//   descreverSoma(3, 7)    → "A soma de 3 e 7 é 10."
//   descreverSoma("3", 7)  → "Valores inválidos."
//   descreverSoma(5, true) → "Valores inválidos."

function descreverSoma(a,b) {
    // TODO: implementar função
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Valores inválidos."
    }
    resultado = a + b
    return `A soma de ${a} e ${b} é ${resultado}.`
}
// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { descreverSoma };

// FEITO