'use strict';

var allShops = [];
var clockHours = ['6 am', '7 am', '8 am', '9 am', '10am', '11am', '12pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

function Shop(nameOfShop, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer, storeElementID){

  var cookiesSoldEachHour = [];
  var totalCookies = 0;

  function randCustomersPerHour (){
    return Math.floor(Math.random()*(maxCustomersPerHour-minCustomersPerHour+1)+minCustomersPerHour);
  }


  function fillCookiesSoldEachHour(){
    for(var i=0; i<clockHours.length; i++) {
      cookiesSoldEachHour.push(Math.ceil(averageCookiesPerCustomer * (randCustomersPerHour())));
          // console.log(this.cookiesSoldEachHour[i], clockHours[i]);
      totalCookies += cookiesSoldEachHour[i];
    }
  }


  allShops.push()
  render = function(){
    fillCookiesSoldEachHour();


  var thEl = document.createElement('th');
  var trEL = document.getElementById('storeElementID');
  trEl.textContent = (hour cookiessold );
  }
}


// new


// var firstAndPike = {
//   minCustomersPerHour: 23,
//   maxCustomersPerHour: 65,
//   averageCookiesPerCustomer: 6.3,
//   cookiesSoldEachHour:  [],
//   totalfirstAndPikeCookies: 0,
//
//   randCustomersPerHour:  function(){
//     return Math.floor(Math.random()*(this.maxCustomersPerHour-this.minCustomersPerHour+1)+this.minCustomersPerHour);
//   },
//
//   fillCookiesSoldEachHour : function(){
//     for(var i=0; i<clockHours.length; i++) {
//       this.cookiesSoldEachHour.push(Math.ceil(this.averageCookiesPerCustomer * (this.randCustomersPerHour())));
//       // console.log(this.cookiesSoldEachHour[i], clockHours[i]);
//       this.totalfirstAndPikeCookies += this.cookiesSoldEachHour[i];
//     }
//   },
//
//   // totalCookiesFunction : function (){
//   //   for(var l=0; l<this.cookiesSoldEachHour.length; l++){
//   //     this.totalfirstAndPikeCookies += this.cookiesSoldEachHour[l];
//   //   }
//   // },
//
//   render: function (){
//     for(var k=0; k<clockHours.length; k++){
//     // grab the element by id and save it to a variable
//     // create an li element
//     // append the li to the alki ul
//       var ulfirstAndPikeElement = document.getElementById('firstAndPikeSimCookiesPerHour');
//       var lifirstAndPikeList = document.createElement('li');
//       lifirstAndPikeList.textContent = clockHours[k]+': '+ this.cookiesSoldEachHour[k]+' cookies.';
//       ulfirstAndPikeElement.appendChild(lifirstAndPikeList);
//       // console.log(k);
//     }
//     ulfirstAndPikeElement = document.getElementById('firstAndPikeSimCookiesPerHour');
//     lifirstAndPikeList = document.createElement('li');
//     lifirstAndPikeList.textContent = 'Total'+' '+ this.totalfirstAndPikeCookies+ ' cookies.';
//     ulfirstAndPikeElement.appendChild(lifirstAndPikeList);
//   }
// }
