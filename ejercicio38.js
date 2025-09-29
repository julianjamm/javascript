// Ejercicio 38: Sistema de Puntos
let compra = 250;
let puntos;

switch (true) {
  case (compra < 100):
    puntos = 10;
    break;
  case (compra < 200):
    puntos = 20;
    break;
  default:
    puntos = 50;
}
console.log("Puntos obtenidos:", puntos);