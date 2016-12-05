'use strict';
var clockHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


var alki = {
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  averageCookiesPerCustomer: 4.6,
  randCustomersPerHour:  function(){
    return Math.floor(Math.random()*(this.maxCustomersPerHour-this.minCustomersPerHour+1)+this.minCustomersPerHour);
  },
  cookiesSoldEachHour:  [],

  fillCookiesSoldEachHour : function(){
    for(var i=0; i<clockHours.length; i++) {
      Math.ceil(this.cookiesSoldEachHour.push(this.averageCookiesPerCustomer * (this.randCustomersPerHour())));
      console.log(alki.cookiesSoldEachHour[i]);
    }
  }


}


var alkiCookies = alki.fillCookiesSoldEachHour();


console.log(alkiCookies);
console.log(clockHours);
