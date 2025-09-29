// 56. Promedio de Array
let valores = [5,10,15]; // Array base
let sumaValores = 0; // Acumulador
for (let i = 0; i < valores.length; i++) { // Recorre array
  sumaValores += valores[i]; // Suma valores
}
let promedio = sumaValores / valores.length; // Divide por cantidad
console.log(promedio); // Muestra promedio