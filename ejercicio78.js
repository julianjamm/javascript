// 78. Simetría de Matriz
let matriz3 = [[1,2,3],[2,5,6],[3,6,9]]; // Matriz
let simetrica = true; // Bandera
for (let i = 0; i < matriz3.length; i++) { // Filas
  for (let j = 0; j < matriz3.length; j++) { // Columnas
    if (matriz3[i][j] !== matriz3[j][i]) simetrica = false; // Compara
  }
}
console.log(simetrica); // Muestra resultado