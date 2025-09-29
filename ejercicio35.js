// Ejercicio 35: Sistema de Nómina
let contrato = "tiempo_completo";
let horasTrab = 40;
let pago;

switch (contrato) {
  case "medio_tiempo":
    pago = horasTrab * 10;
    break;
  case "tiempo_completo":
    pago = horasTrab * 15;
    break;
  case "contratista":
    pago = horasTrab * 20;
    break;
  default:
    pago = 0;
}
console.log("Pago:", pago);