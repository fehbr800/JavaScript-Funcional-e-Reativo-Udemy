// ARROW FUNCTION

const felizNatal = () => console.log("Feliz Natal!!!")
felizNatal()

const saudacao = nome => `Fala ${nome}, blz??`
console.log(saudacao("Maria"))

const somar = (...numeros) =>{
    let total = 0
    for(let n of numeros){
        total += n
    }
    return total
}

console.log(somar(1,2,3))
console.log(somar(4,5,6))
console.log(somar(7,8,9,10))


//ARROW FUNCTION DENTRO DE OUTRA ARROW FUNCTION
const potencia = base => exp => Math.pow(base,exp)

console.log(potencia(2)(10))


//PALAVRA RESERVADA (THIS) NÃO FUNCIONA COM ARROW FUNCTION

Array.prototype.ultimo = function(){
    console.log(this[this.length -1])
}

const numeros = [1, 2, 3,500]
numeros.ultimo()