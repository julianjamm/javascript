// 80. Camino en Matriz 
let tamaño = 3; // Matriz 3x3
function caminos(fila, columna) { // Función recursiva
  if (fila === tamaño-1 && columna === tamaño-1) return 1; // Llegó al final
  if (fila >= tamaño || columna >= tamaño) return 0; // Se sale
  return caminos(fila+1, columna) + caminos(fila, columna+1); // Baja o derecha
}
console.log(caminos(0,0)); // Muestra cantidad de caminos