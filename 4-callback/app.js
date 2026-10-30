const posts = [
    {
        title : "Post 1" ,
        body : "This is a post 1"
    },
    {
        title : "Post 2" ,
        body : "This is a post 2"
    },
    // {
    //     title : "Post 3" ,
    //     body : "This is a post 3"
    // }
]

//synchronous ==> default behaviour of the language 
            //==> synchronous execution line by line run aagum once false ana stop aagirum

       //sync
       
       function createPost(post){

        setTimeout(function(){
            posts.push(post);
        } , 2000)
       } // 2 sec kaluchu ithu print aganu

       function getPosts(){
        setTimeout(function(){
            let output = "";
            posts.forEach(function(post){
                output += `<li>${post.title}</li>`
            });
            document.body.innerHTML=output;
        },3000) //get panna 1 sec
       }
       createPost(
        {
        title : "Post 3" ,
        body : "This is a post 3"
        }
    );

    getPosts();