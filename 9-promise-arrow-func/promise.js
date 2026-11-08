//promise is a callback alternative to handle asynchronous operation in js
//callback hell - oru callback function-kulla innoru callback, 
// athukulla innoru callback nu nested callbacks 
//romba adhigama irukkurathu.

const posts = [
    {title:"Post One"},
    {title:"Post Two"},
];

function createPost(post){

     return new Promise((resolve,reject) => {
        setTimeout(() =>{
            posts.push(post);
        })
     })
}

//promise create
// console.log(new Promise(_,_));// ithula pass pannanu
