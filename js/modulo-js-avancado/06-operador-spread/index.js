//O operador spread (...) em JavaScript é usado para "espalhar" os elementos de um array, propriedades de um objeto, ou mesmo argumentos de uma função. Ele facilita o trabalho com estruturas de dados, permitindo expandir ou copiar seu conteúdo de forma clara e prática.



// const pessoas = ['Roberto', 'Daniel', 'Jorgin'];
// console.log(...pessoas)

let pessoas1 = ["Roberto", "ricardo", "Daniel"];
let pessoas2 = ["pedro", "jurandir", "joao"];

//CONCATENAR DOIS ARRAYS
// pessoas1 = [...pessoas1, ...pessoas2, ...pessoas3]
// console.log(pessoas1);

const pessoa10 = {nome: "Daniel", idade: 27}

const objetoClonado = {...pessoa10}
console.log(objetoClonado)
console.log(pessoa10);
