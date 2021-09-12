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
  console.log(ages.filter(checkAges));
 function checkAges(ages){
  return ages > 18;
 }
//console.log(array.fill(5,1,4))

