// 79. Rotar Matriz 90°
let matriz4 = [[1,2,3],[4,5,6],[7,8,9]]; // Matriz base
let rotada = []; // Nueva matriz
for (let i = 0; i < matriz4.length; i++) { // Columnas
  rotada[i] = []; // Inicializa fila
  for (let j = 0; j < matriz4.length; j++) { // Filas
    rotada[i][j] = matriz4[matriz4.length-1-j][i]; // Gira valores
  }
}
console.log(rotada); // Muestra resultado