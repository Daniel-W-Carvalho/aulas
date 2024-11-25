//abaixo vamos apertar no botáo do HTML que esta com o evento onClick, após o botáo ser clicado ele vai alterar toda a cor da primeira class "post"

function alterarCorDeFundoPrimeiroPost (){  //criando a função 
    let posts = document.getElementsByClassName('post'); //criando a variável post e atribuindo a ela a localização de todas as class com nome "post"

    let primeiroPost = posts[0]; //criando a variavel primeiroPost e atribuindo a variavel de cima porém selecionando apenas a primeira class "post" do corpo html usando [0]

    primeiroPost.style.backgroundColor = "red" // definindo que a variavel primeiro post tera o background red após o click do mouse
}



function aumentarFonteSegundoPost (){ //criando a função
    let textPosts = document.getElementsByClassName('texto-post'); //criando a variavel e atribuindo os elementos por nome de classes, pegando todas as "texto-post"

    //pegamos a variavel, selecionamos a posição [1] pois queremos apenas o segundo texto-post do documento e adicionamos uma nova classe pelo .classList.add, ou seja se formos visualizar
    // no console depois de apertar o botão(chamar função), veremos que no HTML na segunda classe "texto-post" também vai ter a classe "fonte-grande" ao lado.
    textPosts[1].classList.add('fonte-grande') 
  
}


//na função abaixo estamos fazendo o botão on click alterar o input no nosso HTML, tornando uma "conversa" entre os elementos da página
function marcarRadio(genero){ // criando função
    let radioMasculino = document.getElementById("genero-masculino"); // criando variavel radiomasculino e atribuindo a ela o lugar que queremos modificar

    let radioFeminino = document.getElementById("genero-feminino"); // criando variavel radiofeminino e atribuindo a ela o lugar que queremos modificar

    if(genero === 'M'){          // se genero for identico a M  --  Esse M definimos no HTML
        radioMasculino.checked = true   //então o radiomasculino vai ser checked 
    }else{
        radioFeminino.checked = true  //senão o radiofeminino vai ser checked
    }
}



