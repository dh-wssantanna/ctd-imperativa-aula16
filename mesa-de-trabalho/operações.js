/**
 * Calcula múltiplos valores conforme a função de callback.
 * 
 * @param {number[]} valores Valores que deverão ser calculados.
 * @param {(valores:number[])=>number} operacaoCallback Função responsável pela operação matemática.
 * 
 * @return {number} Resultado da operação matemática.
 */
const soma = (valores)=>{
 return valores.reduce( (valorAcumula, valorAtual) => valorAcumula + valorAtual );
}
/**
 * Calcula múltiplos valores conforme a função de callback.
 * 
 * @param {number[]} valores Valores que deverão ser calculados.
 * @param {(valores:number[])=>number} operacaoCallback Função responsável pela operação matemática.
 * 
 * @return {number} Resultado da operação matemática.
 */
const dividir = (valores)=>{
 return valores.reduce( (valorAcumula, valorAtual) => valorAcumula / valorAtual );
  
}
/**
 * Calcula múltiplos valores conforme a função de callback.
 * 
 * @param {number[]} valores Valores que deverão ser calculados.
 * @param {(valores:number[])=>number} operacaoCallback Função responsável pela operação matemática.
 * 
 * @return {number} Resultado da operação matemática.
 */
const multiplicar = (valores)=>{
 return valores.reduce( (valorAcumula, valorAtual) => valorAcumula * valorAtual );
  
}
/**
 * Calcula múltiplos valores conforme a função de callback.
 * 
 * @param {number[]} valores Valores que deverão ser calculados.
 * @param {(valores:number[])=>number} operacaoCallback Função responsável pela operação matemática.
 * 
 * @return {number} Resultado da operação matemática.
 */
const subtrair = (valores)=>{
  return valores.reduce( (valorAcumula, valorAtual) => valorAcumula - valorAtual );
  
}

function guardarValores(valores) {
  var valoresGuardados = [...valoresGuardados,valores];
  this.exibirValores = function(){
    console.log(valoresGuardados)
  }
}

module.exports = { soma, dividir, multiplicar, subtrair, guardarValores,}