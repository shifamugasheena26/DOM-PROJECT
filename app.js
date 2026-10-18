//step:1 Hero constructor function

function Hero (name,powerLevel,secretIdentity,category){
    this.name=name;
    this.powerLevel=powerLevel;
    this.category=category;


    var _secret = secretIdentity;//Private using


    //step-4
    this.revealIdentity = function(){
        return _secret;
    }

    this.setIdentity = function(newIdentity){
        _secret=newIdentity;
 //setIdentity la pass pandra value secret la save agum
    }
}

//step-2 Global variable
let heros = [];
const isEditing = false;
const editIndex = null;

//step-3 continue
// function saveHeros(){ //map new array kudukum
//     const data = heros.map(function(hero){
//     //    console.log(hero); // submit panna output inga irunthu tha varum
//    //second submit ku 1,2 rendu sethu varum 
//     })
// }


//step-5 refresh panna local la irukum page la poirum
window.onload = function(){
    const saved = localStorage.getItem("heros");

    if(saved){
        const raw = JSON.parse(saved);
        heros=raw.map(function(h){
           return new Hero(h.name,h.powerLevel,h.secret || h.secretIdentity , h.category)
        })
       renderHeros();
    }
}

//step-3
function saveHeros(){ //map new array kudukum
    const data = heros.map(function(hero){
        // console.log(hero);
    return {
        name:hero.name,
        powerLevel:hero.powerLevel,
        category:hero.category,
        //step-4
        secretIdentity:hero.revealIdentity()
    }
   
})
// console.log(data);
localStorage.setItem("heros",JSON.stringify(data));

}

// step-1 Add / edit Hero from form

//form ku event vaikirom 
document.querySelector("#heroForm").addEventListener("submit",function(e){
    e.preventDefault();
    
    //input value get pandrom
     const name = document.querySelector("#heroName").value.trim(); //trim start and end place trim pannu
     const power = parseInt(document.querySelector("#heroPower").value.trim());
     const secret = document.querySelector("#secretIdentity").value.trim();
     const category = document.querySelector("#heroCategory").value.trim();
   

     //mela heros=[] empty array iruku namma type pandrathu 
     //intha array la insert aaganu 
    const newhero = new Hero(name,power,secret,category);

    //[] kulla newhero (namma type pandratha) insert pandrom
    heros.push(newhero)
    console.log(heros); //[hero] inside la namma insert pannathu iruku

   
     //namma enna type pandromo athu apdiye show aagum console la

// namma enter panathuku aprm reset panna intha step =""
//(once enter pannathuku aprm reset aagirum)
document.querySelector("#heroName").value="";
document.querySelector("#heroPower").value="";
document.querySelector("#secretIdentity").value="";
document.querySelector("#heroCategory").value="";


// namma submit pandratha page la show panna render

renderHeros();  // onnu onnu add aarapa create agum 1-2-3-4
//step-3
saveHeros(); // onnu onnu add aarapa previous su sendhu add agum 
             //1-1,2-1,2,3-1,2,3,4

});

//render kaana function
function renderHeros(){
    const ul = document.querySelector("#heroList");
    ul.innerHTML="";

    // ovoru time add pandrapa heros la push agum
    heros.forEach(function(hero,index){
        //submit panna list create aaganu

        //  <li class="list-group-item d-flex justify-content-between align-items-center">
        //     <div>
        //         <strong>Code Man - Power : 7000</strong>
        //         <br>
        //         <small>Secert : No Need GPT</small>
        //     </div>
        //     <div>
        //         <button class="btn btn-warning btn-sm">Edit</button>
        //          <button class="btn btn-danger btn-sm">Remove</button>
        //     </div>
        // </li>

        // 1-create element li
        const item = document.createElement("li");
        // 2-li ku classname add
        item.className="list-group-item d-flex justify-content-between align-items-center";
        // 3- add inner HTML
        item.innerHTML=`
            <div>
                 <strong>${hero.name}</strong>(Power : ${hero.powerLevel})
                 <span class="badge bg-secondary ms-2">${hero.category}</span>
                  <br>
                 <small>${hero.powerLevel}</small>
             </div>
             <div>
                 <button class="btn btn-warning btn-sm">Edit</button>
                  <button class="btn btn-danger btn-sm">Remove</button>
             </div>
        `

        //append pannanu item(li) ah ul la
       ul.appendChild(item);
    })
}
