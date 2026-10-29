
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
c


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
/*
const alunos = {nome: "Vitor", idade: 19};

alunos.idade = 21;

alunos.cidade = "São paulo"
console.log(alunos);
delete alunos.cidade;
console.log(alunos);
*/


//filter, Map, find e Reduce
/*
function dobro(n){
    return n * 2
}

const dobroArrow = (n) => {
    return n * 2;
}

const dobroCurto = n => n *2;
*/


//FILTER

console.log("=== FILTER ===")

const lucas = { name: "Lucas", lastName: "Garcez", age: 20 };
const maria = { name: "Maria", lastName: "Oliveira", age: 17 };
const joao = { name: "João", lastName: "Silva", age: 18 };
const ana = { name: "Ana", lastName: "Santos", age: 22 };

const people = [lucas, maria, joao, ana];



const maiores = people.filter((value, index, array) => {
    console.log("Index", index)
    console.log("value", value.name)
    console.log("-------")
    return value.age >= 18;
} 
);

console.log("Resultado filter:", maiores);


console.log("==== MAP ====");

const nomes = people.map((value, index, array) => {
    console.log("Index", index);
    console.log("value", value.name);
     console.log("-------")
    return value.name;
});

console.log("Resultado map:", nomes)


console.log("===== FIND =====")
const mariaEncontrada = people.find((value, index, array) => {
     console.log("Index", index);
    console.log("value", value.name);
    return value.name === "Maria";
});

console.log("Resultado find:", mariaEncontrada);

const pedro = people.find(p => p.name === "Pedro");
console.log(pedro);
if (pedro === undefined) {
    console.log("Ele sumiu!!")
}


console.log("===== Reduce =====")
/*
array.reduce((acumulador, elementoAtual, indice, arrayOriginal) => {


}, valorInicial);
*/
const somaIdades = people.reduce((acc, value, index, array) => {
console.log("Index", index);
    console.log("value", value.name, value.age);
    console.log("Acumulador antes:", acc);
    return acc + value.age
}, 0);
console.log("Resultado reduce:", somaIdades)


const nomesMaiores = people
.filter(p => p.age >= 18)
.map(p => p.name. toUpperCase());

console.log(nomesMaiores)


const somaMaiores = people
.filter(p => p.age >= 18)
.reduce((acc, p) => acc + p.age, 0);

console.log(somaMaiores);