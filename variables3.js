//

var students = [
 {name: "jack", gender:"m", grade:7},
 {name: "bob", gender:"m", grade:8},
 {name: "bill", gender:"f", grade:12},
 {name: "jack", gender:"m", grade:7}
 ];

// console.log(authors[2]);

// for (var i = 0; i < authors.length; i++) {
//   console.log(authors[i]);
// };

students.forEach(function(students){
  console.log(students.name, " ", students.grade, " and the gender is: ", students.gender);
});

