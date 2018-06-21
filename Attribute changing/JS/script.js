const CTAELEMENT = document.querySelector(".cta a");

if(CTAELEMENT.hasAttribute("target")){
  console.log(CTAELEMENT.getAttribute("target"));
}
else{
  console.log(CTAELEMENT.setAttribute("target","_blank"));
}
console.log(CTAELEMENT.attributes);
