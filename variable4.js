var name = "Dan";


var isTeacher = function() {
  if (name === "Dan") {
    return true;
  } else if (name === "Andrew") {
    return true;
  } else {
    return false;
  }
}

console.log(isTeacher() );
