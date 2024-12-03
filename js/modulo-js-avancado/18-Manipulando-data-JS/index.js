// const dataAtual = new Date();
// console.log(dataAtual);

// const dia = dataAtual.getDate(); selecinando dia atual
// const mes = dataAtual.getMonth()+1; selecionando mes autla, +1 pq enquanto não terminar o mês ele não conta
// const ano = dataAtual.getFullYear(); selecionando ano

// console.log(dia)
// console.log(mes)
// console.log(ano)


//---------------------------------------------------------------------------------------------------

//OPERAÇÕES ENTRE DATAS:
// Ás vezes, precisamos calcular a diferença entre duas datas, vamos ver o exemplo:

//Supondo que a data de nascimento seja 'yyyy-mm-dd'
// const dataNascimento = new Date('1990-05-15');
// const dataAtual = new Date();

// //Calculando a diferença em milissegundos 
// const diferencaEmMilissegundos = dataAtual - dataNascimento;

// //Convertendo diferenca para anos
// const idade = Math.floor(diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000));

// console.log(idade);

//---------------------------------------------------------------------------------------------------

// Formatando Data com toLocaleDateString
// A apresentação visual de datas é crucial. Vamos explorar o método toLocalDateString, que nos permite formatar datas de acordo com a localização do usuário.

// const dataAtual = new Date();
// const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
// console.log(dataFormatada)

//---------------------------------------------------------------------------------------------------

//FORMATANDO DATA COM API Intl.DateTimeFont
// A API Intl.DateTimeFont proporciona uma maneira mais avançada de formatar datas, levando em consideração não apenas o idioma, mas também outras preferëncias do usuário.

// const dataAtual = new Date();
// const formato = new Intl.DateTimeFormat('pt-BR', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
// const dataFormatadaIntl = formato.format(dataAtual)

// console.log(dataFormatadaIntl)

//---------------------------------------------------------------------------------------------------

//EXEPLOS

const dataAtual = new Date();
const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',  // mas podemos colocar long no lugar do numeric, ao inves de aparecer 01/12/24 vai aparecer 01/dezembro/2024
    day: 'numeric'
}

const formatador = new Intl.DateTimeFormat('pt-BR', opcoes);

const dataFormatada = formatador.format(dataAtual);

console.log(dataFormatada);