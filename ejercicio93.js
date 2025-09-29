// 93. Validador de Tarjeta (simple)
function validarTarjeta(num) { // Verifica longitud básica
  return num.length === 16;
}
console.log(validarTarjeta("1234567890123456")); // true