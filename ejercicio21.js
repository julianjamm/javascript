// Ejercicio 21: Calculadora con Switch
let num1 = 10, num2 = 5, operacion = "suma";
let resultado;

switch (operacion) {
  case "suma":
    resultado = num1 + num2;
    break;
  case "resta":
    resultado = num1 - num2;
    break;
  case "multiplicacion":
    resultado = num1 * num2;
    break;
  case "division":
    resultado = num1 / num2;
    break;
  default:
    resultado = "Operación no válida";
}
console.log("Resultado:", resultado);