let botao = document.getElementById("shuffle-btn"); //criando botão para adicionar o evento de click e mudar carta;

botao.addEventListener('click', tirarUmaCartaAleatoria); //adicionando evento de click no botao e chamando função tirarUmaCartaAleatoria;

async function criarBaralho() { // função async para puxar endereço da API e receber o resultado com documento JSON
  const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"; //criando variavel que recebe endereço api do baralho
  const resposta = await fetch(url); //criando varial e colocando await para aguardar o processo de fetch(requisitar) acontecer na URL
  return await resposta.json(); // aqui retorna a requisição do fetch acima mas passamos para o formato .json
}

async function tirarUmaCarta(deck_id) {
  const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
  const resposta = await fetch(url);
  return await resposta.json();
}

async function tirarUmaCartaAleatoria() { //criando função
  const baralho = await criarBaralho();
  const carta = await tirarUmaCarta(baralho.deck_id);
  const imagemCarta = carta.cards[0].image;
  document.getElementById("carta").src = imagemCarta;
}

tirarUmaCartaAleatoria();


