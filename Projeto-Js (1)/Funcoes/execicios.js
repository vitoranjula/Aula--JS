/*
function saudar (nome){
    console.log("Olá " + nome)
}

saudar("Vitor");
*/
/*
function areaRetangulo(b, a){
    return b * a;
}
console.log(areaRetangulo(5, 3));
*/



/*
function maiorDeTres (a, b, c){
let maior = a;
if (b > maior) maior = b;
if (c > maior) maior = c;
return maior;
}

console.log(maiorDeTres(3, 9, 5))
*/
/*
function Graus (c){
if(typeof c !== "number" || Number.isNaN(c)){
    return null;
}
    return c * 9 / 5 + 32
}

console.log(Graus(100));
*/

/*
function contaVogais(texto) {
    const vogais = "aeiou";
    let total = 0;

    for (const letra of texto) {
        if (vogais.includes(letra)) {
total++
        }
    }
    return total;
}

console.log(contaVogais("Senai"))
*/
/*
let invertida = ""

function inverso(inverte){

    for (let i = inverte.length -1; i >= 0; i--){
        invertida += inverte[i];
    }
    return invertida;
}

function ehPalindromo(texto) {
    const normal = texto.toLowerCase();
    return normal === inverso(normal)
}

console.log(ehPalindromo("Arara"))
*/

/*
function depositar(saldo, valor){
    if (valor <= 0){
console.log("Valor de deposito invalido");
    return saldo }

    return saldo + valor;
}

function sacar(saldo, valor) {
    if(valor <= 0 || valor > saldo){
        console.log("Operação não permitida")
        return saldo
    }
        
        return saldo - valor
}

let saldo = 100;
saldo = depositar(saldo, 50)
console.log("Saldo final:", saldo)
*/
/*
const operacoes = {
    "+": (a, b) => a + b,
    "*": (a, b) => a * b,
    "-": (a, b) => a - b,
    "/": (a, b) => (b === 0 ? null : a / b),
}
function calcular(a, op, b) {
    const funcao = operacoes [op];
    if (!funcao) {
        return null
    }
    
    return funcao(a, b)
}
console.log(calcular(10, "+", 5));
console.log(calcular(1000, "/", 24));
*/