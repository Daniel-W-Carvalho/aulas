var pais //desclaração
pais = "brasil" //atribuição


// Hoisting é um comportamento em JavaScript onde declarações de variáveis e funções são movidas para o topo do seu escopo durante a fase de compilação, antes da execução do código. Isso significa que, independentemente de onde as declarações são feitas no código, elas são tratadas como se estivessem no topo do seu contexto de execução.

// No caso de variáveis, apenas a declaração é movida para o topo, não a inicialização. Isso significa que a variável é inicializada com o valor undefined até que a atribuição real seja feita mais tarde no código.

// Por exemplo:
console.log(x); // undefined
var x = 5;
console.log(x); // 5

// O código acima é interpretado pelo JavaScript como:
var x;
console.log(x); // undefined
x = 5;
console.log(x); // 5


// No caso de funções, a declaração e a definição são movidas para o topo. Isso permite que você chame uma função antes mesmo de declará-la no código.

// Por exemplo:
foo(); // "Hello, world!"

function foo() {
    console.log("Hello, world!");
}

// O código acima é interpretado como:
function foo() {
    console.log("Hello, world!");
}

foo(); // "Hello, world!"


// É importante entender o hoisting em JavaScript para evitar comportamentos inesperados e escrever um código mais claro e compreensível.