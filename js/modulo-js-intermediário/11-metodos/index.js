// METODOS -> Adicionar funções a objetos

let usuario = {
    nome: 'Daniel',
    excluir: function () {  //criando metodo/função dentro do objeto
        console.log(`O usuario ${this.nome} foi excluido.`)
    }
}

console.log(usuario);
usuario.excluir() //chamando o metodo/função dentro do objeto