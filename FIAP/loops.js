// let i = 0;

// while (i<10) {
//     console.log(i);
//     i++; // i = i + 1; - sobe 1
//     // i--; - diminui 1
//     // i += 2 - sobe 2
// }


// function aumentarNumero(n) {
//     while (n>=1) {
//         if (isNaN(n)) {
//             alert("Não é um numero")
//         }
//         else if (n <= 0) {
//             alert("O numero deve ser positivo")
//         }

//         n--
//     }
// }

// let n = Number(prompt("Digite um numero: "))
// aumentarNumero(n)

// let count = 0;
// do {
//     console.log(count);
//     count++;
// } while (count > 5)

// for(let i = 1; i < 11; i++) {
//     console.log(i);
// }

// for(let i = 10; i>0; i--) {
//     console.log(i);
// }

let n = Number(prompt("Digite um numero que deseja saber a tabuada: "))
let cont 
let resp

for(i = 1; i<=10; i++){
    cont++
    resp = n * i
    alert(`A tabuada do seu numero é ${resp}`)
    console.log(`A tabuada do seu numero é ${resp}`)
}

