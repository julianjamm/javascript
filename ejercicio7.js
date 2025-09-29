// Ejercicio 7: Validación de Contraseña
let val_contra = "miclave123"; // Definimos una contraseña

if (val_contra.length >= 8) { // Verificamos si la longitud de la contraseña es mayor o igual a 8
  console.log("Contraseña válida"); // Si cumple, mostramos que es válida
} else {
  console.log("Contraseña demasiado corta"); // Si no, mostramos que es corta
}