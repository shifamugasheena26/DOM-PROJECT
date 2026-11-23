
//async library

// async function test() {
//     return "hello shifa";
// }
// // console.log(test()); // It can return promise
// //async keyword always return promise

// test()
// .then(data => console.log(data))
// .catch(error => console.log(error))


class EasyHTTP {
    //get
    async get(url){
        const response = await fetch(url);
        const resdata = await response.json();
        return resdata;        
    }
    //post
    async post(url,data){
        const response = await fetch(url , {
            method : "POST",
        headers : {
            "Content-type":"application/json"
        },
        body : JSON.stringify(data)
        })
         const resdata = await response.json();
        return resdata;
    }

    //put
    async put(url,data){
        const response = await fetch(url , {
            method : "PUT",
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(data)
        })
         const resdata = await response.json();
        return resdata;
    }

    //delete
    async delete(url){
        const response = await fetch(url, {
            method : "DELETE"
        })
        const resdata = await response.json();
        return resdata;
    }
}