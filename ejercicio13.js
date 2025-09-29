// Ejercicio 13: Suma de Dígitos
let num = 5432; // Definimos un número

let suma = 0; // Inicializamos la suma en 0
for (let digito of num.toString()) { // Recorremos cada dígito convertido a string
  suma += parseInt(digito); // Convertimos el carácter a número y lo sumamos
}
console.log("Suma de los dígitos:", suma); // Mostramos la suma de los dígitos