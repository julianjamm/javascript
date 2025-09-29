// Ejercicio 31: Calculadora de Impuestos
let ingreso = 3500;
let impuesto;

switch (true) {
  case (ingreso <= 1000):
    impuesto = ingreso * 0.05;
    break;
  case (ingreso <= 3000):
    impuesto = ingreso * 0.10;
    break;
  case (ingreso > 3000):
    impuesto = ingreso * 0.15;
    break;
  default:
    impuesto = 0;
}
console.log("Impuesto:", impuesto);