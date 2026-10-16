//normal object create and print
const obj = {
    name :"shifa",
    age :21,
}
console.log(obj.name);
console.log(obj.age);

//constructor function

function Person(name,age){
   this.name=name;
   this.age=age;
}
const obj1 = new Person("shifa",21);
console.log(obj1.name);
console.log(obj1.age);

//regular function kulla this 

console.log(this); // window varum (browser)

const obj2 = {
    name : "shifa",

    insidemethod : function(){
      console.log(this);
    }

}
obj2.insidemethod();

//compare 2 obj prototype

function Student (name,age){
    this.name=name;
    this.age=age;
}
const p1 = new Student("shifa",21);
const p2 = new Student("raj",21);

console.log(Object.getPrototypeOf(p1)===Object.getPrototypeOf(p2));

//call() apply()
//this will help to call a one function in different context

const person1 = {
    name : "shifa",
}

const person2 = {
    name : "raji",
}

function greet(){
    return `hello ${this.name}`;
}

console.log(greet.call(person1));
console.log(greet.call(person2));


//apply()

const person3 = {
    name : "raja",
}

const person4 ={
    name : "rani",
}

function greetFrom(city,country){
    return `hello ${this.name} from ${city} ${country}`;
}

console.log(greetFrom.apply(person3,["Trichy","India"]));
console.log(greetFrom.apply(person4,["Trichy","India"]));