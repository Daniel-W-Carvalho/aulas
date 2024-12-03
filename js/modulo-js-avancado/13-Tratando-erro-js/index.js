// O try e catch no JavaScript são usados para lidar com erros no seu código de forma controlada. Eles fazem parte de um mecanismo chamado tratamento de exceções, permitindo que você evite que erros interrompam completamente a execução do programa.

// Como funciona?
// try: Contém o código que pode lançar um erro (intencionalmente ou não).
// catch: Captura qualquer erro que tenha ocorrido dentro do bloco try e permite que você lide com ele.
// Por que usar try e catch?
// Para prevenir falhas inesperadas no programa.
// Para lidar com erros de maneira específica e informativa.
// Para garantir que o programa continue funcionando mesmo que algo dê errado.

// Por que try...catch é importante?
// Evita travar o programa: Sem o tratamento adequado, um erro pode interromper o funcionamento do script inteiro.
// Experiência do usuário: Você pode exibir mensagens amigáveis ou tomar ações alternativas para o usuário em caso de falha.
// Depuração mais fácil: Permite logar ou rastrear erros de forma mais precisa.

// No JavaScript, o finally é uma parte opcional de uma estrutura try...catch. Ele é usado para executar código após o try (e possivelmente o catch), independentemente de ter ocorrido ou não uma exceção (erro) no bloco try.
//O finally é muito útil para garantir que tarefas importantes sejam realizadas, independentemente do sucesso ou falha no código anterior.

// O throw no JavaScript é uma instrução usada para lançar um erro de forma manual em seu código. Quando um erro é lançado com throw, a execução do código é interrompida imediatamente e o controle passa para o próximo bloco catch (se houver) ou para um manipulador de erros mais geral.

let ferverAgua = (chaleiraEstaNoFogo, fogaoEstaLigado) => {

    if(typeof chaleiraEstaNoFogao != 'bolean') throw "Somente o tipo booleano é aceito" // assim que entrar na função, ele verificara se o tipo do parametro é booleando, se não for ele vai jogar a mensagem 'Somente o tipo booleando é aceito' la no Catch, ou seja, throw é uma forma de lançar um erro de forma manual.

    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogo && fogaoEstaLigado){
        console.log("Passo 1 finalizado: Água foi fervida.")
        resolve();
    }else{
        console.log("é necessário colocar a chaleira com água e ligar o fogão")
        reject();
    }
    })
}

let passarCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log("passo 2 finalizado, café foi passado.");
        resolve(true);
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log("Passo 3 finalizado: Terminei de tomar o café")
        resolve(true);
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log('passo 4 finalizado: Terminei de lavar a xicara')
        resolve(true)
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true



async function iniciarProcessoDeFazerCafé() {
    try{ //tente realizar este código, se conter algum erro, enviaremos para o catch
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafePassdo = await passarCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassdo)
    const xicaraLavada = await lavarXicara(cafeTomado)
    // if(xicaraLavada) 
    }catch(err){ //aqui abriremos o bloco do catch, que guardaremos todos os erros e trataremos, o nome dentro do parenteses é pessoal, vc decide qual colocar.
        console.log(err)
    }finally{//então finalmente, pode executar campo abaixo - finally é indicado para fechar conexões com banco de dados ou fechar arquivos que foram abertos p/ leitura
        console.log('Finalizado o ritual de tomar café, bora trabalhar!');
    }
}

iniciarProcessoDeFazerCafé()
