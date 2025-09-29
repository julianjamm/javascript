// 85. Formateador de Fechas
function formatearFecha(fecha) { // Convierte a formato simple
  let d = new Date(fecha);
  return d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
}
console.log(formatearFecha("2025-09-29"));