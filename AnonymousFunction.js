/*Anonymous functions need to be tied to a variable or an event or something similar to run
*/

var a = 5/7;
var b = 18/25;

var theBiggest = function(){
  var result;
  a>b ? result = ["a",a] : result = ["b",b];
  console.log(result);
}

//To get the above anonymous function to run, we do the below
theBiggest();

/*
Instead of showing the output to console, we can also return the result of an anonymous function
*/

var theBiggest1 = function(a,b){
  var result;
  a>b ? result = ["a",a] : result = ["b",b];
  return result;
}

console.log(theBiggest1(12,3));

/*
Later, we will hook anonymous functions to events to do interesting things.
*/

//What happens if we just call the anonymous function using no paranthesis
console.log(theBiggest1);
//We actually get the function. Remember this because we will hook anonymous functions to events
//so we need the function to be returned.
