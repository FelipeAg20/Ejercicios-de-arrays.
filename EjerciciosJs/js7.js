/*Ejercicio 7: Eliminar elementos duplicados de un array
• Crea un array con elementos duplicados.
• Elimina los elementos duplicados del array.*/

const listas = [1,1,2,3,3,4,5];
// se usa el objeto set para crear un nuevo array sin elementos duplicados (...spread)

const nuevaLista = [...new Set(listas)];
console.log(nuevaLista)
