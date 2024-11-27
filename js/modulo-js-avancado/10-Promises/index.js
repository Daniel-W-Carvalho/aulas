/*
    pendente
    realizada  -- Resolve
    recusada -- Reject
    Estabelecida
*/


//  promise é uma classe
// new Promise((resolve, reject)=>{ // resolve e reject são parametros mas também são funções - resolve a gente chama quando promise da realizada e reject quando recusada

// })


let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) =>{
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('começando o processo de ferver a água')
            resolve()
        }else{
            console.log('é necessário ligar o fogão e colocar a chaleira no fogão para ferver')
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo café')


//Uma Promise é usada para lidar com operações assíncronas de maneira mais organizada e previsível, substituindo os tradicionais callbacks, que podem levar a códigos confusos (o famoso "callback hell").
// Ela ajuda a:
// Representar um valor futuro ou o resultado de uma operação assíncrona.
// Lidar com sucessos e falhas de forma clara usando .then() e .catch().
// Encadear operações assíncronas de forma legível.



// O que é o resolve?
// O método resolve é usado para mudar o estado da Promise de pendente para resolvida. Ele sinaliza que a operação foi concluída com sucesso e pode fornecer um valor como resultado.
// Quando usar? Sempre que a operação assíncrona for concluída sem erros.
// Exemplo em um contexto assíncrono:
// Após buscar dados de um servidor com sucesso.
// Ao carregar um arquivo sem problemas.



// O que é o reject?
// O método reject é usado para mudar o estado da Promise de pendente para rejeitada. Ele sinaliza que a operação falhou e fornece o motivo do erro.
// Quando usar? Sempre que ocorrer um erro ou problema durante a operação assíncrona.
// Exemplo em um contexto assíncrono:
// Falha ao conectar com o servidor.
// Ocorreu um erro ao processar um arquivo.