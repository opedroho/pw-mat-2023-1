const nums = [2, 3, 5, 7, 11, 13, 17, 19, 23,29,31]
const Nomes = ['Aurival', 'Joander', 'Neurivania', 'Terentina', 'Leucimara']

/*
    Metodo map() cria um novo VETOR, de tamanho identico ao vetor original em que cada elemento
    corresponde a uma transformação feita no elemento original pela funçao passada como parametro
*/

// O map() que cria um novo vetor em que cada elemento corresponde ao dobro do vetor do elemento do vetor original

let dobro = nums.map(n => n * 2)

console.log('Vetor em número dobrado: ', dobro)

// o map() que transforma os elementos do vetro original em itens de uma lista para uso em uma pagina HTML

let listaHTML = Nomes.map(n => `<li> ${n} </li>`)

console.log('<h1> Nomes mais bonitos do Brasil </h1>')
console.log('<ul>')
console.log(listaHTML)
console.log('</ul>')