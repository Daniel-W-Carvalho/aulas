//O .then() no JavaScript é usado com Promises para executar um código assim que a Promise for resolvida (ou seja, quando a operação assíncrona for concluída com sucesso). Ele permite acessar o valor retornado pela Promise (o valor passado para o resolve) e realizar alguma ação com esse valor.

//Para que serve o .then()?
// Manipular o Resultado: Capturar e trabalhar com o valor retornado pela Promise após sua conclusão bem-sucedida.
// Encadear Operações: Permite realizar múltiplas operações sequenciais em uma Promise, criando um fluxo claro e legível de execução.



let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => { //função recebendo os 2 parametros true
    return new Promise((resolve, reject) =>{ //retorna resolve ou reject dependendo da ação abaixo
        if(chaleiraEstaNoFogao && fogaoEstaLigado){ //se chaleiraestanofogao e fogaoestalida = true e true
            console.log('começando o processo de ferver a água')//entao da o console.log
            resolve()//e retorna o resolve
        }else{//se nao
            console.log('é necessário ligar o fogão e colocar a chaleira no fogão para ferver')//da o console.log
            reject()//e retornaria o reject
        }
    })
}

let chaleiraEstaNoFogao = true //paramtro1
let fogaoEstaLigado = true //parametro2

let passarCafe = () => console.log('passando café')//ultima função chamada do código, chamada pelo .then

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe) // COMEÇA AQUI CHAMANDO A FUNÇÃO   // .then Vem depois que todo o processo tiver sido feito
console.log('fazendo café')//depois de fazer a estapa do ferver a agua, ele imprime esse console e por fim ele faz o .then acima