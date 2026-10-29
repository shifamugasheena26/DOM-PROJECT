document.querySelector("#btn").addEventListener("click",loadData);

// function loadData(){
//     // console.log("hello");
//     //data.txt la ulla data va read panna porom

//     //step-1 create an XHR object

//     const xhr = new XMLHttpRequest();
//     // console.log(xhr); // oru object vanthurukum
//     //intha code change agathu

//     //data va open pannanu (method get)
//     xhr.open("GET", "data.txt" , true);
//     xhr.onload= function(){
//         console.log(this);//this refer to xhr(obj)
//     }//ithu matum kudutha run aagathu inoru method kudukanu

//     xhr.send();// obj varum status : 200 success
//     //response and response text vanthurukum this is sample data

//     //ippa namma illatha file like daa.txt kudutha status 404 varum not found
// }

function loadData(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET" , "data.txt" , true);

    xhr.onload = function(){
        //oru condition kudukurom 
        if(this.status === 200){
            document.querySelector("#output").innerText=this.responseText;
        }
        else{
            document.querySelector("#output").innerText=
            `${this.status} - ${this.statusText}`;
        }
    }
    xhr.send(); // page load aagamaye show aagum
    }
