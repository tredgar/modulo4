function maxSumaConsecutiva(arr, k) {
  let maxSuma = 0;
  let sumaActual = 0;

  // Paso 1: Calcula la suma inicial para los primeros 'k' elementos
  for (let i = 0; i < k; i++) {
    sumaActual += arr[i];
    console.log(`Suma actual después de agregar ${arr[i]}: ${sumaActual}`);
  }

  maxSuma = sumaActual;

  // Paso 2: Desliza la ventana a lo largo del arreglo
  for (let i = k; i < arr.length; i++) {
    sumaActual += arr[i] - arr[i - k]; // Agrega el nuevo elemento y elimina el primero
    console.log(
      `Suma actual después de agregar ${arr[i]} y eliminar ${arr[i - k]}: ${sumaActual}`,
    );
    maxSuma = Math.max(maxSuma, sumaActual); // Actualiza el máximo si es necesario
  }

  return maxSuma;
}

console.log(maxSumaConsecutiva([2, 1, 5, 1, 3, 2], 3));
