var storeArray = [];

var DonutShop = function(locationName, avgMin, avgMax, avgCustomerDonuts, array) {
  this.locationName = locationName;
  this.avgMin = avgMin;
  this.avgMax = avgMax;
  this.avgCustomerDonuts = avgCustomerDonuts;
  this.dailyAvg = 0;
  this.hourlyRates = [];
  array.push(this);
}


DonutShop.prototype.calcCustomers = function() {
  return Math.floor(Math.random() * (this.avgMax - this.avgMin) + 1);
}

DonutShop.prototype.hourlyAvg = function() {
  return this.calcCustomers() * this.avgCustomerDonuts;
}


DonutShop.prototype.createTable = function() {
  var donutShops = document.getElementById('donutshops');
  var times = document.getElementById('times');
  var location = document.getElementById('location');
  var timeOfDay = document.getElementsByClassName('timeofday').length;
  var dailyTotal = document.getElementById('dailytotal');
  var tableRow = document.createElement('tr');
  var rowHead = document.createElement('th');
  rowHead.className = 'storeLocation';
  rowHead.innerHTML = this.locationName;
  tableRow.appendChild(rowHead);

  for(var i = 0; i < timeOfDay; i++) {
    var hourlyRate = this.hourlyAvg();
    var hourlyCell = document.createElement('td');
    hourlyCell.className = 'hourlyCell';
    hourlyCell.innerHTML = hourlyRate;
    this.hourlyRates.push(hourlyRate);
    this.dailyAvg += hourlyRate;
    tableRow.appendChild(hourlyCell);
  }
  var totalDailyDonuts = document.createElement('td');
  totalDailyDonuts.id = 'totalDailyDonuts'
  totalDailyDonuts.innerHTML = this.dailyAvg;
  tableRow.appendChild(totalDailyDonuts);
  donutShops.appendChild(tableRow);
}


var downTown = new DonutShop('Downtown', 8, 43, 4.5, storeArray);
var capHill = new DonutShop('Capitol Hill', 4, 37, 2.0, storeArray);
var southLake = new DonutShop('South Lake Union', 9, 23, 6.25, storeArray);
var wedgeWood = new DonutShop('Wedgewood', 2, 28, 1.25, storeArray);
var ballard = new DonutShop('Ballard', 8, 58, 3.75, storeArray);

downTown.createTable();
capHill.createTable();
southLake.createTable();
wedgeWood.createTable();
ballard.createTable();

document.getElementById('shopSubmit').addEventListener('submit', function(e) {
  e.preventDefault();
  buttonSubmit();
});

function buttonSubmit() {
  var loc = document.getElementById('shopLocation');
  var min = document.getElementById('minCust');
  var max = document.getElementById('maxCust');
  var avg = document.getElementById('avgDonuts');

  var newDonutShop = new DonutShop(loc.value, parseInt(min.value), parseInt(max.value), parseInt(avg.value), storeArray);
  newDonutShop.createTable();
}








