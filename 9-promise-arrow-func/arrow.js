//function expression 
const sayHello = function(){
    console.log("hello shifa");
}
sayHello();

//arrow function
const sayHelloArrow = () => {
    console.log("hello shifa arrow");
}
sayHelloArrow();

//arrow function (character vise arrow func big)
//1 normal
function x(){
    console.log("hi");
}
x();
//2 -arrow
const y = () => {
    console.log("hi arrow");
}
y();

//one line arrow function does not need a braces or return keyword

const sayOneLine = () => console.log("hi one line arrow");
sayOneLine();

//one line arrow function with return keyword 
//one line return string number boolean array
const sayOneLineReturn = () => "hi one line arrow with return";
console.log(sayOneLineReturn()); //string boolean number array

const sayOneLineReturn2 = () => 7;// "hello" , true , [ true , "123" , "hello"]
console.log(sayOneLineReturn2());

//return object in one line (paranthesis use pannanu)
// const returnObject = () => {}; ithula obj return panna mudiyathu 
// bcz itha arrow oda syntax

const returnObject = () =>({ name: "shifa", age: 25 });
console.log(returnObject());

// so most ah use pandrathu

const mostreturn = () => {
    return "string";
    return 7;//number
    return true;//boolean
    return[];//array
    return {}; //object
}


//single params does not need a parenthesis

const single = (firstName) => {
    return `hello ${firstName}`;
}
console.log(single("shifa")); // hello shifa

//onnumey kudukalana
const singlenone = (firstName = "Guest") => {
    return `hello ${firstName}`
}
console.log(singlenone()); // hello Guest

//single param with no parenthesis
const singlenoparam = name => `hello ${name}`;
console.log(singlenoparam("shifa mugasheena")); // hello shifa

//double ah iruntha name() parenthesis use pannanu
const double = (name,age) => `helo ${name} and ${age}`;
console.log(double("shifaa" , 21));

//normal func
const users = ["shifa" , "sangi" , "sabu" , "thaku"];
//map pandrathu
users.forEach(function(user){
    console.log(user)
})

//arrow function
users.forEach(user => console.log(user)); //same output single parameter

//double parameter

users.forEach((user,index) =>  console.log(`${user} ${index}`));