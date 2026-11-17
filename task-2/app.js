//callback remove promise add .then , .catch

const url = "https://6afc65b5892984c4494b8b58.mockapi.io/list/student";
const http = new easyHTTP();

//get(promise)
http.get(url)
.then(data => console.log("Data Received" , data))
.catch(err => console.log("Error:" , err));

//post(promise)
const postData = {
    name : " Shifa Mugasheena.A",
}
http.post(url,postData)
.then(data => console.log("Data Created" , data))
.catch(err => console.log("Error:" , err));

//put(promise)
const putData = {
    name : "Sangeetha",
}
http.put(`${url}/21`,putData)
.then(data => console.log("Data Updated" , data))
.catch(err => console.log("Error:" , err));

//delete(promise)
http.delete(`${url}/22`)
.then(data => console.log("Data Deleted" , data))
.catch(err => console.log("Error:" , err));