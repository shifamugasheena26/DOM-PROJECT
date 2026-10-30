document.querySelector("#button-1").addEventListener("click",getCustomer);
document.querySelector("#button-2").addEventListener("click",getCustomers);

function getCustomer(){
    //object create
    const xhr = new XMLHttpRequest;
    //open
    xhr.open("GET" , "customer.json" , true);
    xhr.onload = function(){
        // console.log(this); obj
        console.log(this.responseText);//json data va ui la kondu vara mudiyathu direct ah (json parse pannanu)

        const customer = JSON.parse(this.responseText);
        console.log(customer); // json data ==> obj ah parse agiruchu (console la)

        const output = `
          <ul>
            <li>${customer.id}</li>
            <li>${customer.name}</li>
            <li>${customer.company}</li>
            <li>${customer.phone}</li>
          </ul>
        `
        console.log(output);
        document.querySelector("#output").innerHTML = output;
    }
    xhr.send();
}

function getCustomers(){
    //object create
    const xhr = new XMLHttpRequest;
    //open
    xhr.open("GET" , "customers.json" , true);
    xhr.onload = function(){
        // console.log(this); obj
        console.log(this.responseText);//json data va ui la kondu vara mudiyathu direct ah (json parse pannanu)
  
        const customers = JSON.parse(this.responseText);
        // console.log(customers); //array obj ah vanthurukum
       
        let output  = "";
        customers.forEach(function(customer){
              output += `
          <ul>
            <li>${customer.id}</li>
            <li>${customer.name}</li>
            <li>${customer.company}</li>
            <li>${customer.phone}</li>
          </ul>
        `
        })
        console.log(output);
         document.querySelector("#output").innerHTML = output;
    }
    xhr.send();
}