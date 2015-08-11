var DonutShop = function(locationName, avgMin, avgMax, avgCustomerDonuts, hoursOpen) {
  this.locationName = locationName;
  this.avgMin = avgMin;
  this.avgMax = avgMax;
  this.avgCustomerDonuts = avgCustomerDonuts;
  this.hoursOpen = hoursOpen;
}


  DonutShop.prototype.calcCustomers = function() {
    return Math.floor(Math.random() * (this.avgMax - this.avgMin) + 1);
  }

  DonutShop.prototype.hourlyAvg = function() {
    return this.calcCustomers() * this.avgCustomerDonuts;
  }

  DonutShop.prototype.dailyAvg = function() {
    return this.hourlyAvg() * this.hoursOpen;
  }


var downTown = new DonutShop('Downtown', 8, 43, 4.5, 11);
var capHill = new DonutShop('Capitol Hill', 4, 37, 2.0, 11);
var southLake = new DonutShop('South Lake Union', 9, 23, 6.33, 11);
var wedgeWood = new DonutShop('Wedgewood', 2, 28, 1.25, 11);
var ballard = new DonutShop('Ballard', 8, 58, 3.75, 11);
DonutShop();







