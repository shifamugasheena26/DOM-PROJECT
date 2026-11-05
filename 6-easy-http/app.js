//get === 200
//post === 201
//put === 200
//delete === 200


const http = new easyHTTP();
// console.log(http); //object varum 

//using a GET request with callback
//(already iruka data get pannadrom)
http.get("https://6ae8a1491a7b15aaa50f5229.mockapi.io/users/users",function(err,data){
    if(err){
        console.log("Error : " , err);
    }
    else{
        console.log("Data Received : " , data);
    }
})

//using a POST request with callback
//(new data add pandrom)
const postData = {
    name : " Shifa Mugasheena.A",
}
http.post("https://6ae8a1491a7b15aaa50f5229.mockapi.io/users/users",postData,function(err,data){
    if(err){
        console.log("Error : " , err);
    }
    else{
        console.log("Data created : " , data);
    }
});

//using a PUT request with callback
//(particular id data update pandrom)
const putData = {
    name : "Sangeetha",
}
http.put("https://6ae8a1491a7b15aaa50f5229.mockapi.io/users/users/8",putData,function(err,data){
    if(err){
        console.log("Error : " , err);
    }
    else{
        console.log("Data updated : " , data);
    }
});

//using a DELETE request with callback
//(particular id data delete pandrom)

http.delete("https://6ae8a1491a7b15aaa50f5229.mockapi.io/users/users/3",function(err,data){
    if(err){
        console.log("Error : " , err);
    }
    else{
        console.log("Data deleted : " , data);
    }
});
//with callback function
//the above code is synchronous ithu run panna wait pannathu 
// fast ah nadantha code execute agirum
//non-blocking ah work aagiruku