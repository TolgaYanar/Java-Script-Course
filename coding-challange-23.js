class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// Test the Car class
// Data 1: 'Ford' going at 120 km/h

const ford = new CarCl("Ford", 120);
ford.accelerate(); // Ford is going at 130 km/h
ford.brake(); // Ford is going at 125 km/h
console.log(ford.speedUS); // 78.125
ford.speedUS = 50;
console.log(ford); // CarCl { make: 'Ford', speed: 80 } // speed is set to 80 km/h
