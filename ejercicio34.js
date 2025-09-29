// Ejercicio 34: Calculadora Científica Básica con operadores
let operacionCient = "raiz";
let numCient = 9;
let resultadoCient;

switch (operacionCient) {
  case "raiz": // raíz cuadrada = número elevado a 1/2
    resultadoCient = numCient ** (1/2);
    break;
  case "potencia": // potencia al cuadrado
    resultadoCient = numCient ** 2;
    break;
  case "absoluto": // valor absoluto sin Math.abs
    resultadoCient = (numCient < 0) ? -numCient : numCient;
    break;
  default:
    resultadoCient = "Operación no válida";
}
console.log("Resultado científico:", resultadoCient);