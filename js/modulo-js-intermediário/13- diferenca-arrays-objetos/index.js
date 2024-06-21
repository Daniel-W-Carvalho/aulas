let videoGame = {
    nome: 'Xbox',
    valor: 3000
}
                            //Usar objetos quando quer agrupar informações/caracteristicas aproximando o codigo do mundo real para uma melhor manutencao
let videoGame2 = {
    nome: 'Playstation',
    valor: 5000
}

let videoGames = [videoGame, videoGame2];// usar array para manipular uma lista de valores, pode ser numero, strings, objetos etc
console.log(videoGames[1].nome) // selecinando o array videoGames, selecionando o indice 1 que é referente ao videoGame2 e selecionando a propriedade apos o . 

