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