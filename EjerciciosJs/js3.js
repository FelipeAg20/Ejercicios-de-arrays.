/*Ejercicio 3: Buscar un elemento en un array
• Crea un array con al menos 10 elementos de diferentes tipos (números, strings, booleanos).
• Busca un elemento específico en el array por su valor.
• Imprime la posición (índice) del elemento encontrado o un mensaje si no se encuentra.
• Bonus: Usa diferentes métodos para realizar la búsqueda (por ejemplo, indexOf, find).*/
const lista =['a','b','c','d','e',1,2,3,true,false,]


let dato = prompt("ingrese valor a buscar en la lista ")
console.log(lista.filter(x=>{
    if(x==dato){
        console.log("el dato buscado fue encontrado");
        console.log(x);
        return x;
    }
}) )
//console.log(lista.length("e"));
//console.log(lista.find(x=>x == 'az' )) 
