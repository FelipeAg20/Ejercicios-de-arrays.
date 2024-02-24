/*Ejercicio 6: Combinar dos arrays
• Crea dos arrays con diferentes elementos.
• Combina los dos arrays en un solo array nuevo.
• Mantén el orden original de los elementos en el array combinado.*/

const lista1 =[1,2,3,4,5,6,7,8,9,10]
const lista2 =["a","b","c","d","e","f","g","h"]

// los ... copia los arrays y los copia y los fusiona
const fusionListas =[...lista1,...lista2];
console.log(fusionListas);
// no se hacer que queden en el mismo orden 
