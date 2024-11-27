// O parâmetro REST em JavaScript é usado em funções para agrupar múltiplos argumentos em um único array. Ele permite que uma função lide com um número variável de argumentos, capturando-os em uma única estrutura.

// Sintaxe:
// O operador ... é usado antes do nome do parâmetro REST na definição da função.

// Resumo:
// Coleta argumentos em excesso que não foram atribuídos a parâmetros individuais.
// É útil para criar funções flexíveis que aceitam um número indefinido de argumentos.
// Sempre deve ser o último parâmetro na lista da função.

// function(a, b, ...args){
//      //...
//}

function incentivarQuester (mensagem, ...nomesQuester){ //quando colocamos os ... antes do parametro, ele começa a concatenar todos os valores passados
    console.log(nomesQuester) // aqui podemos ver um array de nomes no qual definimos la embaixo ao chamar a função
    
    nomesQuester.map(nomeQuester =>console.log(`${mensagem} ${nomeQuester}`))// aqui estamos pegando o parametro que tem varios nomes e usando map para passar em um por um
    // apos ir passando em um por um vai imprimindo os parametros que passamos ao chamar a função abaixo. 
}

incentivarQuester('Parabéns por ter chegado ao módulo de js Avançado,', 'Daniel', 'pedro', 'thomas', 1, true)

//OBS, O REST SEMPRE VAI SER O ULTIMO PARAMETRO, NAO PODENDO COLOCAR ELE DE INICIO E NEM NO MEIO