//O reduce() no JavaScript é um método de arrays que permite reduzir todos os elementos de um array a um único valor. Ele acumula um valor à medida que percorre o array, aplicando uma função em cada item. Esse valor acumulado pode ser qualquer tipo de dado: número, string, objeto, etc.

let ordens = [
    {cliente: "Roberto", tipo: "compra", quantidade: 56, ativo: "NFLX34"},
    {cliente: "Ricardo", tipo: "compra", quantidade: 76, ativo: "NFLX34"},
    {cliente: "Raphael", tipo: "venda", quantidade: 21, ativo: "NFLX34"}
]


//JEITO OLDSCHOOL
// let quantidadeDeOrdens = 0
// for(let i = 0; i < ordens.length; i++){
//     quantidadeDeOrdens += ordens[i].quantidade
// }

// console.log(quantidadeDeOrdens)



// COM REDUCE
//  criando variavel, recebendo array e fazendo processo de reduce:
let quantidadeDeOrdens = ordens.reduce(function(somaOrdens, ordem){ //funcao que recebe somaOrdens e a ordem
    console.log("Ordem: " + somaOrdens, ordem);// para verificar melhor quais sao os paramtros que estamos pegando

    return somaOrdens + ordem.quantidade //retorna valor da somaOrdens que começava com zero + o atributo quantidade la do array e entra como parametro acima
}, 0) // definimos que a variavel quantidadeDeOrdens começa com 0

console.log(quantidadeDeOrdens);


//VERSAO REDUZIDA
// let quantidadeDeOrdens = ordens.reduce((somaOrdens, ordem) => somaOrdens + ordem.quantidade, 0)
