// //inheritance parent ta irunthu child use pandrathu

// //es5
// //parent
// function Person(firstname,lastname){
//    this.firstname=firstname;
//    this.lastname=lastname;
// }
// //prototype method ah person prototype la insert pandrom
// Person.prototype.getthis=function(){
//     return `hello ${this.firstname} ${this.lastname}`;
// }

// //object create
// const obj = new Person("shifa","sangi");
// console.log(obj);

// console.log(obj.getthis());



// //child (firstname,lastname) parent ta irunthu use pandrom

// function customer (firstname,lastname,age){
//     //inheritance (es5)
//     Person.call(this,firstname,lastname);
//     this.age=age;
// }



// //just firstname,lastname tha varum
// //method varaathu
// //method get panna
// customer.prototype=Object.create(Person.prototype);
// console.log(customer.prototype);


// const obj1 = new customer("shifa","sangi",21);
// console.log(obj1);

// console.log(obj1.getthis());


// //es6
// class Person1{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
    
//     }

//     getthis(){
//         return `hello ${this.firstname} ${this.lastname}`;
//         }
// }

// const obj2=new Person1("shifa","sangi");
// console.log(obj2);

// console.log(obj2.getthis());

// //es6 la inheritance (extends) use panna ellamey vanthuru propety and methods

// class Customer2 extends Person{
//     constructor(firstname,lastname,age){
//         //super keyword extend ku use pannanu
//         super(firstname,lastname);
//         this.age=age;
//     }
// }
// const obj3 = new Customer2("shifa","sangi",21);
// console.log(obj3);
// console.log(obj3.getthis());