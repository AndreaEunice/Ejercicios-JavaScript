/*
Exercise #2 (sugerencia map() )
Write a function that:
	•	Takes in an array of numbers.
	•	Doubles the value of each number in the array.
	•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

function doubleArray(arr) {
    // Usamos map para iterar sobre el arreglo y devolver un nuevo arreglo con los valores duplicados
    let doubledArray = arr.map(num => num * 2);
    
    // Imprimimos el arreglo actualizado
    console.log(doubledArray);
  }
  // Ejemplo de uso
  doubleArray([1, 2, 4, 5]);  // [2, 4, 8, 10]



  // Ejercicio con funcion

function doubleArray(numers) {
    let newArr = [];
    for (let index of numers) {
        newArr.push(index * 2);
        
    }
    return newArr;
}
doubleArray ([1, 2, 4, 5]);


// Ejercicio con función y map()
function doubleArray(arr) {
    let result = []; // Crear un arreglo vacío para almacenar el resultado
    
    // Usar un ciclo for para iterar sobre el arreglo
    for (let i = 0; i < arr.length; i++) {
      // Usamos map en cada elemento dentro del ciclo
      result.push(arr.slice(i, i+1).map(num => num * 2)[0]); // map() con slice para trabajar con un solo número
    }
    
    console.log(result); // Imprime el arreglo actualizado
  }
  
  // Ejemplo de uso
  doubleArray([1, 2, 4, 5]);  // [2, 4, 8, 10]
  