const posts = [
    {title : "Post 1" ,body : "This is a post 1"},
    {title : "Post 2" ,body : "This is a post 2"},
    // {
    //     title : "Post 3" ,
    //     body : "This is a post 3"
    // }
]

//synchronous ==> default behaviour of the language 
            //==> synchronous execution line by line run aagum once false ana stop aagirum

//sync
function createPosts(post){

    setTimeout(function(){
        posts.push(post);
    },2000); // 2 sec la create aagum

}

function getPosts(){

    setTimeout(function(){
        let output = "";
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML=output;

    },3000); // 3 sec la get pandrom
}

createPosts(
    {
        title : "post 3", body : "this is post 3"
    }
)

getPosts(); 
  
//example
// console.log("one"); // execution stack
// setTimeout(function(){//heap call stack 0 kuduthaley it delay pannu
//     console.log("two")
// },0);
// console.log("three")// execution stack
// // one three two 


//Asynchronous (callback) createPost la callback add

// function createPosts(post , callback){

//     setTimeout(function(){
//         posts.push(post);
//         callback();
//     },2000); // 2 sec la create aagum

// }

// function getPosts(){

//     setTimeout(function(){
//         let output = "";
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML=output;

//     },3000); // 3 sec la get pandrom
// }

// createPosts(
//     {
//         title : "post 3", body : "this is post 3"
//     },
//     getPosts
// )

// // getPosts(); // call back nala itha create post la kudukaporom


//step ==> post push athu , func call athu , 
// oru post tha call pannirukom (create post) 
// athu run anathuku aprm tha getpost varum so wait pannanu

//logic ennana create anathuku aprm tha get pannanu