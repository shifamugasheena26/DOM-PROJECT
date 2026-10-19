//step-1 hero constructor function and add/edit hero function
//step-2 global variable create let => heros[] push pandrathuku , edit btn ku editIndex(null),isEditing(false)
//step-3 render function input kudukurathu page la show aaga 1-2-3-4
//step-4 savehero input local storage la store aagurathu 1-1,2-1,2,4
//step-5 refresh pannalu page la poga koodathu window.onload(DOMcontentload)
//step-6 secret identity ah reveal,set pandrom (reveal)return pannu , set (identity) ah save pannu
//step-7 delete condition
//step-8 edit condition/edit logic
//step-9 search hero


//step:1 Hero constructor function
function Hero (name,powerLevel,secretIdentity,category){
    this.name=name;
    this.powerLevel=powerLevel;
    this.category=category;

    // itha secret ah vaikirom
    var _secret = secretIdentity;//Private using
    //console.log(hero._secret) undefined varum


    //step-6. set pandratha reveal pannu
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
let isEditing = false;
let editIndex = null;

//step-3 continue
// function saveHeros(){ //map new array kudukum
//     const data = heros.map(function(hero){
//     //    console.log(hero); // submit panna output inga irunthu tha varum
//    //second submit ku 1,2 rendu sethu varum 
//     })
// }


//step-5 refresh panna local la irukum page la poirum atha solve panna
window.onload = function(){
    const saved = localStorage.getItem("heros");

    if(saved){
        const raw = JSON.parse(saved);
        heros=raw.map(function(h){
           return new Hero(h.name,h.powerLevel,h._secret || h.secretIdentity , h.category)
        })
       renderHeros();
    }
}

//step-4
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
     const power = parseInt(document.querySelector("#heroPower").value.trim()); //itha number la return pannuvom
     const secret = document.querySelector("#secretIdentity").value.trim();
     const category = document.querySelector("#heroCategory").value.trim();
   

     //mela heros=[] empty array iruku namma type pandrathu 
     //intha array la insert aaganu 
    // const newhero = new Hero(name,power,secret,category);

    // //[] kulla newhero (namma type pandratha) insert pandrom
    // heros.push(newhero)
    // console.log(heros); //[hero] inside la namma insert pannathu iruku


    //step-9 mela ullatha comment potutu
    //initial ah edit false ah irku , 
    //edit click pantu save btn click panna hero varum athula namma edit pandratha kudukanu
    if(isEditing){
        let hero = heros[editIndex];
        // console.log(hero);
        hero.name=name;
        hero.powerLevel=power;
        hero.category=category;
        hero.setIdentity(secret);

        //once ithu run aanathuku aprm itha isediting false ah maathanu
        isEditing = false;
        editIndex = null;
    }
    else{
        const newhero = new Hero(name,power,secret,category);
        heros.push(newhero);
    }
   
     //namma enna type pandromo athu apdiye show aagum console la

// namma enter panathuku aprm reset panna intha step =""
//(once enter pannathuku aprm reset aagirum)
document.querySelector("#heroName").value="";
document.querySelector("#heroPower").value="";
document.querySelector("#secretIdentity").value="";
document.querySelector("#heroCategory").value="";


// step-3 render namma submit pandratha page la show panna render 
renderHeros();  // onnu onnu add aarapa create agum 1-2-3-4

//step-4
saveHeros(); // onnu onnu add aarapa previous su sendhu add agum 
             //1-1,2-1,2,3-1,2,3,4

});

//step-3 render kaana function
// function renderHeros(){

//step-10 continue
function renderHeros(filter=""){
    console.log(filter);

    const ul = document.querySelector("#heroList");
    ul.innerHTML="";

    // ovoru time add pandrapa heros la push agum
    heros.forEach(function(hero,index){

         //step-10
        //  console.log(hero.name.toLowerCase());//submit kuduthutu enna type pannalau antha hero name + namma search pandrathu varum
        // console.log(hero.name.toLowerCase().includes("shifa"));//true
        if(hero.name.toLowerCase().includes(filter.toLowerCase())){
           
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
                 <button class="btn btn-warning btn-sm" onClick ="editHero(${index})">Edit</button> 
                 
                  <button class="btn btn-danger btn-sm" onClick ="deleteHero(${index})" >Delete</button>
             </div>
        `
        //step-7 delete hero la onclick = deleteHero function la index pass 
        //step-8 edit hero la onclick = editHero function la index pass 
        //append pannanu item(li) ah ul la
       ul.appendChild(item);
        }

    
    

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

    //     const item = document.createElement("li");
    //     // 2-li ku classname add
    //     item.className="list-group-item d-flex justify-content-between align-items-center";
    //     // 3- add inner HTML
    //     item.innerHTML=`
    //         <div>
    //              <strong>${hero.name}</strong>(Power : ${hero.powerLevel})
    //              <span class="badge bg-secondary ms-2">${hero.category}</span>
    //               <br>
    //              <small>${hero.powerLevel}</small>
    //          </div>
    //          <div>
    //              <button class="btn btn-warning btn-sm" onClick ="editHero(${index})">Edit</button> 
                 
    //               <button class="btn btn-danger btn-sm" onClick ="deleteHero(${index})" >Delete</button>
    //          </div>
    //     `
    //     //step-7 delete hero la onclick = deleteHero function la index pass 
    //     //step-8 edit hero la onclick = editHero function la index pass 
    //     //append pannanu item(li) ah ul la
    //    ul.appendChild(item);
    })
}


//step-7 delete function

function deleteHero(index){
//   console.log(index); // delete btn click panna 0 varum

if(confirm("Are you sure you want to delete this hero? ")){
    heros.splice(index,1); // index la irunthu 1 delete aaganu
    renderHeros(); //ui render pannu 
    saveHeros();//local storage la save pannu
}

}

//step-8 edit function 
function editHero(index){
    // console.log(index); edit click panna 0 varum

    //edit logic - entha hero va edit pannanunu find pannanu
    const hero = heros[index]; //arr call panni index pass
    // console.log(hero); click panna hero varum ulla namma submit pannathu

    //value la vaikirom hero.name , power,identity ,category
document.querySelector("#heroName").value=hero.name;
document.querySelector("#heroPower").value=hero.powerLevel;
document.querySelector("#secretIdentity").value=hero.revealIdentity();
document.querySelector("#heroCategory").value=hero.category;


//step-8 isediting false la irukuratha true aaka pore
// editindex null la irukuratha entha index nu set panna pore

 isEditing = true;
 editIndex = index;  //condition add/edit la write pannanu
}


//step-9 search hero (keyup and input same ethu venaalu use pannalam )

document.querySelector("#searchhero").addEventListener("input",function(e){
    // console.log(e.target.value); type pandrathu console la varum
    //first mela render func la filter vaipom initial filter = ""
    //  aprm type panna panna add aagum 

    renderHeros(e.target.value);
})