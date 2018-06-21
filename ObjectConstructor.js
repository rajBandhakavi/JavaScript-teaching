/*
Defining an object as shown below will allow us to create multiple copies of the
class using its constructor.
*/
function Course(title,instructor,level,published,views){
    this.title = title; //this is used to refer the current object
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function(){
      return ++this.views;
    };
}


var course01 = new Course("Javascript essential Training","Morten Rand-Hendrickson",1,true,0);
var course02 = new Course("Running ecma script","somebody",1,true,123);
console.log(course01);
console.log(course02);
console.log(course01.instructor);
console.log(course01.updateViews());


//below are examples of dot notation and bracket notation
console.log(course01.instructor);
console.log(course01["instructor"]);
