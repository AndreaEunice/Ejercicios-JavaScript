/*
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}

printOutString();
Complete the function to print out the string: This is a sentence.
*/

let arra = ["This", "is", "a", "sentence."];
function printOutStringArr() {
    return arra.join(" ");
}

printOutStringArr(arra);

/* Usando ciclo for

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
*/

let arr = ["This", "is", "a", "sentence."];

function printOutString() {
  let concatenado = ""; // concatendando tiene un empty string para ir asignando los elementos del arreglo
  
  for (let index = 0; index < arr.length; index++) {
    concatenado += arr[index];
    
    // Si no es la última palabra, agregamos un espacio, .length - 1 indica el numero de elementos(4 elementos en este caso), no su posición, por tanto, en este ejemplo, index (posición) siempre tendrá como máximo 3.
    if (index < arr.length - 1) {
      concatenado += " "; // Aquí toma el elemento del arreglo y le agrega un espacio.
    }
  }
  return concatenado;  // imprime el resultado de la concatenación que se guardó en let concatenado.
}

console.log(printOutString()); 

