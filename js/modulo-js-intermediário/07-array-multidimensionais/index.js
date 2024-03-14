let filmes = [['senhor dos aneis', 4.2, true],
              ['hobbit', 4, false],
              ['house of dragon', 3, false]]

console.table (filmes) //esse console imprimi os arrays em forma de tabela, melhorando a visualização

console.log(filmes[1][0]) // aqui estamos selecinando qual propriedade de qual array escolhemos, neste exemplo o primeiro array selecionamos o array do filme hobbit e depois selecionamos a propriedade [0] que seria o nome do filme.

console.table(filmes[1]) // aqui estamos usando console em forma de tabela e pegando apenas o array do hobbit completo, sem especificar a propriedade

//---------------------------------------------------------------------------------------------------------------

//OUTRO EXEMPLO, PEGANDO O ARRAY DENTRO DO ARRAY, DENTRO DO ARRAY :D
let filme =  [
            ['vingadores', 4.2, true],
            ['mulher maravilha', 4, false, ['Gal Gadot', 26]]
            ]
              

console.log(filme[1][3][0]) // aqui estamos selecionando indice [1] para o filme da mulher maravilha, depois o indice [3] que nos leva para o array da atriz e depois indice [0] nome da atriz