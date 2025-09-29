// 55. Máximo y Mínimo
let nums = [5,8,2,9,1]; // Array base
let max = nums[0]; // Inicializa máximo
let min = nums[0]; // Inicializa mínimo
for (let i = 1; i < nums.length; i++) { // Recorre array
  if (nums[i] > max) max = nums[i]; // Actualiza máximo
  if (nums[i] < min) min = nums[i]; // Actualiza mínimo
}
console.log("Max:", max, "Min:", min); // Muestra resultado