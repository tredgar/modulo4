//Proyecto del Divide y Vencerás

function findMax(arr) {
    // CASO BASE: Si el arreglo tiene solo un elemento, ese es el máximo
    if (arr.length === 1) {
        return arr[0];
    }

    // DIVIDIR: Calculamos el punto medio y cortamos el arreglo
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // VENCER (Recursión): Buscamos el máximo en cada mitad
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // COMBINAR: Comparamos los dos resultados y devolvemos el mayor
    return leftMax > rightMax ? leftMax : rightMax;
}

// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10