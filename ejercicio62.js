// 62. Elementos Únicos
let lista = [1, 2, 2, 3, 4, 4, 5]; // Array base
for (let i = 0; i < lista.length; i++) { // Recorre array
  let contador = 0; // Contador
  for (let j = 0; j < lista.length; j++) { // Recorre de nuevo
    if (lista[i] === lista[j]) contador++; // Cuenta repeticiones
  }
  if (contador === 1) console.log(lista[i]); // Si es único lo muestra
}