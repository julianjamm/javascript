// 104. Año Bisiesto Ternario
function bisiesto(a) { 
  return (a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0)) ? "bisiesto" : "no bisiesto";
}
console.log(bisiesto(2024)); // "bisiesto"