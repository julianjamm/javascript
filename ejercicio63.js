// 63. Rotación de Array
let datos = [1, 2, 3, 4, 5]; // Array base
let k = 2; // Posiciones a rotar
for (let i = 0; i < k; i++) { // Repite k veces
  let ultimo = datos.pop(); // Saca último
  datos.unshift(ultimo); // Lo pone al inicio
}
console.log(datos); // Muestra rotado