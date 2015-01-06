//

var students = [
 {name: "Jack", gender:"m", grade:7},
 {name: "Bob", gender:"m", grade:8},
 {name: "Sally", gender:"f", grade:12},
 {name: "Jane"},

 {name: "Jack", gender:"m", grade:7}
 ];

// console.log(authors[2]);

// for (var i = 0; i < authors.length; i++) {
//   console.log(authors[i]);
// };

students.forEach(function(students){

console.log("Name: ");
if (students.name !== undefined)   {console.log( students.name) };

console.log("Gender: ");
if (students.gender !== undefined) {console.log( students.gender) };

console.log("Grade Level: ");
if (students.grade !== undefined)  {console.log( students.grade) };

console.log("-----------------------");
 });

