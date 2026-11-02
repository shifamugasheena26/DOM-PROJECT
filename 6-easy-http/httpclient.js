//get delete ku data pass pannanunu avasiyam illa
//post put ku data pass pannanum
///easyHTTP - library for making HTTP requests
class easyHTTP{
    //make an HTTP (GET) request (get data from server)
    get(url,callback){
        const xhr = new XMLHttpRequest();
        xhr.open("GET",url,true);
        xhr.onload = function(){
            if(this.status === 200){
                callback(null,this.responseText);
            }
            else{
                callback(`Error : ${this.status} - ${this.statusText}`,null)
            }
        }
        xhr.onerror = function(){
            callback("Network Error",null);
        }
        xhr.send();
    }

        //make an HTTP (POST) request  (send data to server)
    post(url,data,callback){
        const xhr = new XMLHttpRequest();
        xhr.open("POST",url,true);
        //Set content type madantory 
        xhr.setRequestHeader("Content-type","application/json");
        xhr.onload = function(){
            if(this.status === 201){
                callback(null,this.responseText);
            }
            else{
                callback(`Error : ${this.status} - ${this.statusText}`,null)
            }
        }
        xhr.onerror = function(){
            callback("Network Error",null);
        }
        xhr.send(JSON.stringify(data));
    }


    //make an HTTP (PUT) request (update data to server using particular id)
     put(url,data,callback){
        const xhr = new XMLHttpRequest();
        xhr.open("PUT",url,true);
        //Set content type madantory 
        xhr.setRequestHeader("Content-type","application/json");
        xhr.onload = function(){
            if(this.status === 200){
                callback(null,this.responseText);
            }
            else{
                callback(`Error : ${this.status} - ${this.statusText}`,null)
            }
        }
        xhr.onerror = function(){
            callback("Network Error",null);
        }
        xhr.send(JSON.stringify(data));
        
    }


    //make an HTTP (DELETE) request (delete data from server using particular id)

     delete(url,callback){
        const xhr = new XMLHttpRequest();
        xhr.open("DELETE",url,true);
        //Set content type madantory 
        xhr.setRequestHeader("Content-type","application/json");
        xhr.onload = function(){
            if(this.status === 200){
                callback(null,"Data Deleted");
            }
            else{
                callback(`Error : ${this.status} - ${this.statusText}`,null)
            }
        }
        xhr.onerror = function(){
            callback("Network Error",null);
        }
        xhr.send();
    }
}
