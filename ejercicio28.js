// Ejercicio 28: Calculadora de Salario
let horas = 40;
let tipo = "medio";
let salario;

switch (tipo) {
  case "basico":
    salario = horas * 10;
    break;
  case "medio":
    salario = horas * 15;
    break;
  case "profesional":
    salario = horas * 20;
    break;
  default:
    salario = 0;
}
console.log("Salario:", salario);