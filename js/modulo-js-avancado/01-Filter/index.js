//O filter() no JavaScript é um método de arrays usado para criar um novo array contendo apenas os elementos que satisfazem uma condição específica. Ele não modifica o array original, mas retorna um novo array com os itens filtrados.

let pessoas = [   //array com objetos de nomes e idades
    {nome: "Roberto", idade: 33},
    {nome: "Ricardo", idade: 33},
    {nome: "Raphael", idade:27}
]


//ao inves de usar assim:

// let pessoasComIdade33Anos = [] //criando uma variavel array que receberá um valor
// for(i=0; i < pessoas.length; i++){ // iterando
//     if(pessoas[i].idade === 33){ //se a idade de cada pessoa dentro do array/objeto for igual a 33
//         pessoasComIdade33Anos.push(pessoas[i]) // a variavel pessoasComIdade33Anos receberá(push) cada uma dessas pessas la de dentro do outro array/objeto
//     }
// }
// console.log(pessoasComIdade33Anos)




//USAR ASSIM:

// criando variavel que recebe = filtro do array pessoas e fazendo a seguinte função: 
let pessoasComIdade33Anos = pessoas.filter(function(pessoa){ //vai pegar cada pessoa como parametro
    return pessoa.idade === 33 //e retornar todas as pessoas com idade identica a 33 anos
})

console.log(pessoasComIdade33Anos)



//DEIXANDO AINDA MAIS SIMPLES COM ARROW FUNCTION:
// let pessoasComIdade33Anos = pessoas.filter((pessoa) => pessoa.idade === 33 )






// Exemplo Básico
// Digamos que você tenha um array de números e quer filtrar apenas os números maiores que 10:


const numeros = [5, 12, 8, 130, 44];

const numerosMaioresQueDez = numeros.filter(function(numero) {
    return numero > 10; // Apenas números maiores que 10
});

console.log(numerosMaioresQueDez); // [12, 130, 44]
// Aqui, o método filter() verifica cada número e retorna um novo array com os números maiores que 10.