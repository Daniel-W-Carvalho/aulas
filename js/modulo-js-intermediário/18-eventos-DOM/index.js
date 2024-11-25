// abaixo iremos adicionar um evento ao html, evitando que adicionemos eventos direto no html, como o onclick por exemplo
// o .addEventListener nos permite adicionar eventos a partir de uma ação feita, no caso abaixo estamos adicionando uma função a partir da ação/evento chenge
// 

document    // estamos indo no corpo html
  .querySelector("select[name='estado']") //selecionando todos os select com o name de estado
  .addEventListener("change", function (event) { // e adicionando um evento a partir do addEventListener, neste caso o evento change vai aplicar uma função com parametro event,
                                                 // ou seja, a partir de trocar(change) o select no html, ele vai aplicar a função que criamos.

    console.log(event.target.value);             // dando um console.log mostrando o parametro event, o target mostra o que estamos selecionando no geral e o valor seria o                valor(value) concreto lado html
  });
