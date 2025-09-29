// 66. Matriz Transpuesta
let matriz = [[1,2,3],[4,5,6]]; // Matriz base
let transpuesta = []; // Resultado
for (let i = 0; i < matriz[0].length; i++) { // Columnas
  transpuesta[i] = []; // Inicializa fila
  for (let j = 0; j < matriz.length; j++) { // Filas
    transpuesta[i][j] = matriz[j][i]; // Transpone valores
  }
}
console.log(transpuesta); // Muestra resultado