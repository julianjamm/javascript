// 105. Clasificación Edad
function clasificarEdad(e) { 
  return e < 13 ? "niño" : e < 18 ? "adolescente" : e < 60 ? "adulto" : "anciano";
}
console.log(clasificarEdad(25)); // "adulto"