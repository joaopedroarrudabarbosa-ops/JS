let nome;
do {
    nome = prompt("Digite seu nome: ")
    if  (nome.length<3) {
        alert("Digite um nome verdadeiro")
    }
    else {
        alert(`Olá, ${nome}.`)
    }
} while (nome.length<3)

let idade;
do {
    idade = Number(prompt("Digite sua idade: "))
    if (isNaN(idade)) {
        alert("Digite um valor válido.")
    }
    else if (idade<=0) {
        alert(`Digite uma idade verdadeira.`)
    }
    else if (idade<150) {
        alert(`Você tem ${idade} anos.`)
    }
    else {
        alert(`Idade muito alta, digite uma idade válida..`)
    }
} while (idade>150 || idade<=0)

let salario;
do {
    salario = Number(prompt("Digite seu salário: "))
    if (isNaN(salario)) {
        alert("Digite um valor válido.")
    }
    else if (salario>0) {
        alert(`Você recebe ${salario}.`)
    }
    else {
        alert(`Digite um salário válido.`)
    }
} while (salario<=0)

let genero;
do {
    genero = prompt("Digite seu gênero? M/F")
    if (genero !== "M" && genero !== "F") {
        alert("Digite um gênero verdadeiro.")
    }
    else if (genero === "M" || genero === "F") {
        alert(`Seu gênero é ${genero}.`)
    }
} while (genero !== "M" && genero !== "F")

let estadoCivil;
do {
    estadoCivil = prompt("Digite seu estado civil? S/C/V/D ")
    if (estadoCivil.toUpperCase() !== "S" && estadoCivil.toUpperCase() !== "C" && estadoCivil.toUpperCase() !== "V" && estadoCivil.toUpperCase() !== "D") {
        alert("Digite um estado civil válido.")
    }
    else if (estadoCivil.toUpperCase() === "S" || estadoCivil.toUpperCase() === "C" || estadoCivil.toUpperCase() === "V" || estadoCivil.toUpperCase() === "D") {
        alert(`Seu estado civil é ${estadoCivil}.`)
    }
} while (estadoCivil.toUpperCase() !== "S" && estadoCivil.toUpperCase() !== "C" && estadoCivil.toUpperCase() !== "V" && estadoCivil.toUpperCase() !== "D") 