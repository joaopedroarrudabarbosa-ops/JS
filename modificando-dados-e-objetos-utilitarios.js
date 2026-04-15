//ENTRADA
let usuario = prompt("Digite seu usuario: ")
console.log(usuario)
let senha = prompt("Digite sua senha: ")
console.log(senha)

//VALIDAÇÃO
if (usuario === null || senha === null)
    alert("bota um usuario e senha valido ai porra")

//PROCESSAMENTO
if (usuario === "1234" && senha === "1234") {
    alert("Login realizado com sucesso!")
    window.location.href = "home.html" // redireciona o usuario para outra pagina
}
else {
    alert("Usuario ou senha incorretos.")
}

nome.length // retorna a quantidade de caracteres
nome.includes // verifica se o conteudo da variavel inclui o q deseja 
nome.toLowerCase // transforma tudo em  minusculo
nome.toUpperCase // transforma tudo em maiusculo
nome.trim // remove os espaços nao desejados (sem querer) do inicio e do fim
nome.replace(busca,substituto) // substitui valores
nome.replaceAll // substitui todos os valores 
toLocaleString

Math.random() // 0 à .0.99999999

Math.round() // arredonda para o mais proximo
Math.floor // arredonda para baixo
Math.ceil // arredonda para cima 

Math.floor(Math.random()) * 7 