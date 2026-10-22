{
    var x = 10;
}
console.log(x);  // var ==> 10 , let ,const error

//function scope

function test(){
    var y = 15;
}
// console.log(y);  //var,let,const ==> error  func ku veliya call panna

//redeclaration 

// let c = 10;
// let c = 10;
// console.log(c) // error


var c = 10;
var c = 15;
console.log(c); // 15

//global leak 

//step-2 (global)
var z = "my top"

//step-1
function leakVar(){
    var z = "leaked";
    console.log(z); // leaked
}
leakVar();  // leaked


//step-3 
 z = "xyz"//==> leaked , xyz nu o/p varum leaked protect ah irukum func kulla 

console.log(z); //z is not defined nu varum ithu global la paakum
 //after global set ==> my top


 //const is blocked-scope and immutable

 const num = 100;
//  const num = 19; // error redeclare
// num = 20; //error reassign
 console.log(num);


 const y = {
    a : "shifa"
 }

 console.log(y) // { a : 'shifa'}

 y.a = "sangi";

 console.log(y); // { a : 'sangi'}

 y = "sabu";

 console.log(y) // error assign to constant variable nu 
 // y.a nu th 
 

 //shadowing
 