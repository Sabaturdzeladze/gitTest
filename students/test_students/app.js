const Student = require('../student');

let stud = new Student(1, 'Saba', 20);
stud.addGrade(10).addGrade(8).addGrade(9)
console.log(stud.computeGradesAverage());