const notas = [1,6,8,10,50]

function calculaMedia(arrayDeNotas){

    
    let soma = 0
    for(let i = 0; i < arrayDeNotas.length; i++){
     
        soma += arrayDeNotas[i]
    }
    return soma / arrayDeNotas.length
}

const media = calculaMedia(notas)
console.log ("resultado", media)