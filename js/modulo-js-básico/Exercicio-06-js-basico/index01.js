//      VERIFICANDO SE UM NUMERO ESTA ENTRE 10 E 20 USANDO IF E CONSOLE APÓS A FUNÇÃO
//      USAR IF E CONSOLE DENTRO DA FUNÇÀO, No entanto, é importante notar que a função verificacao(numero) foi projetada para imprimir a mensagem diretamente    no console, então você estará limitado a essa funcionalidade.


// function estaNoIntervalo(numero) {
//     return numero >= 10 && numero <= 20;
// }

// let numero = 11;

// if (estaNoIntervalo(numero)) {
//     console.log("O número está entre 10 e 20");
// } else {
//     console.log("O número não está entre 10 e 20");
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//      VERIFICANDO SE UM NUMERO ESTA ENTRE 10 E 20 USANDO ? E :  NO CONSOLE NO LUGAR DE IF E ELSE.
function estaNoIntervalo(numero) {
    return numero >= 10 && numero <= 20;
}

let numero1 = 15;
let numero2 = 5;

console.log(`${numero1} está no intervalo entre 10 e 20? ${estaNoIntervalo(numero1) ? 'Sim' : 'Não'}`);
console.log(`${numero2} está no intervalo entre 10 e 20? ${estaNoIntervalo(numero2) ? 'Sim' : 'Não'}`);

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// VENDO SE UM NUMERO É IMPAR OU PAR USANDO OPERADOR TERNARIO NO CONSOLE.LOG
// EXEMPLO 1 
// function parOuImpar(numero){
//     return numero % 2 == 0
// }

// let numero = parOuImpar(2)
// console.log(numero ? "par" : "impar")



// VENDO SE UM NUMERO É IMPAR OU PAR USANDO OPERADOR TERNARIO NA PROPRIA FUNÇÃO
// EXEMPLO 2 
function parOuImpar(numero) {
    return numero % 2 == 0 ? "par" : "impar";
}

let resultado = parOuImpar(2);
console.log(resultado);

//-------------------------------------------------------------------------------------------------------------------------------------------------------


// let numero = 10;
// let texto = "Olá, mundo!";
// let booleano = true;
// let nulo = null;
// let indefinido = undefined;

// console.log(numero, typeof numero); // Deve imprimir: 10 'number'
// console.log(texto, typeof texto); // Deve imprimir: 'Olá, mundo!' 'string'
// console.log(booleano, typeof booleano); // Deve imprimir: true 'boolean'
// console.log(nulo, typeof nulo); // Deve imprimir: null 'object'
// console.log(indefinido, typeof indefinido); // Deve imprimir: undefined 'undefined'


//-------------------------------------------------------------------------------------------------------------------------------------------------------

// PROGRAMA PARA CALCULAR CONSUMO DO CLIENTE POR GRAMAS, MAS PEGANDO DE BASE O VALOR DO KG
// DIVIDIMOS O VALOR DO KG POR 1000 PARA ALCANÇAR O VALOR DA GRAMA
// TENDO VALOR DA GRAMA, PODEMOS MULTIPLICAR PELO CONSUMO DO CLIENTE E DESCOBRIR QUANTO ELE TEM QUE NOS PAGAR.

function calcularValor(valorKG, consumoGrama) {
    let valorGrama = valorKG / 1000
    let valor = consumoGrama * valorGrama
    return valor.toFixed(2)
}   

let valorKG = 50.00
let consumoGrama = 400
let preçoPagar = calcularValor(valorKG, consumoGrama)
console.log(`Você consumiu ${consumoGrama} gramas, totalizando ${valorKG} Reais.`)

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//PROGRAMA PARA CALCULAR SE UM NUMERO É MULTIPLO DE 5

function multiplo(num) {
    return num % 5 == 0
}

let num = 55

let resultad = `O numero ${multiplo(num) ? 'é multiplicador de 5' : 'não é multiplicador de 5'} `

console.log(resultad)


//-------------------------------------------------------------------------------------------------------------------------------------------------------

//VERIFICANDO SE A SOMA DE 3 ITENS O RESULTADO SEJA MAIOR QUE 100

function centenario(num1, num2, num3) {
    return num1 + num2 + num3 >= 100 ? "Sim, é maior que cem" : "Não é maior que cem"
}

console.log(centenario(50, 10, 10))

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//verificar se um nome tem mais de 5 caracteres

function veririficarQletras(palavra) {
    return palavra.length > 5 ? "maior que 5 caracteres" : "Não é maior que 5 caracteres"
}

let palavra = "Ronaldo"

console.log(veririficarQletras(palavra))

//-------------------------------------------------------------------------------------------------------------------------------------------------------


// EXEMPLO USANDO DUAS FUNÇÕES, UMA PARA CALCULAR FATORIAL E OUTRA APENAS PARA MOSTRAR NO CONSOLE.LOG, MAS UMA DEPENDENTE DA OUTRA

function fatorial(num) { // 2 - passo que ele cai na função e realiza toda a função
    result = 1
    for (let i = 1;  i<= num; i++) {  
       result = result * i;
    }
 
    return result  // 3 - ultimo laço e ele armazena o resultado nesta variavel e sai da função
}

function mostre(numero) { // 5 - passo em que ele cai na função e realiza, neste caso apenas um console.log para mostrar o resultado da função fatorial do passo 2
    console.log(numero);
}

let mandaNumero = fatorial(8); // 1 - passo em que a variavel recebe a entrada
mostre(mandaNumero); // 4 - passo em que ele cai na função mostre

//-------------------------------------------------------------------------------------------------------------------------------------------------------

function adivinhe(numero) {
    if(typeof numero !== "number" || numero > 100 || numero < 0){
        return "Passe um numero válido de 1 a 100";
    }

    if(numero > 87){
        return "meu numero é menor";
    }else if(numero < 87){
        return "meu numero é maior";
    }else{
        return "parabens, você acertou!";
    }
}

let numero = Number(prompt("Adivinhe o numero, entre 1 a 100 "));

alert(adivinhe(numero));

//--------------------------------------------------------------------------------------


function calculoSoma(num1, num2) {
    return num1 + num2;
}

function calculoSubtracao(num1, num2) {
    return num1 - num2;
}

function calculoMultiplicacao(num1, num2) {
    return num1 * num2;
}

function calculoDivisao(num1, num2) {
    return num1 / num2;
}

function verificacao(num1, num2, calculator) {
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        return "Digite um numero válido";
    }
    else if(calculator == 1){
      return calculoSoma(num1, num2);
    }
    else if(calculator == 2){
      return  calculoSubtracao(num1, num2);
    }
    else if(calculator == 3){
      return  calculoMultiplicacao(num1, num2);
    }
    else if(calculator == 4){
      return  calculoDivisao(num1, num2);
    } else{
        return "Opção de cálculo inválido";
    }
}

let num1 = Number(prompt("Digite um numero: "));
let num2 = Number(prompt("Digite outro numero: "));
let calculator = Number(prompt(`Você digitou ${num1} e ${num2}, qual calculo deseja fazer ? Digite o numero que corresponde ao calculo [1]Soma, [2]Subtração, [3]multiplicação, [4]divisão`));
let result = verificacao(num1, num2, calculator);

alert(`Resultado dos numeros escolhido [${num1}] e [${num2}] pelo calculco escolhido [${calculator}] é:  ${result}`);

//--------------------------------------------------------------------------------------

function estacoes(estacao) {
    estacao = estacao.toLowerCase();
    if (estacao == "março" || estacao == "abril" || estacao == "maio" || estacao == "junho"){
        return "Outono";
    }
    else if (estacao == "julho" || estacao == "agosto" || estacao == "setembro"){
        return "Inverno";
    }
    else if (estacao == "outubro" || estacao == "novembro" || estacao == "dezembro"){
        return "Primavera";
    }
    else if (estacao == "janeiro" || estacao == "fevereiro"){
        return "Verao";
    }
}

let estacao = String("Abril");

console.log(estacoes(estacao));

//--------------------------------------------------------------------------------------

