let listaDeCompras = [];
const agregarProducto = (producto) => {
    listaDeCompras.push(producto);
    console.log(`Producto ${producto} agregado a la lista de compras.`);
}

const eliminarProducto = () => {
    listaDeCompras.pop();
    console.log(`Producto ha sido eliminado de la lista de compras.`);
}

const mostrarLista = () => {
    console.log("Lista de Compras:");
    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1}.- ${producto}`);
    });
}
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Huevos");
mostrarLista();
eliminarProducto();
mostrarLista();
