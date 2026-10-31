const http = new easyHTTP();
// console.log(http);//obj ah varum
//using a GET request with callback

http.get("https://6ae5eb08877d34ccafc2894d.mockapi.io/user/user-data", function(err,data){
    if(err){
        console.log("Error",err);
    }
    else{
        console.log("Data Received : " , data);
    }
});

// const postData = {
//     name : "shifa mugasheena"
// }
// http.post("https://6ae5eb08877d34ccafc2894d.mockapi.io/user/user-data" , function(err,data){
//     if(err){
//         console.log("Error : " , err);
//     }
//     else{
//         console.log("Data Receivied : " , data);
//     }
// })