//Export Default e Export Nomeado são duas formas de exportar valores (funções, objetos, classes, etc.) de um módulo no JavaScript. Eles têm diferenças importantes em como funcionam e são utilizados.

// Export Default e Export Nomeado são duas formas de exportar valores (funções, objetos, classes, etc.) de um módulo no JavaScript. Eles têm diferenças importantes em como funcionam e são utilizados.

// 1. Export Default
// Definição:
// Permite exportar um único valor principal de um módulo.
// O valor exportado pode ser uma função, classe, objeto ou qualquer outra coisa.
// Ao importar, você pode dar qualquer nome ao valor, porque o export default não exige o mesmo nome do exportado.



//EXPORTAÇÃO DEFAULT EXEMPLO, NÃO PRECISA DAS CHAVES E PODEMOS COLOCAR QUALQUER NOME NO LUGAR DA SOMA, NAO NECESSARIAMENTE O NOME DA FUNCAO
//EXPORT DEFAULT NOS PERMITE APENAS UMA EXPORTAÇÃO POR ARQUIVO

import somar from './operacoes-matematicas.js'

console.log(somar(1,3))


// Export Nomeado
// Definição:
// Permite exportar múltiplos valores de um módulo.
// É necessário usar os nomes exatos ao importar os valores.

import {dividir} from './operacoes-matematicas.js'

console.log(dividir(3,1))