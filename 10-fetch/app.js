const http = new EasyHTTP();

// console.log(http.get("https://6affee8f7fc363ccff098fd8.mockapi.io/user/users"));
//it return a promise (own promise)

//1-get
http.get("https://6affee8f7fc363ccff098fd8.mockapi.io/user/users")
.then(data => console.log(data))
.catch(error => console.log(error))

//2-post
const postData = {
    name : "shifa"
}
http.post("https://6affee8f7fc363ccff098fd8.mockapi.io/user/users",postData)
.then(data => console.log(data))
.catch(error => console.log(error))

//3-put
const putData = {
    name : "raj"
}
http.put("https://6affee8f7fc363ccff098fd8.mockapi.io/user/users/9",putData)
.then(data => console.log(data))
.catch(error => console.log(error));

//4-delete

http.delete("https://6affee8f7fc363ccff098fd8.mockapi.io/user/users/8")
.then(data => console.log(data))
.catch(error => console.log(error))