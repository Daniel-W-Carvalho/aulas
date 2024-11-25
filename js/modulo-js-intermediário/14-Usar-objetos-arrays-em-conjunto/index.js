// Neste caso abaixo, estamos criando um objeto com propriedade de nome playstation, com valor de 4000 e jogos.
// nós podemos criar objetos separados chamado jogos, como no exemplo: jogo1, jogo2, jogo3 e depois inclui-los no objeto videoGame com o .Push
// mas se preferir, podemos incluir objetos dentro de um array, que esteja dentro de um objeto, como no exemplo abaixo no objeto videoGame, que incluimos na propriedade jogos
// um array puxando um objeto externo chamado jogo2 e também incluimos um objeto dentro do array dentro de um objeto, que seria o {nome: "final fantasy"}

let jogo2 = {
    nome: "god of war"   
}

let videoGame = {
    nome: "Playstation",
    Valor: 4000,
    jogos: [{nome: "final fantasy"}, jogo2]
}

let jogo3 = {
    nome: "fifa"
}

videoGame.jogos.push(jogo3) // adicionando o objeto jogo3 dentro do nosso objeto VideoGame, dentro do array jogos.
console.log(videoGame)

//-------------------------------------------------------------------------------------------------------------------

let cliente = {   //objeto cliente com 2 propriedades, nome e ultimo pedido
    nome: "Daniel",
    ultimoPedido: {      //ultimoPedido, outgro objeto com 3 propriedades, produto, valor e games (games seria outro objeto)
        produto: "Xbox",
        valor: 4000,
        games: [{nome: "fifa"}, {nome: "jungo"}] // objeto games, com um array. E dentro do array tem 2 objetos
}}

console.log(cliente.ultimoPedido.games[1])