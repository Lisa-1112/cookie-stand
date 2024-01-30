'use strict';

console.log('Cookies');

// property: a key in an object that stores a data type.
let pikachu = {
  name: 'Cookie-Stand',
  healthPoints: 10,
  attackPoints: 10,
  level: 1,
  abilities: ['Thunder', 'Quick Attack'],
  levelUp: function() {
    console.log('Pikachu has leveled up!!');
    this.level++;
    this.addHealth();
  },
  addHealth: function() {
    this.healthPoints++;
    console.log('Pikachu has more health!!');
  }
}
pikachu.levelUp(); // invoking/calling a method;

let charizard = {
  name: 'Charizard',
  healthPoints: 20,
  attackPoints: 20,
  level: 50,
  abilities: ['Fire Breath', 'Body Slam'],
  levelUp: function () {
    console.log(`${this.name} has leveled up!!`);
    this.level++;
    this.addHealth();
  },
  addHealth: function () {
    this.healthPoints++;
    console.log(`${this.name} has more health!!`);
  }
};
charizard.levelUp();

// console.log('Here are my pokemon!!', pikachu, charizard);

// document.write(pikachu.name); // DOM method for adding text to the HTML.

// READ what elements currently exist!
let pokedex = document.getElementById('pokedex');
console.log(pokedex);

// Write new HTML elements with JS!!!
let pikachuName = document.createElement('h2');
console.log(pikachuName);
let pikachuLevel = document.createElement('p');

let charizardName = document.createElement('h2');
let charizardLevel = document.createElement('p');

// UPDATE my new HTML element with my pokemon values
pikachuName.textContent = 'Name: ' + pikachu.name;
pikachuLevel.textContent = 'Level: ' + pikachu.level;
pokedex.appendChild(pikachuName);
pokedex.appendChild(pikachuLevel);

charizardName.textContent = 'Name: ' + charizard.name;
charizardLevel.textContent = 'Level: ' + charizard.level;
pokedex.appendChild(charizardName);
pokedex.appendChild(charizardLevel);

'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
 '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
 // for every hour in hours array, generate a random number of customers per hour.
 // generateSalesPerHour: function()   



let randomCustomers = getRandomNumber(seattle.min, seattle.max);
console.log(randomCustomers);

// Generate a random number of customers per hour
function getRandomNumber(min, max){
    const randomDecimal = Math.random();
    const randomNumber = min + randomDecimal * (max-min);
    const finalResult = Math.floor(randomNumber);
    return finalResult;
}

let seattle = {
    Location: 'Seattle',
    min_customer: 23,
    max_customer: 65, 
    avg_cookie_sales: 6.3,
    cookies_sold_hourly: Function(){
      let total = 0; total =341
      for (let hour =0; hour <14; hour++)
        let hours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
        '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
      this.document_id.innerHTML += '<li>' + hours[hours] + ':' + this.cookies_purchased()
    + '</li>';
      Total = total + this.cookies_purchased();
    },
generateSalesPerHour: function() {
// for every hour in hour array, Generate a random number of customers per hour.  
console.log(getRandomNumber(this.min, this.max))
}
    }   

    for( let i = 0 ; i < hours.length; i++) {
        let listElement = document.getElementById('seattle');
        let listItem = document.createElement('li');
        listItem.textContent =hours[i];
        listElement.appendChild(listItem);
    }
let toyko = {
    Location: 'Toyko',
    min_customer: 23,
    max_customer: 65, 
    avg_cookie_sales: 6.3,
    cookies_sold_hourly: function() {
      let total = 0; total =341
      for (let hour =0; hour <14; hour++)
        let hours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
        '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
      this.document_id.innerHTML += '<li>' + hours[hours] + ':' + this.cookies_purchased()
    + '</li>';
      Total = total + this.cookies_purchased();
    },
}
let dubai = {
    Location: 'dubai',
    min_customer: 23,
    max_customer: 65, 
    avg_cookie_sales: 6.3, cookies_sold_hourly: Function(){
      let total = 0; total =341
      for (let hour =0; hour <14; hour++)
        let hours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
        '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
      this.document_id.innerHTML += '<li>' + hours[hours] + ':' + this.cookies_purchased()
    + '</li>';
      Total = total + this.cookies_purchased();
    },
}
let paris = {
    Location: 'paris',
    min_customer: 23,
    max_customer: 65, 
    avg_cookie_sales: 6.3,
    cookies_sold_hourly: Function(){
      let total = 0; total =341
      for (let hour =0; hour <14; hour++)
        let hours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
        '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
      this.document_id.innerHTML += '<li>' + hours[hours] + ':' + this.cookies_purchased()
    + '</li>';
      Total = total + this.cookies_purchased();
    },
}
let lima = {
    Location: 'lime',
    min_customer: 23,
    max_customer: 65, 
    avg_cookie_sales: 6.3,
    cookies_sold_hourly: Function(){
      let total = 0; total =341
      for (let hour =0; hour <14; hour++)
        let hours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
        '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
      this.document_id.innerHTML += '<li>' + hours[hours] + ':' + this.cookies_purchased()
    + '</li>';
      Total = total + this.cookies_purchased();
    },
}

seattle.cookies_sold_hourly();
// Toyko.cookies_sold_hourly();
// Dubai.cookies_sold_hourly();
// Paris.cookies_sold_hourly();
// Lima.cookies_sold_hourly();