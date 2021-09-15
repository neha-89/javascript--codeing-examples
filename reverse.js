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
   // console.log(arr);
   
}
emptyArray([1,2,3,4,5,6]);

function palindrom(str){
  let res ;
  res= str.split("").reverse().join("");
  if(res==str){
    //console.log(res+"This is a palindrom");
  }
 else{
     //console.log("This is not a palindrom");
 }
}
palindrom("ili");

function reverseString(str){
    const res = str.split("").reverse().join("");
    //console.log(res);
}
reverseString("hello");
    
    let n= 5;
    let string = "";
    for(let i= 0;i<n;i++){
        for(let j= 0 ;j<n;j++ ){
            string += "*" ;
        }
         string += "\n";
    }
console.log(string);
