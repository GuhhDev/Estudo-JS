function findBiggestFraction(a, b) {
  var result;
  a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
  return result;
}
// Variável global, usando dentro da function
var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction, secondFraction);

console.log("O resultado da primeira fração é: " + firstFraction);
console.log("O resultado da segunda fração é: " + secondFraction);
console.log("a maior Fração é: " + fractionResult[0] + "com o valor: " + fractionResult[1]); 

/*------------------------------------------------------------------*/ 

// Funções anônimas!

// Estas variáveis não estão sendo usadas, porque a anônima usa o que está sendo
// passado por parâmetro e não as variáveis globais;

a = 5/7;
b = 18/25;

var theBiggest = function (a, b) {
  var result;
  a>b ? result = ["a", a] : result = ["b", b];
  return result;
};

console.log(theBiggest(7/9, 13/25));



/*------------------------------------------------------------------*/

// Função imediatamente invocada

var firstFraction = 7/9;
var secondFraction = 13/25;

var theBiggest = (function (a, b) {
  var result;
  a>b ? result = ["a", a] : result = ["b", b];
  return result;
  /*aqui está a expressão exclusiva de IIFE */ 
  /*para listar as variáveis nestas expressões exclusivas, deve-se declarar
  as variáveis antes da função IIFE*/ 
/*})(7/9, 13/25);*/
})(firstFraction, secondFraction);

console.log(theBiggest); 