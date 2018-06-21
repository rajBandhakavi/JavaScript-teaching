/*
A constant is declared using the const keyword
*/

const MYCONSTANT = 5;
console.log(MYCONSTANT);

/*
If you use the same variable name in nested scopes, something unexpected happens.
See below
*/

function logScope() {
  var localVar = 2;

  if(localVar){
    var localVar = "I'm Different!";
    console.log("nested localVar: ", localVar);
  }

  console.log("logScope localVar: ", localVar);
}

logScope();

/*
To solve this, we use let
*/
function logScope2() {
  var localVar = 2;

  if(localVar){
    let localVar = "I'm Different!";
    console.log("nested localVar: ", localVar);
  }

  console.log("logScope localVar: ", localVar);
}

logScope2();
