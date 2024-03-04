function CalcularFatorial(numero){ //criando função calulcarfatorial(numero que definimos na variavel acima = 5)
    let resultado = 1; //criando variavel para armazenar o resultado da nossa execução abaixo

    for (let i = 1; i <= numero; i++){ // LAÇO - i = 1, i é menor ou igual ao variavel numero ? se for true então faça i + 1
        resultado = resultado * i;  // variavel resultado que definimos la em cima = vai ser igual a variavel resultado * i
    }
        // esse laço vai ser repetido enquanto i for menor ou igual ao numero, atribuindo valor ao resultado
    return resultado;  
}

function imprimirFatorial(numero) { //função imprimirFatorial, terá 1 parametro (5)
    if(numero <0){ //se o numero for menor que zero, imprima a mensagem abaixo
        console.log("Por favor, digite um numero positivo")
    }else { //se não... faça o codigo abaixo
    const fatorial = CalcularFatorial(numero); //definindo que a variavel fatorial nao mudará, e que será o calculo da função que fizemos la em cima pegando como parametro o numero que pegamos como variavel, neste caso seria o (5)
    console.log(`O fatorial de ${numero} é ${fatorial}`);
    }
}

const numero = 5; //definindo que a variavel NUMERO terá valor 5
imprimirFatorial(numero); //chamando função imprimir fatorial - se não chamarmos a função, ela não aparecerá

