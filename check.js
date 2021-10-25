// function foo() {
//   let x = y = 0;
//   x++;
//   y++;
//   return x;
// }

// console.log(foo(), typeof x, typeof y);
// var y = 1;
//   if (function f(){}) {
//     y += typeof f;
//   }
//   console.log(y);


// const obj = {
   
//     ['prop' + 3]() { return 2 }
//   }
  

//   console.log(obj.prop3());
array =[1,2,3,4,5];
console.log(array.slice(0));
console.log(array.splice(0,2));

// console.log(3 > 2 > 1);
// const arrowFunc = () => arguments.length;
// console.log(arrowFunc(1, 2, 3,4,6));
//console.log(10 - '10');
// console.log([1, 2] + [3, 4]);
// console.log(NaN === NaN);


// function delay() {
//     return new Promise(resolve => setTimeout(resolve, 2000));
//   }
  
//   async function delayedLog(item) {
//     await delay();
//     console.log(item);
//   }
  
//   async function process(array) {
//     array.forEach(async (item) => {
//       await delayedLog(item);
//     });
//     console.log('Process completed!');
//   }
//   process([1, 2, 3, 5]);

  
  

//   function delay() {
//     return new Promise(resolve => setTimeout(resolve, 2000));
//   }
  
//   async function delayedLog(item) {
//     await delay();
//     console.log(item);
//   }
  
//   async function processArray(array) {
//     array.forEach(item => {
//       await delayedLog(item);
//     })
//   }
  
//   processArray([1, 2, 3, 4]);


// const sym1 = Symbol('one');
// const sym2 = Symbol('one');

// const sym3 = Symbol.for('two');
// const sym4 = Symbol.for('two');

// console.log(sym1 === sym2, sym3 === sym4);
// console.log(sym3);
// const sym1 = new Symbol('one');
// console.log(sym1);
// const {a: x = 10, b: y = 20} = {a: 30};

// console.log(x);
// console.log(y);
// const props = [
//     { id: 1, name: 'John'},
//     { id: 2, name: 'Jack'},
//     { id: 3, name: 'Tom'}
//   ];
  
//   const [,, { name }] = props;
//   console.log(name);

// function checkType(num = 1) {
//     console.log(typeof num);
//   }
  
//   checkType();
//   checkType(undefined);
//   checkType('');
//   checkType(null);
// function add(item, items = []) {
//     items.push(item);
//     return items;
//   }
  
//   console.log(add('Orange'));
//   console.log(add('Apple'));    
// function myFun(x, y, ...manyMoreArgs) {
//     console.log(manyMoreArgs)
//   }
  
//   myFun(1, 2, 3, 4, 5);
//   myFun(1, 2);
// function* myGenFunc() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
//   var myGenObj = new myGenFunc;
//   console.log(myGenObj.next().value);
// const myGenerator = (function *(){
//     yield 1;
//     yield 2;
//     yield 3;
//   })();
//   for (const value of myGenerator) {
//     console.log(value);
//     break;
//   }
// for (const value of myGenerator) {
//     console.log(value);
//   }
let msg = "Good morning!!";

msg.name = "John"; 

console.log(msg.name);
