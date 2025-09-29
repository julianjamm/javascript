// 87. Fibonacci Recursivo
function fibonacci(n) { // Devuelve el n-ésimo número Fibonacci
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(6)); // 8 