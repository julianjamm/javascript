// 110. Estado de Agua
function estadoAgua(temp) {
  return temp <= 0 ? "sólido" : temp < 100 ? "líquido" : "gaseoso";
}
console.log(estadoAgua(50)); // "líquido"