setTimeout(function(){
    console.log("Executando o callback...")
  
    

    setTimeout(function(){
        console.log("Executando o callback...")
    
    },2000)
    setTimeout(function(){
        console.log("Executando o callback...")
    
    },2000)
}, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}
esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)