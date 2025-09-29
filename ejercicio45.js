// 45. Números Primos
let cantidad = 10; // Cuántos primos queremos
let encontrados = 0; // Contador de primos encontrados
let numPrimo = 2; // Número inicial
while (encontrados < cantidad) { // Repite hasta tener la cantidad deseada
  let esPrimo = true; // Bandera
  for (let i = 2; i <= Math.sqrt(numPrimo); i++) { // Comprueba divisores
    if (numPrimo % i === 0) { // Si tiene divisor
      esPrimo = false; // No es primo
      break; // Sale
    }
  }
  if (esPrimo) { // Si es primo
    console.log(numPrimo); // Muestra el número
    encontrados++; // Aumenta contador
  }
  numPrimo++; // Pasa al siguiente número
}