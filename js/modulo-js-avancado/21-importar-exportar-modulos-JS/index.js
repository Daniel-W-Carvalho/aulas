//Modulos são arquivos que podemos exportar e depois importar em pontos especificos do JS. Ou seja, reusabilidade.
//Como se fosse o root do css

// Módulos em JavaScript são uma maneira de organizar, reutilizar e isolar partes do código, dividindo-o em arquivos ou blocos lógicos. Eles ajudam a tornar o código mais modular, ou seja, fácil de entender, manter e reutilizar em diferentes partes de um projeto ou até mesmo em outros projetos.

// Por que usar módulos?
// Antes dos módulos, o código JavaScript em projetos grandes podia se tornar desorganizado, com todas as funções e variáveis expostas no escopo global. Isso causava problemas como:

// Conflitos de nomes: Variáveis ou funções sobrescrevendo outras acidentalmente.
// Manutenção difícil: Código grande e confuso.
// Baixa reutilização: Difícil reaproveitar partes do código.
// Módulos resolvem isso ao:

// Isolar o escopo: Cada módulo tem seu próprio escopo.
// Permitir reutilização: Trechos de código podem ser importados/exportados facilmente.
// Facilitar a manutenção: Cada módulo cuida de uma responsabilidade específica.



// Como funcionam os módulos?
// 1. Importação e Exportação
// Com módulos, você pode:

// Exportar código de um arquivo (módulo).
// Importar esse código em outro arquivo

import {somar, multiplicar} from './operacoes-matematicas.js' //import para importar o resultado la do export {com o nome da função} from (arquivo que criamos o export.js)

console.log(somar(1, 3))
console.log(multiplicar(1, 3))