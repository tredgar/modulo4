let mountains = ["Everest", 'Fuji', 'Nanja Parbar'];
console.log(mountains[0]);
console.log(mountains[1]);
console.log(mountains[2]);  

mountains.push("Popocatepetl");
console.log(mountains);
console.log(mountains.indexOf("Fuji"));
console.log(mountains.indexOf("Iztazihuatl"));//Si no esta el elemento regresa -1

let numeros = [10,20,30,40];
//Ciclo for para recorrer el arreglo
for (let i=0; i<numeros.length; i++){
    console.log(numeros[i]);
}