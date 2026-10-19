const temperatura = [12,17,-1,21,8]
let maior = temperatura[0];

for(let i = 1; i < temperatura.length; i++){
if (temperatura[i] > maior){
maior = temperatura[i]
}
} console.log("Maior temperatura: ", maior)