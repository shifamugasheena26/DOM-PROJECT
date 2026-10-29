document.querySelector("#btn-1").addEventListener("click",getUsersData);

function getUsersData(){
    //object
    const xhr = new XMLHttpRequest();
    //open
    xhr.open("GET","https://jsonplaceholder.typicode.com/users" , true);
    //onload
    xhr.onload = function(){
        if(this.status === 200){
            const user = JSON.parse(this.responseText);
            console.log(user);
            
            let output = "";
            user.forEach(function(user){

                output += `
                <ul>
                <li>${user.id}</li>
                <li>${user.name}</li>
                <li>${user.username}</li>
                <li>${user.phone}</li>
                </ul>
                `
            });
            document.querySelector("#user-output").innerHTML=output;
        }
    }
    xhr.send();
}