//immediate invoked function expression IIFE
//syntax normal function ===>  function(){}
//IIFE syntax add func inside () ===> (function(){})

//example ku 
(function(){
    console.log("hello shifa");
})()//==> directly call

// the above expression return function

const person = (function(){
    //private 
    const x = 25;
    //step-2 public
    return {
        x:x 
        //x key la x oday value ippa outer la call panna x obj  varum
    }

})();
//outer la console panna error (not defined) ithu global ah paaku

//int oru x kudukurom
const x = 26;
console.log(x); // 26 global paathu output varum

// the above la () IIFE oru BOX(x1),  global oru BOX(x2)

//itha namma public ah maathurom (above) step-2

//outer call
console.log(person); // {x:25} obj varum
console.log(person.x); // 25 IIFE la iruka output varum

// same process ethana person create pannanu code affect agathu
//onnodu onnu connect ah irukathu so output clean ah varum

//module pattern la illana tha x x value vacha code affect agum
