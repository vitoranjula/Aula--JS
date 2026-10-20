//Linguagem Interpretada
//NodeJs
//Tipagem fraca
/*
let minhaVariavel= 10;
console.log(minhaVariavel);

minhaVariavel = "Olá, mundo!!";
console.log(minhaVariavel);

minhaVariavel = true;
console.log(minhaVariavel);

let numero = 10;
let texto = "20";
let resultado = numero + texto;

console.log(resultado);
*/

//Variável 
//let palavra que cria a variável
//const palavra que cria a variável
//var palavra que cria a variável


//idade nome (etiqueta)
//= atribuir o valor
// 35 valor
/* 
let nome = "vitor";
let idade1 = 19;

console.log(nome);
console.log(idade1);
console.log(idade1 + 1);
console.log("Olá, " + nome + "!");

idade1 = 20;

const idade2 = 35;
idade2 = 30;


*/



//Case Sensitive

/*
let nome = "Vitor";
let Nome = "Maria";
let NOME = "joao";

console.log(nome);
console.log(Nome);
console.log(NOME);

//Palavras Reservadas
//let, const, var, if, else, for, while, function, return, class, new, switch, case*/

//Regras de Nomenclatura
//Pode começar com letra, _ ou $
//Pode conter: letras, números, _ ou $

/*
let idade = 20;
idade = 21;
console.log(idade);

const total = 150;
if (total > 100) {
    var desconto = 10;
    let frete = 0;

}

console.log(frete);*/

//Tipos Primitivos
/*
const preco = 19.9;
console.log(typeof preco);

const nome = "vitor";
console.log(typeof nome);

const ativo = true;
console.log(typeof ativo);

const vazio = null;
console.log(typeof vazio);

let indefinido;
console.log(typeof indefinido);
*/

//Strings e Template literals
/*
const nome1 = "Lucas";
const nome2 = "Maria";
const nome3 = `João`;
const idade = 19;

const nomeCompleto = "Vitor pereira Anjula";
console.log(nomeCompleto.length);
//length (comprimento)
console.log(nomeCompleto.toUpperCase());
console.log(nomeCompleto.toLocaleLowerCase());
console.log(`Olá, meu nome é ${nomeCompleto} e tenho ${idade} anos.`);
*/



/*
//Conversões de Tipo
console.log(Number("123"));
//NUmber numeros quebrados
console.log(parseInt("10.9"));
//ParseInt numeros inteiros
console.log(parseFloat("10.9"));
console.log(String(123));

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));

const texto1 = prompt("Digite um número");
const texto = Number(prompt("Digite um número"));
console.log(texto + 5);
*/


//Arrendodamento e formatando números
//const preco = 19.987;
//console.log(preco.toFixed(2));
//defini quantas casas decimais eu quero
//console.log(Math.round(preco));
//arredonda o numero que eu quero
//console.log(Math.floor(preco));
//abaixa o numero que eu quero
//console.log(Math.ceil(preco));
//sobe o numero que eu quero


/*
console.log(2 + 3)
console.log(5 - 2)
console.log(4 * 2)
console.log(10 / 2)
console.log(10 % 3)
console.log(2 ** 3)
*/

//OPeradores de comparação
/*
console.log(5 == "5"); //igual frouxo
console.log(5 == 5); 

console.log(5 === "5");  //igual estrito
console.log(5 === 5);  

console.log(5 != "5")  //diferente frouxo
console.log(5 != 7)  //diferente frouxo

console.log(5 !== "5")  //diferente estrito
console.log(5 !== 7)  //diferente estrito
*/

//Média de duas notas
/*
const nota1 = Number(prompt("primeira nota"));
const nota2 = Number(prompt("segunda nota"));

const media = (nota1 + nota2) / 2;
console.log(`media: ${media.toFixed(1)}`);
*/

//IMC (indice de Massa Corporal)
const peso = Number(prompt("digite seu peso (kg):"));
const altura = Number(prompt("Altura (m):"));

const IMC = peso / (altura ** 2);

alert(`IMC: ${IMC.toFixed(2)}`);





