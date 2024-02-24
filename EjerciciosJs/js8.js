/*Ejercicio 8: Encontrar el máximo y el mínimo de un array
• Crea un array con números.
• Encuentra el valor máximo y mínimo del array.
• Imprime el valor máximo y mínimo.*/
const array = [];
for (let i = 0; i < 5 ; i++) {
    let pedir =prompt("Introdusca numero "+(i+1) + ":")
    array.push(pedir);
}
let valorMax = Math.max(...array);
let valorMin = Math.min(...array);

console.log("Este es el valor minimo del array : "+valorMax)
console.log("Este es el valor maximo del array : "+valorMax)