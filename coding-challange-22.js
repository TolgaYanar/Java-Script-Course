const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// Test the Car class
// Data 1: 'BMW' going at 120 km/h
// Data 2: 'Mercedes' going at 95 km/h

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate(); // BMW is going at 130 km/h
bmw.brake(); // BMW is going at 125 km/h

mercedes.accelerate(); // Mercedes is going at 105 km/h
mercedes.brake(); // Mercedes is going at 100 km/h
