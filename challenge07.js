function Vehicle(info) {
  this.info = {
    brand: info.brand,
    hp: info.hp
  };
}

Vehicle.prototype.acelerate = function() {
  console.log('Vruuuumm');
}

function Car(info) {
  Vehicle(info);
}

const car = new Car({ brand: 'Fiat', hp: 12});

console.log(car.info.brand);

//Ooops, there is an error! What's the problem?
