// Ejercicio 32: Sistema de Transporte
let transporte = "bus";
let distancia = 10; // km
let tarifa;

switch (transporte) {
  case "bus":
    tarifa = distancia * 1000;
    break;
  case "metro":
    tarifa = distancia * 800;
    break;
  case "taxi":
    tarifa = distancia * 2000;
    break;
  default:
    tarifa = 0;
}
console.log("Tarifa:", tarifa);