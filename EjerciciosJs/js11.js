/*Ejercicio 11:
Un pequeño negocio necesita un sistema para gestionar su inventario de Sproductos. El sistema debe permitir al usuario:
• Agregar nuevos productos: registrar nombre, descripción, precio, cantidad en stock y categoría.(crear array de
objetos)
• Listar todos los productos: mostrar información completa de cada producto.
• Buscar un producto por nombre: mostrar información del producto si existe.
• Eliminar un producto: eliminar producto del inventario.
• Actualizar la cantidad en stock: modificar la cantidad disponible de un producto.
 }*/

let iteracion = false;
const listaProductos = [
    {
        nombre: "0",
        descripcion: "chanchito",
        precio: 514651,
        cantidad: 5,
        categoria: "feliz",
    },

    {
        nombre: "cervezaa",
        descripcion: "chanchitoo",
        precio: 5146511,
        cantidad: 6,
        categoria: "felizz",
    },
];
const objeto = {};

do {
    let opcion = prompt(
        " Opcion 1: Agregar un producto \n Opcion 2: Lista de productos  \n Opcion 3 : Buscar un producto \n Opcion 4 : Eliminar un producto \n Opcion 5 : Actualiza stock"
    );

    switch (opcion) {
        case "1": //Agregar un producto
            alert("Agrega un producto al stock de la tienda ");

            do {
                objeto.nombre = prompt("Ingrese el nombre del producto");
                objeto.descripcion = prompt("Ingrese la descripcion del producto");
                objeto.precio = parseFloat(prompt("Ingrese el precio del producto"));
                objeto.cantidad = parseInt(prompt("Ingrese el precio del producto"));
                objeto.categoria = prompt("Ingrese la categoria del producto");
                listaProductos.push(objeto);
                alert("Producto agregado con exito crack !");
                console.log(listaProductos);

                var op = prompt("Desea agregar otro producto s/n");
            } while (op == "s");

            break;

        case "2": //listar los productos
            let mensaje = "Lista de los productos de la tienda :\n";
            for (var i = 0; i < listaProductos.length; i++) {
                mensaje +=
                    "Nombre: " +
                    listaProductos[i].nombre +
                    "\nPrecio: " +
                    listaProductos[i].precio +
                    "\nDescripcion: " +
                    listaProductos[i].descripcion +
                    "\nCantidad: " +
                    listaProductos[i].cantidad +
                    "\nCategoria: " +
                    listaProductos[i].categoria;
            }
            alert(mensaje);
            break;

        case "3": //Buscar un producto
      /* var productoBuscar = prompt("¿ Que producto desea buscar ?\n*Marque (s) para volver al menu principal\n\n")
            if (productoBuscar == "s") {
                iteracion = true;
                op = "n"
                break;
            }
            for (var i = 0; i < listaProductos.length; i++) {
                if (listaProductos[i].nombre === productoEliminar) {
                    indiceAEliminar = i;
                    break;
                }
            }
            mensaje +=
                "Nombre: " +
                listaProductos[i].nombre +
                "\nDescripcion: " +
                listaProductos[i].descripcion +
                "\nPrecio: " +
                listaProductos[i].precio +
                "\nCantidad: " +
                listaProductos[i].descripcion +
                "\nCategoria: " +
                listaProductos[i].categoria;
            alert(mensaje);
*/ let mensajes = listaProductos.map((objeto) => "nombre :" + objeto.nombre);
            let mensajeJson = JSON.stringify(mensajes);
            var productoEliminar = prompt(
                "¿ Que producto desea eliminar ?\n*Marque (s) para volver al menu principal\n\n" +
                mensajeJson
            );

            break;

        case "4": //Eliminar un producto
            //AQui se crea un nuevo array con los productos por clave que hay en la lista de productos
            //Se usa el Json para transformar el array a un stgring y que se vea en el alert

            do {
                let mensajes = listaProductos.map((objeto) => objeto.nombre);
                let mensajeJson = JSON.stringify(mensajes);
                var productoEliminar = prompt(
                    "¿ Que producto desea eliminar ?\n*Marque (s) para volver al menu principal\n\n" +
                    mensajeJson
                );
                if (productoEliminar == "s") {
                    iteracion = true;
                    op = "n";
                    break;
                }

                //Cuando ya se tiene el nuevo arreglo se le pide a la persona que introduzca el producto que desea elimanr mientras se le enseña el nuevo array

                var indiceAEliminar = -1;
                for (var i = 0; i < listaProductos.length; i++) {
                    if (listaProductos[i].nombre === productoEliminar) {
                        indiceAEliminar = i;
                        break;
                    }
                }

                // Verificamos si encontramos el objeto
                if (indiceAEliminar !== -1) {
                    // Utilizamos splice para eliminar el objeto en la posición indicada
                    listaProductos.splice(indiceAEliminar, 1);
                    alert("Objeto eliminado.\n" + listaProductos);
                } else {
                    alert("Objeto no encontrado en la lista.");
                    iteracion = false;
                }
            } while (iteracion == false);

            break;

        case "5": //actualiza cantidad de stock
            let mensajesCantidad = listaProductos.map(
                (objeto) =>
                    "nombre = " + objeto.nombre + "\n Cantidad =  " + objeto.cantidad
            );
            let mensajeJsonCantidAD = JSON.stringify(mensajesCantidad);
            var productoStock = prompt(
                "¿ Que stock desea actualizar ?\n*Marque (s) para volver al menu principal\n\n" +
                mensajeJsonCantidAD
            );
            if (productoEliminar == "s") {
                iteracion = true;
                op = "n";
                break;
            }

        default:
    }
} while (op == "n");
