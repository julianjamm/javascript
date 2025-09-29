// Ejercicio 25: Conversor de Unidades
let unidad = "metros";
let valor = 100;
let convertido;

switch (unidad) {
  case "metros":
    convertido = valor * 100; // cm
    break;
  case "kilometros":
    convertido = valor * 1000; // m
    break;
  case "millas":
    convertido = valor * 1609; // m
    break;
  default:
    convertido = "Unidad no válida";
}
console.log("Convertido:", convertido);