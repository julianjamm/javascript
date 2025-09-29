// 72. Pares que Suman
let datos2 = [1,2,3,4,5]; // Array base
let objetivo = 6; // Suma buscada
for (let i = 0; i < datos2.length; i++) { // Primer número
  for (let j = i+1; j < datos2.length; j++) { // Segundo número
    if (datos2[i] + datos2[j] === objetivo) { // Verifica suma
      console.log(datos2[i], datos2[j]); // Muestra el par
    }
  }
}