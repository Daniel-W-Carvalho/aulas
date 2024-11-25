function trocarCor(){
    let QuadBlue = document.getElementById('quad-azul')

    // QuadBlue.classList.add('quad-amarelo') //aqui seria o proposito do exercicio
    QuadBlue.classList.toggle('quad-amarelo'); //aqui utilizei .toggle que fica variando os clicks entre azul e amarelo
}

// Explicação:
// classList.toggle():
// Se a classe quad-amarelo não estiver no elemento, ela será adicionada.
// Se a classe já estiver no elemento, ela será removida.
// Com isso, cada clique no botão alternará a cor do quadrado entre azul e amarelo.

