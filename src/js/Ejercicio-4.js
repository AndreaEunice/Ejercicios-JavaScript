/*

Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

//.filter() se usa sobre un arreglo y devuelve uno nuevo
const commonCourses = student1Courses.filter(course => student2Courses.includes(course));
// course son los elementos del arreglo que pasan primero por filter para ser procesados por la funcion (=>)
  // La funcion tiene la condicion de .includes(), que es la que compara que los elementos que pasaron por .filter() se encuentren en el segundo arreglo
console.log(commonCourses);// una vez que se comparan los elementos, .filter() agrega el nuevo arreglo a la variable
