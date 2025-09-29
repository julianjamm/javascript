// Ejercicio 29: Sistema de Descuentos
let categoria = "oro";
let precio2 = 300;
let precioFinal;

switch (categoria) {
  case "bronce":
    precioFinal = precio2 * 0.95;
    break;
  case "plata":
    precioFinal = precio2 * 0.90;
    break;
  case "oro":
    precioFinal = precio2 * 0.85;
    break;
  default:
    precioFinal = precio2;
}
console.log("Precio final:", precioFinal);