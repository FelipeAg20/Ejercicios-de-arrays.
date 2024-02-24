/*Ejercicio 2: Agregar y eliminar elementos de un array
• Crea un array vacío.
• Agrega al menos 3 elementos al array utilizando diferentes métodos (por ejemplo, push, unshift).
• Elimina el último elemento del array.
• Elimina un elemento específico del array por su índice.
• Imprime el array final después de las modificaciones.*/

const persons= [];



for (let i=0; i<3; i++){
    let x =prompt("ingrese el nombre de la persona "+(i+1)+" :")
     persons.push(x)
     console.log(persons)
}

(persons.pop())
persons.splice(1)
console.log(persons)





 