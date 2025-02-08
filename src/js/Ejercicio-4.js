/*

Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let commonCourses = [];

// Usamos un ciclo for para recorrer los cursos de student1
for (let i = 0; i < student1Courses.length; i++) {
  if (student2Courses.includes(student1Courses[i])) {
    // Si el curso de student1 está en student2, lo agregamos al arreglo común
    commonCourses.push(student1Courses[i]);
  }
}

console.log("Cursos comunes:", commonCourses);
