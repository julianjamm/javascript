// 53. Búsqueda en Array
let arr = [10,20,30,40]; // Array base
let buscar = 30; // Elemento a buscar
let encontrado = false; // Bandera
for (let i = 0; i < arr.length; i++) { // Recorre array
  if (arr[i] === buscar) { // Compara elemento
    encontrado = true; // Marca como encontrado
    break; // Sale
  }
}
console.log(encontrado); // Muestra resultado