class easyHTTP{
    get(url,callback){
        const xhr = new XMLHttpRequest;
        xhr.open("GET",url,true);
        xhr.onload = function(){
            if(this.status === 200){
                callback(null, this.responseText);
            }
            else{
                callback(`Error ${this.status} - ${this.statusText} , null`)
            }
        }
        xhr.onerror = function(){
            callback("Network error" , null);
        }
        xhr.send();
    }
}

//Post request with call back
// post(url,data,callback){
//         const xhr = new XMLHttpRequest();
//         xhr.open("POST",url,true);

//         //POST LA onnu add pannanu
//         //meaning send pandra content type json matum tha accept pannanu
//         xhr.setRequestHeader("Content-Type", "application/json");

//         xhr.onload = function(){
//             if(this.status === 200){
//                 callback(null, this.responseText);
//             }
//             else{
//                 callback(`Error ${this.status} - ${this.statusText} , null`)
//             }
//         }
//         xhr.onerror = function(){
//             callback("Network error" , null);
//         }
//         xhr.send(JSON.stringify(data));
//     }
