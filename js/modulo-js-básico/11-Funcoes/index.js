/*
    function nomeDaFuncao() {
        <bloco de execução>
    }

    nomeDaFuncao()
*/

/*
    function nomeDaFuncao(parametro1, parametro2, quantos parametros quiser...) {
        <bloco de execução>
    }

    nomeDaFuncao()
*/

// function incentivarQuester () {  // aqui nao definimos parametros, ou seja, vai direto para a função que criaremos abaixo
//     alert("Muito bem, você chegou no JS, continue assim!") // criamos um alerta com uma frase, mas sem parametro
// }
// incentivarQuester() // não temos parametro para essa função incentivarQuester



//     //Essa é a mesma função do exemplo acima, porém, com parametros (ALERTA)
//     function incentivarQuester (NomeQuester) {  // agora definimos paramentro chamado nomequester para a função incentivarquester
//     alert('Muito bem ' + NomeQuester + ', você chegou no JS, continue assim!') // criamos a execução do nosso parametro, no meio da mensagem ele concatenará o nome quester que definirmos abaixo
//  }
//   incentivarQuester("Daniel") //Definindo o nomequester da nossa função -> função(nomeQuester)




//(CONSOLE)
function soma (valor1, valor2){ //Definindo que o SOMA terá uma função e atribuindo que ele terá 2 parametros, pois não da pra somar com apenas 1 valor
    return valor1 + valor2 //Definindo o que os parametros irá fazer, neste caso, somar parametro 1 + parametro 2
}

let resultadoDaSoma = soma(27, 150) //passando valores para os paramatros, para podermos executar a função que criamos, neste caso, Soma. (27 + 150 = 177)
console.log(resultadoDaSoma) //imprimindo na tela a variavel resultadoDaSoma que recebe a função soma que criamos


resultadoDaSoma = soma(resultadoDaSoma ,10) //atribuimos a variavel resultadoDaSoma a nossa função soma(com o valor do resultadoDaSoma passada (177) + 10)
console.log(resultadoDaSoma) //imprimindo o novo resultado (187)



function somar(numero1, numero2){
    console.log("A soma de " + numero1 + " + " + numero2 + " é igual a " + (numero1 + numero2));  
}


function subtrair(numero1, numero2){
    console.log("A subtração de " + numero1 + " - " + numero2 + " é igual a " + (numero1 - numero2));  
}


function multiplicar(numero1, numero2){
    console.log("A multiplicação de " + numero1 + " * " + numero2 + " é igual a " + (numero1 * numero2));  
}


function dividir(numero1, numero2){
    console.log("A divisão de " + numero1 + " / " + numero2 + " é igual a " + (numero1 / numero2));  
}

let numero1 = 70
let numero2 = 25

somar(numero1, numero2)
subtrair(numero1, numero2)
multiplicar(numero1, numero2)
dividir(numero1, numero2)

