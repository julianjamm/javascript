// 57. Frecuencia de Elementos
let datos = [1,2,2,3,3,3]; // Array base
let frecuencia = {}; // Objeto para contar
for (let i = 0; i < datos.length; i++) { // Recorre array
  let elem = datos[i]; // Elemento actual
  frecuencia[elem] = (frecuencia[elem] || 0) + 1; // Suma frecuencia
}
console.log(frecuencia); // Muestra resultado