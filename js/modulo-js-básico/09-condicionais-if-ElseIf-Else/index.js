let nomeFilme = "Capitao America"

if (nomeFilme === "Vingadores"){ //se -> nomeFilme é igual vingadores? se for true imprima o console abaixo, se for false pule para o proximo else
    console.log("é o filme dos Vingadores") //imprima
}else if (nomeFilme === "Batman"){ //senão se / Então se... -> nomeFilme é igual a batman ? se for true imprima o console abaixo, se for false pule para o proximo else
    console.log("é o filme do Batman") //Imprima
}else if (nomeFilme === "Capitao America"){ //senão se/Então se... -> nomeFilme é igual a Capitao America ?se for true imprima o console abaixo, se for false pule para o proximo else
    console.log("é o filme do Capitao America") //Imprima
}else{ //senão / então.. -> Else usado sempre em ultimo laço para finalizar a condição
    console.log("é outro filme") //Imprima
}


//Modo compacto
// condicao ? console.log ('condição verdadeira') : console.log ('condição falsa')
// nome da pessoa é tal ? se for true vc imprima o primeiro console.log : se for falso vc imprimi o segundo console.log

let NomePessoa = "Juarez"

NomePessoa === "Sebastião" ? console.log("o nome é Juarez") : console.log("É outro nome")