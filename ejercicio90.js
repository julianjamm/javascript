// 90. Calculadora Estadística
function media(arr) { // Promedio
  let suma = 0;
  for (let n of arr) suma += n;
  return suma / arr.length;
}
console.log(media([2,4,6]));