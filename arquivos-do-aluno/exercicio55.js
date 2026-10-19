const convidado = ["Ana","Bruno","Carla","Diego"]
const procurado = "Carla";
let posicaoEncontrada = -1 



for( let i = 0; i < convidados.lenght; i++){
if (convidados[i] === procurado) {
posicaoEncontrada = i;
break;

}
} 
if (posicaoEncontrada === -1){
    console.log(procurado, "não está na lista")
} else {
console.log(procurado,"está na posição",posicaoEncontrada);    
}
