
/*const notas = [7, 8.5, 6];
const aluno = {nome: "vitor", idade: 35}

const turma = [
    {nome: "vitor", idade: 35},
    {nome: "ana", idade: 20},
];
console.log(notas[1]);
console.log(aluno.nome);
console.log(turma[1].nome);
*/
/*
const frutas = ["maçã", "banana", "Laranja"];
console.log(frutas[0])
console.log(frutas.length)
console.log(frutas[frutas.length -1]);
console.log(frutas.at(-1));
console.log(frutas[10]);

frutas[1] = "Morango";
console.log(frutas);
*/
/*
const fila = ["Ana", "Bia"];

fila.push("Caio");
fila.unshift("Zeca");
console.log(fila);

const atendido = fila.shift();
const saiu =fila.pop();

console.log(fila);
console.log(atendido, saiu);
*/
/*
const letras = ["a", "b", "c", "d", "e"];
letras.splice(1, 2);
console.log(letras);

letras.splice(1, 0, "x", "y");
console.log(letras)


letras.splice(0, 1, "z");
console.log(letras);
*/
/**
 * 
 
const nums = [1, 2, 3, 4, 5];
console.log(nums.slice(1, 3))
console.log(nums.slice(-2))
console.log(nums.slice())

console.log(nums.includes(3));
console.log(nums.includes(99));

console.log(nums.indexOf(4));
console.log(nums.indexOf(99));

console.log(nums.join("-"));
console.log(nums);

const a = [1, 2];
const b = [3, 4];
console.log(a.concat
    (b)
);
console.log([...a, ...b]);
console.log([0, ...a, 99, ...b])
*/

const alunos = {nome: "Vitor", idade: 19};

alunos.idade = 21;

alunos.cidade = "São paulo"
console.log(alunos);
delete alunos.cidade;
console.log(alunos);

