//encontrar la palabra mas larga  de un texto

const findLongestWord = (text) => {
    const words=text.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      // Obtenemos la palabra actual de la posición del ciclo
      let currentWord = words[i];

      // Comparar la longitud de la palabra actual con la más larga guardada
      if (currentWord.length > longestWord.length) {
        //Actualizar la palabra más larga si la actual la supera
        longestWord = currentWord;
      }
    }
    return longestWord;
}
const text= "JavaScript es un lenguaje de programación poderoso"
console.log(findLongestWord(text));
