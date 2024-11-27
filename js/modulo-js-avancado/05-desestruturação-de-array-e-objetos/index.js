//A desestruturação é um recurso do JavaScript que permite extrair valores de arrays ou propriedades de objetos e armazená-los em variáveis de maneira rápida e clara. Isso elimina a necessidade de acessar manualmente cada valor ou propriedade com notação de índice ou ponto.

let pessoa = {nome: "Daniel", sobrenome:"Carvalho" , idade: 27}

//jeito antigo para definir variaveis a partir do objeto
// let nome = pessoa.nome;
// let idade = pessoa.idade;
// console.log(nome, idade)

let {nome: nome, idade: idade} = pessoa //definindo o que haviamos feito acima - {variavel nome: recebe nome, variavel idade: recebe idade} = do objeito pessoa
console.log(nome, idade)

//Observação, se o nome da variavel for o mesmo nome da propriedade do objeto, podemos omitir essa informação, ficando assim:
// let {nome, idade} = pessoa
//MAS SOMENTE EM CASOS QUE A PROPRIEDADE DO OBJETO TEM O MESMO NOME DA VARIAVEL**



const numeros = [1, 2, 3];

const [um, dois, tres] = numeros //criando variaveis se baseando nos indices do array numeros

console.log(um, dois)