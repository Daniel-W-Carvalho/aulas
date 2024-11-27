//O map() no JavaScript é um método de arrays usado para transformar ou modificar os elementos de um array, criando um novo array com os resultados. O método aplica uma função de transformação a cada item do array original e retorna um novo array com os valores alterados.

let pessoas = [   //array com objetos de nomes e idades
    {nome: "Roberto", idade: 33},
    {nome: "Ricardo", idade: 33},
    {nome: "Raphael", idade:27}
]




//COMO FAZIAMOS

// let nomeDasPessoas = []
// for (let i = 0; i < pessoas.length; i++){
//     nomeDasPessoas.push(pessoas[i].nome)
// }

// console.log(nomeDasPessoas)



//COM MAP

let nomeDasPessoas = pessoas.map(function(pessoa){
    return pessoa.nome + " tem " + pessoa.idade + " anos de idade."
})
console.log(nomeDasPessoas)




//VERSAO SIMPLIFICADA

// let nomeDasPessoas = pessoas.map((pessoa) => pessoa.nome + " tem " + pessoa.idade + " anos de idade.")
// console.log(nomeDasPessoas)



