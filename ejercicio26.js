// Ejercicio 26: Sistema de Calificaciones
let nota = 85;
let letra;

switch (true) {
  case (nota >= 90): letra = "A"; break;
  case (nota >= 80): letra = "B"; break;
  case (nota >= 70): letra = "C"; break;
  case (nota >= 60): letra = "D"; break;
  default: letra = "F";
}
console.log("Calificación:", letra);