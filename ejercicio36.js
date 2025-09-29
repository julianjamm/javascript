// Ejercicio 36: Clasificador de Triángulos
let lado1 = 5, lado2 = 5, lado3 = 5;
let tipoTriangulo;

switch (true) {
  case (lado1 === lado2 && lado2 === lado3):
    tipoTriangulo = "Equilátero";
    break;
  case (lado1 === lado2 || lado2 === lado3 || lado1 === lado3):
    tipoTriangulo = "Isósceles";
    break;
  default:
    tipoTriangulo = "Escaleno";
}
console.log("Triángulo:", tipoTriangulo);