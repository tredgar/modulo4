//Proyecto Algoritmo de Los 2 Punteros

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

const encontrarPareja=(arr) =>{
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // Obtenemos la inicial de cada nombre usando el índice [0]
        const inicialUno = arr[inicio][0];
        const inicialDos = arr[siguiente][0];

        // Compara las iniciales
        if (inicialUno === inicialDos) {
            // Si coinciden, detén la búsqueda y devuelve los nombres
            return [arr[inicio], arr[siguiente]];
        }

        // Si no coinciden, avanza ambos punteros
        inicio++;
        siguiente++;
    }

    return null; // Si recorres toda la lista sin encontrar un par
}

console.log(encontrarPareja(invitados)); 
// Resultado esperado: ["Carlos", "Cecilia"]