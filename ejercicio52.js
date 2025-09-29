// 52. Multiplicación de Matrices
let M1 = [[1,2],[3,4]]; // Matriz M1
let M2 = [[5,6],[7,8]]; // Matriz M2
let res = [[0,0],[0,0]]; // Resultado inicial
for (let i = 0; i < 2; i++) { // Filas de M1
  for (let j = 0; j < 2; j++) { // Columnas de M2
    for (let k = 0; k < 2; k++) { // Recorre fila/columna
      res[i][j] += M1[i][k] * M2[k][j]; // Multiplica y suma
    }
  }
}
console.log(res); // Muestra resultado