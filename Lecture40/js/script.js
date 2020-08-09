/*var message="in global";
console.log("global: message= "+ message);
var a=function(){
	var message="inside a";
	console.log("a: message= "+ message);

	function b() {
	console.log("b : message= "+ message);
	
}
	b();
}

a();*/


/*var x;
console.log(x);
if(x==undefined){
	console.log("x is undefined");
}

x=5;
if(x==undefined){
	console.log("x is undefined");
}
else{
	console.log("x is defined");

}*/


// // ***** String concatination
// var string = "Hello";
// // string += " World";
// string = string + " World";
// console.log(string + "!");




// // ***** Regular math operators: +, -, *, /
// console.log((5 + 4) / 3);
// console.log(undefined / 5);
// function test1 (a) {
//   console.log( a / 5);
// }
// test1();




// // ***** Equality 
// var x = 4, y = 4;
// if (x == y) {
//   console.log("x=4 is equal to y=4");
// }

// x = "4";
// if (x == y) {
//   console.log("x='4' is equal to y=4");
// }





// // ***** Strict equality
// if (x === y) {
//   console.log("Strict: x='4' is equal to y=4");
// }
// else {
//   console
//   .log("Strict: x='4' is NOT equal to y=4");
// }






// // ***** If statement (all false)
// if ( false || null || 
//      undefined || "" || 0 || NaN) {
//   console.log("This line won't ever execute");
// }
// else {
//   console.log ("All false");
// }

// // ***** If statement (all true)
// if (true && "hello" && 1 && -1 && "false") {
//   console.log("All true");
// }





// // ***** Best practice for {} style
// // Curly brace on the same or next line...
// // Is it just a style?
// function a() 
// {
//   return
//   { 
//     name: "Yaakov"
//   };
// }

// function b() {
//   return { 
//       name: "Yaakov"
//   };
// }

// console.log(a());
// console.log(b());


// // For loop
// var sum = 0;
// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   sum = sum + i;
// }
// console.log("sum of 0 through 9 is: " + sum);


// function orderChickenWith(sideDish) {
//   sideDish = sideDish || "whatever!";
//   console.log("Chicken with " + sideDish);
// }

// orderChickenWith("noodles");
// orderChickenWith();

// var x = 10;
// if ( (null) || (console.log("Hello")) || x > 5 ) {
//   console.log("Hello");
// }

// //Object creation
// var company=new Object();
// company.name="Whatsapp";
// company.ceo=new Object();
// company.ceo.firstName="Jan Koum";
// company.ceo.favColor="Green";
// console.log(company);
// console.log("Company CEO name is: "
// 	+company.ceo.firstName);
// console.log(company["name"]);
// var stockValue="stock of company";
// company[stockValue]=120;
// console.log("Stock prize is: "+company[stockValue]);

// //Best way of creating object literal
// var whatsapp={
// 	name:"Whatsapp",
// 	ceo:{
// 		firstName:"Jan Koum",
// 		favColor:"Green"
// 	},
// 	"stock of company":110
// };
// console.log(whatsapp);

// //Functions are First Class Data Types
// //Functions are objects
// function multiply(x,y){
// 	return x*y;
// }
// multiply.version="v.1.1.0";
// console.log(multiply.version);

// // Function factory
// function makeMultiplier(multiplier) {
//   var myFunc = function (x) {
//     return multiplier * x;
//   };

//   return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));



// // Passing functions as arguments
// function doOperationOn(x, operation) {
//   return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(result);


// //Function constructors
// function Circle(radius) {
// 	this.radius = radius;
	   
// }
// Circle.prototype.getArea = 
//     function () {
//     	return Math.PI * Math.pow(this.radius,2);
//     };
// var myCircle=new Circle(10);
// console.log(myCircle.getArea());


// // 
// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log(this.name + " likes barking! Bark!");
// }

// var max = new Dog("Buddy","Max");
// max.bark();

// //Arrays
// var array=new Array();
// array[0]="Shreya";
// array[1]=5;
// array[2]=function (name) {
// 	console.log("Hello "+name);

// }
// array[3]={course: "HTML,CSS and JS"};
// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);

// //Short hand Array
// var names=["Shreya","Soukhya","Shresta"];
// console.log(names);

// for(var i=0;i<names.length;i++){
// 	console.log("Hello "+names[i]);
// }
// names[100]="Mamatha";
// for(var i=0;i<names.length;i++){
// 	console.log("Hello "+names[i]);
// }


var names=["Shreya","Soukhya","Shresta"];
// var myObj = {
// 	name: "Shreya",
// 	course: "HTML/CSS/JS",
// 	platform: "coursera"
// };
// for (var obj in myObj){
// 	console.log(obj+": "+myObj[obj]);
// }
// for(var name in names){
// 	console.log("Hello "+names[name]);
// }

names.greeting="Good Morning";
for(var name in names){
	console.log("Hello "+names[name]);
}