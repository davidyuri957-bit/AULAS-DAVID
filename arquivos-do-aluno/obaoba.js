const fila = ["Ana","Bruno","Carla"]

while(fila.length > 0){
    const pessoa = fila.shift()
    console.log("Atendendo: ", pessoa, "- ainda esperando",fila.length) 
}
console.log ("Pessoal já foi embora agora são ", fila.length)

console.log("Fila vazia, caixa fechado!")