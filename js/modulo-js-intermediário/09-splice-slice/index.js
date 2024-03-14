//Slice - Extrair um pedaço de uma lista/array, mas sem modificar a lista padrão
//Exemplo
let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva']

let frutasExtraidas = frutas.slice(1,4) //estou criando uma nova variavel a partir do array frutas, mas pegando da maça[1] até a Uva[4]

console.log(frutasExtraidas)

//------------------------------------------------------------------------------------------------------------------------------------------------------

//Splice - remendar/costurar - remover um item pelo indice do array, criano um novo array, ele é bom para remover um item no meio do array
//Exemplo

let frutasCosturadas = frutas.splice(1, 2)//criando uma nova variavel a partir do array frutas, aqui estamos iniciando do indice 1[maçã] e removendo 2 depois desse indice escolhido. Neste caso o array padrão vai ser removido os indices, não criaremos um novo array igual o Slice.

console.log(frutasCosturadas);

//------------------------------------------------------------------------------------------------------------------------------------------------------

// No Splice alem de removermos, também podemos adicionar ou trocar os itens do array.
//EXEMPLO:

let novasFrutas = ['Abacaxi', 'Mamão', 'Manga', 'Jabuticaba']

let removeEAdicionaFrutas = novasFrutas.splice(1, 2, 'Abacate', 'Pêra', 'Goiaba')// removemos o mamao e manga, e adicionamos 3 novas frutas. Abacate, pera e goiaba

console.log(removeEAdicionaFrutas);// console com frutas removidas
console.log(novasFrutas);// console com as frutas modificadas/adicionadas