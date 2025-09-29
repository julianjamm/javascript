// 108. Descuento por Edad
function descuento(edad) {
  return edad < 12 ? "50%" : edad >= 60 ? "30%" : "0%";
}
console.log(descuento(65)); // "30%"