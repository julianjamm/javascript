// 71. Subarray Máximo
let arreglo = [-2,1,-3,4,-1,2,1,-5,4]; // Array base
let maxActual = arreglo[0]; // Máximo actual
let maxTotal = arreglo[0]; // Máximo global
for (let i = 1; i < arreglo.length; i++) { // Recorre array
  maxActual = Math.max(arreglo[i], maxActual + arreglo[i]); // Máximo local
  maxTotal = Math.max(maxTotal, maxActual); // Actualiza global
}
console.log(maxTotal); // Muestra resultado