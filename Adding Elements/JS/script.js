/*
Adding new DOM elements can be technically be done using the innerHTML and outerHTML properties.
But a better way is to break the DOM elements into individual components and adding them to the tree.
1. Create the element

2. Create a text node that goes inside the element

3. Add the text node to the element

4. Add the element to the DOM tree
*/

const FEATURED = document.querySelector(".featured-image");
const IMAGE = FEATURED.querySelector("img");

var altText = IMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");

var captionText = document.createTextNode(altText);

captionElement.appendChild(captionText);

console.log(captionElement);

FEATURED.appendChild(captionElement);

IMAGE.setAttribute("alt","");

/*append function is an alternative */
