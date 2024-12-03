// export function somar(num1, num2) {  //exporte na frente para informar que vamos exportar para algum lugar o resultado desta função
//     return num1 + num2
// }



// EM CASOS QUE VC VAI EXPORTAR/IMPORTAR MAIS DE UMA FUNÇÃO
function somar(num1, num2) { 
    return num1 + num2
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2
}


export {somar, multiplicar} //colocar o export no final seguido de chaves, e dentro passando as funcoes que quer exportar

