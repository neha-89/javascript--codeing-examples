//Guess the output of the following code without executing2
// Code 1:

function func1(){
    setTimeout(()=>{
      console.log(x);
      console.log(y);
    },3000);
  
    var x = 2;
    let y = 12;
  }
  
  func1();
//ans:2 12

  // Code 2:

function func2(){
    for(var i = 0; i < 3; i++){
      setTimeout(()=> console.log(i),2000);
  }
  
  }
  
  func2();
  //3 3 3
//   The code sample shown will not display the values 0, 1, 2, 3, and 4 as might be expected; rather, it will display 5, 5, 5, 5, and 5.

// The reason for this is that each function executed within the loop will be executed after the entire loop has completed and all will therefore reference the last value stored in i, which was 5.

// Closures can be used to prevent this problem by creating a unique scope for each iteration, storing each unique value of the variable within its scope, as follows:

// for (var i = 0; i < 5; i++) {
//     (function(x) {
//         setTimeout(function() { console.log(x); }, x * 1000 );
//     })(i);
// }
// This will produce the presumably desired result of logging 0, 1, 2, 3, and 4 to the console.

  // Code 3:


(function(){
    setTimeout(()=> console.log(1),2000);
    console.log(2);
    setTimeout(()=> console.log(3),0);
    console.log(4);
  })();
  //2 4 3 1

  // Code 4:


  let count = 10;

(function innerFunc() {
    if (count === 10) {
        let count = 11;
        console.log(count);
    }
    console.log(count);
})();
//reference error : count is not defined

(function(a){
  return (function(){
    console.log(a);
    a = 23;
  })()
})(45);

//45

function bigFunc(element){
  let newArray = new Array(700).fill('♥');
  return newArray[element];
}

console.log(bigFunc(599)); // Array is created
console.log(bigFunc(670)); // Array is created again
//

function randomFunc(){
  for(var i = 0; i < 2; i++){
    setTimeout(()=> console.log(i),1000);
  }
}

randomFunc();
//2
//2

let x= {}, y = {name:"Ronny"},z = {name:"John"};

x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};

console.log(x[y]);
//{name:"Akki"}
//Writing x[y] = {name:”Vivek”} , is same as writing x[‘object Object’] = {name:”Vivek”} ,

//While setting a property of an object, javascript coerces the parameter into a string.

//Therefore, since y is an object, it will be converted to ‘object Object’.

//Both x[y] and x[z] are referencing the same property.

function runFunc(){
  console.log("1" + 1);//11
  console.log("A" - 1);//NaN
  console.log(2 + "-2" + "2");//2-22
  console.log("Hello" - "World" + 78);//NaN
  console.log("Hello"+ "78");//Hello78
}

runFunc();

var x = 23;

(function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x);//NaN
    var x = 21;
  })();
})();

let hero = {
  powerLevel: 99,
  getPower(){
    return this.powerLevel;
  }
}

let getPower = hero.getPower;

let hero2 = {powerLevel:42};
console.log(getPower());//undefined
console.log(getPower.apply(hero2));//powerLevel:42

const a = function(){
  console.log(this);//window

  const b = {
    func1: function(){
      console.log(this);
    }  
  }

  const c = {
    func2: ()=>{
      console.log(this);
    }
  }

  b.func1();
  c.func2();
}

a();

const b = {
  name:"Vivek",
  f: function(){
    var self = this;
    console.log(this.name);
    (function(){
      console.log(this.name);
      console.log(self.name);
    })();
  }
}

b.f();


//Code 5 :

let msg = "Good morning!!";

msg.name = "John"; 

console.log(msg.name);
//undefined

// Code 6 :

let zero = new Number(0);

if (zero) {
  console.log("If");
} else {
  console.log("Else");
}
//if


// Code 7 :

console.log(typeof typeof typeof true);
//string

//Code 8 :

console.log('🙂' === '🙂');
//true

//Code 9 :

const USER = {'age': 30};
USER.age = 25;
console.log(USER.age);

//25
//Code 10 :

function Person() { }

Person.prototype.walk = function() {
  return this;
}

Person.run = function() {
  return this;
}

let user = new Person();
let walk = user.walk;
console.log(walk());

let run = Person.run;
console.log(run());

// Code 10 :

const squareObj = new Square(10);
console.log(squareObj.area);

class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}

// const num = 0o38;
// console.log(num);


const myGenerator = (function *(){
  yield 1;
  yield 2;
  yield 3;
})();
for (const value of myGenerator) {
  console.log(value);
  break;
}

for (const value of myGenerator) {
  console.log(value);
}

// Code 11 :
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
//0.30000000000000004
//false
//An educated answer to this question would simply be: “You can’t be sure. it might print out 0.3 and true, or it might not. Numbers in JavaScript are all treated with floating point precision, and as such, may not always yield the expected results.”

// The example provided above is classic case that demonstrates this issue. Surprisingly, it will print out:

// 0.30000000000000004
// false
// A typical solution is to compare the absolute difference between two numbers with the special constant Number.EPSILON:

// function areTheNumbersAlmostEqual(num1, num2) {
// 	return Math.abs( num1 - num2 ) < Number.EPSILON;
// }
// console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));

// Code 12 :

function main(){
  console.log('A');
  setTimeout(
     function print(){ console.log('B'); }
  ,0);
  console.log('C');
}
main();
//A C B
// Code 13 :

function foo() {
  let x = y = 0;
  x++;
  y++;
  return x;
}

console.log(foo(), typeof x, typeof y);

// Code 14 :

var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}
//vehicle{{ model: 'Honda', color: 'white', year: '2010', country: 'UK' }}
// Code 15 :


// Code 16 :

var y = 1;
  if (function f(){}) {
    y += typeof f;
  }
  console.log(y);

  // Code 17 :

  function foo() {
    return
    {
      message: "Hello World"
    };
  }
  console.log(foo());

  // Code 18 :

var myChars = ['a', 'b', 'c', 'd']
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);

// undefined
// [ <1 empty item>, 'b', 'c', 'd' ]
// undefined
// 4
// Code  19 :

var array1 = new Array(3);
console.log(array1);

var array2 = [];
array2[2] = 100;
console.log(array2);

var array3 = [,,,];
console.log(array3);

// [ <3 empty items> ]
// [ <2 empty items>, 100 ]
// [ <3 empty items> ]
// Code 20 :

const obj = {
  prop1: function() { return 0 },
  prop2() { return 1 },
  ['prop' + 3]() { return 2 }
}

console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());
//0 1
// Code 21 :

console.log(1 < 2 < 3);//true
console.log(3 > 2 > 1);//false
//The second returns false because of how the engine works regarding operator associativity for < and >. It compares left to right, so 3 > 2 > 1 JavaScript translates to true > 1. true has value 1, so it then compares 1 > 1, which is false.

//How do you add an element at the begining of an array? How do you add one at the end?


// Code 22 :

function printNumbers(first, second, first) {
  console.log(first, second, first);
}
printNumbers(1, 2, 3);
//3 2 3

// Code 23 :

const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3));

// Code 24 :

console.log( String.prototype.trimLeft.name === 'trimLeft' );//false
console.log( String.prototype.trimLeft.name === 'trimStart' );//true

// Code 25 :

console.log(Math.max());//-Infinity

// Code 26 :

console.log(10 == [10]);//true
console.log(10 === [10]);//false
console.log(10 == [[[[[[[10]]]]]]]);//true

// Code 27 :

console.log(10 + '10');//1010
console.log(10 - '10');//0

// Code 28 :

console.log([0] == false);//true
if([0]) {
console.log("I'm True");//I'm True
} else {
console.log("I'm False");
}

// Code 29 :

console.log([1, 2] + [3, 4]);

// Code 30 :

const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);//Set(4){1,2,3,4,}

const browser = new Set('Firefox');
console.log(browser);{}//Set(7) { 'F', 'i', 'r', 'e', 'f', 'o', 'x' }

// Code 31 :

console.log(NaN === NaN);

// Code 32 :

let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.indexOf(NaN));
//-1

// Code 33 :

let [a, ...b,] = [1, 2, 3, 4, 5];
console.log(a, b);
//SyntaxError: Rest element must be last element
// Code 34 :

async function func() {
  return 10;
}
console.log(func());
//Promise{10}

// Code 35:

async function func() {
  await 10;
}
console.log(func());
//Promise{<pending>}

// Code 36 :

function delay() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function processArray(array) {
  array.forEach(item => {
    await delayedLog(item);
  })
}

processArray([1, 2, 3, 4]);

// Code 37 :

function delay() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function process(array) {
  array.forEach(async (item) => {
    await delayedLog(item);
  });
  console.log('Process completed!');
}
process([1, 2, 3, 5]);

// Code 38 :

var set = new Set();
set.add("+0").add("-0").add(NaN).add(undefined).add(NaN);;
console.log(set);
//Set(4) { '+0', '-0', NaN, undefined }

// Code 39 :

const sym1 = Symbol('one');
const sym2 = Symbol('one');

const sym3 = Symbol.for('two');
const sym4 = Symbol.for('two');

console.log(sym1 === sym2, sym3 === sym4);
//false true
//Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that’s guaranteed to be unique. Symbols are often used to add unique property keys to an object that won’t collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. 

// Code 40 :

const sym1 = new Symbol('one');
console.log(sym1);
//TypeError: Symbol is not a constructor

// Code 41 :

let myNumber = 100;
let myString = '100';

if (!typeof myNumber === "string") {
   console.log("It is not a string!");
} else {
    console.log("It is a string!");
}

if (!typeof myString === "number"){
   console.log("It is not a number!")
} else {
   console.log("It is a number!");
}
//it is a string
//it is a number
//the conditon in the if block gets fails i.e !typeof number or string is aleways false so condition fails and so else part gets executed.


// Code 42 :

console.log(JSON.stringify({ myArray: ['one', undefined, function(){}, Symbol('')] }));
console.log(JSON.stringify({ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]));
//{"myArray":["one",null,null,null]}
//{}
//Symbol.for(key)
//Searches for existing Symbols with the given key and returns it if found. Otherwise a new Symbol gets created in the global Symbol registry with key.
// Code 43 :

const {a: x = 10, b: y = 20} = {a: 30};

console.log(x);
console.log(y);

// Code 44 :

function area({length = 10, width = 20}) {
  console.log(length*width);
}

area();
//TypeError: Cannot read property 'length' of undefined

// Code 45 :

const props = [
  { id: 1, name: 'John'},
  { id: 2, name: 'Jack'},
  { id: 3, name: 'Tom'}
];

const [,, { name }] = props;
console.log(name);

// Code 46 :

function checkType(num = 1) {
  console.log(typeof num);
}

checkType();
checkType(undefined);
checkType('');
checkType(null);

// Code 47 :

function add(item, items = []) {
  items.push(item);
  return items;
}

console.log(add('Orange'));
console.log(add('Apple'));

// Code 48 :

function myFun(x, y, ...manyMoreArgs) {
  console.log(manyMoreArgs)
}

myFun(1, 2, 3, 4, 5);
myFun(1, 2);

// Code 49 :

const obj = {'key': 'value'};
const array = [...obj];
console.log(array);
//TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))

// Code 50 :

function* myGenFunc() {
  yield 1;
  yield 2;
  yield 3;
}
var myGenObj = new myGenFunc;
console.log(myGenObj.next().value);

// Code 51 :

const myGenerator = (function *(){
  yield 1;
  yield 2;
  yield 3;
})();
for (const value of myGenerator) {
  console.log(value);
  break;
}

for (const value of myGenerator) {
  console.log(value);
}

// Code 52 :

//const num = 0o38;
console.log(num);

// Code 53 :

const squareObj = new Square(10);
console.log(squareObj.area);

class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}

// Code 54 :

function Person() { }

Person.prototype.walk = function() {
  return this;
}

Person.run = function() {
  return this;
}

let user = new Person();
let walk = user.walk;
console.log(walk());

let run = Person.run;
console.log(run());

// Code 55:

class Vehicle {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} vehicle started`);//undefined
  }
}
class Car extends Vehicle {
  start() {
    console.log(`${this.name} car started`);//BMW car started
    super.start();//BMW vehicle started
  }
}

const car = new Car('BMW');
console.log(car.start());

// Code 56 :

const USER = {'age': 30};
USER.age = 25;
console.log(USER.age);
//25
// Code 57 :

//What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?
// Although typeof bar === "object" is a reliable way of checking if bar is an object, the surprising gotcha in JavaScript is that null is also considered an object!

// Therefore, the following code will, to the surprise of most developers, log true (not false) to the console:

// var bar = null;
// console.log(typeof bar === "object");  // logs true!
// As long as one is aware of this, the problem can easily be avoided by also checking if bar is null:

// console.log((bar !== null) && (typeof bar === "object"));  // logs false
// To be entirely thorough in our answer, there are two other things worth noting:

// First, the above solution will return false if bar is a function. In most cases, this is the desired behavior, but in situations where you want to also return true for functions, you could amend the above solution to be:

// console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));
// Second, the above solution will return true if bar is an array (e.g., if var bar = [];). In most cases, this is the desired behavior, since arrays are indeed objects, but in situations where you want to also false for arrays, you could amend the above solution to be:

// console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]"));
// However, there’s one other alternative that returns false for nulls, arrays, and functions, but true for objects:

// console.log((bar !== null) && (bar.constructor === Object));
// Or, if you’re using jQuery:

// console.log((bar !== null) && (typeof bar === "object") && (! $.isArray(bar)));
// ES5 makes the array case quite simple, including its own null check:

// console.log(Array.isArray(bar));

//Code 58
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
// Since both a and b are defined within the enclosing scope of the function, and since the line they are on begins with the var keyword, most JavaScript developers would expect typeof a and typeof b to both be undefined in the above example.

// However, that is not the case. The issue here is that most developers incorrectly understand the statement var a = b = 3; to be shorthand for:

// var b = 3;
// var a = b;
// But in fact, var a = b = 3; is actually shorthand for:

// b = 3;
// var a = b;
// As a result (if you are not using strict mode), the output of the code snippet would be:

// a defined? false
// b defined? true
// But how can b be defined outside of the scope of the enclosing function? Well, since the statement var a = b = 3; is shorthand for the statements b = 3; and var a = b;, b ends up being a global variable (since it is not preceded by the var keyword) and is therefore still in scope even outside of the enclosing function.

// Note that, in strict mode (i.e., with use strict), the statement var a = b = 3; will generate a runtime error of ReferenceError: b is not defined, thereby avoiding any headfakes/bugs that might othewise result. (Yet another prime example of why you should use use strict as a matter of course in your code!)


//Code 59:
var myObject = {
  foo: "bar",
  func: function() {
      var self = this;
      console.log("outer func:  this.foo = " + this.foo);
      console.log("outer func:  self.foo = " + self.foo);
      (function() {
          console.log("inner func:  this.foo = " + this.foo);
          console.log("inner func:  self.foo = " + self.foo);
      }());
  }
};
myObject.func();
//outer func:  this.foo = bar
// outer func:  self.foo = bar
// inner func:  this.foo = undefined
// inner func:  self.foo = bar

// In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.

// In the inner function, though, this no longer refers to myObject. As a result, this.foo is undefined in the inner function, whereas the reference to the local variable self remains in scope and is accessible there.

//What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
//This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.). This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.

// Another feature of this technique is to allow for an easily referenceable (presumably shorter) alias for a global variable. This is often used, for example, in jQuery plugins. jQuery allows you to disable the $ reference to the jQuery namespace, using jQuery.noConflict(). If this has been done, your code can still use $ employing this closure technique, as follows:

// (function($) { /* jQuery plugin code referencing $ */ } )(jQuery);



//Que:60

//What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?
// The short and most important answer here is that use strict is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions. In general, it is a good practice.

// Some of the key benefits of strict mode include:

// Makes debugging easier. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.
// Prevents accidental globals. Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.
// Eliminates this coercion. Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing a a this value of null or undefined throws an error.
// Disallows duplicate parameter values. Strict mode throws an error when it detects a duplicate named argument for a function (e.g., function foo(val1, val2, val1){}), thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.
// Note: It used to be (in ECMAScript 5) that strict mode would disallow duplicate property names (e.g. var object = {foo: "bar", foo: "baz"};) but as of ECMAScript 2015 this is no longer the case.
// Makes eval() safer. There are some differences in the way eval() behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an eval() statement are not created in the containing scope (they are created in the containing scope in non-strict mode, which can also be a common source of problems).
// Throws error on invalid usage of delete. The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.


//Code 61:
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
// foo1 returns:
// Object {bar: "hello"}
// foo2 returns:
// undefined 

// Not only is this surprising, but what makes this particularly gnarly is that foo2() returns undefined without any error being thrown.

// The reason for this has to do with the fact that semicolons are technically optional in JavaScript (although omitting them is generally really bad form). As a result, when the line containing the return statement (with nothing else on the line) is encountered in foo2(), a semicolon is automatically inserted immediately after the return statement.

// No error is thrown since the remainder of the code is perfectly valid, even though it doesn’t ever get invoked or do anything (it is simply an unused code block that defines a property bar which is equal to the string "hello").

// This behavior also argues for following the convention of placing an opening curly brace at the end of a line in JavaScript, rather than on the beginning of a new line. As shown here, this becomes more than just a stylistic preference in JavaScript.

//Que:62
//Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.
function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}

//Code 63
// Write a sum method which will work properly when invoked using either syntax below.
//console.log(sum(2,3));   // Outputs 5
//console.log(sum(2)(3));  // Outputs 5


// METHOD 1

// function sum(x) {
//   if (arguments.length == 2) {
//     return arguments[0] + arguments[1];
//   } else {
//     return function(y) { return x + y; };
//   }
// }
// In JavaScript, functions provide access to an arguments object which provides access to the actual arguments passed to a function. This enables us to use the length property to determine at runtime the number of arguments passed to the function.

// If two arguments are passed, we simply add them together and return.

// Otherwise, we assume it was called in the form sum(2)(3), so we return an anonymous function that adds together the argument passed to sum() (in this case 2) and the argument passed to the anonymous function (in this case 3).

// METHOD 2

// function sum(x, y) {
//   if (y !== undefined) {
//     return x + y;
//   } else {
//     return function(y) { return x + y; };
//   }
// }
// When a function is invoked, JavaScript does not require the number of arguments to match the number of arguments in the function definition. If the number of arguments passed exceeds the number of arguments in the function definition, the excess arguments will simply be ignored. On the other hand, if the number of arguments passed is less than the number of arguments in the function definition, the missing arguments will have a value of undefined when referenced within the function. So, in the above example, by simply checking if the 2nd argument is undefined, we can determine which way the function was invoked and proceed accordingly.
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
// a) No matter what button the user clicks the number 5 will always be logged to the console. This is because, at the point that the onclick method is invoked (for any of the buttons), the for loop has already completed and the variable i already has a value of 5. (Bonus points for the interviewee if they know enough to talk about how execution contexts, variable objects, activation objects, and the internal “scope” property contribute to the closure behavior.)

// (b) The key to making this work is to capture the value of i at each pass through the for loop by passing it into a newly created function object. Here are four possible ways to accomplish this:

// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', (function(i) {
//     return function() { console.log(i); };
//   })(i));
//   document.body.appendChild(btn);
// }
// Alternatively, you could wrap the entire call to btn.addEventListener in the new anonymous function:

// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   (function (i) {
//     btn.addEventListener('click', function() { console.log(i); });
//   })(i);
//   document.body.appendChild(btn);
// }
// Or, we could replace the for loop with a call to the array object’s native forEach method:

// ['a', 'b', 'c', 'd', 'e'].forEach(function (value, i) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', function() { console.log(i); });
//   document.body.appendChild(btn);
// });
// Lastly, the simplest solution, if you’re in an ES6/ES2015 context, is to use let i instead of var i:

// for (let i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', function(){ console.log(i); });
//   document.body.appendChild(btn);
// }

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

console.log(1 +  "2" + "2");//122
console.log(1 +  +"2" + "2");//32
console.log(1 +  -"1" + "2");//02
console.log(+"1" +  "1" + "2");//112
console.log( "A" - "B" + "2");//NaN2
console.log( "A" - "B" + 2);//NaN
//Explanation: Based on order of operations, the first operation to be performed is +"2" (the extra + before the first "2" is treated as a unary operator). Thus, JavaScript converts the type of "2" to numeric and then applies the unary + sign to it (i.e., treats it as a positive number). As a result, the next operation is now 1 + 2 which of course yields 3. But then, we have an operation between a number and a string (i.e., 3 and "2"), so once again JavaScript converts the type of the numeric value to a string and performs string concatenation, yielding "32".
//Since the - operator can not be applied to strings, and since neither "A" nor "B" can be converted to numeric values, "A" - "B" yields NaN which is then concatenated with the string "2" to yield “NaN2”.
//The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};

//The potential stack overflow can be avoided by modifying the nextListItem function as follows:

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout( nextListItem, 0);
    }
};
// The stack overflow is eliminated because the event loop handles the recursion, 
//not the call stack. When nextListItem runs, if item is not null, the timeout function (nextListItem) is pushed to the event queue and the function exits,
// thereby leaving the call stack clear. When the event queue runs its timed-out event, the next item is processed and a timer is set to again invoke nextListItem. Accordingly, the method is processed from start to finish without a direct recursive call, so the call stack remains clear, regardless of the number of iterations.

//A closure is an inner function that has access to the variables in the outer (enclosing) function’s scope chain.
// The closure has access to variables in three scopes; specifically: (1) variable in its own scope, (2) variables in the enclosing function’s scope, and (3) global variables.



var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
//In the above example, variables from innerFunc, outerFunc, and the global namespace are all in scope in the innerFunc. The above code will therefore produce the following output:

outerArg = 123
innerArg = 456
outerVar = a
innerVar = b
globalVar = xyz

console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));

console.log(false == '0')//true
console.log(false === '0')//false
//In JavaScript, there are two sets of equality operators. The triple-equal operator === behaves like any traditional equality operator would: 
//evaluates to true if the two expressions on either of its sides have the same type and the same value. The double-equal operator, however,
// tries to coerce the values before comparing them.
// It is therefore generally good practice to use the === rather than ==. The same holds true for !== vs !=.

var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);

console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
// The code will output the value of 10 factorial (i.e., 10!, or 3,628,800).

// Here’s why:

// The named function f() calls itself recursively, until it gets down to calling f(1) which simply returns 1. Here, therefore, is what this does:

// f(1): returns n, which is 1
// f(2): returns 2 * f(1), which is 2
// f(3): returns 3 * f(2), which is 6
// f(4): returns 4 * f(3), which is 24
// f(5): returns 5 * f(4), which is 120
// f(6): returns 6 * f(5), which is 720
// f(7): returns 7 * f(6), which is 5040
// f(8): returns 8 * f(7), which is 40320
// f(9): returns 9 * f(8), which is 362880
// f(10): returns 10 * f(9), which is 3628800

(function(x) {
  return (function(y) {
      console.log(x);
  })(2)
})(1);

// The output will be 1, even though the value of x is never set in the inner function. Here’s why:

// As explained in our JavaScript Hiring Guide, a closure is a function, along with all variables or functions that were in-scope at the time that the closure was created. In JavaScript, a closure is implemented as an “inner function”; i.e., a function defined within the body of another function. An important feature of closures is that an inner function still has access to the outer function’s variables.

// Therefore, in this example, since x is not defined in the inner function, the scope of the outer function is searched for a defined variable x, which is found to have a value of 1.

var hero = {
  _name: 'John Doe',
  getSecretIdentity: function (){
      return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

// Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.

// The arguments to the function should be:

// a DOM element
// a callback function (that takes a DOM element as its argument)

var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);

(function () {
  try {
      throw new Error();
  } catch (x) {
      var x = 1, y = 2;
      console.log(x);
  }
  console.log(x);
  console.log(y);
})();

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();//undefined

// Neither 21, nor 20, the result is undefined

// It’s because JavaScript initialization is not hoisted.

// (Why doesn’t it show the global value of 21? The reason is that when the function is executed, it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.)
for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}//0 1 2 3 4
//It will print 0 1 2 3 4, because we use let instead of var here. The variable i is only seen in the for loop’s block scope.
var myArray = ['a', 'b', 'c', 'd'];
myArray.push('end');
myArray.unshift('start');
console.log(myArray); // ["start", "a", "b", "c", "d", "end"]
//With ES6, one can use the spread operator:

myArray = ['start', ...myArray];
myArray = [...myArray, 'end'];
//Or, in short:

myArray = ['start', ...myArray, 'end'];

// Imagine you have this code:

var a = [1, 2, 3];
// a) Will this result in a crash?

 a[10] = 99;
// b) What will this output?

 console.log(a[6]);


//What is the value of typeof undefined == typeof NULL?
//true

console.log(typeof typeof 1);
//string

//What is NaN? What is its type? How can you reliably test if a value is equal to NaN?
//The NaN property represents a value that is “not a number”. This special value results from an operation that could not be performed either because one of the operands was non-numeric (e.g., "abc" / 4), or because the result of the operation is non-numeric.

// While this seems straightforward enough, there are a couple of somewhat surprising characteristics of NaN that can result in hair-pulling bugs if one is not aware of them.

// For one thing, although NaN means “not a number”, its type is, believe it or not, Number:

// console.log(typeof NaN === "number");  // logs "true"
// Additionally, NaN compared to anything – even itself! – is false:

// console.log(NaN === NaN);  // logs "false"
// A semi-reliable way to test whether a number is equal to NaN is with the built-in function isNaN(), but even using isNaN() is an imperfect solution.

// A better solution would either be to use value !== value, which would only produce true if the value is equal to NaN. Also, ES6 offers a new Number.isNaN() function, which is a different and more reliable than the old global isNaN() function.

var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();
//Discuss possible ways to write a function isInteger(x) that determines if x is an integer.
//How do you clone an object?
var obj = {a: 1 ,b: 2}
var objclone = Object.assign({},obj);
//Now the value of objclone is {a: 1 ,b: 2} but points to a different object than obj.

//Note the potential pitfall, though: Object.assign() will just do a shallow copy, not a deep copy. This means that nested objects aren’t copied. They still refer to the same nested objects as the original:

let obj = {
    a: 1,
    b: 2,
    c: {
        age: 30
    }
};

var objclone = Object.assign({},obj);
console.log('objclone: ', objclone);

obj.c.age = 45;
console.log('After Change - obj: ', obj);           // 45 - This also changes
console.log('After Change - objclone: ', objclone); // 45