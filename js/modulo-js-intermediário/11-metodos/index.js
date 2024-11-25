// METODOS -> Adicionar funções a objetos

let usuario = {
    nome: 'Daniel',
    excluir: function () {  //criando metodo/função dentro do objeto
        console.log(`O usuario ${this.nome} foi excluido.`)
    }
}

console.log(usuario);
usuario.excluir() //chamando o metodo/função dentro do objeto

//EXPLICANDO THIS
let usuario1 = {
    nome: "Goku",
    excluir: function(){
        console.log('O usuário, ' + this.nome + " foi excluído.");
    }
};

let usuario2 = {
    nome: "Vegeta",
    excluir: usuario1.excluir
};

usuario1.excluir(); // O usuário, Daniel foi excluído.
usuario2.excluir(); // O usuário, Maria foi excluído.

// Aqui, ao chamar usuario1.excluir(), o this dentro de excluir se refere a usuario1, então this.nome retorna "Goku". Já ao chamar usuario2.excluir(), this se refere a usuario2, então this.nome retorna "Vegeta".