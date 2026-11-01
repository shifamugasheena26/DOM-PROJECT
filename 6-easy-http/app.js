//get === 200
//post === 201
//put === 200
//delete === 200


const http = new easyHTTP();
// console.log(http); //object varum 

//using a GET request with callback
//(already iruka data get pannadrom)
http.get("https://6ae5eb08877d34ccafc2894d.mockapi.io/user/user",function(err,data){
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
http.post("https://6ae5eb08877d34ccafc2894d.mockapi.io/user/user",postData,function(err,data){
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
http.put("https://6ae5eb08877d34ccafc2894d.mockapi.io/user/user/2",putData,function(err,data){
    if(err){
        console.log("Error : " , err);
    }
    else{
        console.log("Data updated : " , data);
    }
});

//using a DELETE request with callback
//(particular id data delete pandrom)
const deleteData = {
    name : "Sangeetha",
}
http.delete("https://6ae5eb08877d34ccafc2894d.mockapi.io/user/user/12",function(err,data){
    if(err){
        console.log("Error : " , err);
    }
    else{
        console.log("Data deleted : " , data);
    }
});
