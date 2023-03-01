const numero = [10, 19, 3, -4, 13, -11, 15, 0, -1]
const fruta = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

/*metodo find() encontra o primeiro elemento de um vetor que corresponde oa retorno da função passada como parametro*/

console.log('Primeiro Numero Negativo: ', numero.find(n=>n<0))

console.log('Primeiro Múltiplo de 5: ', numero.find(x=> x%5 === 0))

console.log('primeira fruta começãndo com M: ', fruta.find(f => f.charAt(0) === 'm'))

console.log('primeira fruta que termina com R: ', fruta.find(a => a.charAt(-1) === 'r'))