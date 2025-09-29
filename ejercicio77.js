// 77. Matriz Identidad
let n = 3; // Tamaño
let identidad = []; // Matriz
for (let i = 0; i < n; i++) { // Filas
  identidad[i] = []; // Inicializa fila
  for (let j = 0; j < n; j++) { // Columnas
    identidad[i][j] = (i === j) ? 1 : 0; // Pone 1 o 0
  }
}
console.log(identidad); // Muestra resultado