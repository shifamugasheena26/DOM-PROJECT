// xml to fetch
const url = "https://6afc65b5892984c4494b8b58.mockapi.io/list/student";
const http = new easyHTTP();
//get(fetch)
http.get(url,function(err,data){
    if(err){
        console.log("Error : " , err);
    }
    else{
        console.log("Data Received : " , data);
    }
})

//post(fetch)
const postData = {
    name : " Shifa Mugasheena.A",
}
http.post(url,postData,function(err,data){
    if(err){
        console.log("Error : " , err);
    }
    else{
        console.log("Data created : " , data);
    }
});
//put(fetch)
const putData = {
    name : "Sangeetha",
}
http.put(`${url}/5`,putData,function(err,data){
    if(err){
        console.log("Error : " , err);
    }
    else{
        console.log("Data updated : " , data);
    }
});
//delete(fetch)
http.delete(`${url}/3`,function(err,data){
    if(err){
        console.log("Error : " , err);
    }
    else{
        console.log("Data deleted : " , data);
    }
});