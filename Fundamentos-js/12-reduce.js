const nums = [2,3,5,7,11,13,17,19,23,29,31]
const nomes = ['Aurival', 'Joender', 'Neurivania', 'Terebintina', 'Leucimara']

/*
    reduce() é um metodo que reduz um vetor a um valor singular.
    Para isso, aplica uma função a cada elemento do vetor original,
    a qual efetua uma transformação e acumula os resultados em cada passada
*/

// Reduce() para somar todos os elementos do vetor de numeros
let soma = nums.reduce((acumulador, elemento) => acumulador + elemento)

// Reduce() para colocar em MAIUSCULO e concatenar com virgulas
// intercaladas cada elemento do vetor nomes

let listaNomes = nomes.reduce((acum, el) => acum.toUpperCase() + ', ' + el.toUpperCase())

console.log({soma, listaNomes})