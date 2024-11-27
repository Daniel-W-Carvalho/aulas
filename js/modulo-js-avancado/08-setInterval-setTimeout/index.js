// setTimeout é uma definição de tempo para que alguma coisa aconteça, por exemplo, posso definir que depois de abrir uma guia, quero que passeo 5 segundos antes de aparecer um alerta
setTimeout(() => { //setando o timeout com uma função em seguida
    alert('Olá Mundo') // aparecendo um alerta na tela
}, 3000); //após 3 segundos.   Aqui é contado por milisegundos, entao se quero 3 segundos, preciso colocar 3000 milisegundos.


//Ja o setInterval, ele vai executar o bloco de codigo a cada X milisegundos, e não só uma vez como no timeOut
//OBS, caso tenha algum campo de código após o setInterval, o campo sera executado primeiro e o setInterval por ultimo, pq são metodos assincronos
// setInterval(() => { //setando o setIterval e logo depois uma function, mas aqui estamos usando arrowfunction pra simplificar
//     console.log("Executando a cada 2 segundos.")  //console.log
// }, 2000); //definindo que vamos executar o console.log a cada 2 segundos




const idDoIntervalo = setInterval(function(){
    console.log('Executando a cada 2 segundos.')
}, 2000);

console.log(idDoIntervalo)
clearInterval(idDoIntervalo) //esse comando faz com que o setInterval pare de rodar e mostre apenas o ID que definimos na variavel acima


