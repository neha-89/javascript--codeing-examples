function reverseArray(array){
    const arr = array.reverse();
    //console.log(arr);
}
reverseArray([1,2,3,4,5,6]);

function countDistinctElements(array1){
    
}

function emptyArray(array){
    let arr = [];
    while(array.length == 0){
        arr = array.shift();
        
    }
    console.log(arr);
   
}
emptyArray([1,2,3,4,5,6]);

function palindrom(str){
  let res ;
  res= str.split("").reverse().join("");
  if(res==str){
    console.log(res+"This is a palindrom");
  }
 else{
     console.log("This is not a palindrom");
 }
}
palindrom("ili");

function reverseString(str){
    const res = str.split("").reverse().join("");
    console.log(res);
}
reverseString("hello");

// function oddEven(array){
//   for(let i=0;i<=length.array;i++){
//       if(array[i] % 2 == 0){
//         array[i].push 
//       }
//   } 
// }
