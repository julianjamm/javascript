// 96. Manipulador de Archivos (simulado con array)
let archivos = [];
function crear(nombre) { archivos.push(nombre); }
function listar() { return archivos; }
crear("nota.txt");
console.log(listar());