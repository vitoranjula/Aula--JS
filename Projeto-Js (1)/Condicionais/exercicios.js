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

const usuario =(prompt("Usuario:"))
const senha =(prompt("senha:"))

const perfilOk = (usuario === "admin" || usuario === "Gerente")
const senhaOk = (senha === "1234");

if (perfilOk && senhaOk) {
    console.log("acesso liberado")
} else {
    console.log("Acesso negado")
}
