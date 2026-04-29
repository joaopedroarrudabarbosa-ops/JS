// function saudacao(nome, periodo = "dia") { // parametro
//     alert(`Olá ${nome}, uma boa ${periodo}.`)
//     return `Olá ${nome}, uma boa ${periodo}.` // return sempre matando a funcao
// }

// const fraseSaudacao = saudacao("Yuri")
// saudacao("Joao", "noite") // argumento
// alert(fraseSaudacao)


// let numero1 = prompt("Digite o primeiro numero: ")
// let numero2 = prompt("Digite o segundo numero: ")

// function maiorNumero(numero1,numero2){
//     if (primeiroNumero>segundoNumero) {
//         return `O valor ${primeiroNumero} é maior que o ${segundoNumero}.`
//     }
//     else if (b>a) {
//         return `O valor ${segundoNumero} é maior que o ${primeiroNumero}.`
//     }
//         return `Os valores são iguais.`
// }

// alert(maiorNumero(numero1,numero2))

// alert(maiorNumero(numero1,numero2))

// alert(maiorNumero(5,7))
// alert(maiorNumero(10,5))
// alert(maiorNumero(10,10))


// function converterTexto(texto){
//     return texto.trim().toUpperCase()
// }
// alert(converterTexto("   eae   "))

let numero = prompt("Digita um numero de 1 a 10: ")
let aleatorio = Math.floor(Math.random() * 10) + 1

sorteio(numero, aleatorio)

function sorteio(ale, num){
    if (num === ale) {
        alert("Você acertou o numero aleatorio entre 1 a 10")
    }
    return alert("Errou")
}