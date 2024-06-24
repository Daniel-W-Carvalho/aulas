/*      OPERADORES RELACIONAIS
    == -> comparar se são iguais -> a=b  pode ter o valor de true ou false, dependendo do valor das variaveis a e b
    const a = 2
    const b = 2
    console.log(a = b)

    != -> comprar se não são iguais mas não chega a comparar a tipagem (int, string), somente os valores
    const a = 2
    const b = 2
    console.log(a != b)

    === -> comparar se são identicos, comparando não só o valor mas até se são strings, inteiros, etc  a===b
    const a = 2
    const b = 2
    console.log(a === b)

    !== -> comparando se não são identicos, incluindo a tipagem (string, int) ->  a !== b -> se a não for identico a b, então o valor será True
    const a = 2
    const b = 2
    console.log(a !== b)

    <  -> sinal de menor, ou seja A<B a é menor que b ? se for menor, retornará True, se for igual ou maior, retornará false
    const a = 2
    const b = 2
    console.log(a < b)

    > -> Sinal de maior, ou seja A>B a é maior que b ? se for maior, retornará True, se for igual ou menor, retornará false
    const a = 2
    const b = 2
    console.log(a > b)

    <= -> Sinal de menor ou igual, A<=B a é menor ou igual a b ? se for menor ou igual retornará True, se for maior, retornará false
    const a = 2
    const b = 2
    console.log(a <= b)

    => -> Sinal de maior ou igual, A>=B a é maior ou igual a b ? se for maior ou igual retornará True, se for menor, retornará false
    const a = 2
    const b = 2
    console.log(a => b)

    && -> Sinal de "E" acompanhado de true ou false dependendo da tabela verdade - a>b && b===a - ou seja, A é maior que B ? e B é identico ao A ?
    const a = 2
    const b = 2
    console.log(a => b && b = a)
                Verdade e Verdade = True
    V + V = True
    V + F = False
    F + V = False
    F + F = False 

    OPERADORES LOGICOS

    || -> Sinal de "OR" / OU acompanhado de true ou false dependendo da tabela verdade - a>b || b=a - ou seja, A é maior que B ? ou B é igual ao A ?  
    const a = 2
    const b = 2
    console.log(a > b || b = a) 
                Falso ou verdadeiro = Verdadeiro
    V + V = True
    V + F = True
    F + V = True
    F + F = False

    Resumo
    || (OR): Retorna o primeiro valor verdadeiro (truthy) que encontrar. Se nenhum valor verdadeiro for encontrado, retorna o último valor.
    && (AND): Retorna o primeiro valor falso (falsy) que encontrar. Se todos os valores forem verdadeiros, retorna o último valor.

    !() - > NOT - sinal de negação, insinuando que devemos inverter os valores reais, por exemplo:
    const a = 1
    const b = 2
    console.log(!(a < b))   = TRUE
    A principio isso seria TRUE, mas com o sinal de interrogação antes dos parenteses, ele passa a dizer que aquilo não vai ser TRUE, e sim, False. Ou vice versa.
*/

//ORDEM DE OPERADORES LOGICOS
// PRIMEIRO (NÃO) -> !
// SEGUNDO (OU) -> ||
// TERCEIRO (E) -> && 


// Exemplo - ordem de operadores numa mesma linha
// a > b && b % 2 == 0
//
// operadores aritimedicos vem primeiro (b%2) 
// depois relacionais (a > b)
// e depois os operadores logicos (&&)

//  TERNARIOS
//  ?
//  :
//
// EXEMPLO:
// média >= 7.0 ? "Aprovado" : "Reprovado"      Média é maior ou igual a 7 ? Se for true, então Aprovado, se for false Reprovado
// https://prnt.sc/-pMh5Qv7hfpm

//Outro exemplo de varios operadores na mesma linha
//var x = 8
//var res = x % 2 == 0 ? 5 : 9     -> o resto da porcentagem de 8 / 2 é 0 ? se for TRUE entáo RES = 5   se for FALSE então RES = 9
//var = 5


//EXEMPLO1
const a = 2
const b = 2
console.log(!(a == b))

//EXEMPLO2
var c = 5
var d = 8

c > d && d % 2 == 0  // d % 2 ==0 --> 8 divido por 2 e o resto é igual a 0 ?    - TRUE -   por que 8 dividido por 2 o resto é igual 0
                     // c > d  -->  5 é maior que 8 ? FALSE
                     // FALSE && TRUE = FALSE
                     // Conclusão, esta calculo é FALSO  


idade >= 15 && idade <= 17 //a idade esta entre 15 e 17 ?
estado == "RJ" || estado == "SP" // o estado é RJ ou SP ?
salário > 1500 && sexo != "M" //o salário é maior que 1500 e sexo é diferente de masculino ?

















































































































