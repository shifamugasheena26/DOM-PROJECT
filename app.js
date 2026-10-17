//step:1 Hero constructor function

function Hero (name,powerLevel,secretIdentity,category){
    this.name=name;
    this.powerLevel=powerLevel;
    this.category=category;


    var _secret = secretIdentity;//Private using
}

//step-2 Global variable
const heros = [];
const isEditing = false;
const editIndex = null;

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

renderHeroes();

});

//render kaana function
function renderHeroes(){
    const list = document.querySelector("#heroList");
    list.innerHTML="";

    heros.forEach(function(hero,index){
        
    })
}
