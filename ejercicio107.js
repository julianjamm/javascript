// 107. Día Laboral
function diaLaboral(dia) { 
  return (dia >= 1 && dia <= 5) ? "laboral" : "fin de semana";
}
console.log(diaLaboral(6)); // "fin de semana"