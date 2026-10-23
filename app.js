// //1-block scope
// {
//     var x = 10;
// }
// console.log(x);  // var ==> 10 , let ,const error
// // console.log(window); x=10 iruku , global la  okarum so most ah var use panna koodathu let tha use pannanu
// //2-function scope

// function test(){ //func thaniya execution block crt pannu 
//                  //start -> global(window) -> run aarapa (func call) func call execution
//     var y = 15;
// }
// // console.log(y);  //var,let,const ==> error  func ku veliya call panna

// //3-redeclaration 

// //redeclare==> var 
// //reassign==> let var


// // let c = 10;
// // let c = 10;
// // console.log(c) // error

// var c = 10;
// var c = 15;
// console.log(c); // 15

// //4-global leak 

// //step-2 (global)
// var z = "my top"

// //step-1
// function leakVar(){
//     var z = "leaked";
//     console.log(z); // leaked
// }
// leakVar();  // leaked


// //step-3 
//  z = "xyz"//==> leaked , xyz nu o/p varum leaked protect ah irukum func kulla 

// console.log(z); //z is not defined nu varum ithu global la paakum
//  //after global set ==> my top


//  //const is blocked-scope and immutable

//  const num = 100;
// //  const num = 19; // error redeclare
// // num = 20; //error reassign
//  console.log(num);

// //const ka obj oda property ku use pannikalam

//  const y = {
//     a : "shifa"
//  }

//  console.log(y) // { a : 'shifa'}

//  y.a = "sangi";

//  console.log(y); // { a : 'sangi'}

// //  y = "sabu";

// //  console.log(y) // error assign to constant variable nu 
//  // y.a nu th 
 

//  //5-shadowing

//  let a = 10;
//  {
//     let a = 5;
//     console.log(a);//5
//  }
//  console.log(a);  //10.    5 10 varum

//  var b = 10;

//  {
//     var b = 5;
//     console.log(b);  //5
//  }

//  console.log(b); // 5 bcz ithu already b la enna iruko atha return pannu 
//  // 5 5

//  //6-hoisting
//  //declare pandrathuku munnadi call pandrathu

//  console.log(d);
//  console.log(window);
//  var d = 10;  // undefined a=10 window la assing agirum
// // value iruku access panna mudiyaathu athunala tha 
// // variable func create pannathuku aprm call panndrom 
// //itha solve panna tha let  (error varum)

// //  console.log(s);
// //  let s = 48; // error

// //7-const with object
// const user = {
//     name : "shifa", // {name : 'shifa}
// }
// user.name = "shifa mugasheena"; //{name : 'shifa mugasheena}
// console.log(user)

// // user=[] empty ya maathuna tha error varum

// //8-let in loops
// // let i = 0; 

// for(let i=0;i<3;i++){
//     // loop la ulla let ithu kulla matum tha work aagum 
//  setTimeout(function(){
//     console.log(i);
//  },1000);

// }//let block scope let ==> i=0 i=1 i=2 thani thani i (let) thani thani memory

// // for(var i=0;i<3;i++){
// //     // loop la ulla let ithu kulla matum tha work aagum 
// //  setTimeout(function(){
// //     console.log(i);
// //  },1000);

// // }// var update agite iruku 1st tey namma kudutha  i=3  create aagi iruku 
// //iruku so thaniya create agathu orey ithula 3 (3 times create aagum)


// //set timeout func
// // setTimeout(function(){ //delay pannu
// //     console.log("hello");
// // },3000); //3000 millisecond "hello" vanthu 3 sec kaluchu tha print pannu

// //var in loops
// for(var i=0;i<4;i++){
//     (function(index){
//         setTimeout(function(){
//         console.log(index);
//     },1000)
//     })(i)
// } // var la normal ah pota 4(4) ==> ithula 0123


// //advance scope
// //IIFE with var (Immediately invoked function expression)

// //normal js func create pantu call pandra tha execute call aagum

// //IIFE func create aarapaye execute aagum ()
// //private scope kaaga use pandraga (module pattern) very important

var x = 12;
x=21;
console.log(x); //21

//func expression use () expression

// (function(){
//  console.log("hello")
//  var secret = "hidden";
// })()//function call (). itha immediate invoked func
// // create aarapaye run aathu
// console.log(secret);//error secret is not defined

//1st js file create aana global execution create
// IIFE USE PANNA thirupi execution create aagirukum  ithuku global ku samatham ila ihtuku peru(private scope) 

var secret = "outer hidden";
(function(){
    var secret = "hidden";
    console.log(secret);
})()
console.log(secret);//error ithu global paaku


//closure

