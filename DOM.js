/*
The browser itself is an object and you can interact with it using JavaScript.
Window is the top level object in a browser.
Document is one major object in the browser.
The Document has its own object model called the Document Object Model(DOM)
Each element in an HTML document is wrapped inside tags is a DOM node.
When a document is added to a browser, it is loaded in a document object in a BOM,
and a document object is created just for this document.
*/
console.log(document.body);
console.log(document.title);
console.log(document.URL);

/*
Important DOM methods
*/
//document.getElementById("some id");
//document.getElementsByClassName('className');
//document.getElementsByTagName('some Tag');

/*
Below are some very useful comma separated CSS selectors
*/
//document.querySelector(".masthead"); //gives first element with class masthead
//document.querySelectorall(".masthead"); //gives all element with class masthead

//Useful link: https://developer.mozilla.org/en-US/docs/Web/API
