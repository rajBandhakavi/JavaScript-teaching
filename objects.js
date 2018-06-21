/*
Javascript is an object oriented programming language lol
In seriousness, its sloppiness is a feature not a bug!
Here are two ways two create objects
*/

var course = new Object();

course.title = "Javascript essential Training";
course.instructor = "Morten Rand-Hendrickson";
course.level = 1;
course.published = true;
course.views = 0;

console.log(course.views);

var course2 = {
  title: "Node js essential Training",
  instructor: "Jurgen Klopp",
  level: 1,
  published: true,
  views: 0,
  updateViews(){
    return ++course2.views;
  }
}

console.log(course2.views);
course2.updateViews();
console.log(course2.views);
