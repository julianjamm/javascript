// Ejercicio 39: Conversor de Bases
let numeroBase = 15;
let base = "binario";
let convertidoBase;

switch (base) {
  case "binario":
    convertidoBase = numeroBase.toString(2);
    break;
  case "decimal":
    convertidoBase = numeroBase.toString(10);
    break;
  case "hexadecimal":
    convertidoBase = numeroBase.toString(16);
    break;
  default:
    convertidoBase = "Base no válida";
}
console.log("Convertido:", convertidoBase);