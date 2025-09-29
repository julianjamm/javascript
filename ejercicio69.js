// 69. Combinar Arrays
let uno = [1,3,5]; // Array ordenado
let dos = [2,4,6]; // Otro array ordenado
let combinado = uno.concat(dos); // Une
combinado.sort((x,y) => x-y); // Ordena
console.log(combinado); // Muestra resultado