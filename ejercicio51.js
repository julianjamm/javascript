// 51. Suma de Matrices
let A = [[1,2],[3,4]]; // Matriz A
let B = [[5,6],[7,8]]; // Matriz B
let resultado = []; // Matriz resultado
for (let i = 0; i < A.length; i++) { // Recorre filas
  resultado[i] = []; // Inicializa fila
  for (let j = 0; j < A[i].length; j++) { // Recorre columnas
    resultado[i][j] = A[i][j] + B[i][j]; // Suma elemento a elemento
  }
}
console.log(resultado); // Muestra matriz suma