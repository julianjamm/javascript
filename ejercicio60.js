// 60. Criba de Eratóstenes 
let n = 50; // Límite
let primos = []; // Lista de primos

for (let i = 2; i <= n; i++) { // Recorre del 2 al n
  let esPrimo = true; // Suponemos que es primo
  for (let j = 2; j < i; j++) { // Recorre posibles divisores
    if (i % j === 0) { // Si es divisible
      esPrimo = false; // No es primo
      break; // Sale del bucle
    }
  }
  if (esPrimo) primos.push(i); // Si es primo lo guarda
}

console.log(primos); // Muestra la lista de primos