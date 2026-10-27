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
