// Definir un array de objetos (productos)
let productos = [
    { id: 1, nombre: 'Producto 1', precio: 10.99 },
    { id: 2, nombre: 'Producto 2', precio: 20.49 },
    // Agrega más productos según sea necesario
  ];
  
  // Función para imprimir la lista de productos
  const mostrarProductos = () => {
    console.log('Lista de productos:');
    productos.forEach(producto => {
      console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
    });
    console.log('\n');
  };
  
  // Función para agregar un nuevo producto
  const agregarProducto = (nombre, precio) => {
    const nuevoProducto = {
      id: productos.length + 1,
      nombre: nombre,
      precio: precio,
    };
    productos = [...productos, nuevoProducto];
    console.log('Producto agregado con éxito.\n');
  };
  
  // Función para actualizar un producto por ID
  const actualizarProducto = (id, nuevoNombre, nuevoPrecio) => {
    productos = productos.map(producto => (producto.id === id
      ? { ...producto, nombre: nuevoNombre, precio: nuevoPrecio }
      : producto
    ));
    console.log('Producto actualizado con éxito.\n');
  };
  
  // Función para eliminar un producto por ID
  const eliminarProducto = id => {
    productos = productos.filter(producto => producto.id !== id);
    console.log('Producto eliminado con éxito.\n');
  };
  
  // Ejemplos de uso
  mostrarProductos();
  
  agregarProducto('Nuevo Producto', 15.99);
  mostrarProductos();
  
  actualizarProducto(2, 'Producto Modificado', 25.99);
  mostrarProductos();
  
  eliminarProducto(1);
  mostrarProductos();
  