
// var string = "Hello";
// string += " World";
// console.log(string + "!");



// console.log((5 + 4) / 3);
// console.log(undefined / 5);
// function test1 (a) {
//     console.log( a / 5)
// }
// test1();

// var x = 4, y = 4;
// if ( x == y ) {
//     console.log("x=4 is equal to y=4")
// }

// x = "4" ; 
// if ( x == y ) {
//     console.log("x='4' is equal to y=4");
// }

// if (x === y) {
//     console.log("Strict: x='4' is equal to y=4");
// }
// else {
//     console.log("Strict: x='4' is NOT equal to y=4");   
// }

// if ( false || null ||
//     undefined || "" || 0 || NaN){
//         console.log("This line won't ever execute");
//     }
// else {
//     console.log("All false");
// }

// if (true && "hello" && 1 && -1 && "false") {
//     console.log("All true");
// }

// function a()
// {
//     return
//     {
//         name: "Indy"
//     };
// }

// function b(){
//     return{
//         name: "Indy"
//     }
// }

// console.log(a());
// console.log(b());

// var sum = 0
// for (var i = 0; i < 10; i++) {
//     console.log(i);
//     sum = sum + i;
// }
// console.log("sum of 0 through 9 is:" + sum);

// function orderChickenWith(sideDish) {
//     sideDish = sideDish || "whatever!";
//     console.log("Chicken with " + sideDish);
// }

// orderChickenWith("noddles");
// orderChickenWith();

// function orderChickenWith(sideDish) {
//     console.log("Chicken with " + sideDish);
// }

// orderChickenWith("noddles");

// var company = new Object();
// company.name = "Facebook"
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Comapny CEO name is: " + company.ceo.firstName);

// console.log(company["name"]);
// var stockPropName = "stock of company"
// company[stockPropName] = 110;

// console.log("Stock price is: " + company[stockPropName]);

// var facebook = {
//     name: "Facebook", 
//     ceo: {
//         firstName: "Mark",
//         favColor: "blue",
//     },
//     "stock of company": 110
// };

// console.log(facebook.ceo.firstName);

// function multiply(x, y) {
//     return x * y;
// }

// multiply.version = "v.1.0.0";
// console.log(multiply.version);

// function makeMultiplier(multiplier) {
//     var myFunc = function(x) {
//         return multiplier * x;
//     };
// return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// function doOperationOn(x, operation) {
//     return operation(x);
// }
// var result = doOperationOn(5, multiplyBy3);
// console.log(result);

// result = doOperationOn(100, doubleAll);
// console.log(result);

// function test () {
//     console.log(this)
//     this.myName = "indy"
// }
// test ();
// console.log(window.myName);

// function Circle (radius) {
//     this.radius = radius;
// }

// Circle.prototype.getArea = 
//     function () {
//         return Math.PI * Math.pow(this.radius, 2);
//     }

// var myCircle = new Circle (10);
// console.log(myCircle);

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);

