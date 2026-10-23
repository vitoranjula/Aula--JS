//Arrays - Lista de valores com ídice
/*
const frutas = ["Maça", "Banana", "Laranja"];
console.log(frutas[0]);
console.log(frutas[2]);
console.log(frutas.length);

frutas.push("Uva");
console.log(frutas);


//Objetos - conjuto de chave e valor
const pessoa = [
{nome: "Vitor", idade: 19}
]

console.log(pessoa.nome);
pessoa.cidade = "São Paulo"
*/

//while
/*
let i = 1

while (i <= 5) {
    console.log("Número: " + i);
    i++
}
*/

//do...while
/*
let senha;

do {
 senha = prompt("Digite a senha:")    
} while (senha !== "1234");
 */
/*
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`)
    console.log(`9 x ${i} = ${9 * i}`)
    
}
    */

//Contagem regressiva
/*
for (let i = 5; i >= 1; i--) {
    console.log(i);
}*/

//Acumulador: somando dentro do loop
/*
let soma = 0

for (let i = 1; i <= 5; i++) {
    soma += i;
    
}
console.log(soma);

*/

//for..of
/*
const frutas = ["Maça", "Banana", "Laranja"];

for (const fruta of frutas) {
console.log("Frutas:", fruta);
    
} */

//for...in
/*
const pessoa = {nome: "Vitor", idade: 19, cidade: "sao paulo"}

for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
}*/


//Laço dentro de laço
/*
for (let linha = 1; linha <= 2; linha++) {
let texto = "";

for (let coluna = 1; coluna <= 3; coluna++) {
texto += "* ";
}
console.log(texto)
}*/

/*
for (let linha = 1; linha<= 4; linha++) {
let texto = "";

for (let coluna = 1; coluna <= linha; coluna++) {
texto += "* "
}
console.log(texto)
}*/

