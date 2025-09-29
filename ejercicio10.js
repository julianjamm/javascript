// Ejercicio 10: Año Bisiesto
let año = 2024; // Definimos un año

if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) { // Condición para que un año sea bisiesto
  console.log("Año bisiesto"); // Si cumple, es bisiesto
} else {
  console.log("No es bisiesto"); // Si no cumple, no es bisiesto
}