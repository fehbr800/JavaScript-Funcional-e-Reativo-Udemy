// Uma funcao pura e uma funcao em que o valor 
// de retorno é determinado APENAS por seus valoes
// de entrada, sem enfeitos colaterais observaveis

const PI = 3.14

//funcao impura = PI é um valor externo!
function areaCirc(raio){
    return raio * raio * Math.PI // estável 
}

console.log(areaCirc(10))
console.log(areaCirc(30))


//funcao Pura = PI é um valor interno!!
function areaCircPura(raio, pi){
    return raio * raio * pi
}

console.log(areaCircPura(10, 3.14))

