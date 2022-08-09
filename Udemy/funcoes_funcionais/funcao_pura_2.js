
// Funcão impura, por depender de um valor aleatório 
function gerarNumeroAleatorio(min, max){
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(1, 10))
console.log(gerarNumeroAleatorio(1, 10))
console.log(gerarNumeroAleatorio(1, 10))
console.log(gerarNumeroAleatorio(1, 10))