// 83. Generador de Contraseñas
function generarClave(longitud) { // Genera contraseña aleatoria
  let caracteres = "abc123"; // Conjunto básico
  let clave = "";
  for (let i = 0; i < longitud; i++) {
    let indice = Math.floor(Math.random() * caracteres.length);
    clave += caracteres[indice]; // Agrega caracter aleatorio
  }
  return clave;
}
console.log(generarClave(6));