// FORMATO ANONIMO + NORMAL
// let resultadoDaSoma = function soma(num1, num2) {
//     return num1 + num2
// }

// FORMATO ARROW FUNCTION - Serve para reduzirmos a função
let resultadoDaSoma = (num1, num2) => num1 + num2

console.log(resultadoDaSoma(12, 5))


// OUTRO EXEMPLO COM APENAS 1 PARAMETRO- Variavel recebe a função onde definimos o parametro sem parenteses, e depois da seta=> definimos o processamento da função
const incentivarQuester = nomeQuester => console.log(`Parabens ${nomeQuester}, você chegou ao modulo JS Intermediário.`)

incentivarQuester("Daniel")
