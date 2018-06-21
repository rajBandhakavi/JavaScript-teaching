/*
How do we store the result of an anonymous function to a variable?
The answer is Immediately invoked function
*/
var firstFraction = 7/9;
var secondFraction = 21/25;

var theBiggest = (function(a,b){
    var result;
    a>b ? result = ["a" , a] : result = ["b" , b];
    return result;
})(firstFraction,secondFraction);

console.log(theBiggest);

/*
Why do we need an Immediately invoked function?
The reason is that this is unaffected by the lines below the Immediately Invoked
function. The use is that they can be hooked to even listners and used for populating
variables or arguments for bigger functions.
*/
