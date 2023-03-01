const carros = ['Chevette', 'Fusca', 'Opala', 'Maverik', 'Belina', 'Del Rey']

/*
    O metodo Includes() testa se o dado elemento existe em um vetor.
    Retorna True se existe, ou false caso contrario.
*/

console.log('Tem Fusca?: ', carros.includes('Fusca'))
console.log('Tem Corsel?: ', carros.includes('Corsel'))
console.log('Tem Belina?: ', carros.includes('Belina'))

/*
    O metodo Indexof() retorna o indice (posição) de um elemento no vetor.
    Caso o elemento não exista, retorna o valor -1.
*/

console.log('Posição do Opala: ', carros.indexOf('Opala'))
console.log('Posição do Del Rey: ', carros.indexOf('Del Rey'))
console.log('Posição do Corsel: ', carros.indexOf('Corsel'))

console.log(carros)