// 68. Buscar y Reemplazar
let lista2 = [1, 2, 3, 2, 4]; // Array base
let buscar = 2; // Valor a buscar
let reemplazar = 9; // Nuevo valor
for (let i = 0; i < lista2.length; i++) { // Recorre array
  if (lista2[i] === buscar) lista2[i] = reemplazar; // Reemplaza
}
console.log(lista2); // Muestra resultado