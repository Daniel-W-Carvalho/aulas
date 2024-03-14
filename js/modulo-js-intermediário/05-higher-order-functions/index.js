// Em JavaScript, as Higher Order Functions (Funções de Ordem Superior) são funções que podem receber outras funções como argumentos ou retornar funções como resultado. Elas são um conceito importante na programação funcional e são usadas para criar abstrações poderosas e expressivas.

// Há duas maneiras principais pelas quais as funções de ordem superior podem ser utilizadas:



// Passando funções como argumentos:
// Isso permite que você forneça um comportamento personalizado para a função de ordem superior. Por exemplo, a função map() de arrays em JavaScript é uma função de ordem superior que recebe uma função de callback como argumento e a aplica a cada elemento do array, retornando um novo array com os resultados.
// Exemplo:
const numeros = [1, 2, 3, 4, 5];

// Utilizando a função de ordem superior map() para dobrar cada número
const dobrados = numeros.map(function(numero) { // .map é uma função que faz com que você passe por cada elemento do array
    return numero * 2;
});
console.log(dobrados); // Saída: [2, 4, 6, 8, 10]




// Retornando funções:
// Isso permite que você crie funções que produzem comportamentos especializados. Por exemplo, uma função que retorna outras funções pode encapsular diferentes estratégias de processamento de dados com base em parâmetros ou condições.
// Exemplo:
function criarSaudacao(saudacao) {
    return function(nome) {
        console.log(saudacao + ", " + nome + "!");
    };
}

const saudacaoOi = criarSaudacao("Oi");
const saudacaoOla = criarSaudacao("Olá");

saudacaoOi("Alice"); // Saída: Oi, Alice!
saudacaoOla("Bob"); // Saída: Olá, Bob!


// As funções de ordem superior em JavaScript são poderosas porque permitem criar código modular e flexível, facilitando a composição e a reutilização de funcionalidades.


//------------------------------------------------------------------------------------------------------------------------------------

//OUTRO EXEMPLO:
const calcularAnoNascimento = function (idade, mesNascimento, imprimir) {
    const mesAtual = 3
    let anoNascimento = 2024 - idade
    if (mesNascimento > mesAtual) anoNascimento--
    imprimir(anoNascimento)
}

let imprimirAnoNascimento = anoNascimento => {
    console.log(`Seu ano de nascimento é ${anoNascimento}`);
}

calcularAnoNascimento(26, 11, imprimirAnoNascimento)

//------------------------------------------------------------------------------------------------------------------------------------

//OUTRO EXEMPLO:

//AO INVES DE USARMOS ASSIM:
// function dobrar (numero){
//     return numero * 2
// }
// function triplicar (numero){
//     return numero * 3
// }
// function quadruplicar (numero){
//     return numero * 4
// }

// PODEMOS USAR ASSIM
function multiplicar(multiplicador) {
    return function (numero) {
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar (3)
let quadruplicar = multiplicar (4)

console.log(dobrar(3))
console.log(triplicar(3))
console.log(quadruplicar(3))



