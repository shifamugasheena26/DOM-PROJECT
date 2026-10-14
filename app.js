const form = document.querySelector("#task-form");
const ul = document.querySelector(".collection");
const input = document.querySelector("#task");
const clrbtn = document.querySelector(".clear-tasks ");
const filter = document.querySelector("#search");

function loadAllEventListerner(){
    //add task
    form.addEventListener("submit",addTask);
    //clear task
    clrbtn.addEventListener("click",clearTask);
    //remove task
    ul.addEventListener("click",removeTask);
    //filter task
    filter.addEventListener("keyup",filterTask);
    //dom load event
    document.addEventListener("DOMContentLoaded",getTask);
}
loadAllEventListerner();

//get Task refresh panna lc la irunthu task eduthu display pannu page la 

function getTask(){

    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task){

        //create element
        const li = document.createElement("li");

        //add class
        li.className = "collection-item";

        //add inner text
        li.innerText = task;

        //create new link element 
        const link = document.createElement("a");

        //add class
        link.className = "delete-item secondary-content";

        //add a icon into link 
        link.innerHTML=`<i class = "fa fa-remove"></i>`;
    
        //append link to li
        li.appendChild(link);

        //append li to ul
        ul.appendChild(li);
    })
}

//add task
function addTask(e){
   e.preventDefault();
   if(input.value === ""){
    alert("Please enter task");
   }
   else{
    const ul = document.querySelector(".collection");
    const li = document.createElement("li");
    console.log(li)
    li.className="collection-item";
    li.innerText=input.value;
    const link = document.createElement("a");
    link.className="delete-item secondary-content";
    link.innerHTML=`<i class="fa fa-remove"></i>`;
    console.log(link);
    li.appendChild(link);
    ul.appendChild(li);
 
    console.log(li);
    console.log(link);

    

    //store task in localstorage

    storeTaskInLocalStorage(input.value);   
    input.value = "";
    
   }
}

//add task in localstorage

function storeTaskInLocalStorage(type){
    let tasks;

    // console.log(tasks); undefined

    if(localStorage.getItem("tasks")===null){
        tasks=[];
        console.log("step-1");
    }
    else{
        tasks=JSON.parse(localStorage.getItem("tasks"))
        console.log(tasks);
        console.log("step-2");
    }

    tasks.push(type);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

//clear task
function clearTask(){
    ul.innerHTML="";

    //clear task from local storage
    clearTaskInLocalStorage();
}

//clear task in ls

function clearTaskInLocalStorage(){
    localStorage.clear("tasks");
}
//remove task

function removeTask(e){
   if(e.target.parentElement.classList.contains("delete-item")){
    if(confirm("Are you sure?")){
    e.target.parentElement.parentElement.remove();
   }

   //remove task in local storage
   removeTaskInLocalStorage(e.target.parentElement.parentElement);
}
}


//remove in lc
function removeTaskInLocalStorage(removeElement){

    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks=[];
    } 
    else{
        tasks=JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(curval,position){
       
        if(removeElement.innerText === curval){
            tasks.splice(position,1);
        }

    })

    //remove pantu antha changes ah lc la save pana
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
//filter Task
function filterTask(e){

    const lowercase=e.target.value.toLowerCase();
    console.log(lowercase);

    document.querySelectorAll(".collection-item").forEach(function(task){
        const item = task.innerText;
        console.log(item);


    if(item.toLowerCase().indexOf(lowercase) !=-1){
        task.style.display="block";
    }
    else{
        task.style.display="none";
    }
});
}