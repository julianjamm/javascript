// 97. Calculadora con Funciones (operadores sencillos)
function sumar(a, b) { return a + b; }       // Suma con +
function restar(a, b) { return a - b; }      // Resta con -
function multiplicar(a, b) { return a * b; } // Multiplicación con *
function dividir(a, b) { return a / b; }     // División con /
function potencia(a, b) { return a ** b; }   // Potencia con **
function raiz(a) { return a ** (1/2); }      // Raíz cuadrada con exponente
function absoluto(a) { return a < 0 ? -a : a; } // Absoluto con operador ternario

console.log(sumar(5, 3));        // 8
console.log(restar(5, 3));       // 2
console.log(multiplicar(5, 3));  // 15
console.log(dividir(10, 2));     // 5
console.log(potencia(2, 3));     // 8
console.log(raiz(16));           // 4
console.log(absoluto(-7));       // 7