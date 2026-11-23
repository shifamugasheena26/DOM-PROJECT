const http = new EasyHTTP();
//get
http.get("https://6affee8f7fc363ccff098fd8.mockapi.io/user/users")
.then(data => console.log(data))
.catch(error => console.log(error));

//post
const postData = {
    name : "shifa"
}
http.post("https://6affee8f7fc363ccff098fd8.mockapi.io/user/users",postData)
.then(data => console.log(data))
.catch(error => console.log(error))

//put
const putData = {
    name : "kishore"
}
http.put("https://6affee8f7fc363ccff098fd8.mockapi.io/user/users/6" , putData)
.then(data => console.log(data))
.catch(error => console.log(error))

//delete

http.delete("https://6affee8f7fc363ccff098fd8.mockapi.io/user/users/12")
.then(data => console.log("data deleted"))
.catch(error => console.log(error))
