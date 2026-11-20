//library
//https://6affee8f7fc363ccff098fd8.mockapi.io/user/users
class EasyHTTP{
    // Make an get request
    get(url){
        //own promise return 
        return new Promise((resolve,reject) => {
            //fetch
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject("Something went wrong"))
        })
    }

    post(url,data){
        return new Promise((resolve,reject) => {
            fetch(url , {
                method : "POST",
                headers : {
                  "Content-Type" : "application/json"
                },
                body : JSON.stringify(data)
            })
        .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject("Something went wrong"))
        })
    }

    put(url,data){
        return new Promise((resolve , reject) => {
            fetch(url , {
                method : "PUT",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject("Something went wrong"))
        })
    }

    delete(url){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method : "DELETE"
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject("Something went wrong"))

        })
    }
}