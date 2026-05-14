// ## Verificador de Comprimento e Presença de Palavras (2 pontos)
// **Enunciado:**
// Implemente a função verificarPalavra, que recebe uma frase e uma palavraBusca e:
// - Remove espaços extras no início e no final da frase antes de realizar a verificação.
// - Retorna "A frase é muito curta" se o comprimento da frase for menor que 5 caracteres.
// - Retorna "A frase contém a palavra de busca" se palavraBusca estiver contida
//   dentro da frase, ignorando maiúsculas e minúsculas.
// - Retorna "A frase não contém a palavra de busca" caso contrário.
//
// Exemplos:
//   verificarPalavra("Olá", "olá")               → "A frase é muito curta"
//   verificarPalavra("  JavaScript é incrível  ", "javascript") → "A frase contém a palavra de busca"
//   verificarPalavra("JavaScript é incrível", "python") → "A frase não contém a palavra de busca"
function verificarPalavra(frase, palavraBusca) {
  // TODO: implementar função
  frase = frase.trim();

  if (frase.length < 5) {
    return "A frase é muito curta";
  }

  if (frase.toLowerCase().includes(palavraBusca.toLowerCase())) {
    return "A frase contém a palavra de busca";
  }

  return "A frase não contém a palavra de busca";
}
// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { verificarPalavra };