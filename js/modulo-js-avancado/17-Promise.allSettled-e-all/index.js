//Promise.all() e Promise.allSettled() são métodos da API de promises do JavaScript que permitem lidar com múltiplas promises ao mesmo tempo. Ambos retornam uma única promise, mas diferem em como tratam o resultado das promises passadas como entrada.


// Promise.all()
// Esse método é usado quando você precisa executar várias promises simultaneamente e quer que todas sejam resolvidas com sucesso antes de prosseguir.

// Características:
// Retorna uma única promise que resolve quando todas as promises passadas como entrada são resolvidas com sucesso.
// Se qualquer uma das promises for rejeitada, o Promise.all() será rejeitado imediatamente com o motivo da rejeição.




// Promise.allSettled()
// Esse método é usado quando você deseja esperar que todas as promises sejam concluídas, independentemente de serem resolvidas ou rejeitadas.

// Características:
// Retorna uma única promise que resolve quando todas as promises passadas como entrada são concluídas (resolvidas ou rejeitadas).
// O resultado contém um array de objetos, onde cada objeto representa o estado da promise (fulfilled ou rejected) e seu valor/motivo.

const loadUsers = async () => { //criando variavel que recebe uma função assincrona
    return new Promise((resolve, reject) =>{ //retorna uma promise (resolve ou reject de parametro)
        setTimeout(() => { //definindo um tempo de resposta. O setTimeout é usado aqui para simular operações assíncronas,como chamadas a uma API ou leituras de banco de dados.
            resolve([ // Estamos resolvendo a promise com um array de objetos.
                {id: 1, name: "john"}, //com o ID e o nome dos Users do github
                {id: 2, name: "jane"}, //com o ID e o nome dos Users do github
            ]);
        }, 2000); //2seg de resposta definido no setTimeout
    });
}

//AQUI ABAIXO ESTAMOS SIMULANDO UM ERRO NA FUNÇÃO LOADREPOSITORIES, SÓ BASTA REMOVER O COMENTÁRIO E EXECUTAR.
// const loadRepositories = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Erro ao carregar os repositórios."); // Simulando um erro
//         }, 2000);
//     });
// };

const loadRepositories = async () => { //criando variavel que recebe uma função assincrona
    return new Promise((resolve, reject) =>{ //retorna uma promise (resolve ou reject de parametro)
        setTimeout(() => { //definindo um tempo de resposta. O setTimeout é usado aqui para simular operações assíncronas,como chamadas a uma API ou leituras de banco de dados.
            resolve([ // Estamos resolvendo a promise com um array de objetos. 
                {id: 1, name: "Repo 1"}, //com o ID e o nome dos Users do github
                {id: 2, name: "Repo 2"}, //com o ID e o nome dos Users do github
            ]);
        }, 2000);//2seg de resposta definido no setTimeout
    });
}


const loadEvents = async () => { //criando variavel que recebe uma função assincrona
    return new Promise((resolve, reject) =>{ //retorna uma promise (resolve ou reject de parametro)
        setTimeout(() => { //definindo um tempo de resposta. O setTimeout é usado aqui para simular operações assíncronas,como chamadas a uma API ou leituras de banco de dados.
            resolve([ // Estamos resolvendo a promise com um array de objetos.
                {id: 1, name: "Event 1"}, //com o ID e o nome dos Users do github
                {id: 2, name: "Event 2"}, //com o ID e o nome dos Users do github
            ]);
        }, 2000); //2seg de resposta definido no setTimeout
    });    
}


const loadAll = async () => { //criando varial que recebe função assincrona
    try{ //tente executar o codigo abaixo - Tentamos obter os resultados das promises usando Promise.all Caso qualquer uma das promises seja rejeitada, o erro será capturado no catch.
        const result = await Promise.all([ // criando variavel result que recebe uma promise, mas com um await, poois esperamos esse resultado para prosseguir adiante. Também definimos um .all após a promise pois queremos o valor sem erro de todas as 3 funções abaixo para prosseguir, se uma falhar não prosseguirá.
            //Também podemos definir uma promise.allSettled, neste caso voltaria as 3 funções independente do resultado. Porém, seria útil especificar que ele não rejeita a promise principal se alguma delas falhar; ele retorna o estado de todas as promises (fulfilled ou rejected).
            loadUsers(), //chamando a função loadUsers que criamos acima
            loadRepositories(), //chamando a função loadRepositories que criamos acima
            loadEvents() //chamando a função loadEvents que criamos acima
        ]);

        console.log(result); 
    } catch (error) {  //criando um "pegue o erro" // Capturamos e exibimos qualquer erro que ocorra em uma das promises
        console.log(error); //de um console no erro que pegamos, caso tenha algum.
    }
}

loadAll(); //chamando a função

