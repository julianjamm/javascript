// Ejercicio 16: Secuencia Fibonacci
let cantidad = 8; // Definimos la cantidad de números de Fibonacci

let fib = [0, 1]; // Iniciamos la secuencia con 0 y 1
for (let i = 2; i < cantidad; i++) { // Generamos desde la posición 2 hasta la cantidad
  fib.push(fib[i - 1] + fib[i - 2]); // Sumamos los dos anteriores y lo añadimos
}
console.log("Secuencia Fibonacci:", fib.slice(0, cantidad)); // Mostramos la secuencia