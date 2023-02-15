let media = 5, resultado

if(media >= 6){
    resultado = 'Aprovado'
}else{
    resultado = 'Reprovado'
}

console.log({media, resultado})

//Usando operador Ternario
resultado = media >= 6 ? 'Aprovado' : 'Reprovado'

console.log('Operador Ternario:',media,',', resultado)

//////////////////////////////////////////////////////

let user = 'guest', msg

//Quando há apenas uma linha depois de um if, um else
//um while, etc., podemos omitir as chaves

if(user === 'Admin') msg = 'Bem Vindo!'
else msg = 'Sem permissão!'

console.log('|',user,'|', msg)

//Usando operador Ternario
msg = user === 'Admin' ? 'Bem Vindo!' : 'Sem Permissão!'

console.log('Operador Ternario:','|', user,'|', msg)