// 88. Función de Ordenamiento
function ordenar(arreglo) { // Ordena de menor a mayor
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo.length-1; j++) {
      if (arreglo[j] > arreglo[j+1]) {
        let temp = arreglo[j];
        arreglo[j] = arreglo[j+1];
        arreglo[j+1] = temp;
      }
    }
  }
  return arreglo;
}
console.log(ordenar([4,2,7,1]));