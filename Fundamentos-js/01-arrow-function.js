/*
    Função tradicional com 1 parametro e 1linha de corpo contendo return
*/

function quadrado(n){
    return n*n
}
console.log('Função tradicional:', quadrado(7))

// Função equivalente no formato arrow function
const quadradoA = n => n*n

console.log('Função Arrow:', quadradoA(8))

/*
    Função tradicional com mais de 1 parametro e uma unica linha de conteudo return
*/

 function soma(a, b, c){
    return a + b + c
 }

 console.log('soma dos valores:', soma(10,15,20))

 //Arrow function equivalente
 //Quando há mais de 1 parametro, são necessarios parenteses
 //em volta deles
 const somaA = (a,b,c) => a+b+c

console.log('Soma Arrow:', somaA(2,3,4))

// numero aleatorio
//retorna numero de 0 a 9
// Math.random(): gera um numero entre 0 e 1
// Math.floor(): retira casas decimais de um numero fracionario
function aleatorio0a9(){
    return Math.floor(Math.random()*10)
}
console.log('Aleatorio tradicional', aleatorio0a9())

//Arrow função equivalente
//parenteses devem estar presente, mesmo que nao haja paramentros

const aleatorio0a9A = () => Math.floor(Math.random()*10)

console.log('Aleatorio Arrow:', aleatorio0a9A())

// função tradicional de fatorial

function fatorial(n){
    let resultado = 1
    for(let i = n; i > 1; i--) resultado *= i
    return resultado
}
console.log('Tradicional Fatorial:', fatorial(6))

//Arrow fatorial
//Nao há economia de linhas/codigo em relação ao corpo da função
const fatorialA = n => {
let resultado = 1
for(let i = n; i > 1; i--) resultado *= i
return resultado
}
console.log('Arrow Fatorial:', fatorial(5))