// Ejercicio 33: Conversor de Tiempo
let tipoTiempo = "minutos";
let segundos = 3600;
let convertido;

switch (tipoTiempo) {
  case "segundos":
    convertido = segundos;
    break;
  case "minutos":
    convertido = segundos / 60;
    break;
  case "horas":
    convertido = segundos / 3600;
    break;
  default:
    convertido = "Tipo no válido";
}
console.log("Tiempo convertido:", convertido);