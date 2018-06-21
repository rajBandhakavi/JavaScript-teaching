/*
There are three types of functions in javascript
1. Named functions
2. Anonymous functions
3. Immediately invoked function expressions : These run the moment browser encounters them.
*/

function multiply(a,b){
  var result = a*b;
  console.log(result);
  return result;
}

var answer = multiply(5,4);

/*
Anonymous functions stored in a variable
Invoked by calling a variable as a function
*/
var divided = function(){
  var result = 3/4;
  console.log("3 divided by 4 is: "+result);
}
divided();


/*
Immediately invoked function expression.
They have another paranthesis pair at the end to trigger them
*/

(function() {
  var result = 12/0.75;
  console.log("12 divided by 0.75 is: "+result);
}())
