// 89. Manipulador de Strings
function manipular(texto) { // Retorna mayúsculas, minúsculas y largo
  return [texto.toUpperCase(), texto.toLowerCase(), texto.length];
}
console.log(manipular("Hola"));