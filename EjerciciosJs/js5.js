/*Ejercicio 5: Filtrar elementos de un array
• Crea un array con nombres de personas y sus edades.
• Filtra el array para obtener solo los nombres de las personas mayores de edad (por ejemplo, usando filter).
• Imprime los nombres de las personas que cumplen con el criterio.
• Usa un bucle para recorrer el array filtrado y realizar alguna acción con cada elemento (por ejemplo, mostrar un
mensaje).*/

const personas = [
    {
    nombre: "juan",
    edad:18,
},
{
    nombre:"Felipe",
    edad:17
},
{
    nombre:"pepe",
    edad:20
},
{
    nombre:"chanchito",
    edad:20
}
];



const mayoresEdad = personas.map(x=>{

    //.edad es igual a buscar esa clave en el arreglo de objetos 
    if(x.edad>=18){
        console.log("Esta persona es mayorer de edad");
        console.log(x);
        return x;
    }
})

   