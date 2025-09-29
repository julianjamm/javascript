// 67. Diagonal Principal
let matriz2 = [[1,2,3],[4,5,6],[7,8,9]]; // Matriz base
let sumaDiagonal = 0; // Acumulador
for (let i = 0; i < matriz2.length; i++) { // Recorre filas
  sumaDiagonal += matriz2[i][i]; // Suma diagonal
}
console.log(sumaDiagonal); // Muestra resultado