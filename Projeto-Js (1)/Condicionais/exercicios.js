/*
const semaforo = prompt("Digite uma cor(verde, vermelho, amarelo)");

if (semaforo === "verde") {
    alert("Siga")
} else if (semaforo === "vermelho") {
    alert("PARE")
} else if (semaforo === "amarelo") {
    alert("cuidado")
} else ("cor inválida")
alert("cor inválida")
*/
/*
const nota =Number(prompt("Digite uma nota:"))

if (Number.isNaN(nota) || nota < 0 || nota > 100) {
    alert("Nota inválida");
} else if (nota < 60) {
     alert("Reprovado")
} else if (nota >= 60 || nota >= 79) {
    alert("Recuperação");
} else if (nota >= 80 || nota >= 100) {
    alert("Aprovado")
} else ("Nota inválida")
 */
/*
const usuario =(prompt("Usuario:"))
const senha =(prompt("senha:"))

const perfilOk = (usuario === "admin" || usuario === "Gerente")
const senhaOk = (senha === "1234");

if (perfilOk && senhaOk) {
    console.log("acesso liberado")
} else {
    console.log("Acesso negado")
}
*/
/*
const numero = Number(prompt("Digite um número:"))

if (Number.isNaN(numero)) {
    alert("Numero inválido!!")
} else if (numero < 0) {
alert("Este numero é negativo")
} else if (numero === 0) {
    alert("Este numero e neutro")
}else if (numero > 0) {
    alert("Este numero e positivo")
}
*/
/*
const idade =Number(prompt("Digite a sua idade:"))

if (Number.isNaN(idade)) {
    alert("Idade Inválida!!")
} else if (idade < 18) {
    alert("Voçê não pode tirar carteira de motorista")
} else if (idade >= 18) {
alert("Voçê não pode tirar carteira de motorista")
}*/
/*
const n =Number(prompt("Digite um numero:"))

if (Number.isNaN(n)) {
    alert("Numero inválido")
} else if (n % 2 === 0){
    alert("O numero é Par.")
} else {
    alert("O numero é Ímpar.")
}*/
/*
const peso =prompt("Digite seu peso (kg)")
const altura =prompt("Digite sua altura (m)")

if (Number.isNaN(peso) && Number.isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Valores dee peso ou altura inválido")
} else {
const IMC =peso / (altura * altura);

console.log(`Seu IMC é: ${IMC.toFixed(2)}`)

if (IMC < 18.5) {
    alert("CLassificação: abaixo do peso")
} else if (IMC < 25){
     alert("CLassificação: Peso")
} else if (IMC < 30) {
     alert("CLassificação: sobrepeso")
} else {
     alert("CLassificação: obesidade")
}
}*/
/*
const valor =Number(prompt("Digite o valor da sua compra"))

if (Number.isNaN(valor) || valor <= 0) {
    alert("Compra inválida")
} else if (valor > 100 ) {
const calculo = valor * 0.1;
console.log ("Valor final com desconto: " + valor - calculo);
} else {
    alert("Valor final: R$" + valor)
}*/
/*/
const number =Number(prompt("Digite um numero"))
const number1=Number(prompt("Digite outro numero"))
const number2 =Number(prompt("Digite mais um numero"))

if (Number.isNaN(number, number1, number2)) {
    alert("Numero inválido")
} else {
 
    let maior = a;
    if (b > maior) maior = b;
    if (c > maior) maior = c;
    console.log("O maior número é: " + maior);

}*/

const n1 =Number(prompt("Digite um numero:"))
const n2 =Number(prompt("Digite outro numero"))
const operacao =prompt("Agora digite uma operação ( +, -, *, /)")
let resultado

if (Number.isNaN(n1) && Number.isNaN(n2)) {
    alert("Numero inválido!!")
} else {

switch (operacao) {
    case "+":
      resultado = n1 + n2;  
      alert(`Este e o resultado ${resultado}`)
    case "-":
      resultado = n1 - n2;  
      alert(`Este e o resultado ${resultado}`)
    case "*":
      resultado = n1 * n2;  
      alert(`Este e o resultado ${resultado}`)
    case "/":
     if (n2 === 0) {
        console.log("Divisão por zero não é permitido.")
     } else {
        resultado = n1 / n2;
        alert(`Este e o resultado ${resultado}`)
     }
        break;

    default:
        alert("Operação inválida")
}
}
