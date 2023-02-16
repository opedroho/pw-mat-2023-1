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