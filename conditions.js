var a = 5;
var b = 4;
var c=9,d=10;
var theNumbersMatch;

if(a == b){
  theNumbersMatch = true;
}
else {
  theNumbersMatch = false;
}

console.log("The numbers match: "+theNumbersMatch);

var x = 5;
var y = "5";
var theNumbersMatch;

if(x == y){
  theNumbersMatch = true;
}
else {
  theNumbersMatch = false;
}

console.log("The numbers match: "+theNumbersMatch);
/*
Observe that x is not exacly equal to y but we get true.
to test abslolute queality, use ===
*/
if(x === y){
  theNumbersMatch = true;
}
else {
  theNumbersMatch = false;
}

console.log("The numbers match: "+theNumbersMatch);

//Similarly, we have != and !==

/*
Below is how we verify two or more conditions
*/

//If a equals b AND x equals y
if(a==b && x==y)
{

}

//If a equals b OR x equals y
if(a==b || x==y)
{

}

//If a equals b XOR x equals y
if((a == b || c==d ) && ((a==b) != (c==d)))
{

}

//Ternary operator
a == b ? console.log("Match") : console.log("No match");
