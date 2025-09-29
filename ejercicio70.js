// 70. Elementos Faltantes
let secuencia = [1,2,4,6]; // Secuencia base
for (let i = 1; i <= 6; i++) { // Recorre hasta el máximo
  if (!secuencia.includes(i)) console.log(i); // Muestra faltantes
}