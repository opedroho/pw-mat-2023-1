//função que calcula a area de uma figura geometrica plana

function Cacular_Area(base, altura, forma) {
    switch (forma) {
        case 'R': //Retangulo
            return base * altura
        case 'T': //Triangulo
            return base * altura / 2
        case 'E': //Elipse ou circulo
            return (base / 2) * (altura / 2) * Math.PI
        default: //forma desconhecida
            return null
    }
}

console.log(`Área Retangulo 12x16: ${Cacular_Area(12, 16, 'R')}`)
console.log(`Área Triangulo 15x9: ${Cacular_Area(15, 9, 'T')}`)
console.log(`Área Elipse 10x18: ${Cacular_Area(10, 18, 'E')}`)
console.log(`Área Forma Desconhecida 7x13: ${Cacular_Area(7, 13, 'A')}`)

//Mesma condição, so que será pre definido o Retangulo como principal

function Cacular_Area1(base, altura, forma = 'R') {
    switch (forma) {
        case 'R': //Retangulo
            return base * altura
        case 'T': //Triangulo
            return base * altura / 2
        case 'E': //Elipse ou circulo
            return (base / 2) * (altura / 2) * Math.PI
        default: //forma desconhecida
            return null
    }
}

console.log(`Área Retangulo 12x16: ${Cacular_Area1(12, 16, 'R')}`)
console.log(`Área Triangulo 15x9: ${Cacular_Area1(15, 9, 'T')}`)
console.log(`Área Elipse 10x18: ${Cacular_Area1(10, 18, 'E')}`)
console.log(`Área Forma Desconhecida 7x13: ${Cacular_Area1(7, 13, 'A')}`)

//EX
console.log(`Área Retangulo 12x16: ${Cacular_Area1(12, 16)}`)

/* Regra para utilização dos parametros predefinidos em função
    1. o parametro predefinidos deve virsempre por ultimo na lista dos parametros 
    2. pode haver mais de um parametropredefinidos, mas ele deve vir sempre no final da lista de parametros
*/