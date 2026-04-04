//
// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function findGift(gifts, giftName, index = 0) {
    // Caso base 1: Si el índice es igual al largo, recorrimos todo sin éxito
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso base 2: Si el elemento en la posición actual es el que buscamos
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // Paso recursivo: Llamamos a la función de nuevo incrementando el índice
    return findGift(gifts, giftName, index + 1);
}

// Casos de ejemplo:
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind)); 
// Salida: "Lego está en la posición 3."

giftToFind = "Camión";
console.log(findGift(gifts, giftToFind)); 
// Salida: "Camión no está en la lista."