/*
let i = 1;

while (i <= 10) {
    console.log(i);
    i++
}*/
/*
for (let i = 1;  i <= 10; i++) {
console.log(`5 x ${i} = ${5 * i}`)
*/
/*
let soma = 0

for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log(soma)
*/

//Peça 5 números ao usuário, calcule e mostre a média.

//**Exemplo:** entradas `2`, `4`, `6`, `8` e `10` → saída `A média é 6`
/*
let soma =0;

for (let i = 1; i <= 5; i++) {
  const num = Number(prompt(`Digite o ${i} número`));
  soma += num
}
 const media = soma / 5;
 console.log(`A média é ${media}`)
*/

//Peça nomes repetidamente. Só pare quando o usuário digitar "sair".

//**Exemplo:** entradas `Ana`, `Bia` e `sair` → saídas `Você digitou: Ana` e `Você digitou: Bia`
/*
let nome;

do {
    nome = prompt("Digite um nome (ou sair para encerrar)");
    alert(`Voçê digitou ${nome}`);
    if (nome !== "sair")
} while (nome !== "sair");
    */
/*
let num

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0)
        console.log(i)
}
    */
/*
Peça uma palavra e verifique se é um palíndromo (lê-se igual de frente para trás, ex.: "arara").

**Exemplo:** `arara` → `arara é um palíndromo!` · `casa` → `casa não é um palíndromo.`
*/
/*
const palavra = prompt("Escreva uma palavra")

let invertida = "";

for (let i = palavra.length -1; i >= 0; i--) {

invertida += palavra[i];
}
if (palavra === invertida) {
    alert(`${palavra} é um palíndromo`)
} else {
    alert(`${palavra} não é um palíndromo`)
}*/

//Simule um menu de banco(1 - Depositar, 2 - Sacar, 3 - Sair).Enquanto o usuário não digitar 3, o menu deve continuar aparecendo.

//** Exemplo:** opção`1` com valor `100` → `Depósito realizado. Saldo: R$100`; depois opção `2` com valor `30` → `Saque realizado. Saldo: R$70`; depois opção `3` → `Programa encerrado
// 
// 
/*
let saldo =0;
let opcao;

let depositar
let Sacar

do {
    opcao = prompt("Menu:\n1. Depositar\n2. Sacar\n3. Sair")
if (opcao === "1") {
    const valor =Number(prompt("Valor para depósito:"))
    saldo += valor;
    alert(`Depósito realizado. Saldo: R$${saldo}`)
} else if (opcao === "2") {
    const valor = Number(prompt("Valor para sacar"))
    if (valor > saldo) {
        alert("Saldo insuficiente.")
    } else {
        saldo -= valor;
        alert(`Saque realizado. Saldo: R$${saldo}`)
    }
}


} while (opcao !== "3");
 /*

*/
/*
for (let i = 1; i <= 10; i++){
    console.log(`Tabuada do ${i}`)
    for (let j = 1; j <= 10; j++){
        console.log(`${i} X ${j} = ${i * j}`);
    }

} */

    
