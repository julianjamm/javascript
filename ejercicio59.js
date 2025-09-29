// 59. Números Perfectos
let limitePerfecto = 1000; // Límite máximo
for (let num = 2; num <= limitePerfecto; num++) { // Recorre números
  let sumaDiv = 0; // Acumulador divisores
  for (let i = 1; i < num; i++) { // Recorre posibles divisores
    if (num % i === 0) sumaDiv += i; // Suma divisores
  }
  if (sumaDiv === num) console.log(num); // Si es perfecto lo muestra
}