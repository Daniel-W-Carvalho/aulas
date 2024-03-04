/*
String
Number - Int / Inteiro
Boolean
Null
Undefined

Todos os valores abaixo são falsos:
false
null
undefined
0
-0
NaN
An empty string ('')

*/

let nome = "Daniel"  //tipo string / tipo texto
let numero = 0.7788 // tipo numero, pode ser inteiro, decimal (seguido de ponto) ou negativo
let usuarioVerificado = true // Boolean - false ou True 
let pessoa = null // Náo ocupará espaço na memoria, ou inválidado
let telefone = undefined // Indefinido, não seguindo nenhuma dos tipos primitivos acima

/*
CONVERTER TIPOS

Converter string para numeros:
Number.parseInt() = todos os dados que entrar, tem que ser numeros inteiros
Number.parseFloat() = todos os dados que entrar, tem que ser numeros flutuantes ou numeros com ponto e virgula
Number() = o proprio JS decidirá se o dado entrado vai ser int ou float, dependendo do que o usuario digitou
EXEMPLO
var n1 = Number(prompt("Digite um numero: "))

-------------------------------------------------------------------------------------------------------------------
Converter numeros para string
String.()
.toString()
EXEMPLO
var idade = prompt("Digite sua idade: ").toString();

var num = 10
String(num)

-------------------------------------------------------------------------------------------------------------------

EXEMPLOS DE UpperCase(maiusculas), LowerCase(minusculas) e length(quantidade de letras)
https://prnt.sc/fyT5moHLYle9

-------------------------------------------------------------------------------------------------------------------

Exemplos para adicionar casa decimais:
var n1 = 1545.5

n1.toFixed(2) entre paresenteses decide quantas casas decimas aparecerá
1545.50

Converter o ponto do numero decimal por virgula:
n1.toFiex(2).replace('.' , ',') -> ou seja, depois do replace, dizemos que queremos trocar o ponto pela virgula.

Convertendo a string para o local onde deseja, no exemplo abaixo, vamos utilizar moeda Brasil(Real):
n1.toLocalString('pt-BR', {style: 'currency', currency:'BRL'})
R$ 1,545.50

Convertendo a string para o local onde deseja, no exemplo abaixo, vamos utilizar moeda EUA (Dolar):
n1.toLocalString('pt-BR', {style: 'currency', currency:'USD'})
US$ 1,545.50

-------------------------------------------------------------------------------------------------------------------

*/


