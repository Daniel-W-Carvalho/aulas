// DOM (Document Object Model) é uma representação em forma de árvore de um documento HTML ou XML. Ele permite que linguagens de programação, como JavaScript, acessem e manipulem o conteúdo, a estrutura e o estilo de um documento exibido em um navegador.

// Explicação Simples:
// Imagine que o HTML da sua página é transformado em uma estrutura parecida com uma "árvore genealógica". Cada elemento HTML é representado como um "nó" (ou "node") dessa árvore, e você pode usar JavaScript para interagir com esses nós.

// Como o DOM funciona:
// Representação em árvore:

// Cada elemento HTML, atributo, texto, ou comentário é um nó na árvore do DOM.
// A raiz da árvore é o elemento <html> do documento.
// Exemplo de um HTML simples:

// <html>
//     <body>
//         <h1 id="titulo">Olá, DOM!</h1>
//         <p>Este é um parágrafo.</p>
//     </body>
// </html>



// O DOM correspondente seria algo assim:
// html
// └── body
//     ├── h1 (id="titulo")
//     │   └── Texto: "Olá, DOM!"
//     └── p
//         └── Texto: "Este é um parágrafo".



// Navegando na árvore do DOM: Usando JavaScript, você pode acessar partes dessa árvore e manipulá-las.
// Exemplos:

// Acessar o <h1> pelo id:
// let titulo = document.getElementById('titulo');
// console.log(titulo.textContent); // "Olá, DOM!"

// Adicionar um novo elemento:
// let novoParagrafo = document.createElement('p');
// novoParagrafo.textContent = 'Um parágrafo adicionado dinamicamente.';
// document.body.appendChild(novoParagrafo);

// Por que o DOM é importante?
// Interatividade: Permite que você manipule elementos da página em resposta a eventos do usuário, como cliques, rolagem ou entradas de texto.

// Alterações Dinâmicas: Você pode modificar o conteúdo ou o estilo da página em tempo real, sem precisar recarregá-la.

// Acesso Estruturado: O DOM organiza o conteúdo da página de forma hierárquica, permitindo acesso fácil a qualquer elemento.

// Principais métodos e propriedades do DOM:
// Seleção de elementos:
// document.getElementById('id'): Seleciona um elemento pelo seu ID.
// document.querySelector('seletor'): Seleciona o primeiro elemento que corresponde a um seletor CSS.
// document.querySelectorAll('seletor'): Seleciona todos os elementos que correspondem a um seletor CSS.
// Manipulação de conteúdo:
// .textContent: Obtém ou altera o texto de um elemento.
// .innerHTML: Obtém ou altera o conteúdo HTML de um elemento.
// Criação de elementos:
// document.createElement('tag'): Cria um novo elemento HTML.
// .appendChild(elemento): Adiciona um elemento como filho.
// Estilo e classes:
// .style: Permite alterar estilos diretamente.
// .classList.add('classe'): Adiciona uma classe CSS a um elemento.
// .classList.remove('classe'): Remove uma classe CSS.


// Resumo:
// O DOM é como uma ponte entre o HTML e o JavaScript. Ele transforma a estrutura estática do HTML em algo que pode ser acessado e manipulado de maneira dinâmica, permitindo criar páginas web interativas e responsivas.
