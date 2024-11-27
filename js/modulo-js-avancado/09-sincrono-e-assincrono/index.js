//SINCRONO -> Seria uma sequencia de código Linear, começando de cima pra baixo de uma forma natual
//ASSINCRONO -> Uma sequencia de código não Linear, podendo ter diversas variaveis e

//EXEMPLO PREPARAR CAFÉ SINCRONO
//Colocar a água pra esquentar no fogão e ficar la esperando a água ficar quente e depois ir preparar o resto das coisas.

//EXEMPLO PREPARAR CAFÉ ASSINCRONO
//Colocar a água pra esquentar e ja ir preparando as coisas antes da água ficar quente, economizando um baita tempo.


function colocarAguaPraFerver() { //Criando função colocar agua pra ferver
    console.log('colocar água pra ferver'); //console.log 

    setTimeout(() => {  //setando um tempo e uma função em seguida
        console.log('agua ferveu') //dando console dentro da função
        passarOCafe() //chamou a função passar o após 5 segundos conforme definimos abaixo
    },5000); //chamando a função acima após 5 segundos
}

function prepararPraPassarOCafe(){ //criando função preparar para passar o cafe
    console.log('pegar pó de café');
    console.log('pegar filtro do café');
    console.log('colocar café no filtro');
    console.log('colocar o filtro em cima da xicara');
}

function passarOCafe() { //criando função passar o cafe, que vai ser acionada pelo colocar agua pra ferver la em cima, porém demorara 5 segundos para aparecer, pq definimos no
    console.log('passando o café');// timeout da função colocar agua pra ferver
}

colocarAguaPraFerver(); //sera acionada imediatamente la em cima
prepararPraPassarOCafe(); //sera acionada imediatamente acima

