//

var students = [
 {name: "Jack", gender:"m", grade:7},
 {name: "Bob", gender:"m", grade:8},
 {name: "Sally", gender:"f", grade:12},
 {name: "Jane", gender:"f" },

 {name: "jack", gender:"m", grade:7}
 ];

// console.log(authors[2]);

// for (var i = 0; i < authors.length; i++) {
//   console.log(authors[i]);
// };

students.forEach(function(students){
  console.log("Name: ", students.name, "   Grade Level: ", students.grade, "   Gender: ", students.gender);
});

