// Ejercicio 37: Calculadora de Calorías
let actividad = "correr";
let tiempo = 30; // minutos
let calorias;

switch (actividad) {
  case "correr":
    calorias = tiempo * 10;
    break;
  case "caminar":
    calorias = tiempo * 5;
    break;
  case "nadar":
    calorias = tiempo * 8;
    break;
  default:
    calorias = 0;
}
console.log("Calorías quemadas:", calorias);