// Desestruturação de Valores

let frutas = ['Laranja', 'banana', 'maçã', 'Laranja', 'banana', 'maçã']

// A desestruturação cria variaveis avulsas e atrubui os elementos do vetor, EM ORDEM, a cada uma delas

let [fruta1, fruta2, fruta3] = frutas

console.log({fruta1, fruta2, fruta3})

//desestruturação parcial: 1º e 2º posição
let [f1, f2] = frutas

console.log({f1, f2})

//desestruturação parcial: 1º e 3º posição
let [g1, ,g3] = frutas

console.log({g1, g3})

//desestruturação parcial: 2º e 3º posição
let [, h2, h3] = frutas

console.log({h2, h3})

/************************************************************************/

//problema: Troca de valores entre variaveis (SWAP)

let x = 5
let y = 10

console.log('X =', x,' Y =', y);

// let aux = x
//     x = y
//     y = aux

[x, y] = [y, x]

console.log('Depois de SWAP: ',{x, y});

/*************************************************************/

//Desestruturação de Objetos

let pessoa = {
    nome: 'Orkutson de Oliveira',
    sexo: 'M',
    dataNas: '2010-04-29',
    email: 'Orkutson@gmail.com'
}

// Na desestruturação de Objetos, as variaveis avulsas:
// 1) PRECISAM TER O MESMO NOME das propriedades do objeto
// 2) Podem ser especificas em  qualquer ordem
// 3) podem ser feitas as desestruturações parciais

let {sexo, nome, email} = pessoa

console.log({nome, email, sexo})