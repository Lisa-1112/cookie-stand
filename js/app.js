'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
 '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
 

function getRandomNumber(min,max){
    const randomDecimal = Math.random();
    const randomNumber = randomDecimal*(max-min)+min
    console.log(min,max)
    const finalResult = Math.floor(randomNumber);
    return Math.floor(Math.random()*(max-min+1)+min)
    
}

let Seattle = {
    Location: 'Seattle',
    min_customer: 23,
    max_customer: 65, 
    avg_cookie_sales: 6.3,
    total: 0,
    allcookies: [],
    cookies_sold_hourly:function() {
      //let total = 0; 
      //let allcookies=[];
      for (let hour =0; hour <hours.length; hour++){
        let customers= getRandomNumber(this.min_customer,this.max_customer);
        let cookies= Math.floor(customers*this.avg_cookie_sales);
        this. allcookies.push(cookies);
        this.total+=cookies;
      }
      console.log(this.allcookies);
  
}
    }   

    for( let i = 0 ; i < hours.length; i++) {
        let listElement = document.getElementById('Seattle');
        let listItem = document.createElement('li');
        console.log (seattle.allcookies)
        console.log(seattle.allcookies[0])
      listItem.textContent =`${hours[i ]}: ${seattle.allcookies[0]}`;
        listElement.appendChild(listItem);
    }

let toyko = {
    Location: 'Toyko',
    min_customer: 23,
    max_customer: 65, 
    avg_cookie_sales: 6.3,
    total: 0,
    allcookies: [],
   cookies_sold_hourly:function() { 
      //let total = 0; 
      for (let hour =0; hour <hours.length; hour++){
        let customers= getRandomNumber(this.min_customer,this.max_customer);
        let cookies= Math.floor(customers*this.avg_cookie_sales);
        this. allcookies.push(cookies);
        this.total+=cookies;
      
      console.log(this.allcookies);
      }
    }	
      
let dubai = {
    Location: 'Dubai',
    min_customer: 23,
    max_customer: 65, 
    avg_cookie_sales: 6.3, 
    total: 0,
    allcookies: [],
    cookies_sold_hourly:function() {
      //let total=0;
      //let allcookies=[];
for (let hour =0; hour <hour.length; hour++){
  let customers= getRandomNumber(this.min_customer,this.max_customer);
  let cookies Math.floor(customers*this.avg_cookie_sales);
  this.total+=cookies;
}
 console.log(this.allcookies.cookies);

let paris = {
    Location: 'Paris',
    min_customer: 23,
    max_customer: 65, 
    avg_cookie_sales: 6.3,
    total: 0,
    allcookies: [],
    cookies_sold_hourly:function() {
//let total = 0;
//let allcookies=[];
for (let hour =0; hour <hours.length; hour++){
let customers= getRandomNumber(this.min_customer,this.max_customer);
let cookies= Math.floor(customer*this.this.avg_cookie_sales);
this.this. allcookies.push(cookies);
this.this.total+=cookies;
}
console.cog(thid.allcookies);



    }
       this.cookies_purchased()
    + '</li>';
      Total = total + this.cookies_purchased();
    },
}
let lima = {
    Location: 'lime',
    min_customer: 23,
    max_customer: 65, 
    avg_cookie_sales: 6.3,
    cookies_sold_hourly: function(){
      let total = 0; total =341
      for (let hour =0; hour <14; hour++){
        let hours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
        '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]}
      this.document_id.innerHTML += '<li>' + hours[hours] + ':' + this.cookies_purchased()
    + '</li>';
      Total = total + this.cookies_purchased();
    },
}

 //for( let i = 0 ; i < hours.length; i++) {
  let listElement = document.getElementById('Seattle');
  let listItem = document.createElement('li');
  console.log (seattle.allcookies)
  console.log(seattle.allcookies[0])
listItem.textContent =`${hours[i ]}: ${seattle.allcookies[0]}`;
  listElement.appendChild(listItem);
}

seattle.cookies_sold_hourly();
// Toyko.cookies_sold_hourly();
// Dubai.cookies_sold_hourly();
// Paris.cookies_sold_hourly();
// Lima.cookies_sold_hourly();