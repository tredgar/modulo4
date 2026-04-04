// Problema: Filtro y Orden de Productos de una Tienda Online


const productos = [
  { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
  { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
  { nombre: "Libro", precio: 12, categoria: "Educación" },
  { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
  { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

//Filtrar productos con filter

console.log("----------------------------------------");
console.log("--- PRODUCTOS FILTRADOS CON COSTO MAYOR A 100 ---");
const mayores = productos.filter((producto) => producto.precio > 100);

console.log(mayores);

console.log("----------------------------------------");
console.log("--- PRODUCTOS ORDENADOS POR NOMBRE ---");
const ordenados = productos.sort((a, b) => a.nombre - b.nombre);
console.log(ordenados);

console.log("----------------------------------------");
console.log("--- NOMBRES DE LOS PRODUCTOS ---");
const nombres = productos.map((producto) => producto.nombre);
console.log(nombres);