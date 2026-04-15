// let nome = prompt("Qual é o seu nome?");
// let idade = prompt("Qual sua idade?");
// let curso = prompt("Qual seu curso?");
// alert(`Olá, me nome é ${nome}, tenho ${idade} anos e estudo ${curso} na FIAP.`);

// let metros = Number(prompt("Qual é a distancia que voce quer converter?")) ;
// let centimetros = metros * 100;
// alert(`${metros} metros equivale a ${centimetros} centimetros.`);

// let peso = Number(prompt("Qual seu peso?"));
// let altura = Number(prompt("Qual sua altura?"));
// let imc = peso/(altura * altura);
// alert(`O seu IMC é ${imc.toFixed(2)}.`); - .toFixed(2) limite o resultado em duas casas decimais 


let numero1 = Number(prompt("Digite um numero para somar"));
let numero2 = Number(prompt("Digite outro numero para somar"));
let operacao = prompt("Qual operação você quer fazer +, -, /, *");
let resultado;

// Validação de entrada
if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, digite números válidos.");
} else {
    // Processamento das operações
    if (operacao === "+") {
        resultado = numero1 + numero2;
        alert(`O resultado de ${numero1} + ${numero2} é ${resultado}.`);
    } 
    else if (operacao === "-") {
        resultado = numero1 - numero2;
        alert(`O resultado de ${numero1} - ${numero2} é ${resultado}.`);
    } 
    else if (operacao === "*") {
        resultado = numero1 * numero2;
        alert(`O resultado de ${numero1} * ${numero2} é ${resultado}.`);
    } 
    else if (operacao === "/") {
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            alert(`O resultado de ${numero1} / ${numero2} é ${resultado}.`);
        } else {
            alert("Não é possível dividir por zero.");
        }
    } 
    else {
        alert("Operação inválida! Escolha entre +, -, * ou /.");
    }
}
 
// parseFloat
// Number

// = - ATRIBUI UM VALOR À VARIAVEL
// == - APENAS COMPARA O VALOR 5 + "5"
// === - COMPARA VALOR E TIPO
// != - APENAS COMPARA VALOR
// !== - COMPARA VALOR E TIPO
// < - 
// > - 
// <= - 
// >= - 
// COMPARAÇÃO COM STRING ELE COMPARA POR CARACTERES
// && - "e" logico - AMBOS CORRETO
// || - "ou" logico - APENAS UM CORRETO
// ! - 



