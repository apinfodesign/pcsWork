//Change difference so that it never returns negative numbers. For instance, both difference(5, 7) and difference(7, 5) should return 2.

function dif(first, second){
   third = Math.abs( first - second) ;
   console.log("The difference of ", first, " and ", second, " is ", third);
};

dif(3,4);
