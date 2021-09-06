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

  // Code 2:

function func2(){
    for(var i = 0; i < 3; i++){
      setTimeout(()=> console.log(i),2000);
  }
  
  }
  
  func2();

  // Code 3:


(function(){
    setTimeout(()=> console.log(1),2000);
    console.log(2);
    setTimeout(()=> console.log(3),0);
    console.log(4);
  })();

  // Code 4:


  let count = 10;

(function innerFunc() {
    if (count === 10) {
        let count = 11;
        console.log(count);
    }
    console.log(count);
})();

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


// Code 7 :

console.log(typeof typeof typeof true);


//Code 8 :

console.log('🙂' === '🙂');

//Code 9 :

const USER = {'age': 30};
USER.age = 25;
console.log(USER.age);


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

console.log(0.1 + 0.2 === 0.3);

// Code 12 :

function main(){
  console.log('A');
  setTimeout(
     function print(){ console.log('B'); }
  ,0);
  console.log('C');
}
main();

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

// Code  19 :

var array1 = new Array(3);
console.log(array1);

var array2 = [];
array2[2] = 100;
console.log(array2);

var array3 = [,,,];
console.log(array3);

// Code 20 :

const obj = {
  prop1: function() { return 0 },
  prop2() { return 1 },
  ['prop' + 3]() { return 2 }
}

console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());

// Code 21 :

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

// Code 22 :

function printNumbers(first, second, first) {
  console.log(first, second, first);
}
printNumbers(1, 2, 3);

// Code 23 :

const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3));

// Code 24 :

console.log( String.prototype.trimLeft.name === 'trimLeft' );
console.log( String.prototype.trimLeft.name === 'trimStart' );

// Code 25 :

console.log(Math.max());

// Code 26 :

console.log(10 == [10]);
console.log(10 == [[[[[[[10]]]]]]]);

// Code 27 :

console.log(10 + '10');
console.log(10 - '10');

// Code 28 :

console.log([0] == false);
if([0]) {
console.log("I'm True");
} else {
console.log("I'm False");
}

// Code 29 :

console.log([1, 2] + [3, 4]);

// Code 30 :

const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set('Firefox');
console.log(browser);

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
