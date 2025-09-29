// 92. Generador de Tablas
function tabla(n) { // Genera tabla de multiplicar
  for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n*i));
  }
}
tabla(5);