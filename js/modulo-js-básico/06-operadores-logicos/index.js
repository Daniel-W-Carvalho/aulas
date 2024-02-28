/*
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

    || -> Sinal de "OR" / OU acompanhado de true ou false dependendo da tabela verdade - a>b || b=a - ou seja, A é maior que B ? ou B é igual ao A ?  
    const a = 2
    const b = 2
    console.log(a > b || b = a) 
                Falso ou verdadeiro = Verdadeiro
    V + V = True
    V + F = True
    F + V = True
    F + F = False

    !() - > NOT - sinal de negação, insinuando que devemos inverter os valores reais, por exemplo:
    const a = 1
    const b = 2
    console.log(!(a < b))   = TRUE
    A principio isso seria TRUE, mas com o sinal de interrogação antes dos parenteses, ele passa a dizer que aquilo não vai ser TRUE, e sim, False. Ou vice versa.
*/

const a = 2
const b = 2
console.log(!(a == b))


