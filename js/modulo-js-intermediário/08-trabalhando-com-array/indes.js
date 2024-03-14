//EXEMPLO
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero, index) {
    console.log("Elemento " + index + ": " + numero);
});

//------------------------------------------------------------------

let frutas = ['banana', 'maçã', 'laranja', 'pêra']
let frutasTamanho = frutas.length

for (let i = 0; i < frutasTamanho; i++){
    console.log('frutas: ' + frutas[i])
}

//OUTRA FORMA USANDO forEach - 
//O método forEach() em JavaScript é utilizado para iterar sobre os elementos de um array e executar uma função de callback para cada elemento

frutas.forEach(function(item, indice, array){ //posso apagar o indice e o array que funciona do mesmo jeito
    console.log('fruta: ' + item);
})

//------------------------------------------------------------------

// .push - Adicionar elementos no final de um array
// let frutas = ['banana', 'maçã', 'laranja', 'pêra']
// frutas.push('manga')

//------------------------------------------------------------------

// .unshift() - adicionar elemento no inicio do array
//frutas.unshift()

//------------------------------------------------------------------

// .pop - exclui o ultimo elemento do array
//frutas.pop()

//------------------------------------------------------------------

// .shift - Remove o primeiro elemento do array
// frutas.shift

//------------------------------------------------------------------

// .indexOf
// saber a posição de um indice dentro de um array
// let posicaoFruta = frutas.indexOf('laranja')
// console.log (posicaoFruta)

