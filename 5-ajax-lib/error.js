//error first pattern 

//error handle pantu tha data get panuvom

//1-fetch data for error handling

function fetchData(callback){ //func la parameter pass callback
    setTimeout(()=>{
        const error = "Failed to fetch data";
        callback( error , null); //passing the error as the first argument
    },1000);
}
fetchData(function(error, result){ //parameter error result
    if(error){
        console.log("Error", error);
    }
    else{
        console.log("Success" , result);
    }
})
//2-fetch data for success
function fetchData(callback){
    setTimeout(()=>{
        const data = "fetch data from the server";
        callback(null , data); //passing the error as the first argument
    },1000);
}
fetchData(function(error, result){ //parameter error result
    if(error){
        console.log("Error", error);
    }
    else{
        console.log("Success" , result);
    }
})
//library create panna help pannu 