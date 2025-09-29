// 84. Validación de Email
function validarEmail(texto) { // Valida si contiene @
  return texto.includes("@"); 
}
console.log(validarEmail("prueba@mail.com")); // true