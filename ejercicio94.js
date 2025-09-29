// 94. Cifrado César
function cifrar(texto, desplazamiento) { // Desplaza letras
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    let codigo = texto.charCodeAt(i) + desplazamiento;
    resultado += String.fromCharCode(codigo);
  }
  return resultado;
}
console.log(cifrar("abc", 1)); // "bcd"