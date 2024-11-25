// let valorBoleto = 100;

// console.log(valorBoleto)

let inputTelefone = document.getElementById('telefone');

console.log(inputTelefone);


inputTelefone.disabled = true;

function habilitarTelefone(){
    let inputTelefone = document.getElementById('telefone');
    inputTelefone.disabled = false;
}

//este conteudo foi para aprendermos a encontrar os erros, sempre olhando o console.log no CONSOLE do Navegador, copiando o erro e verificando a linha onde aparece
// jogar o nome do erro no google sempre haverá um tópico com alguem explicando e ajudando.