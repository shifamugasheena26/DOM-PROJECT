//arrow function
//Arrow function na, JavaScript-la oru short way-la function eludhura syntax. 
// Normal function-ku bathila => symbol use pannuvom.


//promise is a callback alternative to handle asynchronous operation in js
//callback hell - oru callback function-kulla innoru callback, 
// athukulla innoru callback nu nested callbacks 
//romba adhigama irukkurathu.

const posts = [
    {title:"Post One"},
    {title:"Post Two"},
];


//promise create
// console.log(new Promise(_,_));// ithula pass pannanu


// it return promise
function createPost(post){

     return new Promise((resolve,reject) => {
        setTimeout(() =>{
            posts.push(post);

            const error = false; // false panna success, true panna failure
            if(!error){
                resolve();
            }
            else{
                reject("something went wrong");
            }
        })
     },2000)
}

// console.log(createPost({title : "Post three"}));

// promise {<pending>}. 
//meaning promise pantom but success oru failure ah nu therla
//*** then - success , catch - failure  ***//

function getPosts(){

    setTimeout(function(){
        let output = "";
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML=output;

    },1000); // 3 sec la get pandrom
}

createPost({title : "Post three"})
.then(getPosts) // success
.catch((err) => {
    document.body.innerHTML = err ;
 }); // failure


