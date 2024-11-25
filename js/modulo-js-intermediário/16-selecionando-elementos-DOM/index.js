//metodos dentro de documento
// .get - Buscar/selecionar alguma coisa
// .getElementById - Selecioando/Buscando por ID


//neste caso estou colocando em uma variavel p e indo no document html e buscando pelo ID "paragrafo1".
let p = document.getElementById("paragrafo1") ;
console.log(p)

//neste caso estou buscando por classes, mas quando tem mais de 1 classe igual, nós podemos usar [] para buscar a primeira, segunda, terceira etc.. posição
let inputsPorClasse = document.getElementsByClassName("tag-de-input");
console.log(inputsPorClasse[0])

//neste caso estou buscando por nome de tag, ou seja, abaixo para apresentar todas as tags (input) mas tbm consigo selecionar com [] qual posição de inputs eu quero. Primeira, segunda... etc
let inputPorTag = document.getElementsByTagName("input")
console.log(inputPorTag)


//neste caso vamos buscar todos os elementos a partir de uma consulta .querySelectorAll
//abaixo estamos indo em todos os input e buscando todos os atributos com a tag name email
//lembrando que também tem como selecionar com [] qual das posições você quer, primeiro segundo .. etc
let inputPorNome = document.querySelectorAll("input[name='email']")
console.log(inputPorNome)

