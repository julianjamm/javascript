// Ejercicio 24: Calculadora de Figuras
let figura = "cuadrado";
let area, perimetro;

switch (figura) {
  case "cuadrado":
    let lado = 4;
    area = lado * lado;
    perimetro = 4 * lado;
    break;
  case "rectangulo":
    let base = 5, altura = 3;
    area = base * altura;
    perimetro = 2 * (base + altura);
    break;
  case "circulo":
    let radio = 2;
    area = Math.PI * radio * radio;
    perimetro = 2 * Math.PI * radio;
    break;
  default:
    area = "Figura no válida";
    perimetro = "Figura no válida";
}
console.log("Área:", area, "Perímetro:", perimetro);