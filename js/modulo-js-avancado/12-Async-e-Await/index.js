let ferverAgua = (chaleiraEstaNoFogo, fogaoEstaLigado) => {
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

// ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
// .then(() => {
//     return passarCafe();
// })
// .then(() => {
//     return tomarCafe();
// })
// .then(() => {
//     return lavarXicara();
// })
// .then(() => {
//     console.log("Finalizado ritual do café, bora trabalhar.")
// })

//Este processo abaixo é o mesmo de cima, mas usando async e await, código muito mais legivel
async function iniciarProcessoDeFazerCafé() { //Async vai voltar uma Promise
    // o await vai voltar o valor final que queremos, por exemplo, se dermos console.log 
    //ele voltará apenas o resultado final após o processamento da promise 
    //E tambeém ele diz, espere a função ferverAgua finalizar para que possamos continuar com nosso fluxo
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafePassdo = await passarCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassdo)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if(xicaraLavada) console.log('Finalizado o ritual de tomar café, bora trabalhar!');
    console.log(aguaFervida)
}

iniciarProcessoDeFazerCafé()






//O termo async em JavaScript é uma palavra-chave que facilita o trabalho com código assíncrono, tornando-o mais legível e organizado. Geralmente, é usado em conjunto com a palavra-chave await. Aqui está um resumo:

// 1. O que é async?
// async é usado para declarar uma função assíncrona. Isso significa que a função sempre retornará uma Promise, seja explicitamente ou implicitamente.

// Explicitamente: Se você retornar uma Promise dentro de uma função async, ela será resolvida como tal.
// Implicitamente: Se você retornar qualquer outro valor, ele será automaticamente encapsulado em uma Promise resolvida.

// 2. Por que usar async?
// O código assíncrono em JavaScript é frequentemente usado para tarefas como chamadas a APIs, leitura/escrita de arquivos e operações que demoram para ser concluídas. Antes do async/await, trabalhava-se principalmente com then() e catch(), o que podia levar a um código menos legível ("callback hell"). Com async/await, o código se assemelha mais a um fluxo síncrono, mesmo sendo assíncrono.

// 3. Como funciona com await?
// A palavra-chave await só pode ser usada dentro de funções marcadas como async. Ela pausa a execução da função assíncrona até que a Promise seja resolvida ou rejeitada.