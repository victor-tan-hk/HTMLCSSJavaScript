

console.log("Use #1: To verify whether a property exists on an object");

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: '2018',
    start: function () {
        console.log(`Starting ${this.make} ${this.model}, ${this.year}`);
    }
}

console.log('make' in car); // Returns true.
console.log('Toyota' in car); // Returns false. 'Toyota' is not a property name, but a value.


class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    start() {
      console.log(`Starting ${this.make} ${this.model}, ${this.year}`);
    }
  }
  
  const toyota = new Car('Toyota', 'Camry', '2018');
  
  'start' in toyota;
  /* Returns true as toyota is an instance of the Car object constructor. The toyota object therefore inherits all properties of the Car constructor. */
  
  'toString' in toyota;
  /* Returns true. toString is a method property of the Object type, of which the Car constructor is an instance of. */