'use strict';
let formElement = document.getElementById('Cookie-Stand-form');
formElement.addEventListener('submit', sayName)
function sayName() {
  console.log('200')
}
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
  '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]


function getRandomNumber(min, max) {
  const randomDecimal = Math.random();
  const randomNumber = randomDecimal * (max - min) + min
  console.log(min, max)
  const finalResult = Math.floor(randomNumber);
  return Math.floor(Math.random() * (max - min + 1) + min)

}
let totalCell = document.createElement('th');
totalCell.textContent = 'Daily Totals';
// tableRow.appendChild(totalCell);


function City(location, min, max, avg) {
  this.Location = location;
  this.min_customer = min;
  this.max_customer = max;
  this.avg_cookie_sales = avg;
  this.total = 0;
  this.allcookies = [];
}
City.prototype.cookies_sold_hourly = function () {
  for (let hour = 0; hour < hours.length; hour++) {
    let customers = getRandomNumber(this.min_customer, this.max_customer);
    let cookies = Math.floor(customers * this.avg_cookie_sales);
    this.allcookies.push(cookies);
    this.total += cookies;
  }
  console.log(this.allcookies);
}






City.prototype.render_list = function () {
  for (let i = 0; i < hours.length; i++) {
    let listElement = document.getElementById(this.Location);
    let listItem = document.createElement('li');
    console.log(this.allcookies);
    console.log(this.allcookies[0]);
    listItem.textContent = `${hours[i]}: ${this.allcookies[i]}`;
    listElement.appendChild(listItem);
  }
}

// draws a table in our HTML Document?
City.prototype.render_table = function () {
  let tableBody = document.getElementById('table-body');
  let row = document.createElement('tr');

  // creat the cell with the city location
  let locationCell = document.createElement('td');
  locationCell.textContent = this.Location;
  row.appendChild(locationCell);

  // add all sales values stored in allCookies
  for (let i = 0; i < hours.length; i++) {
    let tableCell = document.createElement('td');
    console.log(this.allcookies);
    console.log(this.allcookies[0]);
    tableCell.textContent = `${this.allcookies[i]}`;
    row.appendChild(tableCell);
  }
  tableBody.appendChild(row);

  // add the last cell with the daily total
  let totalCell = document.createElement('td');
  totalCell.textContent = this.total;
  row.appendChild(totalCell);
}
let seattle = new City('Seattle Store', 23, 65, 6.3);
seattle.cookies_sold_hourly();
seattle.render_table();
let tokyo = new City('Tokyo Store', 23, 65, 6.3);
tokyo.cookies_sold_hourly();
tokyo.render_table();
let dubai = new City('Dubai Store',23, 65, 6.3);
dubai.cookies_sold_hourly();
dubai.render_table();
let paris = new City('Paris Store',23, 65, 6.3);
paris.cookies_sold_hourly();
paris.render_table();
let lima = new City('Lima Store',23, 65, 6.3);
lima.cookies_sold_hourly();
lima.render_table();

for (let i = 0; i < hours.length; i++) {
  let listElement = document.getElementById('Seattle');
  let listItem = document.createElement('li');
  console.log(this.allcookies)
  listItem.textContent = `${hours[i]}:${this.allcookies[i]}`;
  listElement.appendChild(listItem);
}
 Seattle.cookies_sold_hourly
 Toyko.cookies_sold_hourly
 Dubai.cookies_sold_hourly
 Paris.cookies_sold_hourly
 Lima.cookies_sold_hourly

 let Seattle = {
  Location: 'seattle',
  min_customer: 23,
  max_customer: 65,
  avg_cookie_sales: 6.3,
  cookies_sold_hourly: function () {
  this.total = 0;
  this.allcookies = [];
  let total = 0;
  total = 341
  let allcookies = [];
  for (let hour = 0; hour < 14; hour++) {
  let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
   '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
   }
   this.document_id.innerHTML += '<li>' + hours[hours] + ':' + this.cookies_purchased(i)
    + '</li>';
   total = total + this.cookies_purchased(i);
   },
   }

let Toyko = {
  Location: 'toyko',
  min_customer: 23,
  max_customer: 65,
  avg_cookie_sales: 6.3,
  cookies_sold_hourly: function () {
  this.total = 0;
  this.allcookies = [];
    let total = 0; total = 341
    let allcookies = [];
    for (let hour = 0; hour < 14; hour++) {
      let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
      '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
    }
    this.document_id.innerHTML += '<li>' + hours[hours] + ':' + this.cookies_purchased(i)
    + '</li>';
    Total = total + this.cookies_purchased(i);
  },
}

    let Dubai = {
      Location: 'dubai',
      min_customer: 23,
      max_customer: 65,
      avg_cookie_sales: 6.3,
      cookies_sold_hourly: function () {
      this.total = 0;
      this.allcookies = [];
        //let total=0;
        //let allcookies=[];
        for (let hour = 0; hour < hour.length; hour++) {
          let customers = getRandomNumber(this.min_customer, this.max_customer);
          console.log(customers)
          let cookies = Math.floor(customers * this.avg_cookie_sales);
          this.allcookies.push(cookies);
          this.total += cookies;
          for (let i = 0; i < hours.length; i++) {
            let listElement = document.getElementById('Seattle');
            let listItem = document.createElement('li');
            console.log(Dubai.allcookies)
            console.log(Dubai.allcookies[0])
            listItem.textContent = `${hours[i]}: ${Dubai.allcookies[0]}`;
            listElement.appendChild(listItem);
          }
        }
        console.log(this.allcookies.cookies);
      },
    }
    let Paris = {
      Location: 'paris',
      min_customer: 23,
      max_customer: 65,
      avg_cookie_sales: 6.3,
      cookies_sold_hourly: function () {
      this.total = 0;
      this.allcookies = [];
        let total = 0; total = 341
        let allcookies = [];
        for (let hour = 0; hour < 14; hour++) {
          let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
          '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
        }
        this.document_id.innerHTML += '<li>' + hours[hours] + ':' + this.cookies_purchased(i)
        + '</li>';
        Total = total + this.cookies_purchased(i);
      },
    }
    let Lima = {
      Location: 'lima',
      min_customer: 23,
      max_customer: 65,
      avg_cookie_sales: 6.3,
      cookies_sold_hourly: function () {
      this.total = 0;
      this.allcookies = [];
        let total = 0; total = 341
        let allcookies = [];
        for (let hour = 0; hour < 14; hour++) {
          let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
          '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
        }
        this.document_id.innerHTML += '<li>' + hours[hours] + ':' + this.cookies_purchased(i)
        + '</li>';
        Total = total + this.cookies_purchased(i);
      },
    }

    //for(let i = 1; i < hours.length; i++) {
  //let listElement = document.getElementById('Seattle');
  //let listItem = document.createElement('li');
  //console.log(seattle.allcookies)//for(let i = 1; i < hours.length; i++) {
    //let listElement = document.getElementById('Seattle');
    //let listItem = document.createElement('li');
    //console.log(seattle.allcookies)
    
    
    //for(let i = 1; i < hours.length; i++) {
      //let listElement = document.getElementById('Seattle');
      //let listItem = document.createElement('li');
      //console.log(seattle.allcookies)
      //console.log(seattle.allcookies[0])
      //listItem.textContent =`${hours[i]}: ${seattle.allcookies[1]}`;
      //listElement.appendChild(listItem);
      //}
      
      //for(let i = 1; i < hours.length; i++) {
        //let listElement = document.getElementById('Seattle');
        //let listItem = document.createElement('li');
        //console.log(seattle.allcookies)
        //console.log(seattle.allcookies[0])
        //listItem.textContent =`${hours[i]}: ${seattle.allcookies[1]}`;
        //listElement.appendChild(listItem);
        //}
        
        //for(let i = 1; i < hours.length; i++) {
          //let listElement = document.getElementById('Seattle');
          //let listItem = document.createElement('li');
          //console.log(seattle.allcookies)
          
          // this.cookies_purchased(i);
          // + '</li>';
          //   Total = total + this.cookies_purchased(i);
          
          //for( let i = 0 ; i < hours.length; i++) {
            //   let listElement = document.getElementById('Seattle');
            //  let listItem = document.createElement('li');
            //  console.log (Seattle.allcookies)
            // console.log(Seattle.allcookies[i])
            //listItem.textContent =`${hours[i ]}: ${Seattle.allcookies[i]}`;
            // debugger;
            //listElement.appendChild(listItem);
            // }
            
            // let seattle = {
              //   Location: 'seattle',
              //   min_customer: 23,
              //   max_customer: 65,
              //   avg_cookie_sales: 6.3,
              //   allcookies: [],
              //   cookies_sold_hourly: function () {
                //     let total = 0;
                //     total = 341
                //     let allcookies = [];
                //     for (let hour = 0; hour < 14; hour++) {
                  //       let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
                  //         '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
                  //     }
                  //     this.document_id.innerHTML += '<li>' + hours[hours] + ':' + this.cookies_purchased(i)
                  //       + '</li>';
                  //     total = total + this.cookies_purchased(i);
                  //   },
                  // }
                  
                  //for(let i = 1; i < hours.length; i++){
                    //let listElement = document.getElementById('Seattle');
                    //let listItem = document.createElement('li');
                    //console.log(seattle.allcookies)
                    //console.log(seattle.allcookies[0])
                    //listItem.textContent =`${hours[i]}: ${seattle.allcookies[1]}`;
                    //listElement.appendChild(listItem);
                    //}
                    //let customers= getRandomNumber(this.min_customer,this.max_customer);
                    //console.log(customers)
                    // let cookies= Math.floor(customers*this.avg_cookie_sales);
                    // console.log(cookies)
                    // this.allcookies.push(cookies);
                    //this.total+=cookies;
                    //console.log(this.allcookies);
                    
                    //for(let i = 1; i < hours.length; i++) {
                      //let listElement = document.getElementById('Seattle');
                      //let listItem = document.createElement('li');
                      //console.log(seattle.allcookies)
                      
                      // this.cookies_purchased(i);
                      // + '</li>';
                      //   Total = total + this.cookies_purchased(i);