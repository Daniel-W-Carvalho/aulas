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

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    .then(() => {
        return passarCafe();
    })
    .then(() => {
        return tomarCafe();
    })
    .then(() => {
        return lavarXicara();
    })
    .then(() => {
        console.log("Finalizado ritual do café, bora trabalhar.")
    })