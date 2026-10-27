//BASIC TASKS
//1-object create and print
const obj = {
    name :"shifa",
    age :21,
}
console.log(obj.name);
console.log(obj.age);

//2-constructor function

function Person(name,age){
   this.name=name;
   this.age=age;
}
const obj1 = new Person("shifa",21);
console.log(obj1.name);
console.log(obj1.age);

//3-this in regular function

//regular (browser) window nu varum (global)
//node.js (global) nu varum global athoda obj global
function regular(){
    console.log(this);
}
regular(); // window, normal browser, (strict mode illama ) browser oda global obj window

//4- this inside (method) the object

const obj2 = {
    name : "shifa",
    insidemethod : function(){
        console.log(this)
    }  
}
obj2.insidemethod();

//5- compare primitive & obj ==> string , number , boolean (object type)
//primitive
let name = "shifa";
let num = 21;
let isBoolean = true;
console.log(typeof name); //string
console.log(typeof num);//number
console.log(typeof isBoolean);//boolean
//obj
let Name = new String("shifa");
let Age = new Number(21);
let isBool = new Boolean(true);
console.log(typeof Name);//obj
console.log(typeof Age);//obj
console.log(typeof isBool);//obj

//6-use new keyword create an obj from constructor functio 
function Details(name,age){
    this.name = name;
    this.age = age;
}
const detail = new Details("shifa",21);
console.log(detail);// Details {name : 'shifa' , age : 21}
console.log(detail.name);//shifa
console.log(detail.age);//21

//7- create method using prototype of constructor function

function Person(name , age , city){
    this.name = name;
    this.age = age;
    this.city = city;
}
Person.prototype.greet = function(){
    return `Hello ${this.name} , ${this.age} , ${this.city}`;
}
const persondetail = new Person("shifa",21,"trichy");
console.log(persondetail);

//8-override prototype method
function Student(name,section){
    this.name = name;
    this.section = section;
}
Student.prototype.great = function(){
    console.log("good student");
}
const student1 = new Student("shifa","A");
const student2 = new Student("sangi","B");

student1.great();
student2.great();

//override prototype
Student.prototype.great = function(){
    console.log("bad student");
}

student1.great();
student2.great();

//9-Create an array using literal and constructor
//literal
const arr1 = [ "shifa" , "sangi" , "sabu"];
console.log(arr1);
console.log(typeof arr1); //obj
console.log(arr1.length); //3
//constructor
const arr2 = new Array("shifa" , "sangi" , "sabu");
console.log(arr2);
console.log(typeof arr2);//obj
console.log(arr2.length);//3

//10-check difference btw typeof & instanceof

//typeof ==> primitive la use pannuvom (string,number,boolean,obj)
//instancof ==> true / false check ( array , object)

//typeof
let city = "trichy";
let age = 21;
let istrue = false;
let fruits = ["apple","banana"];
let animals = {
    name : "lion",
}
console.log(typeof city);//string
console.log(typeof age);//number
console.log(typeof istrue);//boolean
console.log(typeof fruits);//obj
console.log(typeof animals);//obj

//instanceof
let fruit = ["apple","banana"];
let animal = {
    name : "lion",
}
console.log(fruit instanceof Array);//true
console.log(animal instanceof Object);//true
console.log(fruit instanceof Object);//true
console.log(animal instanceof Array);//false 
//arr ==> obj , obj ==> obj 

//INTERMEDIATE TASKS

//1-compare 2 obj prototype

function Student (name,age){
    this.name=name;
    this.age=age;
}
const p1 = new Student("shifa",21);
const p2 = new Student("raj",21);

console.log(Object.getPrototypeOf(p1)===Object.getPrototypeOf(p2));
//p1 , p2 ==> Student.prototye ah iruku so true

//one more example
const a = {};
const b = {};

console.log(a===b);//false obj compare panna false , prototype compare panna true
console.log(Object.getPrototypeOf(a) === Object.getPrototypeOf(b));//true 

//2-call() apply()
// //this will help to call a one function in different context 

// const person1 = {
//     name : "shifa",
// }

// const person2 = {
//     name : "raji",
// }

// function greet(){
//     return `hello ${this.name}`;
// }

// console.log(greet.call(person1));
// console.log(greet.call(person2));

function introduce(city,country){
    return `I am  ${this.name} from ${city} , ${country}`;
   
}
const person1 = {
    name : "shifa",
}
const person2 = {
    name : "sangi",
}
console.log(introduce.call(person1 , "trichy" , "India"));
console.log(introduce.call(person2, "chennai" , "India"));

console.log(introduce.apply(person1, ["kovai","India"]))
// //apply()

// const person3 = {
//     name : "raja",
// }

// const person4 ={
//     name : "rani",
// }

// function greetFrom(city,country){
//     return `hello ${this.name} from ${city} ${country}`;
// }

// console.log(greetFrom.apply(person3,["Trichy","India"]));
// console.log(greetFrom.apply(person4,["Trichy","India"]));

//3-constructor with nested function
function Person(name){
    this.name = name;
    console.log("Outer:" , this);

    function inner(){
        console.log("inner:",this);
    }
    inner();

}
new Person("shifa");
//outer la ulla name inner use pannikathu 
// outer ==> (this) ==> shifa
// inner ==> (this) ==> window


//4- arrow function inside constructor (check this behaviour)
// outer func la ulla name ah inner la use pannikalam

function Student(name){
    this.name = name;
    console.log("outer :" , this);

    const inner=()=>{
        console.log("inner :" , this);
    }
    inner();
}
new Student ("shifa mugasheena")

//5-Inheritance
//parent ta irunthu child use pannikirathu
function Parent(name){
    this.name = name;
}
function Child(name , course){
    Parent.call(this, name );
    this.course = course;
}
const ans = new Child("shifa" , "bca");
console.log(ans);
console.log(ans instanceof Parent);//false
console.log(ans instanceof Child); //true

//6- __proto__ task
//oru obj oda prototype (method) ah innoru obj la call pandrathu
 const birds = { //obj create panni 
    eat(){      //method create panni
        console.log( this.name + " " + "eating..."); //pichuu eating...
    }
 }
 birds.eat();//eating... call pana eating...
  const parrot = { //2nd obj create panni   
    name : "pichuu",
 }
//  parrot.eat();//error (prototype eduka mudiythu)
 //birds oda prototype ah use panna
 parrot.__proto__ = birds;
 parrot.eat(); //eating... (pichuu eating nu varanu but eating nu tha varuhtu 
 // so parent la name ah  add pannanu )
 //check
 console.log(Object.getPrototypeOf(parrot) === birds);//true
 console.log(Object.getPrototypeOf(birds) === parrot);//false


 //7-object.prototype
// Object.prototype.methodObj = function(){
//     console.log("working");
// };

// const stud = {
//     name : "sharu",
// }

// stud.methodObj()

//8-shadow clone
const original = {
    name : "shifa",
    address : {
        city : "trichy",
    }
}
const c1 = {...original};
const c2 = Object.assign({} , original);

c1.name = "Raj";
console.log(original.name); //shifa original marathu

c1.address.city="chennai";
console.log(c1.address);//trichy varanu but chennai vanthuruku

//bcz obj kulla direct value change aagagthu
//obj kulla innoru obj ah namma change pannikalam atha shadowing


//9-function creation 3 ways iruku
//Method-1 declaration
function add(a,b){
    return (a+b);
}
console.log(add(3,2)); //5

// Method-2 expression
const sub = function(a,b){
    return (a-b);
}
console.log(sub(3,2));//1
//error varum sub ah tha func ah vaikanu sub = nu vaika koodathu
// console.log(sub(3,2));//1
// const sub = function(a,b){
//     return (a-b);
// }

//Method-3 new function
const multiplication = new Function("a","b","return a*b");
    console.log(multiplication(2,3)); //6 


//ADVANCED TASKS
//bind
function sayHi(){
    console.log("hello shifa");
}    
// const x = sayHi(); //hello shifa. (normal)

// const x = sayHi;   (variable la store)
// x();//hello shifa

sayHi();//hello shifa (direct call)

const user = {
    name : "shifa mugasheena",
    greet(){
        console.log(this.name);
    }
}
// user.greet();//shifa mugasheena (normal)

// const y = user.greet;  //(variable la store)
// y();  //blank space 

//intha prb fix panna tha bind use 
//func create panni variable la store panna work
//obj create panni variable la store panna crt ah work agathu

const y = user.greet.bind(user);
y();//shifa mugasheena 
//bind this.name user ah kurikuthu shifa va return pannanunu sol

