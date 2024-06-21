// 'use strict' - esse comando faz com que o this não vase do nosso escopo de onde esteja sendo utilizado

/*
Em JavaScript, this é uma palavra-chave especial que se refere ao contexto de execução atual. O valor de this depende de como uma função é chamada e de onde ela é executada. O comportamento de this pode ser um pouco complicado de entender, mas geralmente pode ser resumido nas seguintes regras:

No contexto global (fora de qualquer função), this se refere ao objeto global, que é window no navegador e global no Node.js.

Dentro de uma função normal, this geralmente se refere ao objeto que chama a função. O valor de this pode variar dependendo de como a função é chamada. Se a função for chamada como um método de um objeto, this será o próprio objeto. Se a função for chamada de forma independente, this será o objeto global (ou undefined em strict mode).

Dentro de uma função de callback, como aquelas passadas para métodos como forEach(), map(), filter() e setTimeout(), o valor de this pode mudar dependendo de como a função de callback é chamada. Normalmente, isso é determinado pelo contexto em que a função de callback é definida.
Por exemplo:
*/

//This no contexto global
// console.log(window)
// console.log(window === this) //this no contexto global é identico ao window, onde engloba todos os comando no node.js


//This no contexto da função:
//aqui devemos usar o `use strict` para que a função abaixo não pegue o this do contexto global, pois neste caso esta vazando do escopo global para o escopo local
this.name = 'Daniel' 

function saudar() {
    console.log('this no contexto da função', this)
    console.log('Olá, '+ this.name)
}
saudar()


//This no contexto do metodo (função dentro de obejto):
let usuario = {
    nome: "Daniel",
    saudacao: function(){
        console.log('This no contexto do metodo', this) // imprime toda a função saudacao

        console.log('This no contexto do metodo', this.nome) // imprime o nome Daniel
    }
}

usuario.saudacao()

// -----------------------------------------------------------------------------------------------------------------------------------------------

// adicionando metodos a um objeto
let comida = {                         //criando objeito comida com 2 prpriedades
    nome: "Brocolis",
    temperatura: 0
}

//criando metodo para o objeto comida, mas fora do objeto
comida.cozinhar = function(comidaParaCozinhar, temperaturaDeCozimento) { //definimos cozinhar como nome da função anonima, e 2 parametros, a comida e a temperatura
    comidaParaCozinhar.temperatura = temperaturaDeCozimento; //no parametro passamos o objeto comida e estamos acessando a temperatura, fazendo receber a nova temperatura que vamos passar quando chamarmos a função
}

comida.cozinhar(comida, 100) // chamando a função passando o objeto e a temperatura que queremos colocar para cozinhar

console.log(comida)


// -----------------------------------------------------------------------------------------------------------------------------------------------
//FAZENDO O MESMO PROCESSO DE CIMA, COM THIS
let comida = {                    
    nome: "Brocolis",
    temperatura: 0, 
    cozinhar: function(temperaturaDeCozimento) { //agora utilizamos somente 1 parametro e coloquei a função dentro do objeto mas n faz diferença
        this.temperatura = temperaturaDeCozimento; // usamos this no lugar do comida para cozinhar, pois this dentro do escopo de um objeto, ele vira aquele proprio objeto, ou seja, this aqui é o proprio objeto comida e estamos acessando somente a temperatura deste objeto
    }
}

comida.cozinhar(100) // agora utilizamos somente 1 parametro e ja estamos chamando no comida.cozinhar - explicação acima
console.log(comida)


