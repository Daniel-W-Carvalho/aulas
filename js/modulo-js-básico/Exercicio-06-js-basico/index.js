// Somando numeros pares até certo numero passado pelo usuário
function somarPares(numero){ 
    let soma = 0; 
    for(let i = 0; i <= numero; i = i + 2 ){ 
        soma = soma + i;
    } 
    return soma;
}

const numero = 30
console.log("A soma dos números pares até " + numero + " é " + somarPares(numero));

// --------------------------------------------------------------------------------------

//definindo se um numero é par ou impar
let number = 10

if(number % 2 == 0){
    console.log("par");
}else {
    console.log("impar");
}

// --------------------------------------------------------------------------------------

// passando a metade e o dobro do numero fornecido pelo usuario
function dividir (numero){
    return numero / 2;
}

function dobro (num){
    return num * 2;
}
let num = parseFloat(prompt("Digite um número"));

let resultadoDobro = dobro(num)
let resultadoMetade = dividir(num)
alert("o dobro de " + num + " é " + resultadoDobro + " e a metade do " + num + " é " + resultadoMetade)

// --------------------------------------------------------------------------------------

// calcular media dos numeros passados

function calcularMedia(numero1, numero2){
    return (numero1 + numero2) / 2;
} 

let numero1 = parseFloat(prompt("Digite um número "));
let numero2 = parseFloat(prompt("Digite outro número "));

let  resultado = calcularMedia(numero1, numero2); 

alert("a media destes dois numeros é " + resultado);

// --------------------------------------------------------------------------------------

// //CALCULANDO FATORIAL
function calcularFatorial (numero) {
    let resultado = 1 

    for (i = 1; i <= numero; i++){ 
        resultado = resultado * i 
    }   
    return resultado
}

console.log(calcularFatorial(4));

// --------------------------------------------------------------------------------------

function tabuada(numeroInicial, numeroFinal) {
    for (let i = 1; i <= numeroFinal; i++) {
        let resultado = numeroInicial * i;
        console.log(`${numeroInicial} x ${i} = ${resultado}`);
    }
}

tabuada(2, 17);

// --------------------------------------------------------------------------------------

