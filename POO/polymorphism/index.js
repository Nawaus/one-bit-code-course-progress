class Vehicle {
  move() {
    console.log(`Vehicle is moving...`);
  }
}

class Car extends Vehicle {
  move() {
    console.log(`Car is moving`);
  }
}

class Ship extends Vehicle {
  move() {
    console.log(`Ship is moving`);
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`Aircraft is moving at ${speed} km/h`);
  }
}

const delorean = new Car();
const blackPearl = new Ship();
const epoch = new Aircraft();

// delorean.move();
// blackPearl.move();
// epoch.move(80);

function start(vehicle) {
  console.log("Starting a vehicle...");
  vehicle.move();
}

start(delorean);
start(blackPearl);
start(epoch);
