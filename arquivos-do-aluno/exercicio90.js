function gerarTabuada(numero,limite){
const resultado = []

for (let i = 1; i <= limite; i++){
resultado.push(numero * i)

}
return resultado;
}

console.log(gerarTabuada(3,5));