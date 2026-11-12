//promise is a callback alternative to handle asynchronous operation in js
//callback hell - oru callback function-kulla innoru callback, 
// athukulla innoru callback nu nested callbacks 
//romba adhigama irukkurathu.

const posts = [
    {title:"Post One"},
    {title:"Post Two"},
];

// it return promise
function createPost(post){

     return new Promise((resolve,reject) => {
        setTimeout(() =>{
            posts.push(post);

            const error = false;
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
//promise create
// console.log(new Promise(_,_));// ithula pass pannanu


//arrow function
//Arrow function na, JavaScript-la oru short way-la function eludhura syntax. 
// Normal function-ku bathila => symbol use pannuvom.