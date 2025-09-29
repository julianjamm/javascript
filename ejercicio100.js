// 100. Sistema de Autenticación
function login(usuario, clave) { // Valida usuario y clave
  let u = "admin", c = "1234";
  return usuario === u && clave === c;
}
console.log(login("admin", "1234")); // true