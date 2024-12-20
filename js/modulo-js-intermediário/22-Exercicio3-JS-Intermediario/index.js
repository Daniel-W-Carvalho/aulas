

function trocaCor(){
    let botaoBlack = document.getElementById('btn-preto')

    if(botaoBlack.classList.contains('btn-azul')){
        botaoBlack.classList.remove('btn-azul');
    }else{
        botaoBlack.classList.add('btn-azul');
    }
}

// OUTRA MANEIRA DE FAZER
// function trocaCor() {
//     let botaoBlack = document.getElementById('btn-preto');

//     if (!botaoBlack.classList.contains('btn-azul')) {
//         // Adiciona a classe 'btn-azul' se ela não estiver presente
//         botaoBlack.classList.add('btn-azul');
//     } else {
//         // Remove a classe 'btn-azul' se ela já estiver presente
//         botaoBlack.classList.remove('btn-azul');
//     }
// }




//RESPOSTA
/*
		Dica: Começar pensando no objetivo do que precisa fazer e no passo a passo pra chegar lá é essencial.
    
    NÂO SAIA TENTANDO ESCREVER CÓDIGO! Antes disso você precisa saber O QUE precisa ser feito e só depois COMO fazer.

		Objetivo do exercício: Verificar se o elemento possui uma classe, se não tiver deverá ser adicionada. Caso existir, remover essa classe.
	
		Passo 1 - Pegar o elemento do quadrado azul no JS.

		Passo 2 - Quando o usuário clicar no quadrado, precisamos disparar a ação de verificar se a cor do quadrado é a cor azul.

		Passo 3 - Criamos uma varíavel que irá verificar se a classe contém a cor azul. 

		Passo 4 - Fazer a verificação utilizando essa varíavel criada, se ela existir, é removida a classe azul do quadrado. 
							
		Passo 5 - Caso não ter a cor azul, é adicionada a classe e o alerta deve ser disparado.
		
*/

// // Passo 1 - Pegar o elemento do quadrado azul aqui no JS.
// const quadrado = document.querySelector(".quadrado");

// // Passo 2 - Quando o usuário clicar no quadrado, precisamos disparar a ação de verificar se a cor do quadrado é a cor azul.
// quadrado.addEventListener('click', () => {
// 		// Passo 3 - Criamos uma varíavel que irá verificar se a classe contém a cor azul.
//     const classeAzulExiste = quadrado.classList.contains('azul');

// 		// Passo 4 - Fazer a verificação utilizando essa varíavel criada, se ela existir, é removida a classe azul do quadrado. 
//     if (classeAzulExiste) {
//         quadrado.classList.remove("azul");
//     } else {
// 				// Passo 5 - Caso não ter a cor azul, é adicionada a classe e o alerta deve ser disparado.
//         quadrado.classList.add("azul");
//     }
// });