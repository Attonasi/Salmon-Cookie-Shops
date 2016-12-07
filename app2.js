'use strict';

var allShops = [];

var clockHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var tableElement = document.getElementById('superTable');


function makeHeader(){

  var tableRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = 'Store';
  tableRow.appendChild(tableHeader);

  for(var k=0; k<clockHours.length; k++){
    tableHeader = document.createElement('th');
    tableHeader.textContent = clockHours[k];
    tableRow.appendChild(tableHeader);
  }

  tableHeader = document.createElement('th');
  tableHeader.textContent = 'Daily Location Total';
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
}
makeHeader();

function Shop(nameOfShop, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer){

  this.nameOfShop = nameOfShop;
  this.cookiesSoldEachHour = [];
  this.totalCookies = 0;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;

  this.randCustomersPerHour = function (){
    return Math.floor(Math.random()*(this.maxCustomersPerHour-this.minCustomersPerHour+1)+this.minCustomersPerHour);
  }

  this.fillCookiesSoldEachHour = function (){
    for(var i=0; i<clockHours.length; i++) {
      this.cookiesSoldEachHour.push(Math.ceil(this.averageCookiesPerCustomer * (this.randCustomersPerHour())));
      this.totalCookies += this.cookiesSoldEachHour[i];
    }
  }

  this.render = function (){
    this.fillCookiesSoldEachHour();

    var tableRow = document.createElement('tr');
    var tableData = document.createElement('td');
    tableData.textContent = this.nameOfShop;
    tableRow.appendChild(tableData);
    tableElement.appendChild(tableRow);

    for(var i = 0; i < clockHours.length; i++){
      tableData = document.createElement('td');
      tableData.textContent = this.cookiesSoldEachHour[i];
      tableRow.appendChild(tableData);
      tableElement.appendChild(tableRow);
    }
    tableData = document.createElement('td');
    tableData.textContent = this.totalCookies;
    tableRow.appendChild(tableData);
    tableElement.appendChild(tableRow);
  }
  this.render();
  allShops.push(this);
}

new Shop('First And Pike', 23, 65, 6.3);
new Shop('SeaTac Airport', 3, 24, 1.2);
new Shop('Seattle Center', 11, 38, 3.7);
new Shop('Capitol Hill', 20, 38, 2.3);
new Shop('Alki', 2, 16, 4.6);

function makeFooter(){

  var tableRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = 'Total';
  tableRow.appendChild(tableHeader);

  for(var k=0; k<allShops[1].cookiesSoldEachHour.length; k++){

    var allShopsTotal = 0;
    for(var p=0; p<allShops.length; p++){
      allShopsTotal += allShops[p].cookiesSoldEachHour[k];
    }
    tableHeader = document.createElement('th');
    tableHeader.textContent = allShopsTotal;
    tableRow.appendChild(tableHeader);
  }

  var superTotal = 0;
  for(var o=0; o<allShops.length; o++){
    superTotal+=allShops[o].totalCookies;
  }
  tableHeader = document.createElement('th');
  tableHeader.textContent = superTotal;
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
}
makeFooter();
