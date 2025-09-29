// 58. Fibonacci con Array
let nFib = 10; // Cantidad de números
let fib = [0,1]; // Valores iniciales
for (let i = 2; i < nFib; i++) { // Recorre desde el 3er número
  fib[i] = fib[i-1] + fib[i-2]; // Calcula siguiente
}
console.log(fib); // Muestra serie