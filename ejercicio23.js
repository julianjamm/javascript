// Ejercicio 23: Estación del Año
let mes = 8;
let estacion;

switch (mes) {
  case 12: case 1: case 2:
    estacion = "Invierno"; break;
  case 3: case 4: case 5:
    estacion = "Primavera"; break;
  case 6: case 7: case 8:
    estacion = "Verano"; break;
  case 9: case 10: case 11:
    estacion = "Otoño"; break;
  default:
    estacion = "Mes no válido";
}
console.log("Estación:", estacion);