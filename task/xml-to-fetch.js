class easyHTTP{
    //1-fetch(get)
    get(url,callback){
        fetch(url)//serverku get request send pannu
        .then(response => response.json())// server respones ah json datava convert pannu
        .then(data => {callback(null,data)})//convert panna data kidaikum( .then(data => {()}))  and error illana callback kku pass pannu
        .catch(error => {callback(error,null)})
    }
    //2-fetch(post)
    post(url,data,callback){
        fetch(url, {
            method : "POST",//post request
            headers : {
                "Content-Type" : "application/json"//enna format data send pandrom nu server ku solrathu
            },
            body : JSON.stringify(data) //js obj ah json string ah convert pandrathu
            //body : server ku send pandraa actual data

        })
        .then(response => response.json())
        .then(data => callback(null,data))
        .catch(error => callback(error,null))
    }
    //3-fetch(put)
    put(url,data,callback){
        fetch(url , {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then(reqponst => response.json())
        .then(data => callback(null,data))
        .catch(error => callback(error,null))
    }
    //4-fetch(delete)
    delete(url,callback){
        fetch(url , {
            method : "DELETE",
        })
        .then(response => response.json())
        .then(data => callback(null,data))
        .catch(error => callback(error,null))
    }
}