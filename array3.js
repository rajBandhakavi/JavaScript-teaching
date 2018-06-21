var pens;

pens = ["red" , "blue" , "green" , "orange"];
console.log("before: ",pens);

console.log("array length: ", pens.length);

pens.reverse();
console.log("after: ",pens);

pens.shift();
console.log("after shift: ",pens);

pens.unshift("purple" , "black");
console.log("after un shift: ",pens);

pens.pop();
console.log("after pop: ",pens);

pens.push("pink");
console.log("after push: ",pens);

pens.splice(2,1);
console.log("after splice: ",pens);

//create a copy of an array2
var newPens = pens.slice();
console.log("after copy: ", newPens);

//Return the index of first match
var result = pens.indexOf("orange",1);
console.log("result: ", result);

//Return the items in an array as a comma separated
var arrayString = pens.join();
console.log("string from array: ", arrayString);

//comma separated with space
var arrayString = pens.join(", ");
console.log("string from array: ", arrayString);
