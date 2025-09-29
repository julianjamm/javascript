// 106. Nota a Letra
function notaLetra(n) {
  return n >= 90 ? "A" : n >= 80 ? "B" : n >= 70 ? "C" : n >= 60 ? "D" : "F";
}
console.log(notaLetra(85)); // "B"