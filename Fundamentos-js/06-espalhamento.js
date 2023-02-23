// encontrando o menor e o maior numero
//vetor com alguns numeros

let minimo = Math.min(2, -7, 8, 4, 0)
let maximo = Math.max(2, -7, 8, 4, 0)

console.log({maximo, minimo})

// numeros dentro do vetor

let vetor = [2, -7, 8, 4, 0]

let Minimo = Math.min(vetor)    //NÃO FUNCIONA
let Maximo = Math.max(vetor)    //NÃO FUNCIONA

console.log('Vetor empacotado:', {Maximo, Minimo})

// A sintaxe de espalhamento ou spreading(representa por.... antes da variavel)
//é capaz de desempacotar um vetor em uma serie de valores avulsos

let vetor1 = [2, -7, 8, 4, 0]

let Minimo1 = Math.min(...vetor1)
let Maximo1 = Math.max(...vetor1)

console.log('Vetor Desempacotado:', {Maximo1, Minimo1})

/*********************************************************/

let carro1 = {
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano: 1984,
    cor: 'Bege'
}

//copiando carro1 para carro2
// let carro2 = carro1     //NÃO FUNCIONA
let carro2 = {...carro1}

carro2.modelo = 'Opala'
carro2.marca = 'Chevrolet'
carro2.ano = 1979
carro2.cor = 'Preto'

console.log({carro1, carro2})

/*****************************************************/
//Problema: Juntar dois ou mais vetores em um só
let frutas = ['maçã', 'banana', 'laranja']
let verduras = ['alfaces', 'couve', 'rúcula']

//produzindo um vetor que contém tanto frutas quanto verduras
let hortifruti = frutas + verduras

console.log({hortifruti})

//metodos que funciona 1: JS Classico
let hortifruti1 = frutas.concat(verduras)

console.log({hortifruti1})

//metodos que funciona 2: usando espalhamento
let hortifruti2 = [...frutas, ...verduras]

console.log({hortifruti2})

/***********************************************/

//problema: como declarar uma função capaz de receber um numero arbitrario de algumentos?

console.log('soma de 7 números: ', soma(1,2,3,4,5,6,7))
console.log('soma de 12 números: ', soma(1,2,3,4,5,6,7,8,9,10,11,12))

// O espalhamento tambem resolve esse tipo de problema. Quando usado em parametro de função, passa a des chamado de parametro 
//RESTO

function soma(...valores){
//dentro da função, o parametro de resto se comporta como um vetor

let res = 0
for(let valor of valores) res += valor
return res
}