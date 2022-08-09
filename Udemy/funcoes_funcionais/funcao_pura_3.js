
let qtdExecucoes = 0

//Funcao pura
function somar(a, b){
    qtdExecucoes++ // efeitos colaterais observaveis
    return a + b
}

console.log(qtdExecucoes)
console.log(somar(10,50))
console.log(qtdExecucoes)
