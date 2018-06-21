/*
Closure is a function inside a function that relies on the variables of the outside function
reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/

function doSomeMath(){
  var a = 5;
  var b = 4;

  function multiply(){
    var result = a*b;
    return result;
  }

  return multiply;
}

var theResult = doSomeMath();

console.log("The result: ", theResult());
