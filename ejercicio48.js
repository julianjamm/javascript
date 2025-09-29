// 48. Contador de Vocales
let texto = "hola mundo"; // Texto base
let contador = 0; // Contador de vocales
for (let i = 0; i < texto.length; i++) { // Recorre la cadena
  if ("aeiou".includes(texto[i].toLowerCase())) { // Verifica si es vocal
    contador++; // Suma si es vocal
  }
}
console.log(contador); // Muestra cantidad