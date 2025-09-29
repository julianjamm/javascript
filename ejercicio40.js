// Ejercicio 40: Simulador de Cajero Automático
let opcionCajero = "retirar";
let saldo = 1000;
let monto = 200;

switch (opcionCajero) {
  case "consultar":
    console.log("Saldo disponible:", saldo);
    break;
  case "retirar":
    if (monto <= saldo) {
      saldo -= monto;
      console.log("Retiro exitoso. Nuevo saldo:", saldo);
    } else {
      console.log("Fondos insuficientes");
    }
    break;
  case "depositar":
    saldo += monto;
    console.log("Depósito exitoso. Nuevo saldo:", saldo);
    break;
  default:
    console.log("Opción no válida");
}