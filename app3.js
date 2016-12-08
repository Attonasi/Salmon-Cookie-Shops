'use strict';

var allShops = [];
var clockHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var tableElement = document.getElementById('superTable');
var chatForm = document.getElementById('salmon-form');
var clearTable = document.getElementById('superTable');

//Event function gets to stay up here for now

function handleCommentSubmit(event){

  event.preventDefault();
  if(!event.target.storeName.value || !event.target.maxCustomersPerHour.value || !event.target.minCustomersPerHour.value || !event.target.averageCookiesPerCustomer.value){
    return alert('You must fill out all fields!');
  }

  var storeName = event.target.storeName.value;
  var minCustomersPerHour = parseInt(event.target.minCustomersPerHour.value);
  var maxCustomersPerHour = parseInt(event.target.maxCustomersPerHour.value);
  var averageCookiesPerCustomer = (event.target.averageCookiesPerCustomer.value);

  console.log('storeName '+storeName, 'maxCustomersPerHour '+maxCustomersPerHour, 'minCustomersPerHour '+ minCustomersPerHour, averageCookiesPerCustomer);

  new MakeShop(storeName, maxCustomersPerHour, minCustomersPerHour, averageCookiesPerCustomer);

  rewriteTable();

  event.target.storeName.value = null;
  event.target.maxCustomersPerHour.value = null;
  event.target.minCustomersPerHour.value = null;
  event.target.averageCookiesPerCustomer.value = null;
}

chatForm.addEventListener('submit', handleCommentSubmit);

new MakeShop('First And Pike', 23, 65, 6.3);
new MakeShop('SeaTac Airport', 3, 24, 1.2);
new MakeShop('Seattle Center', 11, 38, 3.7);
new MakeShop('Capitol Hill', 20, 38, 2.3);
new MakeShop('Alki', 2, 16, 4.6);

rewriteTable();

//FUNCTIONS ARE BANISHED BELOW HERE

function rewriteTable (){
  clearTable.innerHTML = '';

  makeHeader();
  makeTable();
  makeFooter();
}

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

function MakeShop(nameOfShop, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer){
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
  this.fillCookiesSoldEachHour();
  allShops.push(this);
}

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
  tableHeader.textContent = 'Super Total '+superTotal;
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
}


function makeTable (){

  for(var a=0; a<allShops.length; a++){
    var tableRow = document.createElement('tr');
    var tableData = document.createElement('th');
    tableData.textContent = allShops[a].nameOfShop;
    tableRow.appendChild(tableData);
    tableElement.appendChild(tableRow);

    for(var i = 0; i < clockHours.length; i++){
      tableData = document.createElement('td');
      tableData.textContent = allShops[a].cookiesSoldEachHour[i];
      tableRow.appendChild(tableData);
      tableElement.appendChild(tableRow);
    }
    tableData = document.createElement('th');
    tableData.textContent = allShops[a].totalCookies;
    tableRow.appendChild(tableData);
    tableElement.appendChild(tableRow);
  }
}
