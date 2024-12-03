//OBS: NUNCA VERSIONAR A PASTA NODE_MODULES que é baixada junto com os pacotes de dependencias, neste caso usamos o git ignore para evitarmos de versionarmos essa pasta

//---------------------------------------------------------------------------------------------------

//Os pacotes e dependências são conceitos essenciais no desenvolvimento de software, especialmente em ambientes como Node.js, onde você usa gerenciadores de pacotes como o npm ou yarn. Vamos explorar cada um deles:

// O que são Pacotes?
// Um pacote é um conjunto de arquivos (geralmente código JavaScript) organizados para realizar uma funcionalidade específica. Ele pode ser:

// Uma biblioteca ou framework que fornece ferramentas prontas (ex.: React, Express).
// Uma coleção de utilitários para resolver problemas específicos (ex.: Lodash para manipulação de dados).
// Um projeto completo que você pode instalar e reutilizar.
// Estrutura de um Pacote
// Um pacote geralmente contém:

// Código principal: Os arquivos que implementam as funcionalidades.
// Manifesto (package.json): Um arquivo que descreve o pacote, incluindo:
// Nome e versão.
// Dependências necessárias para seu funcionamento.
// Scripts e metadados.

//pacotes podem ser publicados e gerenciados no repositório oficial do npm, acessível em npmjs.com.

//---------------------------------------------------------------------------------------------------

// O que são Dependências?
// As dependências são pacotes que seu projeto precisa para funcionar. Elas são instaladas e gerenciadas por ferramentas como o npm ou yarn.

// Tipos de Dependências
// Dependências de Produção (dependencies):

// Pacotes necessários para a aplicação funcionar em produção.
// Exemplo: Um servidor como express.
// Dependências de Desenvolvimento (devDependencies):

// Pacotes usados apenas durante o desenvolvimento, como ferramentas de teste, linters e transpilers.
// Exemplo: jest para testes ou eslint para verificar o estilo do código.

//dependências podem ter versões específicas (exemplo: ^1.0.0) e que o npm permite atualizar ou instalar versões específicas.

//---------------------------------------------------------------------------------------------------

//NESTE EXEMPLO ESTAMOS BAIXANDO O PACOTE KIND-OF QUE É SERVE BASICAMENTE PARA VERIFICAR O TIPO DAS UNIDADES (BOOLEAN, STRINGS, NUMERIC...) pois assim evitamos de ficar usando o typeOf
//todo o procedimento é feito pelo terminal partindo da pasta/arquivo raiz que queremos baixar os pacotes/dependencias. 
//Começamos pelo npm init  //em seguida ele fará diversas perguntas para serem transferidas para o arquivo.json  
//perguntas que respondemos: nome do pacote(usando_npm), qual a versao(só dei enter, ele mesmo selecionou), descrição(projeto de teste de npm do modulo de JavaScript Avançado do curso DevQuest), entry point(index.js), test command (caso tenha), git repository(caso tenha), keywords(javascript, npm), author(Daniel Carvalho), license(Enter)


const kindOf = require('kind-of'); //criando variavel e atribuindo um require que seria um metodo nativo do Node e passamos como parametro o nome do pacotes que baixamos, que é basicamente verificar o tipo que estamos passando, se é numerico, boolean, string...
const testeDeBooleano = true
const testeString = "Hello World"
console.log(kindOf(true))
console.log(kindOf(testeString))

//---------------------------------------------------------------------------------------------------

//Quando subirmos/versionarmos esse codigo e alguem quiser baixar ele, terá somente o arquivo index.js / package.json / package-lock.json   
//Não terá a pasta node_modules e seus arquivos dentro, sendo assim o código não irá funcionar. E o que devemos fazer?
// Simples, basta a pessoa que baixou os arquivos index.js / package.json / package-lock.json  ir no terminal e dar o comando: npm install
// o proprio npm ao consultar o arquivo packade.json irá identificar o que precisa ser baixado, como dependencias para que o código rode, sendo assim ele mesmo baixará a pasta node_modules com os arquivos necessarios dentro

//---------------------------------------------------------------------------------------------------














//                                        ANOTAÇÃO DO CHAT GPT

// OBS: NUNCA VERSIONAR A PASTA NODE_MODULES que é baixada junto com os pacotes de dependências. 
// Controle isso adicionando "node_modules/" no arquivo .gitignore.

//---------------------------------------------------------------------------------------------------

// O que são Pacotes?
// Um pacote é um conjunto de arquivos (geralmente código JavaScript) organizados para realizar uma funcionalidade específica. Ele pode ser:
// - Uma biblioteca ou framework que fornece ferramentas prontas (ex.: React, Express).
// - Uma coleção de utilitários para resolver problemas específicos (ex.: Lodash para manipulação de dados).
// - Um projeto completo que você pode instalar e reutilizar.

// Estrutura de um Pacote:
// - Código principal: Os arquivos que implementam as funcionalidades.
// - Manifesto (package.json): Um arquivo que descreve o pacote, incluindo:
//   - Nome e versão.
//   - Dependências necessárias para seu funcionamento.
//   - Scripts e metadados.

//---------------------------------------------------------------------------------------------------

// O que são Dependências?
// As dependências são pacotes que seu projeto precisa para funcionar. Elas são instaladas e gerenciadas por ferramentas como o npm ou yarn.

// Tipos de Dependências:
// 1. Dependências de Produção (`dependencies`):
//    - Pacotes necessários para a aplicação funcionar em produção.
//    - Exemplo: Um servidor como express.
// 2. Dependências de Desenvolvimento (`devDependencies`):
//    - Pacotes usados apenas durante o desenvolvimento, como ferramentas de teste, linters e transpilers.
//    - Exemplo: Jest para testes ou ESLint para verificar o estilo do código.

//---------------------------------------------------------------------------------------------------

// Neste exemplo, estamos baixando o pacote kind-of:
// O pacote "kind-of" serve basicamente para verificar o tipo de dado (boolean, string, número, etc.),
// o que evita a necessidade de usar o operador typeof diretamente.

// Para instalar o pacote:
// > npm install kind-of

// const kindOf = require('kind-of'); // Importando o pacote "kind-of".
// const testeDeBooleano = true;
// const testeString = "Hello World";

// console.log(kindOf(testeDeBooleano)); // Saída: "boolean"
// console.log(kindOf(testeString));     // Saída: "string"

//---------------------------------------------------------------------------------------------------

// Quando subirmos/versionarmos esse código, os arquivos versionados serão:
// - index.js
// - package.json
// - package-lock.json

// A pasta "node_modules" NÃO será versionada. Por isso, para que o código funcione após ser clonado,
// quem baixou o projeto precisa executar no terminal o comando:
// > npm install

// Esse comando cria a pasta "node_modules" e baixa automaticamente as dependências especificadas
// no "package.json", seguindo as versões fixadas no "package-lock.json".