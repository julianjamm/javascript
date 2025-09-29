// Ejercicio 15: Factorial
let numero_factorial = 5; // Definimos el número

let factorial = 1; // Inicializamos el factorial en 1
for (let i = 1; i <= numero_factorial; i++) { // Recorremos desde 1 hasta el número
  factorial *= i; // Multiplicamos cada número sucesivamente
}
console.log("Factorial:", factorial); // Mostramos el resultado