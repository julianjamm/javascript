// 54. Ordenamiento Burbuja
let arreglo = [5,3,8,1]; // Array base
for (let i = 0; i < arreglo.length; i++) { // Recorre array
  for (let j = 0; j < arreglo.length - 1; j++) { // Recorre pares
    if (arreglo[j] > arreglo[j+1]) { // Compara elementos
      let temp = arreglo[j]; // Guarda temporal
      arreglo[j] = arreglo[j+1]; // Intercambia
      arreglo[j+1] = temp; // Completa intercambio
    }
  }
}
console.log(arreglo); // Muestra ordenado