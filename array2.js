var pens;
pens = ["red","blue","green","orange"];

console.log("Before: ", pens);

//get length of Array:
console.log("Array length: ", pens.length);

//Reverse the array
pens.reverse();

//Remove the first value of the array
pens.shift();

//add comma separated values to the front of the array2
pens.unshift("purple","black");

//Remove the last value of the array
pens.pop();

//add comma separated values to the end of the array2
pens.push("pink","prussian blue");

//find specified position and remove n elements
pens.splice(2,1);

//create a copy of an array2
var newPens = pens.slice();
//Now we have two separate arrays

//Return the index of first match
var result = pens.indexOf("orange",1);

//Return the items in an array as a comma separated
var arrayString = pens.join();
console.log("string from array: ", arrayString);

//comma separated with space
var arrayString = pens.join(", ");
console.log("string from array: ", arrayString);
