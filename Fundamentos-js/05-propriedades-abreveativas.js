// dados do usuario
let fullname = 'Janiscleison Junqueira Júnior'
let username = 'Junin'
let group = 'alunos'

/* 
    Criando um objeto a partir das variedades acima.
    Note que o nome das propriedades (a esquerda)
    conhecide com o nome das variaveis (a direita)
*/

let user = {
    fullname: fullname,
    username: username,
    group: group
}

console.log(user)

// Usando propriedade abreviada 

let user1 = {
    fullname,
    username,
    group
}

console.log('Usando Propriedade abreviada:', user1)

// Um objeto pode misturar propriedades abreviadas e propriedades nao abreviadas

let user2 = {
    fullname,
    username,
    password: '123456',                 // propriedade nao abreviada
    group,
    last_login: '2023-02-16 08:21:42'   // propriedade nao abreviada
}

console.log('Usando Propriedade abreviada e não abreviada:', user2)

/* Depurção udanso propriedade abreviadas */

// exibindo o valor de duas variaveis. veja os valores
// são exibidos, mas a saida não informa de quais variaveis prevem os valores

let x = 10, y = 'batata'
console.log(x, y)

//saida melhorada: passar as variaveis no console.log(), usando string templates

console.log({ x, y })