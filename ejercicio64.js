// 64. Unión e Intersección
let a = [1, 2, 3]; // Primer array
let b = [3, 4, 5]; // Segundo array
let union = a.concat(b.filter(x => !a.includes(x))); // Unión
let interseccion = a.filter(x => b.includes(x)); // Intersección
console.log("Unión:", union); // Muestra unión
console.log("Intersección:", interseccion); // Muestra intersección