
console.log("Using arithmetic operator on an object");
console.log("results in the valueOf method being called on it");

let energy = {
    valueOf() {
      return 100;
    },
  };
  
  let currentEnergy = energy - 10;
  console.log(currentEnergy);

  console.log("If there is no valueOf method then the toString method is called");
  energy = {
    toString() {
      return 50;
    },
  };
  
 
  currentEnergy = energy + 100;
  console.log(currentEnergy);