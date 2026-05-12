let i = 0; // Inicialização
while (i < 10) {
    console.log(i);
    i++; // Incremento (importante para não criar um loop infinito)
}

function contagemRegressiva(n) {
    if (isNaN(n)) {
        alert("Não é um número");
        return; // Para a função se não for número
    }
    if (n <= 0) {
        alert("O número deve ser positivo");
        return;
    }

    while (n >= 1) {
        console.log(n);
        n--; // Diminui 1 a cada volta
    }
}
let num = Number(prompt("Digite um número para o contador: "));
contagemRegressiva(num);

// Contagem crescente de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log("Crescente: " + i);
}

// Contagem decrescente de 10 a 1
for (let i = 10; i > 0; i--) {
    console.log("Decrescente: " + i);
}

let n = Number(prompt("Digite um numero que deseja saber a tabuada: "));

if (isNaN(n)) {
    alert("Por favor, digite um número válido.");
} else {
    let resultadoFinal = `Tabuada do ${n}:\n`;

    for (let i = 1; i <= 10; i++) {
        let resp = n * i;
        
        resultadoFinal += `${n} x ${i} = ${resp}\n`;
        
        console.log(`${n} x ${i} = ${resp}`);
    }

    alert(resultadoFinal);
}