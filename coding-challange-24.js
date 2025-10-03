const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {};
Car.prototype.brake = function () {};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (charge) {
  this.charge = charge;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}%`
  );
};

// Test the EV class
// Data 1: 'Tesla' going at 120 km/h with a charge of 23%

const tesla = new EV("Tesla", 120, 23);
tesla.accelerate(); // Tesla is going at 140 km/h with a charge of 22%
tesla.chargeBattery(90);
