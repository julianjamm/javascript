// Ejercicio 14: Número Primo
let n = 29; // Definimos un número

let es_primo = true; // Suponemos que es primo al inicio
if (n < 2) es_primo = false; // Si es menor que 2, no es primo
for (let i = 2; i <= Math.sqrt(n); i++) { // Recorremos desde 2 hasta la raíz cuadrada de n
  if (n % i === 0) { // Si es divisible por algún número
    es_primo = false; // Entonces no es primo
    break; // Salimos del bucle
  }
}
console.log(es_primo ? "Es primo" : "No es primo"); // Mostramos el resultado