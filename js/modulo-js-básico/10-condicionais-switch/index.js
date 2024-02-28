/*
    switch(parametro)
        case valor1:
            <bloco de declaracao>
            break
        case valor2:
            <bloco de declaracao>
            break
*/

//Definindo qual fime

let nomeFilme = "Senhor dos Aneis"

switch(nomeFilme){   //declarando
    case 'Vingadores': //caso seja -> faz o console abaixo
        console.log("É o filme dos Vingadores")
        break
    case 'Batman': //caso seja -> faz o console abaixo
        console.log("É o filme do batman")
        break
    default : //caso não seja os de cima... faz o console abaixo
        console.log("É outro filme")
}

//Definindo uma nota para um filme usando switch e case

let Avaliacao = 5

switch(Avaliacao){
    case 1:
    case 2:
        console.log("Filme Ruim")
        break
    case 3:
    case 4:
        console.log("Filme mediano")
        break
    case 5:
        console.log("Filme excelente")
        break
    default:
        console.log("Nota inválida, somente de 1 á 5")
        break
}
    