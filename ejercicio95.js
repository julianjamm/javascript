// 95. Búsqueda Binaria
function buscar(arreglo, valor) { // Devuelve índice si lo encuentra
  let inicio = 0, fin = arreglo.length-1;
  while (inicio <= fin) {
    let medio = Math.floor((inicio+fin)/2);
    if (arreglo[medio] === valor) return medio;
    if (arreglo[medio] < valor) inicio = medio+1;
    else fin = medio-1;
  }
  return -1;
}
console.log(buscar([1,3,5,7,9], 5)); // 2