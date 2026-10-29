/*
const fila = []

fila.push("Ana");
fila.push("Bia");
fila.push("Caio");
console.log(fila);

fila.shift();
console.log(fila);

fila.unshift("Duda");
console.log(fila)
*/
/*
function remover(lista, valor){
const pos = lista.indexOf(valor);

if (pos === -1) {
    return false;
}
lista.splice(pos, 1);
return true;

}
const letras = ["a", "b", "c"];
console.log(remover(letras, "b"));
console.log(remover(letras))
*/
/*
const aluno = {nome: "vitor", idade: 19,};

console.log(aluno);

aluno.idade = 21;
console.log(aluno);

aluno.curso = "Senai";
console.log(aluno);

delete aluno.idade;
console.log(aluno);

somar a media e somar dois numeros e dividir por dois
*/

/*

function mediaTurma (alunos){
    let soma = 0
    for (const aluno of alunos){
soma += aluno.nota}
return soma / alunos.length;
}


function melhorAluno(alunos) {
let melhor = alunos[0];
for (const aluno of alunos){
    if (aluno.nota > melhor.nota){
        melhor = aluno
    }
}

return melhor;
}


const turma = [
  { nome: "Ana", nota: 8 },
  { nome: "Bia", nota: 5.5 },
  { nome: "Caio", nota: 7 },
];

console.log(mediaTurma(turma).toFixed(2));
console.log(melhorAluno(turma));

*/
