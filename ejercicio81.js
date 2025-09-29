// 81. Función de Validación
function validar(tipo, valor) { // Función que valida tipo de dato
  if (tipo === "numero") return typeof valor === "number"; // Valida número
  if (tipo === "texto") return typeof valor === "string"; // Valida texto
  if (tipo === "booleano") return typeof valor === "boolean"; // Valida booleano
  return false; // Si no coincide, devuelve false
}
console.log(validar("numero", 123)); // true
console.log(validar("texto", "hola")); // true
console.log(validar("booleano", true)); // true