// 73. Array de Objetos
let personas = [ // Array de objetos
  {nombre: "Ana", edad: 25},
  {nombre: "Luis", edad: 20},
  {nombre: "Maria", edad: 30}
];
personas.sort((a,b) => a.edad - b.edad); // Ordena por edad
console.log(personas); // Muestra resultado