const numero = [10, 19, 3, -4, 13, -11, 15, 0, -1]
const fruta = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

/*
    Metodo filter() cria um NOVO VETOR contendo apenas os elementos do vetor de origem que 
    criterios da função passada como parametro
*/
const negativo = numero.filter(n => n < 0)
const div5 = numero.filter(i => i % 5 === 0)
const comecacomM = fruta.filter(f => f.charAt(0) === 'm')
const terminacomI = fruta.filter(x => x.slice(-1) === 'i')
const terminacomR = fruta.filter(a => a.slice(-1) === 'r')

console.log('Número negativo: ', negativo)
console.log('Números divisiveis por 5: ', div5)
console.log('Frutas que começam com M:', comecacomM)
console.log('Frutas que terminam com I: ', terminacomI)
console.log('Frutas que terminam com R: ', terminacomR)
