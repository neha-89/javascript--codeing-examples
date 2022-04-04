const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"];
// for(keys in itCompanies){
//   console.log(itCompanies[keys].toUpperCase());
// }
// var str = itCompanies.toString();
// console.log(`${str} are big IT companies`) 

// for(let i= 0;i<=itCompanies.length;i++){
//   if(itCompanies[i] === -1){
//       console.log("the company donot exist")
//   }
//   else{
//       return itCompanies;
//   }
// }
//console.log(itCompanies.sort());
// console.log(itCompanies.reverse());
// var itO = [];
// for(let i= 0;i<=itCompanies.length;i++){
//   if(itCompanies[i].includes('o') ){
//  itO.push(itCompanies[i]);
//  console.log(itO);

//   }
// }
//console.log(itCompanies.slice(2,5));
//console.log(itCompanies.shift());
//console.log(itCompanies.pop());
//console.log(itCompanies.slice(0,-7));
// console.log(itCompanies.splice(0,3))
// console.log(itCompanies);

let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
   //let words =  text.replace(/ /g,",").split(',');
  let words = text.split(' ');
    console.log(words);
    console.log(words.length)

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    //add 'Meat' in the beginning of your shopping cart if it has not been already added
    // shoppingCart.unshift("Meat");
    // console.log(shoppingCart);
//     add Sugar at the end of you shopping cart if it has not been already added
//shoppingCart.push("sugar")
//    - remove 'Honey' if you are allergic to honey
//shoppingCart.pop("Honey")
//    - modify Tea to 'Green Tea'
//shoppingCart.replace("Tea","Green Tea")

// 1. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

//   for(let i= 0; i<= countries.length;i++){
//       if(countries[i] === 'Ethiopia'){
//           console.log("ETHIOPIA");
//       }
//   }

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

// 1. In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// for(let i=0;i<=webTechs.length;i++){
//     if(webTechs[i] === "Saas"){
//         console.log("Saas is a CSS preprocess");
//     }
//     else{
//         webTechs.push('Saas');
//     }
//     console.log(webTechs);
// }
// 1. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']


// const fullStack = frontEnd.concat(backEnd);
// console.log(fullStack);

 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
 let sortages = ages.sort()

// console.log(sortages);
// let min = ages.unshift();
// let max = ages.pop()
// console.log(min)
// console.log(max)

// Find the median age(one middle item or two middle items divided by two)
//let medianage = sortages.slice();

//     - Find the average age(all items divided by number of items)
function simpleArraySum(ages) {
    var sum = 0;
    var average = 0;
    var length = 0;
    for (var i = 0; i < ages.length; i++) {
      sum += ages[i];
    }
    //return sum;
    length = ages.length;
    average = sum/length;
    console.log(average);
  }
  


//     - Find the range of the ages(max minus min)
//let range = max - min ;
//     - Compare the value of (min - average) and (max - average), use *abs()* method
// 1.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
//let ten = countries.slice(0,10);
// 1. Find the middle country(ies) in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
// let cou = countries.length;
// let count = cou - 1;
// let middle = countries.slice(count)
// 2. Divide the countries array into two equal arrays if it is even.  If countries array is not even , one more country for the first half.



// 1. Using console.log() print out the following statement:

//     ```sh
//     The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
//     ```

let str1 = 'There is no exercise better for the heart than reaching down and lifting people up.'
console.log(`${str1}by John Holmes teaches us to help one another.`)

// 2. Using console.log() print out the following quote by Mother Teresa:

//     ```sh
//     "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let str2 = '10'
let no = Number('10');
console.log(typeof(no)) ;
console.log(typeof(10));
// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let str3 = parseFloat('9.8');
console.log(typeof(str3));
// 5. Check if 'on' is found in both python and jargon
let word = "python";
let word2 = "jargon";
console.log(word.includes("on"));
console.log(word2.includes("on"))

// 6. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
let word1 = "I hope this course is not full of jargon";
console.log(word1.includes("jargon"))
// 7. Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random(0)*100));
// 8. Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random()*(100-50+1))+50);
// 9. Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random(0)*255));
// 10. Access the 'JavaScript' string characters using a random number.
let challenge = "30 Days of JavaScript";

// 11. Use console.log() and escape characters to print the following pattern.

//     ```js
//     1 1 1 1 1
//     2 1 2 4 8
//     3 1 3 9 27
//     4 1 4 16 64
//     5 1 5 25 125