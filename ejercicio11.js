// Ejercicio 11: Calculadora de Descuento con condición
let precio = 200; // Definimos el precio original
let descuento = 20; // Definimos el porcentaje de descuento
let precio_final; // Creamos la variable para guardar el precio final

if (precio > 100) { // Verificamos si el precio supera 100
  precio_final = precio - (precio * descuento / 100); // Si es mayor, aplicamos el descuento
} else {
  precio_final = precio; // Si no es mayor, el precio queda igual
}

console.log("Precio final:", precio_final); // Mostramos el precio final