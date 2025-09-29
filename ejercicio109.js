// 109. Tipo de Triángulo
function tipoTriangulo(a, b, c) {
  return a === b && b === c ? "equilátero" : 
         a === b || b === c || a === c ? "isósceles" : "escaleno";
}
console.log(tipoTriangulo(3, 3, 5)); // "isósceles"