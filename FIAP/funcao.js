function saudacao(nome, periodo = "dia") { // parametro
    alert(`Olá ${nome}, uma boa ${periodo}.`)
    return `Olá ${nome}, uma boa ${periodo}.` // return sempre matando a funcao
}

const fraseSaudacao = saudacao("Yuri")
saudacao("Joao", "noite") // argumento
alert(fraseSaudacao)

function maiorNumero(a, b) {
    a = Number(a);
    b = Number(b);

    if (a > b) {
        return `O valor ${a} é maior que o ${b}.`;
    } else if (b > a) {
        return `O valor ${b} é maior que o ${a}.`;
    } else {
        return `Os valores são iguais.`;
    }
}

let numero = Number(prompt("Digita um numero de 1 a 10: "));
let aleatorio = Math.floor(Math.random() * 10) + 1;

function sorteio(escolha, sorteado) {
    if (escolha === sorteado) {
        alert(" Parabéns! Você acertou.");
    } else {
        alert(`Errou! O número sorteado foi ${sorteado}.`);
    }
}

sorteio(numero, aleatorio);