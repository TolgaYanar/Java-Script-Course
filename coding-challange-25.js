// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
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
// 2. Create a 'EVCl' child class of the 'CarCl' class
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  get charge() {
    return this.#charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${
        this.#charge
      }`
    );
    return this;
  }

  brake() {
    this.speed -= 5;
    this.#charge -= 0.5;
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

//Test data: 'Rivian' going at 120 km/h with a charge of 23%
const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);
rivian
  .accelerate() // Rivian is going at 140 km/h with a charge of 22
  .brake() // Rivian is going at 135 km/h with a charge of 21.5
  .chargeBattery(90); // Charge is set to 90%

console.log(rivian.charge); // 90
console.log(rivian.speedUS); // 84.375 // speed is 135 km/h in miles/h
console.log(rivian); // EVCl { make: 'Rivian', speed: 135 } // charge is private
