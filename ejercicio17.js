// Ejercicio 17: MCD y MCM
let a = 24; // Definimos el primer número
let b = 36; // Definimos el segundo número

function mcd(x, y) { // Función para calcular el máximo común divisor
  while (y !== 0) { // Mientras el segundo número no sea 0
    let temp = y; // Guardamos el valor de y en una variable temporal
    y = x % y; // Calculamos el residuo
    x = temp; // Actualizamos x con el valor de y anterior
  }
  return x; // Retornamos el MCD
}

let maximo_comun_divisor = mcd(a, b); // Calculamos el MCD
let minimo_comun_multiplo = Math.abs(a * b) / maximo_comun_divisor; // Fórmula del MCM

console.log("MCD:", maximo_comun_divisor); // Mostramos el MCD
console.log("MCM:", minimo_comun_multiplo); // Mostramos el MCM