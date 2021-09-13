const array = [1,2,3,4,5];

//console.log(array.reverse());

const str = ["a","b","c","d"];
//console.log(str.push("d"));
//console.log(str);

const arr = [6,7,8,9];
//console.log(arr.concat(array));
//console.log(array.constructor);
//console.log(str.copyWithin(2));
const f = arr.entries();
for (x of f){
    //console.log(x);
}
  const ages = [30,25,16,18,20,];

//  console.log(ages.every(checkAges));
//console.log(array.fill(5,1,4))
//filter() : The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//   console.log(ages.filter(checkAges));
//  function checkAges(ages){
//   return ages > 18;
//  }
 const result = ages.filter(age => age > 18)
 //console.log(result);

 //find(): The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
 //console.log(ages.find(age => age > 18););

 //findIndex():The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
 //console.log(ages.findIndex( element => element < 18));

 //flat(): The flat() method creates a new array with all sub-array elements conc,atenated into it recursively up to the specified depth.
 const num = [1,2,3,4,[5,6,7]];
 //console.log(num.flat());

 //The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.
 //forEach():The forEach() method executes a provided function once for each array element.
 //ages.forEach(age => console.log(age));

 //Array.from() : The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
 //console.log(Array.from([1,2,3,4,5], x => x + 2));

 //includes():The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 //console.log(array.includes(4));

 //indexOf():The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
 //console.log(str.indexOf("c"));

 //isArray():The Array.isArray() method determines whether the passed value is an Array.
 //console.log(Array.isArray(str));

 //join() :The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
 //console.log(str.join('-'));

 //keys():The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
//  const iterator = arr.keys();

//  for(const key of iterator){
//    console.log(key);
//  }

//lastIndexOf():The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
//console.log(arr.lastIndexOf(6));

//map(): The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//console.log(arr.map(arr1 => arr1 + 2));

//Array.of():The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
//The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7 (Note: this implies an array of 7 empty slots, not slots with actual undefined values).
//console.log(Array.of(7 ,8));
//console.log(Array(7));

//pop():The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
//console.log(str.pop());

//push():The push() method adds one or more elements to the end of an array and returns the new length of the array.
//console.log(str.push("c"));
// console.log(str);

//reduce() :The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
//Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array.
//The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.
// const reducer = (previousValue , currentValue) => (previousValue + currentValue);
// console.log(arr.reduce(reducer));

//reduceRight(): The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// const array1 = [[0, 1], 9[2, 3], [4, 5]].reduceRight(
//   (accumulator, currentValue) => accumulator.concat(currentValue)
// );

// console.log(array1);

//reverse():The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

 const syt = ["hi","hello","hii"];
// const reversed =syt.reverse();
// console.log("reversed:" ,reversed);

//shift:The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// console.log(syt.shift());
// console.log(syt);

//slice():The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
//console.log(syt.slice(1));

//some:The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
const odd = (element) => element % ! 2 === 0;
//console.log(array.some(odd));

//sort:The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
//The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
//console.log(ages.sort());

//splice:The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
//syntax:splice(start, deleteCount, item1, item2, itemN)
//console.log(str.splice(1,1,"e"));
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
//console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
//console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

//toLocaleString():The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).
const time = [1, 'a', new Date('13 sep 2021 14:12:00 UTC')];
const localeString = time.toLocaleString('en', { timeZone: 'UTC' });
//console.log(time);
//toString:The toString() method returns a string representing the specified array and its elements.
//console.log(str.toString());

//unshift():The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// console.log(arr.unshift(4,5));
// console.log(arr);

//values():The values() method returns a new array iterator object that contains the values for each index in the array.
const iter = arr.values();
for(const value of iter){
  console.log(value);
}

//splice , reduceRight, toString working onit



