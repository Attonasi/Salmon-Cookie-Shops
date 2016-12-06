'use strict';

var clockHours = ['6 am', '7 am', '8 am', '9 am', '10am', '11am', '12pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

var firstAndPike = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPerCustomer: 6.3,
  cookiesSoldEachHour:  [],
  totalfirstAndPikeCookies: 0,

  randCustomersPerHour:  function(){
    return Math.floor(Math.random()*(this.maxCustomersPerHour-this.minCustomersPerHour+1)+this.minCustomersPerHour);
  },

  fillCookiesSoldEachHour : function(){
    for(var i=0; i<clockHours.length; i++) {
      this.cookiesSoldEachHour.push(Math.ceil(this.averageCookiesPerCustomer * (this.randCustomersPerHour())));
      // console.log(this.cookiesSoldEachHour[i], clockHours[i]);
    }
  },

  totalCookiesFunction : function (){
    for(var l=0; l<this.cookiesSoldEachHour.length; l++){
      this.totalfirstAndPikeCookies += this.cookiesSoldEachHour[l];
    }
  },

  render: function (){
    for(var k=0; k<clockHours.length; k++){
    // grab the element by id and save it to a variable
    // create an li element
    // append the li to the alki ul
      var ulfirstAndPikeElement = document.getElementById('firstAndPikeSimCookiesPerHour');
      var lifirstAndPikeList = document.createElement('li');
      lifirstAndPikeList.textContent = clockHours[k]+': '+ this.cookiesSoldEachHour[k];
      ulfirstAndPikeElement.appendChild(lifirstAndPikeList);
      // console.log(k);
    }
    ulfirstAndPikeElement = document.getElementById('firstAndPikeSimCookiesPerHour');
    lifirstAndPikeList = document.createElement('li');
    lifirstAndPikeList.textContent = 'Total'+' '+ this.totalfirstAndPikeCookies;
    ulfirstAndPikeElement.appendChild(lifirstAndPikeList);
  }
}

firstAndPike.fillCookiesSoldEachHour();
firstAndPike.totalCookiesFunction();
firstAndPike.render();

var seatacStore = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  averageCookiesPerCustomer: 3.7,
  cookiesSoldEachHour:  [],
  totalseatacStoreCookies: 0,

  randCustomersPerHour:  function(){
    return Math.floor(Math.random()*(this.maxCustomersPerHour-this.minCustomersPerHour+1)+this.minCustomersPerHour);
  },

  fillCookiesSoldEachHour : function(){
    for(var i=0; i<clockHours.length; i++) {
      this.cookiesSoldEachHour.push(Math.ceil(this.averageCookiesPerCustomer * (this.randCustomersPerHour())));
      // console.log(this.cookiesSoldEachHour[i], clockHours[i]);
    }
  },

  totalCookiesFunction : function (){
    for(var l=0; l<this.cookiesSoldEachHour.length; l++){
      this.totalseatacStoreCookies += this.cookiesSoldEachHour[l];
    }
  },

  render: function (){
    for(var k=0; k<clockHours.length; k++){

      var ulseatacStoreElement = document.getElementById('seatacStoreSimCookiesPerHour');
      var liseatacStoreList = document.createElement('li');
      liseatacStoreList.textContent = clockHours[k]+': '+ this.cookiesSoldEachHour[k];
      ulseatacStoreElement.appendChild(liseatacStoreList);
      // console.log(k);
    }
    ulseatacStoreElement = document.getElementById('seatacStoreSimCookiesPerHour');
    liseatacStoreList = document.createElement('li');
    liseatacStoreList.textContent = 'Total'+' '+ this.totalseatacStoreCookies;
    ulseatacStoreElement.appendChild(liseatacStoreList);
  }
}

seatacStore.fillCookiesSoldEachHour();
seatacStore.totalCookiesFunction();
seatacStore.render();

var seattleCenter = {
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  averageCookiesPerCustomer: 3.7,
  cookiesSoldEachHour:  [],
  totalseattleCenterCookies: 0,

  randCustomersPerHour:  function(){
    return Math.floor(Math.random()*(this.maxCustomersPerHour-this.minCustomersPerHour+1)+this.minCustomersPerHour);
  },

  fillCookiesSoldEachHour : function(){
    for(var i=0; i<clockHours.length; i++) {
      this.cookiesSoldEachHour.push(Math.ceil(this.averageCookiesPerCustomer * (this.randCustomersPerHour())));
      // console.log(this.cookiesSoldEachHour[i], clockHours[i]);
    }
  },

  totalCookiesFunction : function (){
    for(var l=0; l<this.cookiesSoldEachHour.length; l++){
      this.totalseattleCenterCookies += this.cookiesSoldEachHour[l];
    }
  },

  render: function (){
    for(var k=0; k<clockHours.length; k++){

      var ulseattleCenterElement = document.getElementById('seattleCenterSimCookiesPerHour');
      var liseattleCenterList = document.createElement('li');
      liseattleCenterList.textContent = clockHours[k]+': '+ this.cookiesSoldEachHour[k];
      ulseattleCenterElement.appendChild(liseattleCenterList);
      // console.log(k);
    }
    ulseattleCenterElement = document.getElementById('seattleCenterSimCookiesPerHour');
    liseattleCenterList = document.createElement('li');
    liseattleCenterList.textContent = 'Total'+' '+ this.totalseattleCenterCookies;
    ulseattleCenterElement.appendChild(liseattleCenterList);
  }
}

seattleCenter.fillCookiesSoldEachHour();
seattleCenter.totalCookiesFunction();
seattleCenter.render();
//
var capitolHill = {
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  averageCookiesPerCustomer: 42.3,
  cookiesSoldEachHour:  [],
  totalcapitolHillCookies: 0,

  randCustomersPerHour:  function(){
    return Math.floor(Math.random()*(this.maxCustomersPerHour-this.minCustomersPerHour+1)+this.minCustomersPerHour);
  },

  fillCookiesSoldEachHour : function(){
    for(var i=0; i<clockHours.length; i++) {
      this.cookiesSoldEachHour.push(Math.ceil(this.averageCookiesPerCustomer * (this.randCustomersPerHour())));
      // console.log(this.cookiesSoldEachHour[i], clockHours[i]);
    }
  },

  totalCookiesFunction : function (){
    for(var l=0; l<this.cookiesSoldEachHour.length; l++){
      this.totalcapitolHillCookies += this.cookiesSoldEachHour[l];
    }
  },

  render: function (){
    for(var k=0; k<clockHours.length; k++){

      var ulcapitolHillElement = document.getElementById('capitolHillSimCookiesPerHour');
      var licapitolHillList = document.createElement('li');
      licapitolHillList.textContent = clockHours[k]+': '+ this.cookiesSoldEachHour[k];
      ulcapitolHillElement.appendChild(licapitolHillList);
      // console.log(k);
    }
    ulcapitolHillElement = document.getElementById('capitolHillSimCookiesPerHour');
    licapitolHillList = document.createElement('li');
    licapitolHillList.textContent = 'Total'+' '+ this.totalcapitolHillCookies;
    ulcapitolHillElement.appendChild(licapitolHillList);
  }
}

capitolHill.fillCookiesSoldEachHour();
capitolHill.totalCookiesFunction();
capitolHill.render();

var alki = {
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  averageCookiesPerCustomer: 4.6,
  cookiesSoldEachHour:  [],
  totalAlkiCookies: 0,

  randCustomersPerHour:  function(){
    return Math.floor(Math.random()*(this.maxCustomersPerHour-this.minCustomersPerHour+1)+this.minCustomersPerHour);
  },

  fillCookiesSoldEachHour : function(){
    for(var i=0; i<clockHours.length; i++) {
      this.cookiesSoldEachHour.push(Math.ceil(this.averageCookiesPerCustomer * (this.randCustomersPerHour())));
      // console.log(this.cookiesSoldEachHour[i], clockHours[i]);
    }
  },

  totalCookiesFunction : function (){
    for(var l=0; l<this.cookiesSoldEachHour.length; l++){
      this.totalAlkiCookies += this.cookiesSoldEachHour[l];
    }
  },

  render: function (){
    for(var k=0; k<clockHours.length; k++){

      var ulAlkiElement = document.getElementById('alkiSimCookiesPerHour');
      var liAlkiList = document.createElement('li');
      liAlkiList.textContent = clockHours[k]+': '+ this.cookiesSoldEachHour[k];
      ulAlkiElement.appendChild(liAlkiList);
      // console.log(k);
    }
    ulAlkiElement = document.getElementById('alkiSimCookiesPerHour');
    liAlkiList = document.createElement('li');
    liAlkiList.textContent = 'Total'+' '+ this.totalAlkiCookies;
    ulAlkiElement.appendChild(liAlkiList);
  }
}

alki.fillCookiesSoldEachHour();
alki.totalCookiesFunction();
alki.render();
