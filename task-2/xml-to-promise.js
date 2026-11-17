// xmlhttprequest - promise
// get post put delete same just remove callback and add promise
class easyHTTP{
    //get(promise)
   get(url){
    return new Promise((resolve,reject) =>{
        //same xhr xmlhttpRequest
          const xhr = new XMLHttpRequest();
        xhr.open("GET",url,true);
        xhr.onload = function(){
            if(this.status === 200){
                resolve(this.responseText);
            }
            else{
                reject(`Error : ${this.status} - ${this.statusText}`,null)
            }
        }
        xhr.onerror = function(){
            reject("Network Error",null);
        }
        xhr.send();
    }
   )}

   //post(promise)
   post(url,data){
    return new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open("POST",url,true);
        //Set content type madantory 
        xhr.setRequestHeader("Content-type","application/json");
        xhr.onload = function(){
            if(this.status === 201){
                resolve(this.responseText);
            }
            else{
                reject(`Error : ${this.status} - ${this.statusText}`,null)
            }
        }
        xhr.onerror = function(){
            reject("Network Error",null);
        }
        xhr.send(JSON.stringify(data));
    }
   )}

   //put(promise)
    put(url,data){
        return new Promise((resolve,reject) =>{
              const xhr = new XMLHttpRequest();
        xhr.open("PUT",url,true);
        //Set content type madantory 
        xhr.setRequestHeader("Content-type","application/json");
        xhr.onload = function(){
            if(this.status === 200){
                resolve(this.responseText);
            }
            else{
                reject(`Error : ${this.status} - ${this.statusText}`,null)
            }
        }
        xhr.onerror = function(){
            reject("Network Error",null);
        }
        xhr.send(JSON.stringify(data));
        
    }
)}

//delete(promise)
delete(url){
    return new Promise((resolve,reject) => {
          const xhr = new XMLHttpRequest();
        xhr.open("DELETE",url,true);
        //Set content type madantory 
        xhr.setRequestHeader("Content-type","application/json");
        xhr.onload = function(){
            if(this.status === 200){
                resolve("Data Deleted");
            }
            else{
                reject(`Error : ${this.status} - ${this.statusText}`,null)
            }
        }
        xhr.onerror = function(){
            reject("Network Error",null);
        }
        xhr.send();
    }
)}
}