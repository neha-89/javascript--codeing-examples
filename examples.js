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
//Code 5 :

let msg = "Good morning!!";

msg.name = "John"; 

console.log(msg.name);

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

console.log(0.1 + 0.2 === 0.3);

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
console.log(3 > 2 > 1);

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

// Code 33 :

let [a, ...b,] = [1, 2, 3, 4, 5];
console.log(a, b);

// Code 34 :

async function func() {
  return 10;
}
console.log(func());

// Code 35:

async function func() {
  await 10;
}
console.log(func());

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

// Code 39 :

const sym1 = Symbol('one');
const sym2 = Symbol('one');

const sym3 = Symbol.for('two');
const sym4 = Symbol.for('two');

cnsooe.log(sym1 === sym2, sym3 === sym4);

// Code 40 :

const sym1 = new Symbol('one');
console.log(sym1);

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

// Code 42 :

console.log(JSON.stringify({ myArray: ['one', undefined, function(){}, Symbol('')] }));
console.log(JSON.stringify({ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]));

// Code 43 :

const {a: x = 10, b: y = 20} = {a: 30};

console.log(x);
console.log(y);

// Code 44 :

function area({length = 10, width = 20}) {
  console.log(length*width);
}

area();

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
    console.log(`${this.name} vehicle started`);
  }
}
class Car extends Vehicle {
  start() {
    console.log(`${this.name} car started`);
    super.start();
  }
}

const car = new Car('BMW');
console.log(car.start());

// Code 56 :

const USER = {'age': 30};
USER.age = 25;
console.log(USER.age);

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

//Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.
function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}
// Write a sum method which will work properly when invoked using either syntax below.
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5