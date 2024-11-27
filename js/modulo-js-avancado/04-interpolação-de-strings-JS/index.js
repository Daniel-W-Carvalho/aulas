//A interpolação de strings em JavaScript é uma técnica para incorporar variáveis, expressões ou valores diretamente em uma string de forma mais clara e legível, utilizando template literals (ou template strings). Isso elimina a necessidade de concatenar strings com o operador +.

// const imprimirInformacaoPessoa = (primeiroNome, ultimoNome, idade) => {
//     return "Primeiro nome " + primeiroNome + " Último nome: " + ultimoNome + ". Idade " + idade; 
// }

// console.log(imprimirInformacaoPessoa("Daniel", "Carvalho", 27))



const imprimirInformacaoPessoa = (primeiroNome, ultimoNome, idade) => {
        return `primeiro nome: ${primeiroNome}, Ultimo nome: ${ultimoNome}, Idade: ${idade}`;
    }
    
    console.log(`${imprimirInformacaoPessoa("Daniel", "Carvalho", 27)}, ele é um devQuester`)