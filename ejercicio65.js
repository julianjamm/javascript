// 65. Array Invertido
let original = [1, 2, 3, 4]; // Array base
let invertido = []; // Nuevo array
for (let i = original.length - 1; i >= 0; i--) { // Recorre al revés
  invertido.push(original[i]); // Agrega al nuevo array
}
console.log(invertido); // Muestra resultado